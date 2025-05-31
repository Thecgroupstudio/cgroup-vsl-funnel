# Executive Presence Immersion Program - Email Sequence

This document outlines the email sequence that will be sent to prospects after they fill out the registration form. These emails will be implemented in n8n and can be used as a reference for creating the HTML email templates.

## Email 1: Form Submission Confirmation

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

## Email 2: Call Booking Reminder (If No Booking Within 24 Hours)

**Subject:** Don't Miss Your Opportunity | Schedule Your Introduction Call

**Timing:** 24 hours after form submission if no call booked

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Your Introduction Call is Waiting</h2>
    
    <p>Hello [First_Name],</p>
    
    <p>We noticed you haven't scheduled your complimentary Introduction Call for the Executive Presence Immersion program yet.</p>
    
    <p>This personalized 30-minute call is designed to help you:</p>
    
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Identify your biggest leadership presence challenges</li>
        <li>Discover how our proven methodology can transform your impact</li>
        <li>Determine if the Executive Presence Immersion is right for you</li>
    </ul>
    
    <div style="background-color: #f8f9fa; border-left: 4px solid #4169e1; padding: 15px; margin: 20px 0;">
        <p style="margin: 0;"><strong>Limited Availability:</strong> We only accept a small number of participants each month to ensure personalized attention. Secure your spot by scheduling your call today.</p>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/calendar.html" style="background-color: #4169e1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Schedule Your Call Now</a>
    </div>
    
    <p>If you're having any difficulties with the scheduling process, please reply to this email and we'll assist you right away.</p>
    
    <p>Ready to elevate your leadership presence,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to [Email] because you registered for information about our Executive Presence Immersion program.<br>
        <a href="#">Unsubscribe</a>
    </p>
</div>
```

## Email 3: Call Booking Confirmation

**Subject:** Your Introduction Call is Confirmed | [Date] at [Time]

**Timing:** Immediate after call booking

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Your Introduction Call is Confirmed!</h2>
    
    <p>Hello [First_Name],</p>
    
    <p>Great news! Your Introduction Call for the Executive Presence Immersion program is now confirmed.</p>
    
    <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid #e0e0e0;">
        <h3 style="color: #4169e1; font-size: 18px; margin-top: 0; margin-bottom: 15px;">Your Call Details</h3>
        
        <p style="margin: 8px 0;"><strong>Date:</strong> [Call_Date]</p>
        <p style="margin: 8px 0;"><strong>Time:</strong> [Call_Time] ([Your_Timezone])</p>
        <p style="margin: 8px 0;"><strong>Duration:</strong> 30 minutes</p>
        <p style="margin: 8px 0;"><strong>Format:</strong> Zoom Video Call</p>
        <p style="margin: 8px 0;"><strong>Zoom Link:</strong> <a href="[Zoom_Link]">[Zoom_Link]</a></p>
    </div>
    
    <p><strong>How to prepare for your call:</strong></p>
    
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Find a quiet space with good internet connection</li>
        <li>Consider your biggest leadership challenges</li>
        <li>Reflect on what you want your executive presence to accomplish</li>
        <li>Prepare any questions you have about the program</li>
    </ul>
    
    <p>We've also added this appointment to your calendar. If you need to reschedule, please use the link in your calendar invitation or reply to this email.</p>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/videos.html" style="background-color: #4169e1; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">Explore Our Leadership Videos</a>
    </div>
    
    <p>Looking forward to speaking with you soon,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to [Email] because you registered for information about our Executive Presence Immersion program.
    </p>
</div>
```

## Email 4: Call Reminder (24 Hours Before)

**Subject:** Your Introduction Call Tomorrow | Quick Preparation Guide

**Timing:** 24 hours before scheduled call

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Your Introduction Call is Tomorrow</h2>
    
    <p>Hello [First_Name],</p>
    
    <p>This is a friendly reminder that your Introduction Call for the Executive Presence Immersion program is scheduled for tomorrow:</p>
    
    <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid #e0e0e0;">
        <p style="margin: 8px 0;"><strong>Date:</strong> [Call_Date]</p>
        <p style="margin: 8px 0;"><strong>Time:</strong> [Call_Time] ([Your_Timezone])</p>
        <p style="margin: 8px 0;"><strong>Zoom Link:</strong> <a href="[Zoom_Link]">[Zoom_Link]</a></p>
    </div>
    
    <p><strong>Quick Preparation Guide:</strong></p>
    
    <ol style="padding-left: 20px; margin-bottom: 20px;">
        <li><strong>Technical Check:</strong> Ensure your camera and microphone are working</li>
        <li><strong>Quiet Space:</strong> Find a location with minimal background noise</li>
        <li><strong>Reflection:</strong> Consider these questions:
            <ul style="padding-left: 20px; margin: 10px 0;">
                <li>What are your biggest leadership communication challenges?</li>
                <li>What would transforming your executive presence make possible?</li>
                <li>What questions do you have about the immersion program?</li>
            </ul>
        </li>
    </ol>
    
    <div style="background-color: #fff8e6; border-left: 4px solid #ffcc00; padding: 15px; margin: 20px 0;">
        <p style="margin: 0;"><strong>Note:</strong> If you need to reschedule, please do so at least 4 hours before your scheduled time by replying to this email.</p>
    </div>
    
    <p>We're looking forward to connecting with you tomorrow!</p>
    
    <p>Warm regards,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to [Email] because you registered for information about our Executive Presence Immersion program.
    </p>
