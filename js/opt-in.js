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
    
    // Set UTM parameters from URL to hidden form fields
    const utmParams = ['source', 'medium', 'campaign', 'term', 'content'];
    let hasUtmParams = false;
    
    // First check URL for UTM parameters
    utmParams.forEach(param => {
        const value = getUrlParameter('utm_' + param);
        const input = document.getElementById('utm_' + param);
        if (input && value) {
            input.value = value;
            localStorage.setItem('utm_' + param, value); // Store in localStorage
            hasUtmParams = true;
        }
    });
    
    // If no UTM parameters in URL, check localStorage for previously stored values
    if (!hasUtmParams) {
        utmParams.forEach(param => {
            const storedValue = localStorage.getItem('utm_' + param);
            const input = document.getElementById('utm_' + param);
            if (input && storedValue) {
                input.value = storedValue;
            }
        });
    }
    
    // If still no UTM parameters, use referrer information
    const sourceInput = document.getElementById('utm_source');
    const mediumInput = document.getElementById('utm_medium');
    if (sourceInput && mediumInput && !sourceInput.value && !mediumInput.value) {
        const referrerInfo = getReferrerInfo();
        if (referrerInfo) {
            sourceInput.value = referrerInfo.domain;
            mediumInput.value = 'referral';
        } else {
            // If no referrer, mark as direct traffic
            sourceInput.value = 'direct';
            mediumInput.value = 'none';
        }
    }
    
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
            
            // Send data to n8n webhook
            fetch('https://cgroup.app.n8n.cloud/form-test/8a8fc37d-e5d9-4c1d-8b82-1e60d04fa406', {
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
