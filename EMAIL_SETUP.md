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

### Notification Email Template

Here's a professional notification email template for receiving booking requests:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #1a5276;
      color: white;
      padding: 15px;
      text-align: center;
    }
    .content {
      padding: 20px;
      background-color: #f9f9f9;
    }
    .booking-details {
      background-color: white;
      border: 1px solid #ddd;
      padding: 15px;
      margin-bottom: 20px;
      border-radius: 4px;
    }
    .detail-row {
      margin-bottom: 10px;
      display: flex;
    }
    .detail-label {
      font-weight: bold;
      width: 140px;
    }
    .alert {
      background-color: #f8f9fa;
      border-left: 4px solid #1a5276;
      padding: 12px;
      margin-bottom: 20px;
    }
    .footer {
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #666;
    }
    .button {
      display: inline-block;
      background-color: #1a5276;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Booking Request</h1>
    </div>
    <div class="content">
      <div class="alert">
        <p><strong>New booking request received from {{from_name}}!</strong></p>
        <p>Please review the details below and contact the customer to confirm availability.</p>
      </div>
      
      <div class="booking-details">
        <h3>Customer Information:</h3>
        
        <div class="detail-row">
          <div class="detail-label">Name:</div>
          <div>{{from_name}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Email:</div>
          <div>{{from_email}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Phone:</div>
          <div>{{phone}}</div>
        </div>
        
        <h3>Booking Details:</h3>
        
        <div class="detail-row">
          <div class="detail-label">Date:</div>
          <div>{{date}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Tour Type:</div>
          <div>{{tour_type}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Group Size:</div>
          <div>{{group_size}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Experience:</div>
          <div>{{experience}}</div>
        </div>
        
        {{#has_preferences}}
        <div class="detail-row">
          <div class="detail-label">Special Requests:</div>
          <div>{{preferences}}</div>
        </div>
        {{/has_preferences}}
      </div>
      
      <h3>Recommended Actions:</h3>
      <ol>
        <li>Check availability for the requested date</li>
        <li>Review any special requests or requirements</li>
        <li>Contact the customer within 24 hours to confirm</li>
        <li>Update the booking calendar if confirmed</li>
      </ol>
      
      <a href="https://skookumfishing.com/admin/bookings" class="button">View All Bookings</a>
    </div>
    <div class="footer">
      <p>© 2023 Skookum Fishing. All rights reserved.</p>
      <p>This is an automated notification from your booking system.</p>
    </div>
  </div>
</body>
</html>
```

To use this template in EmailJS:
1. Create a new email template in your EmailJS dashboard
2. Copy and paste the HTML above
3. Save the template and note its ID
4. Update your `VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID` environment variable with this ID

## Sample Email Templates

### Confirmation Email Template

Here's a professional confirmation email template that includes all booking details:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #1a5276;
      color: white;
      padding: 20px;
      text-align: center;
    }
    .content {
      padding: 20px;
      background-color: #f9f9f9;
    }
    .booking-details {
      background-color: white;
      border: 1px solid #ddd;
      padding: 15px;
      margin-bottom: 20px;
      border-radius: 4px;
    }
    .detail-row {
      margin-bottom: 10px;
      display: flex;
    }
    .detail-label {
      font-weight: bold;
      width: 140px;
    }
    .footer {
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #666;
    }
    .button {
      display: inline-block;
      background-color: #1a5276;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Booking Confirmation</h1>
    </div>
    <div class="content">
      <p>Dear {{from_name}},</p>
      
      <p>Thank you for booking a fishing tour with Skookum Fishing! We're excited to guide you on an unforgettable fishing adventure in the beautiful Pacific Northwest.</p>
      
      <p>Your booking request has been received and is being processed. One of our team members will contact you shortly to confirm availability and finalize the details.</p>
      
      <div class="booking-details">
        <h3>Your Booking Details:</h3>
        
        <div class="detail-row">
          <div class="detail-label">Tour Type:</div>
          <div>{{tour_type}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Date:</div>
          <div>{{date}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Group Size:</div>
          <div>{{group_size}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Experience Level:</div>
          <div>{{experience}}</div>
        </div>
        
        {{#has_preferences}}
        <div class="detail-row">
          <div class="detail-label">Special Requests:</div>
          <div>{{preferences}}</div>
        </div>
        {{/has_preferences}}
        
        <div class="detail-row">
          <div class="detail-label">Contact Info:</div>
          <div>{{from_email}}<br>{{phone}}</div>
        </div>
      </div>
      
      <h3>What's Included:</h3>
      <ul>
        <li>Professional fishing guide</li>
        <li>All necessary equipment</li>
        <li>Safety gear</li>
        <li>Fishing license for the day</li>
        <li>Light refreshments</li>
      </ul>
      
      <h3>What to Bring:</h3>
      <ul>
        <li>Weather-appropriate clothing (layers recommended)</li>
        <li>Sunscreen and hat</li>
        <li>Sunglasses (polarized if possible)</li>
        <li>Camera</li>
        <li>Water bottle</li>
      </ul>
      
      <p>If you have any questions or need to make changes to your booking, please contact us at <a href="mailto:info@skookumfishing.com">info@skookumfishing.com</a> or call us at (555) 123-4567.</p>
      
      <p>We look forward to providing you with an exceptional fishing experience!</p>
      
      <p>Tight lines,<br>
      The Skookum Fishing Team</p>
      
      <a href="https://skookumfishing.com/my-booking" class="button">View My Booking</a>
    </div>
    <div class="footer">
      <p>© 2023 Skookum Fishing. All rights reserved.</p>
      <p>123 River Road, Ellensburg, WA 98926</p>
    </div>
  </div>
</body>
</html>
```

To use this template in EmailJS:
1. Create a new email template in your EmailJS dashboard
2. Copy and paste the HTML above
3. Save the template and note its ID
4. Update your `VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID` environment variable with this ID

### Notification Email Template

Here's a professional notification email template for receiving booking requests:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background-color: #1a5276;
      color: white;
      padding: 15px;
      text-align: center;
    }
    .content {
      padding: 20px;
      background-color: #f9f9f9;
    }
    .booking-details {
      background-color: white;
      border: 1px solid #ddd;
      padding: 15px;
      margin-bottom: 20px;
      border-radius: 4px;
    }
    .detail-row {
      margin-bottom: 10px;
      display: flex;
    }
    .detail-label {
      font-weight: bold;
      width: 140px;
    }
    .alert {
      background-color: #f8f9fa;
      border-left: 4px solid #1a5276;
      padding: 12px;
      margin-bottom: 20px;
    }
    .footer {
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #666;
    }
    .button {
      display: inline-block;
      background-color: #1a5276;
      color: white;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 4px;
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Booking Request</h1>
    </div>
    <div class="content">
      <div class="alert">
        <p><strong>New booking request received from {{from_name}}!</strong></p>
        <p>Please review the details below and contact the customer to confirm availability.</p>
      </div>
      
      <div class="booking-details">
        <h3>Customer Information:</h3>
        
        <div class="detail-row">
          <div class="detail-label">Name:</div>
          <div>{{from_name}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Email:</div>
          <div>{{from_email}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Phone:</div>
          <div>{{phone}}</div>
        </div>
        
        <h3>Booking Details:</h3>
        
        <div class="detail-row">
          <div class="detail-label">Date:</div>
          <div>{{date}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Tour Type:</div>
          <div>{{tour_type}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Group Size:</div>
          <div>{{group_size}}</div>
        </div>
        
        <div class="detail-row">
          <div class="detail-label">Experience:</div>
          <div>{{experience}}</div>
        </div>
        
        {{#has_preferences}}
        <div class="detail-row">
          <div class="detail-label">Special Requests:</div>
          <div>{{preferences}}</div>
        </div>
        {{/has_preferences}}
      </div>
      
      <h3>Recommended Actions:</h3>
      <ol>
        <li>Check availability for the requested date</li>
        <li>Review any special requests or requirements</li>
        <li>Contact the customer within 24 hours to confirm</li>
        <li>Update the booking calendar if confirmed</li>
      </ol>
      
      <a href="https://skookumfishing.com/admin/bookings" class="button">View All Bookings</a>
    </div>
    <div class="footer">
      <p>© 2023 Skookum Fishing. All rights reserved.</p>
      <p>This is an automated notification from your booking system.</p>
    </div>
  </div>
</body>
</html>
```

To use this template in EmailJS:
1. Create a new email template in your EmailJS dashboard
2. Copy and paste the HTML above
3. Save the template and note its ID
4. Update your `VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID` environment variable with this ID

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