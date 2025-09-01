import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/future-tech/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
      "@helpers": path.resolve(__dirname, "./src/styles/helpers"),
    },
  },
  server: {
    port: 4444,
    open: true,
  },
});
