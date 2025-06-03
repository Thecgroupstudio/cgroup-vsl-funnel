# Executive Presence Immersion Program - Email Automation Overview

## What We're Building

We're creating an automated email journey that guides potential clients from their first interaction with your brand through to program enrollment. This sequence ensures no prospect falls through the cracks and maintains consistent, professional communication.

## How It Works (In Plain English)

1. **Initial Contact**: When someone submits your form, they automatically receive a welcome email confirming their information was received and prompting them to schedule a call.

2. **Booking Process**: 
   - If they don't book a call within 24 hours, they receive a gentle reminder
   - When they book through Calendly, your system automatically logs this and sends them a confirmation email with call details
   - They receive a reminder 24 hours before the scheduled call

3. **After the Call**:
   - Interested prospects receive details about the program, pricing, and a time-limited offer
   - Those not ready to commit receive nurturing content to keep them engaged
   - A reminder is sent before any special offer expires

4. **Payment Confirmation**:
   - When payment is processed through Stripe, they receive a receipt and welcome information

## Technical Integration (Simplified)

- **Form Submission → n8n**: Your website form already connects to n8n for processing
- **Calendly → n8n**: Your booking system already logs appointments in n8n
- **Stripe → n8n**: This connection needs to be established to track payments

## What Makes This Valuable

1. **No Manual Follow-up Required**: The system handles all communication timing automatically

2. **Professional Consistency**: Every prospect receives the same high-quality communication

3. **Increased Conversion**: Timely reminders and follow-ups capture prospects who might otherwise drop off

4. **Executive-Level Communication**: All emails are professionally designed with your branding and use language appropriate for your executive audience

5. **Complete Visibility**: You'll know exactly where each prospect is in their journey

## Exact Email Copy for Each Step

### Email 1: Form Submission Confirmation
**Subject:** Your Executive Presence Journey Begins | Form Received
**Timing:** Immediate after form submission

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Your Executive Presence Journey Begins</h2>
    
    <p>Hello {{ $json.body.name }},</p>
    
    <p>Thank you for taking the first step toward transforming your executive presence. We've received your information and are excited to connect with you.</p>
    
    <p><strong>Your next step:</strong> Please schedule your complimentary 30-minute Introduction Call where we'll discuss:</p>
    
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Your specific leadership challenges</li>
        <li>How our proprietary <span style="color: #ff0004; font-weight: 600;">IMPACT</span> Framework transforms executive presence</li>
        <li>How this exclusive immersion experience will accelerate your leadership transformation</li>
        <li>Why only a limited number of leaders are selected for each immersion cohort</li>
    </ul>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/calendar.html" style="background-color: #4169e1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Schedule Your Call Now</a>
    </div>
    
    <p>If you have any questions before your call, please reply to this email and we'll be happy to assist you.</p>
    
    <p>Looking forward to speaking with you soon,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to your email address because you registered for information about our Executive Presence Immersion program.
    </p>
</div>
```

### Email 2: Call Booking Reminder
**Subject:** Don't Miss Your Opportunity | Limited Spots Available
**Timing:** 24 hours after form submission if no call is booked

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;"><span style="color: #ff0004; font-weight: 700;">ONLY LIMITED SPOTS AVAILABLE</span></h2>
    
    <p>Hello {{ $json.body.name }},</p>
    
    <p>I noticed you haven't scheduled your complimentary Introduction Call for the Executive Presence Immersion program yet.</p>
    
    <p>With only limited spots available for our July immersion and applications coming in daily, I want to make sure you don't miss your opportunity to secure your place in this transformative experience.</p>
    
    <p><strong>What you'll gain from this brief call:</strong></p>
    
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Clarity on how to overcome your specific leadership challenges</li>
        <li>Understanding of our neuroscience-backed approach to executive presence</li>
        <li>Details about the July 20-23 immersion experience at Alila Napa Valley, St. Helena, CA</li>
    </ul>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/calendar.html" style="background-color: #4169e1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reserve Your Call Time</a>
    </div>
    
    <p>This 30-minute call is your gateway to transforming your executive presence and elevating your leadership impact. I'm excited to share how our neuroscience-backed approach has helped leaders like you achieve remarkable results.</p>
    
    <p>Looking forward to connecting with you,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to your email address because you registered for information about our Executive Presence Immersion program.
    </p>
</div>
```

