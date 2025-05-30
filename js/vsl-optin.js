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

// Handle form submissions
function handleFormSubmit(form, formId) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const formProps = Object.fromEntries(formData);
        
        // Here you would typically send this data to your email marketing service
        console.log('Form submitted:', formProps);
        
        // Show success message
        const successMessage = document.createElement('div');
        successMessage.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h3 style="color: #4CAF50;">Thank You!</h3>
                <p>You'll be redirected to the video shortly...</p>
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
        }
    });
});
