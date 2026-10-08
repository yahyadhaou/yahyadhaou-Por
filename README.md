# Yahya Dhaou — Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, next-intl and Framer Motion. Available in English, French and German, with light and dark themes.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `src/proxy.ts` redirects to the browser's preferred language (`/en`, `/fr` or `/de`).

## Environment variables

Copy `.env.local.example` to `.env.local` for local development, and set the same variables in Netlify (Site configuration → Environment variables).

| Variable | Required | Purpose |
|---|---|---|
| `GMAIL_USER` | yes | Gmail account that sends the contact-form emails |
| `GMAIL_APP_PASSWORD` | yes | Gmail app password (Google Account → Security → App passwords) |
| `CONTACT_TO_EMAIL` | no | Where messages are delivered (defaults to `GMAIL_USER`) |
| `SITE_URL` | no | Public URL for SEO links and email buttons (defaults to Netlify's `URL`) |

## Translations

All copy lives in `src/messages/{en,fr,de}.json`. **English is the source of truth.**

- Messages are **typed** (`src/global.d.ts`): a missing or misspelled key in a component is a TypeScript error.
- `npm run i18n:check` verifies every language has exactly the same keys as `en.json`, with no empty values. It runs automatically before `npm run build`, so a missing translation fails the deploy instead of breaking the page.

To add or change text: edit `en.json`, mirror the key in `fr.json` and `de.json`, then run `npm run i18n:check`.

## Editing content

- **Projects, screenshots, links, stack, experience dates**: `src/lib/data.ts`. Screenshot lists point at `public/images/projects/<project>/`.
- **CVs**: files in `public/cv/`; the paths used by the site and the reply email are `cvFiles` in `src/lib/data.ts`.
- **Screenshots**: drop, rename or delete files in `public/images/projects/<project>/`. The gallery list is regenerated automatically before `dev` and `build` (`npm run gallery:manifest`), in natural number order.
- **Profile photo**: `public/images/yahya.jpg`.
- **Contact emails** (auto-reply + notification): `src/lib/email/templates.ts`; sending logic in `src/app/api/contact/route.ts`.

## Structure

The site has two designs that share data, translations and logic:

- **PC (≥ 1024px)** — editorial design: `src/components/editorial/`.
- **Phone & tablet (< 1024px)** — modern bento design: `src/components/modern/`.

`src/app/[locale]/page.tsx` renders both and CSS shows one (`lg:hidden` / `hidden lg:block`). Section ids are prefixed `m-` in the modern tree so anchors stay unique.

- `src/app/[locale]/` — layout (fonts, theme, SEO metadata) and the page, shared by all locales.
- `src/components/` — shared pieces: `Gallery` (tabs, arrows, keyboard and swipe; `tone` prop per design), `LocaleSwitcher`, `ThemeToggle`, `ui/`.
- `src/hooks/useContactForm.ts` — contact form submission, used by both designs.
- `src/app/globals.css` — design tokens. Phone/tablet values in `:root`, PC values in the `min-width: 1024px` block; dark mode is navy in both.
- `src/i18n/` — next-intl routing, navigation and request config.