### Email 3: Call Booking Confirmation
**Subject:** Your Introduction Call is Confirmed | Details Inside
**Timing:** Immediate after call booking

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Your Introduction Call is Confirmed</h2>
    
    <p>Hello {{ $json.body.name }},</p>
    
    <p>Thank you for scheduling your Introduction Call for the Executive Presence Immersion program. I'm looking forward to speaking with you and learning more about your leadership journey.</p>
    
    <div style="background-color: #f7f7f7; border-left: 4px solid #4169e1; padding: 15px; margin: 25px 0;">
        <p style="margin: 0 0 10px 0; font-weight: bold;">Your Call Details:</p>
        <p style="margin: 0 0 5px 0;">📅 Date: [Call_Date]</p>
        <p style="margin: 0 0 5px 0;">⏰ Time: [Call_Time] [Timezone]</p>
        <p style="margin: 0 0 5px 0;">📞 Via: Zoom</p>
        <p style="margin: 0 0 0 0;">🔗 Link: [Zoom_Link]</p>
    </div>
    
    <p><strong>To prepare for our call:</strong></p>
    
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Consider your biggest leadership challenges</li>
        <li>Think about what "executive presence" means to you</li>
        <li>Prepare any specific questions you have about the program</li>
    </ul>
    
    <p>This 30-minute call will reveal how the Executive Presence Immersion can transform your leadership presence and help you achieve breakthrough results. I'm excited to share specific strategies tailored to your unique leadership journey.</p>
    
    <p>If you need to reschedule, please use the link in your calendar invitation or reply to this email.</p>
    
    <p>Looking forward to our conversation,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to your email address because you registered for information about our Executive Presence Immersion program.
    </p>
</div>
```

### Email 4: Call Reminder
**Subject:** Your Introduction Call Tomorrow | Quick Preparation Tips
**Timing:** 24 hours before scheduled call

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Your Call is Tomorrow</h2>
    
    <p>Hello {{ $json.body.name }},</p>
    
    <p>I'm looking forward to our conversation tomorrow about the Executive Presence Immersion program and how it might support your leadership goals.</p>
    
    <div style="background-color: #f7f7f7; border-left: 4px solid #4169e1; padding: 15px; margin: 25px 0;">
        <p style="margin: 0 0 10px 0; font-weight: bold;">Quick Reminder:</p>
        <p style="margin: 0 0 5px 0;">&#x1F4C5; Date: [Call_Date]</p>
        <p style="margin: 0 0 5px 0;">&#x23F1; Time: [Call_Time] [Timezone]</p>
        <p style="margin: 0 0 5px 0;">&#x1F4F1; Via: Zoom</p>
        <p style="margin: 0 0 0 0;">&#x1F517; Link: [Zoom_Link]</p>
    </div>
    
    <p><strong>Technical preparation:</strong></p>
    
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Test your Zoom connection in advance</li>
        <li>Find a quiet space with minimal background noise</li>
        <li>Have a pen and paper handy for notes</li>
    </ul>
    
    <p>During our 30-minute call, we'll discuss your specific leadership challenges and explore whether the Executive Presence Immersion is the right solution for you. This is a no-pressure conversation—I'm genuinely interested in learning about your goals.</p>
    
    <p>If you need to reschedule, please use the link in your calendar invitation or reply to this email.</p>
    
    <p>See you tomorrow,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to your email address because you registered for information about our Executive Presence Immersion program.<br>
        <a href="#">Unsubscribe</a>
    </p>
</div>
```

