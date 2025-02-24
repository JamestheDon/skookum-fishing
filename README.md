# Skookum Fishing

A modern web application for discovering fishing spots and booking guided tours in the Pacific Northwest.

## Features

- Responsive design for all device sizes
- Interactive fishing spot discovery
- Tour booking system with email notifications
- Weather information for fishing locations
- Beautiful UI with optimized images
- Parallax scrolling effect with fixed background images

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/skookum-fishing.git
cd skookum-fishing
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Image Optimization

This project includes an image optimization script that converts HEIC, JPEG, and PNG images to optimized WebP format.

### How to Use

1. Place your original images in the `src/assets/original` directory
2. Run the optimization script:
```bash
npm run optimize-images
# or
yarn optimize-images
```
3. Optimized WebP images will be generated in the `src/assets/optimized` directory

### Supported Image Formats

- HEIC (iOS photos)
- JPEG/JPG
- PNG

All images are:
- Converted to WebP format
- Resized to a maximum width of 1200px (maintaining aspect ratio)
- Optimized for web performance

## Building for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

For instructions on deploying to Netlify, including how to set up environment variables for EmailJS, see the [Netlify Deployment Guide](NETLIFY_DEPLOYMENT.md).

## Email Functionality

The booking form includes email notification functionality using EmailJS:

- When a customer submits a booking request, two emails are sent:
  1. A notification email to the business owner with all booking details
  2. A confirmation email to the customer acknowledging their request

### Setting Up Email Functionality

1. Create an account on [EmailJS](https://www.emailjs.com/)
2. Follow the detailed setup instructions in the `EMAIL_SETUP.md` file
3. Update the configuration in:
   - `src/emailjs-config.js`: Add your User ID
   - `src/components/Booking.jsx`: Add your Service ID, Template IDs, and Public Key

## Technologies Used

- React
- React Router
- Vite
- Sharp (image processing)
- HEIC-Convert (for iOS image format support)
- EmailJS (for email notifications)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
