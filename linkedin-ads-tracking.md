# LinkedIn Ads Tracking Setup - Executive Presence Immersion

## Campaign Tracking URLs

### Main Offer (Direct Registration)
For warm audiences who are ready to register for the Executive Presence Immersion program:
```
https://mastermind.thecgroupstudio.com/?utm_source=linkedin&utm_medium=paid&utm_campaign=executive_presence_immersion&utm_content=main_offer&utm_term=warm_audience
```

### Lead Magnet (Masterclass)
For cold audiences to capture leads with the free masterclass:
```
https://mastermind.thecgroupstudio.com/masterclass.html?utm_source=linkedin&utm_medium=paid&utm_campaign=executive_presence_immersion&utm_content=lead_magnet&utm_term=cold_audience
```

## LinkedIn Insight Tag Implementation

Add this code to the `<head>` section of all pages:

```html
<script type="text/javascript">
_linkedin_data_partner_id = "YOUR_PARTNER_ID";
</script>
<script type="text/javascript">
(function(){var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})();
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=YOUR_PARTNER_ID&fmt=gif" />
</noscript>
```

## Conversion Tracking Setup

### Conversion Points to Track:
1. **Page Views**
   - Main offer page
   - Masterclass page
   - Thank you page

2. **Form Submissions**
   - Registration form completion
   - Lead magnet download

### Form Submission Tracking
Add this script to fire on successful form submission (e.g., on the thank you page):

```javascript
<script type="text/javascript">
if (typeof window.lintrk === 'function') { 
    window.lintrk('track', 'conversion', {
        value: 0.00,
        currency: 'USD',
        conversionId: YOUR_CONVERSION_ID
    });
}
</script>
```

## Campaign Structure Recommendations

1. **Ad Sets**
   - Cold Audience (Lead Magnet)
     - Target: New audiences interested in leadership development
     - URL: Use Lead Magnet URL with UTM parameters
   - Warm Audience (Main Offer)
     - Target: Website visitors, email subscribers, LinkedIn followers
     - URL: Use Main Offer URL with UTM parameters

2. **Ad Creatives**
   - Lead Magnet: Focus on educational value and problem-solving
   - Main Offer: Emphasize exclusivity and specific outcomes

## Implementation Checklist

- [ ] Replace `YOUR_PARTNER_ID` with actual LinkedIn Partner ID
- [ ] Add Insight Tag to all pages
- [ ] Set up conversion goals in LinkedIn Campaign Manager
- [ ] Test tracking implementation
- [ ] Monitor campaign performance and adjust as needed
