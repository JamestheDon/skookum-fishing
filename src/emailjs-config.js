import { init } from '@emailjs/browser';

// Initialize EmailJS with your user ID from environment variables
export const initEmailJS = () => {
  // Use import.meta.env for Vite projects
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  
  if (!userId) {
    console.warn('EmailJS User ID not found in environment variables. Email functionality will not work.');
  }
  
  init(userId);
}; 