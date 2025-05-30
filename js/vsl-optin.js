// Show floating opt-in form after 30 seconds of page load
setTimeout(function() {
    const floatingOptin = document.getElementById('floatingOptin');
    if (floatingOptin) {
        // Check if user hasn't already submitted the form
        if (!localStorage.getItem('formSubmitted')) {
            floatingOptin.style.display = 'block';
        }
    }
}, 30000);

// Close button functionality
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('floating-optin-close')) {
        e.target.closest('.floating-optin').style.display = 'none';
    }
});

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to get referrer information if UTM is not present
function getReferrerInfo() {
    const referrer = document.referrer;
    if (!referrer) return null;
    
    try {
        const url = new URL(referrer);
        return {
            domain: url.hostname,
            path: url.pathname,
            full: referrer
        };
    } catch (e) {
        return null;
    }
}

// Handle form submissions
function handleFormSubmit(form, formId) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData);
        
        // Add additional data for n8n
        formProps.page_url = window.location.href;
        formProps.timestamp = new Date().toISOString();
        formProps.form_id = formId;
        formProps.requestId = Date.now() + Math.random().toString(36).substring(2);
        
        // Add UTM parameters if available
        const utmParams = ['source', 'medium', 'campaign', 'term', 'content'];
        utmParams.forEach(param => {
            const value = getUrlParameter('utm_' + param);
            if (value) {
                formProps['utm_' + param] = value;
            } else {
                // Check localStorage
                const storedValue = localStorage.getItem('utm_' + param);
                if (storedValue) {
                    formProps['utm_' + param] = storedValue;
                }
            }
        });
        
        // If no UTM source/medium, use referrer info
        if (!formProps.utm_source && !formProps.utm_medium) {
            const referrerInfo = getReferrerInfo();
            if (referrerInfo) {
                formProps.utm_source = referrerInfo.domain;
                formProps.utm_medium = 'referral';
            } else {
                formProps.utm_source = 'direct';
                formProps.utm_medium = 'none';
            }
        }
        
        console.log('Sending form data to n8n:', formProps);
        
        // Send data to n8n webhook
        fetch('https://cgroup.app.n8n.cloud/webhook/3e216d40-d18c-44cb-8a70-122a4acaa275', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            },
            body: JSON.stringify(formProps)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
            // Continue with redirect even if n8n submission fails
        })
        .finally(() => {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <h3 style="color: #4CAF50;">Thank You!</h3>
                    <p>You'll be redirected to schedule your call shortly...</p>
                </div>
            `;
            
            form.parentNode.replaceChild(successMessage, form);
            
            // Store in localStorage to prevent showing the form again
            localStorage.setItem('formSubmitted', 'true');
            
            // Hide floating form if it's visible
            const floatingOptin = document.getElementById('floatingOptin');
            if (floatingOptin) {
                floatingOptin.style.display = 'none';
            }
            
            // Close popup overlay
            const popupOverlay = document.getElementById('popupOverlay');
            if (popupOverlay) {
                popupOverlay.style.display = 'none';
            }
            
            // Re-enable scrolling
            document.body.style.overflow = 'auto';
        });
        
        // Redirect to calendar page
        setTimeout(function() {
            // Get form data to pass to calendar page
            const formData = new FormData(form);
            const params = new URLSearchParams();
            
            // Add form data to URL params
            for (let [key, value] of formData.entries()) {
                if (key !== 'source') {  // Don't include internal fields
                    params.append(key, value);
                }
            }
            
            // Add UTM parameters if they exist
            const urlParams = new URLSearchParams(window.location.search);
            const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
            utmParams.forEach(param => {
                const value = urlParams.get(param);
                if (value) params.append(param, value);
            });
            
            // Redirect to calendar page with all parameters
            window.location.href = 'calendar.html?' + params.toString();
        }, 1500);
    });
}

// Initialize form handlers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle floating form
    const floatingForm = document.getElementById('vsl-optin-form-floating');
    if (floatingForm) {
        handleFormSubmit(floatingForm, 'floating');
    }
    
    // Handle inline form
    const inlineForm = document.getElementById('vsl-optin-form-inline');
    if (inlineForm) {
        handleFormSubmit(inlineForm, 'inline');
    }
    
    // Add UTM parameters to forms
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    utmParams.forEach(param => {
        const value = urlParams.get(param);
        if (value) {
            // Add to all forms
            document.querySelectorAll(`.optin-form input[name="${param}"]`).forEach(input => {
                input.value = value;
            });
            
            // Store in localStorage for future use
            localStorage.setItem(param, value);
        } else {
            // Check localStorage for previously stored values
            const storedValue = localStorage.getItem(param);
            if (storedValue) {
                document.querySelectorAll(`.optin-form input[name="${param}"]`).forEach(input => {
                    input.value = storedValue;
                });
            }
        }
    });
    
    // Add hidden UTM fields to forms if they don't exist
    document.querySelectorAll('.optin-form').forEach(form => {
        utmParams.forEach(param => {
            if (!form.querySelector(`input[name="${param}"]`)) {
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = param;
                const value = urlParams.get(param) || localStorage.getItem(param) || '';
                input.value = value;
                form.appendChild(input);
            }
        });
    });
});
