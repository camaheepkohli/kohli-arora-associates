import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import netlify from '@netlify/vite-plugin-tanstack-start';
import tsconfigPaths from 'vite-tsconfig-paths'; // 1. Add this import

export default defineConfig({
  plugins: [
    tsconfigPaths(), // 2. Add this right here at the top!
    tanstackStart(), 
    netlify()
  ],
});