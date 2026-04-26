import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://muestrate.pe",
  integrations: [sitemap()],
});
