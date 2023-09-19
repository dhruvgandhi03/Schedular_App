import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import vitePluginRequire from "vite-plugin-require";
// import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/register": "http://localhost:7000",
      "/authenticate": "http://localhost:7000",
    },
  },
  plugins: [react()],
  define: {
    // "process.env.VITE_PORT": JSON.stringify(process.env.VITE_PORT),
  },
});