</div>
```

## Email 5: Post-Call Follow-Up (Interested Prospects)

**Subject:** Next Steps for Your Executive Presence Journey | Limited-Time Offer

**Timing:** 2 hours after completed call (for interested prospects)

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Your Executive Presence Transformation Awaits</h2>
    
    <p>Hello [First_Name],</p>
    
    <p>Thank you for our conversation today about the Executive Presence Immersion program. I'm excited about your leadership journey and the transformation that awaits you.</p>
    
    <p>As we discussed, here are the next steps to secure your place in the program:</p>
    
    <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid #e0e0e0;">
        <h3 style="color: #4169e1; font-size: 18px; margin-top: 0; margin-bottom: 15px;">Executive Presence Immersion Program</h3>
        
        <p><strong>Investment:</strong> $[Program_Price] (payment plans available)</p>
        <p><strong>Program Start Date:</strong> [Start_Date]</p>
        <p><strong>Limited Availability:</strong> Only [Spots_Left] spots remaining</p>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p><strong>Special Offer:</strong> As discussed, if you enroll within the next 48 hours, you'll receive:</p>
            <ul style="padding-left: 20px; margin: 10px 0;">
                <li>Complimentary 1:1 Executive Presence Assessment ($997 value)</li>
                <li>Lifetime access to our Leadership Resource Library ($497 value)</li>
                <li>Priority scheduling for all coaching sessions</li>
            </ul>
        </div>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/payment.html" style="background-color: #4169e1; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">Secure Your Spot Now</a>
    </div>
    
    <p>If you have any questions or would like to discuss payment options, please don't hesitate to reach out. I'm here to support your leadership transformation journey.</p>
    
    <p>To your success,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a><br>
    Phone: [Phone_Number]</p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <div style="font-style: italic; color: #666; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
        <p>"The Executive Presence Immersion program transformed how I show up as a leader. My team's engagement has increased by 40%, and I've secured two major promotions since completing the program." — Sarah J., Chief Marketing Officer</p>
    </div>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to [Email] because you registered for information about our Executive Presence Immersion program.
    </p>
</div>
```

## Email 6: Special Offer Reminder (24 Hours Before Expiration)

**Subject:** [LAST CHANCE] Your Executive Presence Bonuses Expire Tomorrow

**Timing:** 24 hours before special offer expires

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <div style="background-color: #ffe6e6; border-radius: 8px; padding: 15px; margin-bottom: 25px; text-align: center;">
        <h2 style="color: #cc0000; margin: 0;">Last Chance: Offer Expires in 24 Hours</h2>
    </div>
    
    <p>Hello [First_Name],</p>
    
    <p>This is a friendly reminder that your special Executive Presence Immersion offer expires tomorrow. To secure the exclusive bonuses we discussed (valued at over $1,400), you'll need to complete your enrollment within the next 24 hours.</p>
    
    <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid #e0e0e0;">
        <h3 style="color: #4169e1; font-size: 18px; margin-top: 0; margin-bottom: 15px;">What You'll Miss After Tomorrow:</h3>
        
        <ul style="padding-left: 20px; margin: 10px 0;">
            <li><strong>Complimentary 1:1 Executive Presence Assessment</strong> ($997 value)</li>
            <li><strong>Lifetime access to our Leadership Resource Library</strong> ($497 value)</li>
            <li><strong>Priority scheduling for all coaching sessions</strong></li>
        </ul>
    </div>
    
    <p>Remember why you booked the call in the first place—you recognized that enhancing your executive presence is a critical step in your leadership journey. The program is designed to help you:</p>
    
    <ul style="padding-left: 20px; margin-bottom: 20px;">
        <li>Command attention when you speak</li>
        <li>Project confidence in high-stakes situations</li>
        <li>Influence key stakeholders effectively</li>
        <li>Accelerate your career trajectory</li>
    </ul>
    
    <div style="text-align: center; margin: 30px 0;">
        <a href="https://mastermind.thecgroupstudio.com/payment.html" style="background-color: #4169e1; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">Secure Your Spot & Bonuses Now</a>
    </div>
    
    <p>If you have any last-minute questions or need assistance with the enrollment process, please reply to this email or call me directly at [Phone_Number].</p>
    
    <p>To your leadership success,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a><br>
    Phone: [Phone_Number]</p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to [Email] because you registered for information about our Executive Presence Immersion program.
    </p>
