import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import vitePluginRequire from "vite-plugin-require";
// import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/register": "https://schedular-backend-k1ru.onrender.com",
      "/authenticate": "https://schedular-backend-k1ru.onrender.com",
      "/taskdetail": "https://schedular-backend-k1ru.onrender.com",
      "/deletetask": "https://schedular-backend-k1ru.onrender.com",
    },
  },
  plugins: [react()],
  define: {
    // "process.env.VITE_PORT": JSON.stringify(process.env.VITE_PORT),
  },
});
