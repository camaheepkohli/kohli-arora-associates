// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
// - tanstackStart, viteReact, tailwindcss, tsConfigPaths, componentTagger
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server", // Restores the crucial server routing layer you removed
    },
  },
  vite: {
    plugins: [
      nitro({
        preset: "vercel", // Forces the application to package your styles for Vercel
      }),
    ],
  },
});