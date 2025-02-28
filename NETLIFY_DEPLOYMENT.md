# Deploying to Netlify

This guide provides instructions for deploying the Skookum Fishing website to Netlify, including how to set up environment variables for the EmailJS functionality.

## Deployment Steps

### 1. Create a Netlify Account

If you don't already have one, sign up for a free account at [Netlify](https://www.netlify.com/).

### 2. Connect Your Repository

1. Log in to your Netlify dashboard
2. Click "New site from Git"
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Authorize Netlify to access your repositories
5. Select the Skookum Fishing repository

### 3. Configure Build Settings

Enter the following build settings:

- **Base directory**: Leave this blank (Netlify will use the root of your repository by default)
- **Build command**: `npm run build`
- **Publish directory**: `dist`

Note: The base directory is where Netlify will install dependencies and run your build command. By default, this is the root of your repository where your `package.json` file is located.

### 4. Set Up Environment Variables for EmailJS

To securely handle EmailJS credentials:

1. In your Netlify dashboard, go to **Site settings** > **Build & deploy** > **Environment variables**
2. Add the following environment variables:
   - `VITE_EMAILJS_USER_ID`: Your EmailJS User ID
   - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS Service ID
   - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS Public Key
   - `VITE_EMAILJS_NOTIFICATION_TEMPLATE_ID`: Your notification template ID
   - `VITE_EMAILJS_CONFIRMATION_TEMPLATE_ID`: Your confirmation template ID
3. Click "Save" to store your environment variables

### 5. Deploy Your Site

1. Click "Deploy site" to start the deployment process
2. Netlify will build your site and deploy it to a random URL
3. You can set up a custom domain in the Netlify dashboard if desired

## Continuous Deployment

Netlify automatically sets up continuous deployment. When you push changes to your repository, Netlify will automatically rebuild and redeploy your site.

## Testing EmailJS Functionality

After deployment:

1. Navigate to your deployed site
2. Go to the Booking page
3. Fill out and submit the booking form
4. Verify that both the notification and confirmation emails are sent correctly

## Troubleshooting

If emails are not being sent:

1. Check the browser console for any errors
2. Verify that all environment variables are set correctly in the Netlify dashboard
3. Ensure your EmailJS account is active and has available email credits
4. Check that your email templates are correctly set up in the EmailJS dashboard

## Local vs. Production Environment

For local development, use a `.env.local` file with your EmailJS credentials. This file should not be committed to your repository.

For production deployment on Netlify, use the environment variables in the Netlify dashboard as described above. 