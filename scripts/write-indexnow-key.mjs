/**
 * Genera el archivo de verificación IndexNow en public/{key}.txt
 * @see https://www.indexnow.org/es_es/index
 * Requiere INDEXNOW_KEY (hex, 8–128 caracteres) en el entorno o en .env
 */
import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = join(here, "../public");
const key = process.env.INDEXNOW_KEY?.trim();

if (!key) {
  // Sin clave no fallamos el build; IndexNow es opt-in
  process.exit(0);
}

if (!/^[0-9a-f]{8,128}$/i.test(key)) {
  console.warn(
    "[indexnow] INDEXNOW_KEY debe ser hexadecimal (8-128 hex). Clave no escrita."
  );
  process.exit(0);
}

if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

writeFileSync(join(publicDir, `${key}.txt`), key, "utf8");
console.log(`[indexnow] Archivo de clave: public/${key}.txt`);
