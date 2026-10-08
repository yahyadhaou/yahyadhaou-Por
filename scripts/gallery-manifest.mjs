// Lists the screenshots that actually exist in each project folder and writes them to
// src/lib/galleries.generated.json. Runs before `dev` and `build`, so renaming, adding or
// removing a file never leaves the site pointing at an image that doesn't exist.
import { readdirSync, writeFileSync } from "node:fs";

const ROOT = new URL("../public/images/projects/", import.meta.url);
const OUT = new URL("../src/lib/galleries.generated.json", import.meta.url);
const IMAGE = /\.(webp|png|jpe?g|avif)$/i;

// Natural order: 1, 2, 10 (not 1, 10, 2); "001" sorts before "01" when numbers tie.
const byNumber = (a, b) =>
  a.localeCompare(b, undefined, { numeric: true }) || a.length - b.length || a.localeCompare(b);

const folders = readdirSync(ROOT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const manifest = {};
const empty = [];

for (const folder of folders) {
  const files = readdirSync(new URL(`${folder}/`, ROOT)).filter((f) => IMAGE.test(f)).sort(byNumber);
  if (files.length === 0) empty.push(folder);
  manifest[folder] = files.map((f) => `/images/projects/${folder}/${f}`);
}

if (empty.length) {
  console.error(`gallery manifest: no images in ${empty.join(", ")}`);
  process.exit(1);
}

writeFileSync(OUT, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(
  `gallery manifest: ${folders.map((f) => `${f} (${manifest[f].length})`).join(", ")}`
);
