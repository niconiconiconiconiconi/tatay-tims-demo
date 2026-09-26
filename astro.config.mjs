import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/tatay-tims-demo",
  vite: {
    plugins: [tailwindcss()],
  },
});
