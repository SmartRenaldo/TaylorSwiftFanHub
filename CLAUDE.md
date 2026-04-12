# CLAUDE.md — Frontend Website Rules

## Always Do First

- **Invoke the `frontend-design` skill** before writing any frontend code, every session, no exceptions.

## Reference Images

- If a reference image is provided: match layout, spacing, typography, and color exactly. Swap in placeholder content (images via `https://placehold.co/`, generic copy). Do not improve or add to the design.
- If no reference image: design from scratch with high craft (see guardrails below).
- Screenshot your output, compare against reference, fix mismatches, re-screenshot. Do at least 2 comparison rounds. Stop only when no visible differences remain or user says so.

## Local Server

- **Always serve on localhost** — never screenshot a `file:///` URL.
- Start the dev server: `node serve.mjs` (serves the project root at `http://localhost:3000`)
- `serve.mjs` must be created in the project root if it does not exist yet (simple static file server).
- If the server is already running, do not start a second instance.

## Screenshot Workflow

- Puppeteer is installed locally in the project. Chrome cache is at `~/.cache/puppeteer/`.
- **Always screenshot from localhost:** `node screenshot.mjs http://localhost:3000`
- Screenshots are saved automatically to `./temporary screenshots/screenshot-N.png` (auto-incremented, never overwritten).
- Optional label suffix: `node screenshot.mjs http://localhost:3000 label` → saves as `screenshot-N-label.png`
- `screenshot.mjs` lives in the project root. Use it as-is.
- After screenshotting, read the PNG from `temporary screenshots/` with the Read tool — Claude can see and analyze the image directly.
- When comparing, be specific: "heading is 32px but reference shows ~24px", "card gap is 16px but should be 24px"
- Check: spacing/padding, font size/weight/line-height, colors (exact hex), alignment, border-radius, shadows, image sizing

## Output Defaults

- Single `index.html` file, all styles inline, unless user says otherwise
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Placeholder images: `https://placehold.co/WIDTHxHEIGHT`
- Mobile-first responsive

## Brand Assets

- Always check the `assets/` folder before designing. Subfolders: `assets/logos/`, `assets/images/`, `assets/video/`.
- A real logo exists at `assets/logos/eras-tour-logo.png` — use it, never a placeholder.
- If assets exist there, use them. Do not use placeholders where real assets are available.
- If a color palette is defined (see **Project Identity** below), use those exact values — do not invent brand colors.
- **Hero video:** `assets/video/hero/` holds the local Eras Tour Concert Film trailer MP4. Use a `<video autoplay muted loop playsinline>` element with class `.hero-local-video` — **not** a YouTube `<iframe>`. The cover image fades out on the video's `canplay` event.
- **Loop videos:** `assets/video/loops/` holds ambient Mixkit loops for section backgrounds.

## Project Identity — Taylor Swift Fan Hub

Direction: **"Midnight Scrapbook"** — dark editorial base + warm scrapbook nostalgia. Full spec in `references/design-plan.md`.

**Palette (never deviate):**
- Background: `#0D1117` (Midnight Navy) · Surface: `#1A1F2E` (Dark Slate) · Text: `#F5F0E8` (Warm Ivory)
- Accent Gold: `#C9A84C` · Purple: `#AC9FBB` · Burgundy: `#7C2030`
- Hover/CTA: `#F9B2D0` (Lover Pink) · Link: `#87CEEB` (Sky Blue)

**Typography:**
- Headings: Big Caslon or Playfair Display (serif)
- Body: Inter
- Decorative accents only: Satisfy or Caveat (handwriting)

**Central UX mechanic:** Era-shifting — CSS variable swaps triggered by IntersectionObserver as user scrolls through album eras. Always implement this, never flatten to a single static palette.

**Signature details:** Film grain overlay (4–6% opacity) site-wide · Polaroid-style era cards with random rotation, straighten on hover · Lenis smooth scroll.

## Anti-Generic Guardrails

- **Colors:** Never use default Tailwind palette (indigo-500, blue-600, etc.). Pick a custom brand color and derive from it.
- **Shadows:** Never use flat `shadow-md`. Use layered, color-tinted shadows with low opacity.
- **Typography:** Never use the same font for headings and body. Pair a display/serif with a clean sans. Apply tight tracking (`-0.03em`) on large headings, generous line-height (`1.7`) on body.
- **Gradients:** Layer multiple radial gradients. Add grain/texture via SVG noise filter for depth.
- **Animations:** Only animate `transform` and `opacity`. Never `transition-all`. Use spring-style easing.
- **Interactive states:** Every clickable element needs hover, focus-visible, and active states. No exceptions.
- **Images:** Add a gradient overlay (`bg-gradient-to-t from-black/60`) and a color treatment layer with `mix-blend-multiply`.
- **Spacing:** Use intentional, consistent spacing tokens — not random Tailwind steps.
- **Depth:** Surfaces should have a layering system (base → elevated → floating), not all sit at the same z-plane.

## Hard Rules

- Do not add sections, features, or content not in the reference
- Do not "improve" a reference design — match it
- Do not stop after one screenshot pass
- Do not use `transition-all`
- Do not use default Tailwind blue/indigo as primary color