### Email 5: Payment Information
**Subject:** Executive Presence Immersion | Payment Information
**Timing:** After the introduction call for interested prospects

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Executive Presence Immersion Payment Information</h2>
    
    <p>Hello {{ $json.body.name }},</p>
    
    <p>Thank you for your interest in the Executive Presence Immersion. I'm excited about the possibility of having you join us at Alila Napa Valley this July.</p>
    
    <p><span style="color: #ff0004; font-weight: 600;">Only limited spots available</span> - With just 15 places in each immersion cohort and applications coming in regularly, I encourage you to secure your place soon.</p>
    
    <p>Here are the payment details for your registration:</p>
    
    <div style="background-color: #f7f7f7; padding: 20px; margin: 25px 0; border-radius: 5px;">
        <h3 style="color: #4169e1; margin-top: 0;">Payment Options</h3>
        
        <div style="margin-bottom: 20px;">
            <p style="font-weight: bold; margin-bottom: 5px;">Full Payment:</p>
            <p style="margin: 0;">$4,200 - Secure your spot with a one-time payment</p>
        </div>
        
        <div style="margin-bottom: 20px;">
            <p style="font-weight: bold; margin-bottom: 5px;">Payment Plan:</p>
            <p style="margin: 0;">2 payments of $2,100 each</p>
            <ul style="padding-left: 20px; margin-top: 5px;">
                <li>First payment: Due immediately to secure your spot</li>
                <li>Second payment: Due 30 days after first payment</li>
            </ul>
        </div>
        
        <div style="margin-bottom: 20px;">
            <p style="font-weight: bold; margin-bottom: 5px;">Payment Methods:</p>
            <ul style="padding-left: 20px; margin: 5px 0 0;">
                <li>Credit/Debit Card (Visa, Mastercard, American Express)</li>
                <li>PayPal</li>
            </ul>
        </div>
        
        <div style="background-color: #e8f4ff; padding: 15px; border-left: 4px solid #4169e1; margin-top: 20px;">
            <p style="margin: 0; font-weight: bold;">Secure Online Payment:</p>
            <p style="margin: 10px 0 0;">Your payment information is protected with industry-standard encryption. You'll receive an immediate confirmation after your payment is processed.</p>
        </div>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/payment.html" style="background-color: #4169e1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Make Your Payment Now</a>
    </div>
    
    <p>If you have any questions about payment options or need assistance with the payment process, please don't hesitate to contact me directly.</p>
    
    <p>I look forward to welcoming you to this transformative experience!</p>
    
    <p>Warm regards,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to your email address because you registered for information about our Executive Presence Immersion program.<br>
        <a href="#">Unsubscribe</a>
    </p>
