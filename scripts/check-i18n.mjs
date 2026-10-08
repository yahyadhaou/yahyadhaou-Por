// Verifies every locale has exactly the same keys as en.json, with no empty strings.
// Runs before `next build`, so a missing translation fails the deploy instead of the page.
import { readFileSync } from "node:fs";

const LOCALES = ["en", "fr", "de"];
const SOURCE = "en";

function flatten(obj, prefix = "") {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return value && typeof value === "object" ? flatten(value, path) : [[path, value]];
  });
}

const load = (locale) =>
  new Map(flatten(JSON.parse(readFileSync(new URL(`../src/messages/${locale}.json`, import.meta.url), "utf8"))));

const source = load(SOURCE);
const problems = [];

for (const locale of LOCALES) {
  const messages = load(locale);
  for (const key of source.keys()) {
    if (!messages.has(key)) problems.push(`${locale}: missing "${key}"`);
  }
  for (const [key, value] of messages) {
    if (!source.has(key)) problems.push(`${locale}: unknown key "${key}" (not in ${SOURCE}.json)`);
    if (typeof value === "string" && value.trim() === "") problems.push(`${locale}: empty "${key}"`);
  }
}

if (problems.length) {
  console.error(`i18n check failed (${problems.length}):\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
console.log(`i18n check passed — ${source.size} keys in ${LOCALES.join(", ")}.`);
