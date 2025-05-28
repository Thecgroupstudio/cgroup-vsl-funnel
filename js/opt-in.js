document.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.getElementById('vsl-optin-form');
    
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
    
    // Store UTM parameters in localStorage for cross-page tracking
    utmParams.forEach(param => {
        const value = getUrlParameter('utm_' + param);
        if (value) {
            localStorage.setItem('utm_' + param, value);
        }
    });
    
    // Form submission handler
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const formValues = Object.fromEntries(formData.entries());
            
            // Add page URL and timestamp
            formValues.page_url = window.location.href;
            formValues.timestamp = new Date().toISOString();
            
            // Log the data being sent (for debugging)
            console.log('Sending form data:', formValues);
            
            // Send data to n8n webhook
            fetch('https://cgroup.app.n8n.cloud/webhook-test/3e216d40-d18c-44cb-8a70-122a4acaa275', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValues)
            })
            .then(response => {
                console.log('Response status:', response.status);
                return response.text();
            })
            .then(data => {
                console.log('Success:', data);
                // Redirect to VSL page regardless of response
                window.location.href = 'vsl-page.html';
            })
            .catch(error => {
                console.error('Error:', error);
                // Redirect to VSL page even if there's an error with the webhook
                window.location.href = 'vsl-page.html';
            });
        });
    }
});
