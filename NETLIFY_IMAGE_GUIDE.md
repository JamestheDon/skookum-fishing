# Image Handling Guide for React Deployment on Netlify

## What Was Fixed

We fixed the broken image links in your Netlify deployment by changing how images are referenced in your code. There were two main issues:

1. **CSS Background Images**: Images in CSS were using absolute paths starting with `/src/`, which doesn't exist in the production build.
2. **Component Images**: Images in React components were also using absolute paths that don't work in production.

## How Images Work in Vite/React

When you build a React app with Vite for production:

1. **The `/src` directory doesn't exist in the final build** - it gets processed and bundled.
2. **Static assets need to be handled properly** to ensure they're included in the build.

## Best Practices for Handling Images

### Method 1: Import Images in JavaScript/JSX (Recommended)

```jsx
// Import the image
import myImage from './assets/images/my-image.jpg';

// Use it in your component
<img src={myImage} alt="Description" />
```

This is the approach we implemented in your code. When you import an image:
- Vite processes it during build
- The image gets a unique filename with a hash
- The image is copied to the build output
- The import variable contains the correct final URL

### Method 2: Use the Public Directory

Files in the `public` directory are copied as-is to the build output:

```jsx
// Reference images from the public directory with a leading slash
<img src="/logo-fish.webp" alt="Logo" />
```

This works for images that:
- Need to be referenced by exact name
- Are referenced from outside your JavaScript code
- Need to maintain the same filename

### Method 3: Use Relative Paths in CSS

For CSS background images, use relative paths:

```css
/* Instead of this (which only works in development): */
background-image: url('/src/assets/images/background.jpg');

/* Use this (which works in both development and production): */
background-image: url('../assets/images/background.jpg');
```

## Troubleshooting Image Issues

If you encounter image issues in your deployed site:

1. **Check the browser console** for 404 errors to identify which images aren't loading
2. **Verify image paths** - make sure they're using one of the methods above
3. **For new images**:
   - Add them to your assets directory and import them in your components
   - OR place them in the public directory and reference them with a leading slash

## Adding New Images

When adding new images to your project:

1. **For component images**:
   - Place the image in `src/assets/optimized/`
   - Import it at the top of your component file
   - Reference it using the imported variable

2. **For CSS background images**:
   - Place the image in `src/assets/optimized/`
   - Reference it using a relative path: `url('../assets/optimized/image.webp')`

3. **For global static images**:
   - Place the image in the `public` directory
   - Reference it with a leading slash: `/image.webp`

## Why This Works

This approach ensures that:
1. Vite correctly processes and bundles your images
2. Images have the correct paths in the production build
3. Your site works consistently in both development and production environments 