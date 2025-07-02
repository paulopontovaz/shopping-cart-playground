import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // needed for the Docker container port mapping to work
    strictPort: true,
    port: 3000,
    allowedHosts: ["client"],
  },
  resolve: {
    alias: { "~": path.resolve(__dirname, "src") },
  },
});
