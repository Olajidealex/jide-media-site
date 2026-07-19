# JIDE MEDIA — Marketing Site

Production Next.js (App Router) + TypeScript rebuild of the JIDE MEDIA agency site.
Single-page marketing site: Hero, Services, Process, Results, Testimonials, FAQ, and a Calendly-integrated booking CTA.

Sourced from a Claude Design handoff bundle. Pixel-preserving port — inline styles are kept verbatim; design tokens come from the JIDE MEDIA brand spec.

---

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript (strict)
- **Fonts:** `next/font/google` — Space Grotesk (display), Inter (body/UI), IBM Plex Mono (numerics)
- **Icons:** `lucide-react`
- **Booking:** Calendly popup widget (loaded via `next/script`)

---

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Other scripts:

- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — Next lint

---

## Project layout

```
app/
├── layout.tsx        # Fonts, Calendly script + CSS, metadata
├── page.tsx          # Section composition + Calendly openAudit()
└── globals.css       # Design tokens (colors/typography/spacing) + top-level styles

components/
├── Nav.tsx           # Sticky nav, scroll-blur, mobile hamburger
├── Hero.tsx          # Oversized display headline, avatars, trust bar
├── Marquee.tsx       # Animated marquee band (accent/dark/light themes)
├── Problem.tsx       # 4-up pain cards
├── Services.tsx      # Interactive services list with thumbnail cross-fade
├── Process.tsx       # 4-step process
├── Results.tsx       # Case studies with stats and quotes
├── Testimonials.tsx  # 3-up testimonial cards
├── FAQ.tsx           # Accordion FAQ
├── CTAFooter.tsx     # Final CTA + footer wordmark
└── ImageSlot.tsx     # Lightweight placeholder tile (replaces the prototype's <image-slot> web component)

public/assets/logos/  # JIDE MEDIA logo lockups
types/global.d.ts     # window.Calendly typing
```

---

## Deploying to Vercel via GitHub

1. **Push to GitHub** (from this directory):

   ```bash
   gh repo create jide-media-site --public --source=. --push
   ```

   (Or use the GitHub UI: create an empty repo, then `git remote add origin …` and `git push -u origin main`.)

2. **Import on Vercel**: <https://vercel.com/new> → pick this GitHub repo → keep all defaults (framework auto-detected as Next.js) → **Deploy**.

3. **Automatic deploys**: every push to `main` triggers a production deploy; every branch push gets a preview URL.

No env vars needed.

---

## Editing content

All page copy is inline inside `components/*.tsx`. Grep the file for the section you want to change.

Calendly booking URL: `app/page.tsx` — `openAudit()` → `initPopupWidget({ url })`.

Contact email: `components/CTAFooter.tsx` — search for `mailto:`.

---

## Notes on the port

- The prototype loaded React, Babel-standalone, and Lucide from CDNs and compiled JSX in the browser. In production we use the Next build pipeline, pre-bundled `react`/`react-dom`, and `lucide-react` for typed icon components.
- The prototype's custom `<image-slot>` web component was a design-tool affordance. `ImageSlot.tsx` ships the visual only — a neutral placeholder tile with an optional caption.
- Tokens (colors, typography, spacing, radii, elevation) live in `app/globals.css` and are used via CSS variables (`var(--fuchsia-500)`, `var(--font-display)`, etc.). Sections marked `data-theme="dark"` opt into the dark semantic scheme.
