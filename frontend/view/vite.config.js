import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [react(), eslint()],

  server: {
    proxy: {
      "/api": {
        target: "https://properone.onrender.com/",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
// vite.config.js
