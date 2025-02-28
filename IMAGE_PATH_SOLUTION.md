# Image Path Solution for Development and Production

## The Problem

We encountered an issue where:
1. In development mode, images were loading correctly with paths like `/src/assets/...`
2. In production (Netlify), these paths didn't work because the `/src` directory doesn't exist in the build
3. When we fixed it for production using relative paths (`../assets/...`), it broke in development

## The Solution

We implemented a robust solution that works in both environments:

1. **Updated Vite Configuration**:
   ```js
   // vite.config.js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import { resolve } from 'path'

   export default defineConfig({
     plugins: [react()],
     resolve: {
       alias: {
         // This creates an alias that makes '/assets' point to './src/assets'
         '/assets': resolve(__dirname, './src/assets'),
       },
     },
     build: {
       assetsDir: 'assets',
     },
   })
   ```

2. **Updated CSS Background Images**:
   ```css
   /* Use this format for all background images */
   background-image: url('/assets/optimized/image-name.webp');
   ```

3. **For Component Images**:
   - Continue using the import approach for component images
   ```jsx
   import myImage from './assets/optimized/image.webp';
   <img src={myImage} alt="Description" />
   ```

## How It Works

- The Vite alias creates a virtual path `/assets` that points to `./src/assets` in development
- In production, Vite copies the assets to the correct location and updates the paths
- This approach ensures consistent paths in both environments

## Testing

To verify this solution works:
1. Run the app in development mode (`npm run dev`)
2. Build and preview the production build locally (`npm run build && npm run preview`)
3. Deploy to Netlify

All images should display correctly in all three environments.

## Adding New Images

When adding new images:

1. **For CSS background images**:
   - Place the image in `src/assets/optimized/`
   - Reference it using the alias path: `url('/assets/optimized/image.webp')`

2. **For component images**:
   - Continue using the import approach as before
   ```jsx
   import myImage from '../assets/optimized/image.webp';
   <img src={myImage} alt="Description" />
   ``` 