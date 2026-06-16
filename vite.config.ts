// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
// - tanstackStart, viteReact, tailwindcss, tsConfigPaths, componentTagger
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      preset: "vercel", // Forces the underlying Nitro server to build for Vercel instead of Cloudflare
    },
  },
});