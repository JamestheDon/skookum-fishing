# Setting Up EmailJS for Booking Form

This guide will help you set up EmailJS to send email notifications when a customer submits a booking request.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for an account
2. Verify your email address

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Give your service a name (e.g., "Skookum Fishing Notifications")
6. Save the Service ID for later use

## Step 3: Create Email Templates

### Notification Template (for business owner)
1. In the EmailJS dashboard, go to "Email Templates"
2. Click "Create New Template"
3. Set up a template for notifications to the business owner:
   - Template Name: "Booking Notification"
   - Email Subject: "New Booking Request from {{from_name}}"
   - Email Content: Create a template that includes all booking details:
     ```
     New booking request received!

     Customer: {{from_name}}
     Email: {{from_email}}
     Phone: {{phone}}
     
     Requested Date: {{date}}
     Tour Type: {{tour_type}}
     Group Size: {{group_size}}
     Experience Level: {{experience}}
     
     Special Requests:
     {{preferences}}
     ```
4. Save the template and note the Template ID

### Confirmation Template (for customer)
1. Click "Create New Template" again
2. Set up a template for confirmation emails to customers:
   - Template Name: "Booking Confirmation"
   - Email Subject: "Your Skookum Fishing Booking Request"
   - Email Content: Create a template that confirms their booking request:
     ```
     Hello {{from_name}},

     Thank you for your booking request with Skookum Fishing! We've received the following details:

     Requested Date: {{date}}
     Tour Type: {{tour_type}}
     Group Size: {{group_size}}
     Experience Level: {{experience}}
     
     Special Requests:
     {{preferences}}
     
     We'll review your request and get back to you shortly to confirm availability.
     
     If you have any questions, please don't hesitate to contact us.
     
     Tight lines!
     Skookum Fishing Team
     ```
3. Save the template and note the Template ID as your Confirmation Template ID

## Step 4: Set Up Environment Variables

### For Local Development

1. Create a `.env.local` file in the root of your project with the following variables:
   ```
   VITE_EMAILJS_USER_ID=your_user_id_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID=your_notification_template_id_here
   VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID=your_confirmation_template_id_here
   ```

2. Replace the placeholder values with your actual EmailJS credentials.

### For Netlify Deployment

1. Log in to your Netlify dashboard
2. Go to your site settings
3. Navigate to "Build & deploy" > "Environment variables"
4. Add the following environment variables:
   - `VITE_EMAILJS_USER_ID`: Your EmailJS User ID
   - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS Service ID
   - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS Public Key
   - `VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID`: Your notification template ID
   - `VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID`: Your confirmation template ID
5. Save the changes
6. Redeploy your site for the changes to take effect

## Step 5: Test the Form

1. Fill out the booking form on your website
2. Submit the form
3. Check that you receive the notification email
4. Verify that the customer receives the confirmation email

## Finding Your EmailJS Credentials

- **User ID**: Found in the EmailJS dashboard under "Account" > "API Keys"
- **Public Key**: Found in the EmailJS dashboard under "Account" > "API Keys"
- **Service ID**: Found in the EmailJS dashboard under "Email Services" for your specific service
- **Template IDs**: Found in the EmailJS dashboard under "Email Templates" for each template

## Additional Configuration

- To send notifications to multiple recipients, you can either:
  1. Add multiple recipients in your EmailJS template settings
  2. Create a distribution list in your email provider
  
- You can customize the email templates further with HTML formatting and additional variables as needed

- For production use, consider upgrading to a paid EmailJS plan for higher monthly email limits 