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

// Initialize form handlers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle floating form
    const floatingForm = document.getElementById('vsl-optin-form-floating');
    if (floatingForm) {
        // No form submission handler
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
