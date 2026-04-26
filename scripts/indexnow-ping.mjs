/**
 * Notifica a IndexNow de una lista de URL (o del sitemap en dist/ tras el build)
 * Uso: INDEXNOW_KEY=... PUBLIC_SITE_URL=... node scripts/indexnow-ping.mjs
 * Opcional: --urls https://a.com/ https://a.com/b (si no, intenta leer dist/sitemap-0.xml)
 * @see https://www.indexnow.org/es_es/index
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const key = process.env.INDEXNOW_KEY?.trim();
const site =
  (process.env.PUBLIC_SITE_URL || process.env.SITE_URL || "https://muestrate.lat")
    .replace(/\/$/, "")
    .replace(/^http:\/\//, "https://");

if (!key) {
  console.error("Falta INDEXNOW_KEY en el entorno.");
  process.exit(1);
}

let urlList = [];
const argv = process.argv.slice(2);
const sep = argv.indexOf("--urls");
if (sep !== -1) {
  urlList = argv.slice(sep + 1).filter((a) => a.startsWith("http"));
} else {
  const here = dirname(fileURLToPath(import.meta.url));
  const sitemap0 = join(here, "../dist/sitemap-0.xml");
  if (existsSync(sitemap0)) {
    const raw = readFileSync(sitemap0, "utf8");
    const locs = raw.matchAll(/<loc>([^<]+)<\/loc>/g);
    urlList = [...locs].map((m) => m[1].trim());
  } else {
    // Fallback: rutas conocidas
    const paths = ["/", "/testimonios", "/privacidad", "/terminos"];
    urlList = paths.map((p) => (p === "/" ? site + "/" : `${site}${p}`));
  }
}

if (urlList.length === 0) {
  console.error("No hay URLs. Ejecuta `astro build` o pasa --urls https://...");
  process.exit(1);
}

const host = new URL(site).host;
const keyLocation = `${site}/${key}.txt`;
const body = { host, key, keyLocation, urlList };

const res = await fetch("https://api.indexnow.org/IndexNow", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

if (!res.ok) {
  const t = await res.text();
  console.error("IndexNow error", res.status, t);
  process.exit(1);
}
console.log(`IndexNow OK: ${urlList.length} URL(s) notificadas a ${host}`);
