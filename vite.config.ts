import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    // alias: {
    //   src: path.resolve("src/"),
    // },
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
