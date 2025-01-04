import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
    global: "window",
  },
  build: {
    rollupOptions: {
      output: {
        globals: {
          '@etherfuse/stablebond-sdk': 'StablebondSDK',
        },
      },
    },
  },
  optimizeDeps: {
    include: ["@etherfuse/stablebond-sdk"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
