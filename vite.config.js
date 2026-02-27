import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  root: "src",
  plugins: [injectHTML()], // Додаємо цей плагін
  build: {
    outDir: "../dist",
  },
});
