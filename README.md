# fiveish.app

Marketing site for [5ISH](https://fiveish.app), a collection of 12 retro pixel art minigames for iOS.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Vercel hosting

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing page — hero, screenshot carousel, features, character grid |
| `/privacy` | Privacy policy (no data collection) |
| `/press` | Press kit — screenshots, app icon, game info |
| `/support` | FAQ accordion + support email |

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Updating Screenshots

Copy new screenshots from the game repo's fastlane output:

```bash
cd ../Fiveish/fastlane/screenshots/en-US
for f in *.png; do
  cp "$f" ../../fiveish-site/public/screenshots/"${f#iPhone 16 Pro Max-}"
done
```

## Deployment

Push to `main` — Vercel auto-deploys. Domain: `fiveish.app`.
