import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This creates an alias that makes '/assets' point to './src/assets'
      '/assets': resolve(__dirname, './src/assets'),
    },
  },
  // Ensure assets are copied to the correct location in the build
  build: {
    assetsDir: 'assets',
  },
})
