// Bilder für das Web aufbereiten. Aufruf: npm run bilder
//
// 1. Fotos: Originale (JPG, PNG, WebP, AVIF, TIFF) nach bilder-original/ legen, Dateiname = Name des
//    Bildplatzes (z. B. gastraum-abend.jpg; Liste in README.md). Heraus kommen je
//    name-800.webp, name-1600.webp und name-800.jpg in public/assets/img/fotos, gedreht nach EXIF,
//    ohne Metadaten (auch ohne GPS-Daten des Handys).
// Logo, Icons und Social-Vorschau erzeugt tools/logo.py (Python mit Pillow) aus tools/logo-original.png.
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname, parse } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const IN = join(ROOT, 'bilder-original');
const OUT = join(ROOT, 'public', 'assets', 'img', 'fotos');
mkdirSync(OUT, { recursive: true });

const fotos = existsSync(IN) ? readdirSync(IN).filter((f) => /\.(jpe?g|png|webp|avif|tiff?)$/i.test(f)) : [];
for (const f of fotos) {
  const name = parse(f).name.toLowerCase();
  const src = sharp(join(IN, f)).rotate();
  await src.clone().resize({ width: 800, withoutEnlargement: true }).webp({ quality: 72 }).toFile(join(OUT, `${name}-800.webp`));
  await src.clone().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 70 }).toFile(join(OUT, `${name}-1600.webp`));
  await src.clone().resize({ width: 800, withoutEnlargement: true }).jpeg({ quality: 74, mozjpeg: true }).toFile(join(OUT, `${name}-800.jpg`));
  console.log('✓ Foto', name);
}
if (!fotos.length) console.log('Keine Fotos in bilder-original/ gefunden, nur Icons und Vorschau.');

console.log('Logo, Icons und Social-Vorschau: python3 tools/logo.py');
