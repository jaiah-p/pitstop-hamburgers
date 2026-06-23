# Pitstop Hamburgers

Marketing site for **Pitstop Hamburgers** — an old-school roadside burger shop behind the
Thora General Store, midway between Bellingen and Dorrigo, NSW.

Built with Next.js 16, Tailwind v4, Framer Motion and Lenis smooth scroll. Fully static.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (static)
```

Add `?nosmooth=1` to the URL to disable smooth scroll + reveal animations (handy for QA / screenshots).

## Where things live

- `app/layout.tsx` — fonts (Anton / Inter / Caveat), metadata, smooth scroll + grain.
- `app/page.tsx` — section order.
- `lib/site.ts` — **single source of truth** for the menu, prices, hours, address and social links.
- `components/` — one file per section (`Hero`, `Ticker`, `Story`, `Menu`, `ChessClub`, `Visit`, `Footer`).
- `components/BurgerSVG.tsx` — the layered burger illustration (with the `hot` pineapple state).

## Updating content

- **Prices / menu items / hours / address:** edit `lib/site.ts`. The interactive board prices live in
  `components/Menu.tsx` (`LetterBoard`).
- **Social links:** `instagram` / `facebook` in `lib/site.ts`.

## Adding real food photos (recommended)

The site is intentionally photo-optional and runs on illustration + type. To drop in Gemma's real
photography, add files to `public/photos/` and swap the relevant illustration/placeholder. Good spots:

- Hero background or a band beneath it (the tray-on-grass shot).
- A gallery strip between **Story** and **Menu**.
- The Visit section, behind/beside the map.

## Custom domain

Deployed on Vercel. To use `pitstophamburgers.com.au` (or similar): add the domain in the Vercel
project → Settings → Domains, then update `SITE` in `app/layout.tsx` so Open Graph URLs match.
