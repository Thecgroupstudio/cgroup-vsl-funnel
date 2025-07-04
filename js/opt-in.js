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
    
    // Set default UTM values for main funnel
    const sourceInput = document.getElementById('utm_source');
    const mediumInput = document.getElementById('utm_medium');
    const campaignInput = document.getElementById('utm_campaign');
    
    // Default values for main funnel
    if (sourceInput && !sourceInput.value) sourceInput.value = 'main-funnel';
    if (mediumInput && !mediumInput.value) mediumInput.value = 'organic';
    if (campaignInput && !campaignInput.value) campaignInput.value = 'executive-presence-immersion';
    
    // Store these defaults in localStorage
    if (sourceInput && sourceInput.value) localStorage.setItem('utm_source', sourceInput.value);
    if (mediumInput && mediumInput.value) localStorage.setItem('utm_medium', mediumInput.value);
    if (campaignInput && campaignInput.value) localStorage.setItem('utm_campaign', campaignInput.value);
    
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
            
            // Add a unique identifier to prevent caching issues
            formValues.requestId = Date.now() + Math.random().toString(36).substring(2);
            
            // Log the data being sent (for debugging)
            console.log('Sending form data:', formValues);
            
            // Send data to production n8n webhook
            fetch('https://cgroup.app.n8n.cloud/webhook/3e216d40-d18c-44cb-8a70-122a4acaa275', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Pragma': 'no-cache',
                    'Expires': '0'
                },
                body: JSON.stringify(formValues)
            })
            .then(response => {
                // Track CompleteRegistration event with UTM parameters
                if (window.fbq) {
                    const utmParams = {
                        utm_source: formValues.utm_source,
                        utm_medium: formValues.utm_medium,
                        utm_campaign: formValues.utm_campaign,
                        utm_term: formValues.utm_term,
                        utm_content: formValues.utm_content
                    };
                    
                    fbq('track', 'CompleteRegistration', {
                        utm_source: utmParams.utm_source,
                        utm_medium: utmParams.utm_medium,
                        utm_campaign: utmParams.utm_campaign,
                        utm_term: utmParams.utm_term,
                        utm_content: utmParams.utm_content
                    });
                }
            })
            .then(response => {
                console.log('Production webhook response status:', response.status);
                return response.text();
            })
            .then(data => {
                console.log('Production webhook success:', data);
                
                // Also send to test webhook
                return fetch('https://cgroup.app.n8n.cloud/webhook-test/3e216d40-d18c-44cb-8a70-122a4acaa275', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'no-cache, no-store, must-revalidate',
                        'Pragma': 'no-cache',
                        'Expires': '0'
                    },
                    body: JSON.stringify(formValues)
                });
            })
            .then(response => {
                if (response) {
                    console.log('Test webhook response status:', response.status);
                    return response.text();
                }
            })
            .then(data => {
                if (data) {
                    console.log('Test webhook success:', data);
                }
                // Add a small delay before redirect to ensure the request completes
                setTimeout(() => {
                    window.location.href = 'masterclass.html';
                }, 300);
            })
            .catch(error => {
                console.error('Error:', error);
                // Add a small delay before redirect to ensure the request completes
                setTimeout(() => {
                    window.location.href = 'masterclass.html';
                }, 300);
            });
        });
    }
});