</div>
```

### Email 6: Post-Call Follow-Up (Interested Prospects)
**Subject:** Your Executive Presence Immersion Details | Special Offer Inside
**Timing:** 2 hours after completed call for interested prospects

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Your Executive Presence Immersion Details</h2>
    
    <p>Hello {{ $json.body.name }},</p>
    
    <p>Thank you for our conversation today. I enjoyed learning about your leadership journey and am excited about the possibility of working with you at the Executive Presence Immersion at Alila Napa Valley, St. Helena, CA this July.</p>
    
    <p>Based on our conversation, I believe this program would be an excellent fit for you and your goals. The personalized coaching, small group environment, and our proprietary <span style="color: #ff0004; font-weight: bold;">IMPACT Framework</span> are designed to help you develop the authentic executive presence that will elevate your career.</p>
    
    <p>As promised, here are the complete program details:</p>
    
    <div style="background-color: #f7f7f7; padding: 20px; margin: 25px 0; border-radius: 5px;">
        <h3 style="color: #4169e1; margin-top: 0;">Executive Presence Immersion</h3>
        <p><strong>Dates:</strong> July 20-23, 2024</p>
        <p><strong>Location:</strong> Alila Napa Valley, 1915 Main Street, St. Helena, CA 94574</p>
        <p><strong>Investment:</strong> $4,400</p>
        
        <p style="margin-top: 15px;"><strong>What's Included:</strong></p>
        <ul style="padding-left: 20px; margin-bottom: 15px;">
            <li>3 day immersive executive presence event</li>
            <li>Personalized nervous system regulation techniques</li>
            <li>Executive presence assessment and roadmap</li>
            <li>All meals during the program (Welcome Reception, 2 Lunches, Walking Dinner Tour, and Farewell Brunch)</li>
            <li>3 nights accommodation at Alila Napa Valley (July 20-23, 2024)</li>
        </ul>
        
        <p style="margin-top: 15px;"><strong>Event Schedule:</strong></p>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin: 15px 0;">
            <div>
                <p style="font-weight: 600; color: #4169e1; margin-bottom: 5px;">Sunday (7/20)</p>
                <p style="margin: 0 0 5px;">4:00 PM – Check-in</p>
                <p style="margin: 0 0 5px;">6:00 PM – Welcome Reception</p>
                <p style="margin: 0 0 5px;">7:30 PM – Vibration Session</p>
            </div>
            <div>
                <p style="font-weight: 600; color: #4169e1; margin-bottom: 5px;">Monday (7/21)</p>
                <p style="margin: 0 0 5px;">8:00 AM – 5:00 PM – Session</p>
                <p style="margin: 0 0 5px;">6:30 PM – Dinner</p>
            </div>
            <div>
                <p style="font-weight: 600; color: #4169e1; margin-bottom: 5px;">Tuesday (7/22)</p>
                <p style="margin: 0 0 5px;">8:00 AM – 5:00 PM – Session</p>
            </div>
            <div>
                <p style="font-weight: 600; color: #4169e1; margin-bottom: 5px;">Wednesday (7/23)</p>
                <p style="margin: 0 0 5px;">Farewell Brunch & Check-out</p>
            </div>
        </div>
        
        <p style="margin-top: 15px;"><strong>Transportation – Approximate Drive Times from Airports:</strong></p>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin: 15px 0;">
            <div>
                <p style="font-weight: 600; color: #4169e1; margin-bottom: 5px;">Santa Rosa</p>
                <p style="margin: 0;">40 minutes</p>
            </div>
            <div>
                <p style="font-weight: 600; color: #4169e1; margin-bottom: 5px;">Oakland</p>
                <p style="margin: 0;">90 minutes</p>
            </div>
            <div>
                <p style="font-weight: 600; color: #4169e1; margin-bottom: 5px;">San Francisco (SFO)</p>
                <p style="margin: 0;">90 minutes</p>
            </div>
            <div>
                <p style="font-weight: 600; color: #4169e1; margin-bottom: 5px;">Sacramento</p>
                <p style="margin: 0;">80 minutes</p>
            </div>
        </div>
        
        <div style="background-color: #fffbea; border-left: 4px solid #ff0004; padding: 15px; margin-top: 20px;">
            <p style="margin: 0; font-weight: bold; color: #ff0004;">Special Offer (Valid for 48 Hours) - <span style="text-decoration: underline;">Limited Spots Available!</span></p>
            <p style="margin: 10px 0;">Register within the next 48 hours and receive:</p>
            <ul style="padding-left: 20px; margin: 10px 0;">
                <li>Private 1-hour pre-immersion strategy session ($500 value)</li>
                <li>Executive Presence Assessment Tool ($350 value)</li>
                <li>Priority seating and accommodations</li>
            </ul>
            <p style="margin: 15px 0 0 0; font-weight: bold;">Our immersion programs consistently sell out <span style="color: #ff0004;">very quickly</span> due to high demand for this exclusive event.</p>
            <p style="margin: 10px 0 0 0; font-size: 0.9em; font-style: italic;">Offer expires: [Expiration_Date_Time]</p>
        </div>
    </div>
    
    <p>Based on our conversation, I believe this program would be transformative for your leadership presence. Our proprietary <span style="color: #ff0004; font-weight: bold;">IMPACT Framework</span> will directly address the challenges you mentioned regarding [Specific_Challenge_Mentioned] and help you develop an authentic executive presence that resonates with your leadership style.</p>
    
    <p><span style="color: #ff0004; font-weight: bold;">With limited spots available</span> and high demand for this exclusive program, I encourage you to secure your place soon. To register, simply click the button below:</p>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/payment.html" style="background-color: #4169e1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Secure Your Spot Now</a>
    </div>
    
    <p>Spaces are limited to just 15 participants to ensure personalized attention. We currently have limited spots remaining for the July immersion.</p>
    
    <p>If you have any questions or would like to discuss anything further, please don't hesitate to reach out. I'm here to help you make the best decision for your leadership journey.</p>
    
    <p>Warm regards,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to your email address because you registered for information about our Executive Presence Immersion program.<br>
        <a href="#">Unsubscribe</a>
    </p>
</div>
```

