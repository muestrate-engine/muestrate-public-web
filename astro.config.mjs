import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

function siteFromEnv() {
  const p = join(process.cwd(), ".env");
  if (existsSync(p)) {
    for (const line of readFileSync(p, "utf8").split("\n")) {
      const m = line.match(/^\s*PUBLIC_SITE_URL\s*=\s*["']?([^"'\s#]+)/);
      if (m) return m[1].replace(/\/$/, "");
    }
  }
  return (process.env.PUBLIC_SITE_URL || "https://muestrate.lat").replace(
    /\/$/,
    ""
  );
}
const site = siteFromEnv();

/** No listar en sitemap URL marcadas con noindex (manual de diseño bajo /diseño). */
const sitemapIndexable = (pageUrl) => {
  try {
    const path = decodeURIComponent(new URL(pageUrl).pathname);
    return !path.startsWith("/diseño");
  } catch {
    return true;
  }
};

export default defineConfig({
  site,
  integrations: [sitemap({ filter: sitemapIndexable })],
});
