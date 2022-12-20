import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import { VitePWA } from "vite-plugin-pwa";
import manifest from "./manifest.json";
export default defineConfig({
  plugins: [vue(), VitePWA(manifest)],
});