### Email 6: Special Offer Reminder
**Subject:** Your Special Offer Expires Tomorrow | Executive Presence Immersion
**Timing:** 24 hours before special offer expires

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Your Special Offer Expires Tomorrow</h2>
    
    <p>Hello {{ $json.body.name }},</p>
    
    <p>I wanted to send a quick reminder that your special offer for the Executive Presence Immersion expires tomorrow at [Expiration_Time].</p>
    
    <div style="background-color: #fffbea; border-left: 4px solid #ff0004; padding: 15px; margin: 25px 0;">
        <p style="margin: 0; font-weight: bold; color: #ff0004;">When you enroll by tomorrow, you'll receive:</p>
        <ul style="padding-left: 20px; margin: 10px 0 0 0;">
            <li>Private 1-hour pre-immersion strategy session ($500 value)</li>
            <li>Executive Presence Assessment Tool ($350 value)</li>
            <li>Priority seating and accommodations</li>
        </ul>
        <p style="margin: 15px 0 0 0; font-size: 0.9em; font-style: italic;">Offer expires: [Expiration_Date_Time]</p>
    </div>
    
    <p>After our conversation, I'm confident that this program will help you address the leadership challenges you mentioned, particularly around [Specific_Challenge_Mentioned].</p>
    
    <p>The July immersion is filling up quickly, with very limited spots remaining. I'd love to have you join us for this transformative experience.</p>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/payment.html" style="background-color: #4169e1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Secure Your Spot Now</a>
    </div>
    
    <p>If you have any last-minute questions or concerns, please don't hesitate to reach out. I'm available to discuss anything that might help you make your decision.</p>
    
    <p>Warm regards,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to your email address because you registered for information about our Executive Presence Immersion program.<br>
        <a href="#">Unsubscribe</a>
    </p>
</div>
```

### Email 7: Post-Call Nurture (Not-Ready Prospects)
**Subject:** Resources to Support Your Leadership Journey
**Timing:** 2 hours after call for prospects not ready to enroll

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Resources to Support Your Leadership Journey</h2>
    
    <p>Hello {{ $json.body.name }},</p>
    
    <p>Thank you for our conversation today. I appreciated learning about your leadership journey and the challenges you're currently facing.</p>
    
    <p>I understand that now might not be the right time for you to join our Executive Presence Immersion program, and I completely respect that decision. Leadership development is a personal journey, and timing is everything.</p>
    
    <p>As promised, I wanted to share some resources that might help you address some of the challenges we discussed:</p>
    
    <div style="background-color: #f7f7f7; padding: 20px; margin: 25px 0; border-radius: 5px;">
        <h3 style="color: #4169e1; margin-top: 0;">Free Resources for You</h3>
        
        <p><strong>1. Executive Presence Quick Guide</strong></p>
        <p style="margin: 0 0 15px 0;">A PDF with the 5 key elements of executive presence and practical tips for improvement. <a href="#" style="color: #4169e1;">Download here</a></p>
        
        <p><strong>2. Nervous System Regulation Technique</strong></p>
        <p style="margin: 0 0 15px 0;">A 5-minute audio guide to help you reset your nervous system before high-stakes meetings. <a href="#" style="color: #4169e1;">Access here</a></p>
        
        <p><strong>3. Leadership Presence Webinar</strong></p>
        <p style="margin: 0 0 0 0;">A recorded 30-minute webinar covering the foundations of authentic leadership presence. <a href="#" style="color: #4169e1;">Watch here</a></p>
    </div>
    
    <p>I hope these resources provide some immediate value as you continue your leadership development journey. If your circumstances change, or if you have questions about future immersion dates, please don't hesitate to reach out.</p>
    
    <p>I'll check in with you in a few months, but in the meantime, I wish you continued success in your leadership role.</p>
    
    <p>Warm regards,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to your email address because you registered for information about our Executive Presence Immersion program.<br>
        <a href="#">Unsubscribe</a>
    </p>
</div>
```

