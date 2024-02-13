//vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "my-library",

      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});