</div>
```

## Email 7: Post-Call Nurture (For Not-Ready Prospects)

**Subject:** Resources to Elevate Your Executive Presence | The CGroup Studio

**Timing:** 2 hours after completed call (for prospects not ready to enroll)

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Resources to Support Your Leadership Journey</h2>
    
    <p>Hello [First_Name],</p>
    
    <p>Thank you for our conversation today. I appreciate you taking the time to discuss your leadership goals and challenges.</p>
    
    <p>While the timing might not be right for the Executive Presence Immersion program right now, I'd still like to support your leadership development journey. Here are some complimentary resources that might be helpful:</p>
    
    <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid #e0e0e0;">
        <h3 style="color: #4169e1; font-size: 18px; margin-top: 0; margin-bottom: 15px;">Executive Presence Resources</h3>
        
        <ul style="padding-left: 20px; margin: 10px 0;">
            <li><a href="https://mastermind.thecgroupstudio.com/videos.html">Leadership Video Library</a> - Access our collection of leadership interviews and insights</li>
            <li><a href="#">Executive Presence Self-Assessment Guide</a> - A PDF guide to help you identify your strengths and growth areas</li>
            <li><a href="#">5 Techniques to Command the Room</a> - Quick strategies you can implement immediately</li>
        </ul>
    </div>
    
    <p>I understand that investing in your leadership development is a significant decision. When the timing is right for you, the door to the Executive Presence Immersion program remains open.</p>
    
    <p>In the meantime, I'll occasionally share valuable leadership insights and resources that might be helpful on your journey. If you'd prefer not to receive these, just let me know.</p>
    
    <p>If your circumstances change or you have any questions, please don't hesitate to reach out.</p>
    
    <p>Wishing you continued success,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to [Email] because you registered for information about our Executive Presence Immersion program.<br>
        <a href="#">Unsubscribe</a>
    </p>
</div>
```

## Email 8: Payment Confirmation

**Subject:** Welcome to the Executive Presence Immersion! | Your Receipt & Next Steps

**Timing:** Immediate after payment

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
    <img src="https://mastermind.thecgroupstudio.com/images/cgroup-logo.webp" alt="The CGroup Studio" style="width: 120px; height: auto; margin-bottom: 20px;">
    
    <h2 style="color: #4169e1; margin-bottom: 15px;">Welcome to the Executive Presence Immersion!</h2>
    
    <p>Hello [First_Name],</p>
    
    <p>Congratulations on your decision to transform your executive presence! Your payment has been successfully processed, and we're thrilled to welcome you to the Executive Presence Immersion program.</p>
    
    <div style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid #e0e0e0;">
        <h3 style="color: #4169e1; font-size: 18px; margin-top: 0; margin-bottom: 15px;">Payment Receipt</h3>
        
        <p style="margin: 8px 0;"><strong>Transaction ID:</strong> [Transaction_ID]</p>
        <p style="margin: 8px 0;"><strong>Date:</strong> [Payment_Date]</p>
        <p style="margin: 8px 0;"><strong>Amount:</strong> $[Payment_Amount]</p>
        <p style="margin: 8px 0;"><strong>Payment Method:</strong> [Payment_Method]</p>
    </div>
    
    <h3 style="color: #4169e1; margin: 30px 0 15px;">Your Next Steps:</h3>
    
    <ol style="padding-left: 20px; margin-bottom: 20px;">
        <li><strong>Complete Your Welcome Questionnaire</strong><br>
        Please complete <a href="#">this brief questionnaire</a> within the next 48 hours to help us personalize your program experience.</li>
        <br>
        <li><strong>Schedule Your Executive Presence Assessment</strong><br>
        <a href="#">Click here</a> to schedule your 1:1 assessment session (one of your special bonuses).</li>
        <br>
        <li><strong>Mark Your Calendar</strong><br>
        Your first group session begins on [First_Session_Date] at [First_Session_Time]. Calendar invitations will be sent separately.</li>
        <br>
        <li><strong>Join Our Private Community</strong><br>
        <a href="#">Access the Executive Presence community</a> using the login credentials that will be emailed separately.</li>
    </ol>
    
    <div style="background-color: #e6f7ff; border-radius: 8px; padding: 20px; margin: 25px 0; border: 1px solid #b3e0ff;">
        <h3 style="color: #0066cc; font-size: 18px; margin-top: 0; margin-bottom: 15px;">Important Program Information</h3>
        
        <p><strong>Program Duration:</strong> [Program_Duration]</p>
        <p><strong>Session Schedule:</strong> [Session_Schedule]</p>
        <p><strong>Support Email:</strong> <a href="mailto:support@thecgroupstudio.com">support@thecgroupstudio.com</a></p>
        <p><strong>Emergency Contact:</strong> [Emergency_Phone]</p>
    </div>
    
    <p>If you have any questions before we begin, please don't hesitate to reach out. We're committed to making this a transformative experience for you.</p>
    
    <p>With excitement for your journey ahead,</p>
    
    <p>Kathryn Ficarra<br>
    Founder, The CGroup Studio<br>
    <a href="mailto:kathryn@thecgroupstudio.com">kathryn@thecgroupstudio.com</a></p>
    
    <hr style="border: 1px solid #eee; margin: 30px 0;">
    
    <p style="font-size: 12px; color: #666;">
        © 2025 The CGroup Studio. All rights reserved.<br>
        This email was sent to [Email] because you enrolled in our Executive Presence Immersion program.
    </p>
</div>
```
