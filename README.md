# Yahya Dhaou — Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, next-intl and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The middleware auto-redirects to your browser's preferred language (`/en`, `/fr` or `/de`).

## Adding real project screenshots

Each project currently shows a styled placeholder ("Screenshots coming soon") instead of real images. To swap in real screenshots:

1. Drop your images into `public/images/projects/<project>/` (folders already exist for `glowup-app`, `glowup-pro`, `mhtravel`) named `1.png`, `2.png`, etc. (or update the paths in `src/lib/data.ts`).
2. In `src/lib/data.ts`, set `hasScreenshots: true` on that project.

The card will automatically switch from the placeholder mockup to a real image gallery with dot navigation.

## Editing content

- **Copy / translations**: `src/messages/{en,fr,de}.json` — one file per language, same key structure.
- **Tech stack, project tags, links, experience dates**: `src/lib/data.ts`.
- **CV file**: `public/cv/Yahya-Dhaou-CV.pdf` (currently the German CV — add localized versions and update the link in `src/components/Hero.tsx` if needed).
- **Profile photo**: `public/images/yahya.jpg`.

## Structure

- `src/app/[locale]/` — routes (layout + page), one tree shared across all 3 locales via next-intl.
- `src/components/` — page sections (Hero, About, Skills, Projects, Experience, Contact) + `ui/` primitives (`Section`, `Reveal`).
- `src/i18n/` — next-intl routing, navigation and request config.
- `src/middleware.ts` — locale detection/redirect.

## Deploy

Works out of the box on Vercel (recommended for the middleware-based i18n routing used here). Netlify also works via the Next.js runtime adapter.
