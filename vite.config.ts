import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // ✅ use the SWC plugin
import path from "path";

export default defineConfig({
  plugins: [react()], // ✅ works with @vitejs/plugin-react-swc
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/abstracts/variables" as *;`,
      },
    },
  },
});
