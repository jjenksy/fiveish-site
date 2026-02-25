# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **5ISH**, an iOS game with 12 retro pixel art minigames. Hosted on Vercel at fiveish.app.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — run Next.js linter

No test framework is configured.

## Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss` plugin, **not** a tailwind.config file)
- React 19

## Architecture

All pages use the App Router (`app/` directory). The root layout (`app/layout.tsx`) wraps every page with `Header` and `Footer` components and loads two Google Fonts: **Press Start 2P** (pixel headings) and **Inter** (body text), exposed as CSS variables `--font-press-start` and `--font-inter`.

### Tailwind v4 theming

Theme tokens are defined in `app/globals.css` using `@theme {}` blocks — there is no `tailwind.config` file. Custom colors (`bg-deep`, `bg-main`, `bg-surface`, `bg-card`, `gold`, `cyan`, `magenta`, `text-main`, `text-dim`) and font families (`font-pixel`, `font-body`) are defined there and used as Tailwind utilities throughout.

### Key directories

- `app/` — pages: landing (`/`), privacy, press, support
- `components/` — shared UI components (Header, Footer, ScreenshotCarousel, FeatureCard, CharacterCard, FaqItem)
- `lib/characters.ts` — character data array with ids, descriptions, accent colors, and screenshot paths
- `public/screenshots/` — game screenshots used by carousel and character cards

### Path aliases

`@/*` maps to the project root (configured in `tsconfig.json`). Use `@/components/...` and `@/lib/...` for imports.

## Deployment

Push to `main` triggers Vercel auto-deploy.
