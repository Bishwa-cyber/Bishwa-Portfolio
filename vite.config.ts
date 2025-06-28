import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// ❌ Removed `lovable-tagger` to prevent ESM error

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react()
    // Add other compatible plugins here
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
