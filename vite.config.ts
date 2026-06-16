import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { nitro } from 'nitro/vite'; // 1. Add this import

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart(),
    nitro() // 2. Add this right here
  ],
});