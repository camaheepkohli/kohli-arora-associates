import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import netlify from '@netlify/vite-plugin-tanstack-start'; // <-- Add this import

export default defineConfig({
  plugins: [
    tanstackStart(), 
    netlify() // <-- Add this function call inside the plugins array
  ],
});