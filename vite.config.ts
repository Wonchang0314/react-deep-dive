import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],
  esbuild: {
    jsxFactory: "createElement",
  },
});
