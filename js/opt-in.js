document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('form[name="vsl-optin-form"]');
    
    // Function to get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    
    // Set UTM parameters from URL to hidden form fields
    const utmParams = ['source', 'medium', 'campaign', 'term', 'content'];
    
    utmParams.forEach(param => {
        const value = getUrlParameter('utm_' + param);
        const input = document.getElementById('utm_' + param);
        if (input && value) {
            input.value = value;
        }
    });
    
    // Optional: Store UTM parameters in localStorage for cross-page tracking
    utmParams.forEach(param => {
        const value = getUrlParameter('utm_' + param);
        if (value) {
            localStorage.setItem('utm_' + param, value);
        }
    });
    
    // Form submission handler
    if (form) {
        form.addEventListener('submit', function(e) {
            // Form validation can be added here if needed
            console.log('Form submitted');
            // The actual form submission is handled by Netlify
        });
    }
});
