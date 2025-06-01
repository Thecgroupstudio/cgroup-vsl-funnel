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
    
    <p>Hello [First_Name],</p>
    
    <p>Thank you for taking the first step toward transforming your executive presence. We've received your information and are excited to connect with you.</p>
    
    <p><strong>Your next step:</strong> Please schedule your complimentary 30-minute Introduction Call where we'll discuss:</p>
    
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Your specific leadership challenges</li>
        <li>How the Executive Presence Immersion can help you</li>
        <li>Whether this program is the right fit for your goals</li>
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
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Limited Spots Available</h2>
    
    <p>Hello [First_Name],</p>
    
    <p>I noticed you haven't scheduled your complimentary Introduction Call for the Executive Presence Immersion program yet.</p>
    
    <p>Our calendar is filling up quickly, and I want to make sure you have the opportunity to discuss how this program can transform your leadership presence.</p>
    
    <p><strong>What you'll gain from this brief call:</strong></p>
    
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Clarity on how to overcome your specific leadership challenges</li>
        <li>Understanding of our neuroscience-backed approach to executive presence</li>
        <li>Details about the July 20-23 immersion experience in Monterey</li>
    </ul>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/calendar.html" style="background-color: #4169e1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reserve Your Call Time</a>
    </div>
    
    <p>This call is completely complimentary and comes with no obligation. It's simply an opportunity for us to determine if this program aligns with your leadership goals.</p>
    
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
    
    <p>Hello [First_Name],</p>
    
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
    
    <p>This 30-minute call will help us determine if the Executive Presence Immersion is the right fit for your leadership goals. There's no pressure or obligation—just an open conversation about how we might be able to help you.</p>
    
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
    
    <p>Hello [First_Name],</p>
    
    <p>I'm looking forward to our conversation tomorrow about the Executive Presence Immersion program and how it might support your leadership goals.</p>
    
    <div style="background-color: #f7f7f7; border-left: 4px solid #4169e1; padding: 15px; margin: 25px 0;">
        <p style="margin: 0 0 10px 0; font-weight: bold;">Quick Reminder:</p>
        <p style="margin: 0 0 5px 0;">📅 Date: [Call_Date]</p>
        <p style="margin: 0 0 5px 0;">⏰ Time: [Call_Time] [Timezone]</p>
        <p style="margin: 0 0 5px 0;">📞 Via: Zoom</p>
        <p style="margin: 0 0 0 0;">🔗 Link: [Zoom_Link]</p>
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

