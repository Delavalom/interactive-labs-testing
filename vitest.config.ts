import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({ fastRefresh: false })],
  test: {
    globals: true,
    environment: "jsdom",
    mockReset: true
  },
  resolve: {
    alias: {
      "@": "./src"
    }
  }
});