### Email 8: Payment Confirmation
**Subject:** Welcome to the Executive Presence Immersion | Receipt & Next Steps
**Timing:** Immediate after payment

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Welcome to the Executive Presence Immersion!</h2>
    
    <p>Hello {{ $json.body.name }},</p>
    
    <p>Congratulations on securing your spot in the Executive Presence Immersion! I'm thrilled to have you join us for this transformative experience in Napa Valley this July.</p>
    
    <div style="background-color: #f0f7ff; border: 1px solid #d0e3ff; padding: 20px; margin: 25px 0; border-radius: 5px;">
        <h3 style="color: #4169e1; margin-top: 0;">Payment Receipt</h3>
        <p><strong>Transaction ID:</strong> [Transaction_ID]</p>
        <p><strong>Date:</strong> [Payment_Date]</p>
        <p><strong>Amount:</strong> $8,500.00</p>
        <p><strong>Payment Method:</strong> [Payment_Method]</p>
        <p style="margin-bottom: 0;"><strong>Status:</strong> Confirmed</p>
    </div>
    
    <p><strong>Your Executive Presence Immersion Details:</strong></p>
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li><strong>Dates:</strong> July 20-23, 2025</li>
        <li><strong>Location:</strong> ALILA RESORT NAPA VALLEY, 1915 Main Street, St. Helena, CA 94574</li>
        <li><strong>Check-in:</strong> July 20, from 3:00 PM</li>
        <li><strong>Program Start:</strong> July 20, 6:00 PM Welcome Dinner</li>
        <li><strong>Program End:</strong> July 23, 4:00 PM</li>
    </ul>
    
    <div style="margin: 25px 0;">
        <p><strong>Event Location Map:</strong></p>
        <a href="https://goo.gl/maps/5QhRXJZfPZGEBtYK6" target="_blank">
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=Alila+Napa+Valley,St+Helena,CA&zoom=14&size=600x300&maptype=roadmap&markers=color:red%7CAlila+Napa+Valley,St+Helena,CA&key=YOUR_API_KEY" alt="Map of ALILA RESORT NAPA VALLEY" style="width: 100%; max-width: 600px; border-radius: 8px;">
        </a>
        <p style="font-size: 0.9rem; margin-top: 10px;">
            <a href="https://goo.gl/maps/5QhRXJZfPZGEBtYK6" target="_blank" style="color: #4169e1; text-decoration: none;">
                View on Google Maps
            </a>
        </p>
    </div>
    
    <p><strong>Your Special Bonuses:</strong></p>
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Private 1-hour pre-immersion strategy session (We'll email you to schedule this within 3 business days)</li>
        <li>Executive Presence Assessment Tool (You'll receive access via email within 24 hours)</li>
        <li>Priority seating and accommodations (Already arranged for you)</li>
    </ul>
    
    <p><strong>Next Steps:</strong></p>
    <ol style="padding-left: 20px; margin-bottom: 20px;">
        <li>Complete your <a href="#" style="color: #4169e1;">Participant Information Form</a> (required within 7 days)</li>
        <li>Book your travel to Napa Valley, CA</li>
        <li>Watch for an email to schedule your pre-immersion strategy session</li>
        <li>Mark your calendar for our group orientation call on July 6th at 11:00 AM PT</li>
    </ol>
    
    <p>In the coming weeks, you'll receive more detailed information about the program, including a packing list, agenda, and pre-work to help you get the most from your immersion experience.</p>
    
    <p>If you have any questions in the meantime, please don't hesitate to reach out. My team and I are here to support you every step of the way.</p>
    
    <p>I'm looking forward to working with you and helping you develop unshakable executive presence!</p>
    
    <p>Warm regards,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to your email address because you registered for information about our Executive Presence Immersion program.
    </p>
</div>
```
