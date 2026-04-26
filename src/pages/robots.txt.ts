import { SITE_URL } from "@config";
import type { APIRoute } from "astro";

/** robots.txt: usa la misma URL pública que el resto del sitio (sitemap, canonical). */
export const prerender = true;

const lines = (base: string) =>
  [
    "User-agent: *",
    "Allow: /",
    "Disallow: /404",
    "",
    `Sitemap: ${base}/sitemap-index.xml`,
    "",
  ].join("\n");

export const GET: APIRoute = () => {
  const base = SITE_URL.replace(/\/$/, "");
  return new Response(lines(base), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
