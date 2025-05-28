Project Goal:
Develop a complete VSL (Video Sales Letter) Call Funnel for Kathryn Ficarra's "Executive Presence Immersion" Mastermind. The funnel will be built using custom HTML, CSS, and JavaScript, hosted on Netlify. Automation for lead capture, email sequences, and data management will be handled by n8n, using Google Sheets as the primary database. Calendly will be used for call booking, and YouTube for VSL/video hosting.
Reference Program Structure: The "Client Control" program structure (provided previously) serves as a high-level strategic guide for funnel stages, objectives, and best practices.
Client: Kathryn Ficarra, CGroup
Offer: Executive Presence Immersion Mastermind (3-day workshop, then ongoing support)
Target Avatar (from client's Offer Worksheet): "Jamie" - 35 y.o. female Director, 250k income, active, career-driven, US-based. Experiences fight-or-flight, performance anxiety, seeks authentic leadership and inner alignment.
Core Promise (from client's Offer Worksheet): "Create executive presence that transforms leaders into forces of innovation and influence."
Unique Mechanism (from client's Offer Worksheet): "IMPACT Framework™" (Identity Alignment, Mindset Mastery, Persona, Authority, Communication Excellence, Transformative Growth).
Key Technologies to Use:
Frontend: HTML5, CSS3, Vanilla JavaScript (ES6+). No frontend frameworks (e.g., React, Vue) unless specifically requested for interactive elements that cannot be achieved otherwise.
Hosting & Form Handling: Netlify (including Netlify Forms for opt-in).
Automation: n8n (self-hosted or cloud instance).
Database: Google Sheets (for storing leads, bookings, and basic tracking data).
Email Sending (via n8n): Integrate with SendGrid API (or Mailgun/AWS SES). AI should provide placeholders for API keys.
Scheduling: Calendly (direct link or embed).
Video Hosting: YouTube (embedded videos).
I. Funnel Page Development (HTML, CSS, JS for Netlify)
General Instructions for All Pages:
Generate clean, semantic HTML.
Provide basic, responsive CSS for good readability and usability on desktop and mobile. Focus on a professional and clean aesthetic.
Include placeholders for Meta Pixel and Google Global Site Tag in the <head> of each HTML file.
Implement JavaScript for UTM parameter capture on the Opt-In Page.
All form submissions on the Opt-In page should be handled by Netlify Forms, configured to redirect to the VSL page on success.
Ensure appropriate footer links for Privacy Policy, Terms, and Disclaimer (content to be provided by Kathryn).
Page 1: Opt-In Page (opt-in.html)
Objective: Capture Name, Email, and UTM parameters.
Key Elements (referencing Client Control structure and Kathryn's Offer Worksheet):
Pre-Headline: Target "Leaders, Executives & Founders."
Main Headline: "How To Transform Your Executive Presence From A Performance Into Palpable Power in 3 Days & Lead With Unshakable Confidence – Guaranteed Shift or a 1:1 Integration Session" (or similar compelling promise from Kathryn's worksheet).
Sub-Headline: Use "Without Statements" (e.g., "...Without Faking Confidence, Relying on Outdated Corporate Jargon, or Sacrificing Your Authentic Self.").
Professional image of Kathryn or relevant graphic.
Opt-In Form:
Fields: First Name, Email.
Hidden fields: utm_source, utm_medium, utm_campaign, utm_term, utm_content.
Netlify form attributes: data-netlify="true", netlify-honeypot.
CTA Button: "Watch The Free Masterclass Now"
JavaScript (opt-in.js):
Function to parse URL for UTM parameters.
Populate hidden form fields with captured UTMs on page load.
Basic client-side form validation (e.g., email format).
Page 2: VSL Page (vsl-page.html)
Objective: Host the VSL and drive prospects to book a call.
Key Elements:
Headline (above video): Reinforce promise (e.g., "Watch Now: Unlock Your Authentic Leadership Power").
VSL Video: Embed Kathryn's YouTube VSL. Placeholder: YOUR_YOUTUBE_VSL_ID. (Advise Kathryn on YouTube embed settings for professional appearance - e.g., hide controls, branding).
CTA Button (below video): "Book Your Executive Presence Strategy Call". Link to Kathryn's Calendly booking page URL. Placeholder: YOUR_CALENDLY_BOOKING_URL.
Attempt to pass email and name (if captured and available client-side, or via n8n if intermediate step) and UTMs to Calendly URL if Calendly supports pre-fill via URL parameters.
JavaScript: Include code to fire Lead conversion event for Meta Pixel and Google Ads tag upon page load.
Page 3: Calendar Page (Can be a direct link to Calendly, or an embedded Calendly on calendar-page.html)
If embedding on calendar-page.html:
Simple page structure with embedded Calendly widget.
Instructions for Kathryn on how to get her Calendly embed code.
Page 4: Thank You / Success Page (thank-you.html)
Objective: Increase call show rate, provide pre-call value.
Key Elements (Referencing Client Control TY Page structure):
Headline: "Congratulations! Your Strategy Call is Booked. Watch This Short Video For Next Steps."
Video 1 (Thank You/Instructions): Embed Kathryn's YouTube TY video. Placeholder: YOUR_YOUTUBE_TY_VIDEO_ID. (Script based on Client Control, emphasizing calendar confirmation).
Section: "Step 2: Pre-Call Preparation"
Headline: "Dive Deeper Before Our Call"
Video 2 (Pre-Call Asset): Embed Kathryn's YouTube pre-call asset (educational or case study). Placeholder: YOUR_YOUTUBE_PRECALL_ASSET_ID.
Section: "Step 3: See What's Possible"
Headline: "Hear From Leaders Like You"
Space for 2-3 embedded YouTube testimonial videos or formatted text testimonials with images. Placeholders for these.
JavaScript: Include code to fire Schedule conversion event for Meta Pixel and Google Ads tag upon page load.
II. n8n Automation Workflows (JSON or Step-by-Step Description)
General n8n Setup Notes:
Assume n8n has credentials set up for Google Sheets API and SendGrid (or alternative email API).
Provide placeholders for Google Sheet IDs, Sheet Names, and Email API Keys.
Workflow 1: Opt-In Lead Capture & Initial Nurture
Trigger: Webhook node listening for Netlify Form submissions.
Steps:
Parse Data: Extract email, name, utm_source, etc., from webhook payload.
Google Sheets Append (Opt-Ins Sheet):
Node: Google Sheets (Append Row).
Sheet ID: YOUR_OPT_INS_SHEET_ID
Sheet Name: Opt-Ins
Columns: Timestamp, Email, Name, UTM_Source, UTM_Medium, UTM_Campaign, UTM_Term, UTM_Content, Status (default to "Opted-In").
SendGrid Send Email (Email 1 - VSL Access):
Node: SendGrid (or HTTP Request for other APIs).
To: {{ $json.body.email }}
From: kathryn@yourcgroupdomain.com (Kathryn to configure her domain with SendGrid).
Subject: "Here's the Executive Presence Masterclass you requested, {{ $json.body.name }}!"
Body: HTML email with a link to vsl-page.html (including UTMs if desired for internal tracking).
Wait Node: 3 hours.
Google Sheets Lookup (Check if Booked):
Node: Google Sheets (Get Rows / Lookup).
Lookup email in YOUR_BOOKED_CALLS_SHEET_ID (Booked Calls sheet).
IF Node (Condition: Not Booked):
If lookup returns no match (not booked):
SendGrid Send Email (Email 2 - Reminder): Subject: "Quick Reminder: Your Executive Presence Masterclass", Body: Link to VSL.
Wait Node: 21 hours.
Google Sheets Lookup (Check if Booked): (Repeat lookup)
IF Node (Condition: Not Booked):
SendGrid Send Email (Email 3 - Value/Pain): Subject: "Still performing leadership instead of embodying it?", Body: Value + Link to VSL.
(Continue this pattern for the full opt-in nurture sequence, checking booking status before each send).
Workflow 2: Call Booked & Confirmation Nurture
Trigger: Webhook node listening for Calendly "Invitee Created" events. (Kathryn needs to configure this webhook in Calendly).
Steps:
Parse Data: Extract email, name, event_start_time, invitee_uuid, answers to custom questions from Calendly payload.
Google Sheets Append (Booked Calls Sheet):
Node: Google Sheets (Append Row).
Sheet ID: YOUR_BOOKED_CALLS_SHEET_ID
Sheet Name: Booked Calls
Columns: Timestamp, Email, Name, Call_Date_Time, Calendly_UUID, Question1_Answer, Question2_Answer, Status (default to "Booked").
Google Sheets Update (Mark as Booked in Opt-Ins Sheet):
Node: Google Sheets (Update Row - requires finding the row by email first).
Update Status to "Booked" for the corresponding email in the Opt-Ins sheet.
SendGrid Send Email (Email 1 - Booking Confirmation):
To: {{ $json.body.payload.email }}
Subject: "CONFIRMED: Your Executive Presence Strategy Call with Kathryn Ficarra"
Body: Confirmation details, Zoom link (if Calendly provides it, or generic instruction), and a prominent link to the thank-you.html page for pre-call prep.
Wait Node (Calculate Wait Until 24 Hrs Before Call):
Use Function node or Date & Time node to calculate duration until event_start_time - 24 hours.
SendGrid Send Email (Email 2 - 24hr Reminder): Subject: "Reminder: Your Strategy Call with Kathryn is Tomorrow!", Body: Reminder + value snippet/testimonial link.
Wait Node (Calculate Wait Until 1 Hr Before Call):
SendGrid Send Email (Email 3 - 1hr Reminder): Subject: "Your call with Kathryn starts in 1 hour!", Body: Quick reminder + Zoom link.
Workflow 3: (Manual Trigger or Future Enhancement) Call Show-Up & Sales Tracking
This workflow would likely be manually updated in Google Sheets by Kathryn initially.
Future: Could be triggered by a form Kathryn fills post-call.
Steps:
Google Sheets Update (Booked Calls Sheet): Update Status to "Attended," "No Show," "Client - PIF," "Client - PP." Add Sale_Value, Payment_Type.
III. Google Sheets Database Structure
Sheet 1: Opt-Ins
Columns: Timestamp_OptIn, Email, FirstName, UTM_Source, UTM_Medium, UTM_Campaign, UTM_Term, UTM_Content, Status (e.g., Opted-In, VSL_Viewed_Partial, VSL_Viewed_Full, Clicked_Book_Call, Booked_Call, Attended_Call, Client)
Sheet 2: Booked_Calls
Columns: Timestamp_Booking, Email, FirstName, Call_Date_Time_UTC, Calendly_UUID, Answer_Q1, Answer_Q2, Answer_Q3, UTM_Source_At_OptIn (pulled from Opt-Ins sheet by matching email in n8n), UTM_Medium_At_OptIn, ..., Status (e.g., Booked, Confirmed_TY_Page, Reminded_24hr, Reminded_1hr, Attended, No_Show, Rescheduled, Client_PIF, Client_PP), Sale_Value, Notes
IV. Deployment and Configuration Notes for Kathryn:
Netlify:
Connect GitHub/GitLab repository with the HTML/CSS/JS files.
Configure build settings.
Set up Netlify Forms and the webhook notification to n8n.
Configure custom domain.
n8n:
Set up webhook nodes and copy their URLs into Netlify and Calendly.
Add Google Sheets and SendGrid credentials.
Activate workflows.
Google Sheets:
Create the two sheets with the specified column headers.
Share the sheets with the n8n service account email and grant editor access.
Calendly:
Create the booking event with appropriate questions.
Configure redirect to thank-you.html on booking.
Set up webhook integration to n8n.
YouTube:
Upload VSL, Thank You video, and Pre-call asset video. Get their embed URLs/IDs.
SendGrid (or chosen Email API):
Set up account, verify sending domain, configure DNS records (SPF, DKIM, DMARC).
Ad Platforms:
Install Meta Pixel and Google Tag base codes on all pages.
Set up Lead conversion on VSL page and Schedule conversion on Thank You page.
