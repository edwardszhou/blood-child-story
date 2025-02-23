import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [react(), eslint(), tailwindcss()]
});