### Email 5: Post-Call Follow-Up (Interested Prospects)
**Subject:** Your Executive Presence Immersion Details | Special Offer Inside
**Timing:** 2 hours after completed call for interested prospects

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Your Executive Presence Immersion Details</h2>
    
    <p>Hello [First_Name],</p>
    
    <p>Thank you for our conversation today. I enjoyed learning about your leadership journey and am excited about the possibility of working with you at the Executive Presence Immersion in Monterey this July.</p>
    
    <p>As promised, here are the complete program details:</p>
    
    <div style="background-color: #f7f7f7; padding: 20px; margin: 25px 0; border-radius: 5px;">
        <h3 style="color: #4169e1; margin-top: 0;">Executive Presence Immersion</h3>
        <p><strong>Dates:</strong> July 20-23, 2024</p>
        <p><strong>Location:</strong> Sanctuary Beach Resort, Monterey, CA</p>
        <p><strong>Investment:</strong> $8,500</p>
        
        <p style="margin-top: 15px;"><strong>What's Included:</strong></p>
        <ul style="padding-left: 20px; margin-bottom: 15px;">
            <li>3 days of intensive, hands-on training (9am-5pm daily)</li>
            <li>Neuroscience-backed techniques for managing your nervous system</li>
            <li>Personalized feedback and coaching</li>
            <li>Luxury accommodations for 3 nights</li>
            <li>All meals and refreshments</li>
            <li>Comprehensive workbook and resources</li>
            <li>30-day post-immersion support</li>
        </ul>
        
        <div style="background-color: #fffbea; border-left: 4px solid #ffc107; padding: 15px; margin-top: 20px;">
            <p style="margin: 0; font-weight: bold;">Special Offer (Valid for 48 Hours):</p>
            <p style="margin: 10px 0 0 0;">Enroll within 48 hours and receive these exclusive bonuses:</p>
            <ul style="padding-left: 20px; margin: 10px 0 0 0;">
                <li>Private 1-hour pre-immersion strategy session ($500 value)</li>
                <li>Executive Presence Assessment Tool ($350 value)</li>
                <li>Priority seating and accommodations</li>
            </ul>
            <p style="margin: 15px 0 0 0; font-size: 0.9em; font-style: italic;">Offer expires: [Expiration_Date_Time]</p>
        </div>
    </div>
    
    <p>Based on our conversation, I believe this program would be transformative for your leadership presence. The techniques you'll learn will directly address the challenges you mentioned regarding [Specific_Challenge_Mentioned].</p>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/payment.html" style="background-color: #4169e1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Secure Your Spot Now</a>
    </div>
    
    <p>Spaces are limited to just 12 participants to ensure personalized attention. We currently have 5 spots remaining for the July immersion.</p>
    
    <p>If you have any questions or would like to discuss anything further, please don't hesitate to reach out. I'm here to help you make the best decision for your leadership journey.</p>
    
    <p>Warm regards,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a><br>
    Phone: (555) 123-4567</p>
    
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
    
    <p>Hello [First_Name],</p>
    
    <p>I wanted to send a quick reminder that your special offer for the Executive Presence Immersion expires tomorrow at [Expiration_Time].</p>
    
    <div style="background-color: #fffbea; border-left: 4px solid #ffc107; padding: 15px; margin: 25px 0;">
        <p style="margin: 0; font-weight: bold;">When you enroll by tomorrow, you'll receive:</p>
        <ul style="padding-left: 20px; margin: 10px 0 0 0;">
            <li>Private 1-hour pre-immersion strategy session ($500 value)</li>
            <li>Executive Presence Assessment Tool ($350 value)</li>
            <li>Priority seating and accommodations</li>
        </ul>
        <p style="margin: 15px 0 0 0; font-size: 0.9em; font-style: italic;">Offer expires: [Expiration_Date_Time]</p>
    </div>
    
    <p>After our conversation, I'm confident that this program will help you address the leadership challenges you mentioned, particularly around [Specific_Challenge_Mentioned].</p>
    
    <p>The July immersion is filling up quickly, with only 5 spots remaining. I'd love to have you join us for this transformative experience.</p>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/payment.html" style="background-color: #4169e1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Secure Your Spot Now</a>
    </div>
    
    <p>If you have any last-minute questions or concerns, please don't hesitate to reach out. I'm available to discuss anything that might help you make your decision.</p>
    
    <p>Warm regards,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a><br>
    Phone: (555) 123-4567</p>
    
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
    
    <p>Hello [First_Name],</p>
    
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
    
    <p>Hello [First_Name],</p>
    
    <p>Congratulations on securing your spot in the Executive Presence Immersion! I'm thrilled to have you join us for this transformative experience in Monterey this July.</p>
    
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
        <li><strong>Dates:</strong> July 20-23, 2024</li>
        <li><strong>Location:</strong> Sanctuary Beach Resort, Monterey, CA</li>
        <li><strong>Check-in:</strong> July 20, from 3:00 PM</li>
        <li><strong>Program Start:</strong> July 20, 6:00 PM Welcome Dinner</li>
        <li><strong>Program End:</strong> July 23, 4:00 PM</li>
    </ul>
    
    <p><strong>Your Special Bonuses:</strong></p>
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Private 1-hour pre-immersion strategy session (We'll email you to schedule this within 3 business days)</li>
        <li>Executive Presence Assessment Tool (You'll receive access via email within 24 hours)</li>
        <li>Priority seating and accommodations (Already arranged for you)</li>
    </ul>
    
    <p><strong>Next Steps:</strong></p>
    <ol style="padding-left: 20px; margin-bottom: 20px;">
        <li>Complete your <a href="#" style="color: #4169e1;">Participant Information Form</a> (required within 7 days)</li>
        <li>Book your travel to Monterey, CA</li>
        <li>Watch for an email to schedule your pre-immersion strategy session</li>
        <li>Mark your calendar for our group orientation call on July 6th at 11:00 AM PT</li>
    </ol>
    
    <p>In the coming weeks, you'll receive more detailed information about the program, including a packing list, agenda, and pre-work to help you get the most from your immersion experience.</p>
    
    <p>If you have any questions in the meantime, please don't hesitate to reach out. My team and I are here to support you every step of the way.</p>
    
    <p>I'm looking forward to working with you and helping you develop unshakable executive presence!</p>
    
    <p>Warm regards,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a><br>
    Phone: (555) 123-4567</p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to your email address because you registered for information about our Executive Presence Immersion program.
    </p>
</div>
```
