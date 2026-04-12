# Reference Site Analysis: BLÆD Agency

**Source file:** `web.html`
**Site:** BLÆD Agency — luxury fashion event production (Paris)

---

## 1. Page Layout

| Section | Component Class | Description |
|---|---|---|
| Navigation Bar | `site-head` | Fixed header with inline SVG logo, animated rotating tagline, hamburger toggle, and slide-out nav |
| Hero | `s-hero` | Full-viewport area with large stacked headline + responsive video (4 quality variants) + canvas overlay |
| About | `s-about` | Short descriptive text paragraph block |
| Savoir-Faire | `s-savoir-faire` | Numbered (01–04) services section with animated title reveals and side navigation |
| Latest Projects | `s-shows` | Scrollable list of fashion show credits (client / event / city / role) with canvas effect |
| Blæd | `s-blaed` | Brand origin story section — autoplay loop video + full expandable video + canvas motion animation |
| Heritage | `s-heritage` | Founders section — large editorial photo + three founder bios |
| CTA / Contact | `s-cta-foot` | Animated logo marquee, layered team photo with overlays, word-cycling CTA, contact links |
| Footer | `site-foot` | Copyright, legal notice, photo/web credits |

---

## 2. Content Types

| Section | Content Types |
|---|---|
| Hero | Large display typography (H1 split across lines), responsive video (UHD/HD/MD/LD), `<canvas>` WebGL effect, fallback image |
| About | Rich text (RTE paragraphs) |
| Savoir-Faire | Animated headings, numbered list navigation, bullet-point service lists |
| Latest Projects | Text metadata cards (client, event, city, role), canvas cursor effect |
| Blæd | Muted autoplay loop video, full-play video with toggle button, single paragraph text |
| Heritage | Full-width editorial photo, three text bios with reveal animation |
| CTA / Contact | SVG logo marquee (repeating), stacked team photo + 3 PNG overlay layers, letter-split animated word cycle, social/phone/email links |
| Footer | Plain text, links |

---

## 3. Design Techniques

| Technique | Implementation Evidence |
|---|---|
| Smooth scroll | `data-lg-smooth` on `<html>` — Lenis or custom JS smooth scroll library |
| Scroll-triggered reveal | `data-lg-reveal="text-lines"` and `data-lg-reveal="heading"` — lines animate in on scroll |
| Parallax images | `data-lg-scroll` on `<img>` elements — vertical parallax offset |
| Mouse-tracking parallax | `data-lg-mouse` on shows wrapper — items shift with cursor |
| Canvas / WebGL effects | `<canvas class="s__canvas">` in hero, shows, and blaed sections |
| Page preloader transition | `site-preloader` div with `background: #fff` fades out on load |
| Rotating animated tagline | `.b-baseline` with word-swap animation (Production / Collection Coordination / Shooting Management / Staffing) |
| Word-cycling CTA | Each word (show/shooting/event/launch/project) split into `<span>` letters — rotates with JS |
| Responsive video | 4 `<video>` tags (1280px, 1024px, 960px, 640px) — JS loads the appropriate one |
| Layered image depth | Team photo + 3 PNG overlay layers (`overlay-1/2/3.png`) for dimensional effect |
| Custom scrollbar | `site-scrollbar` with custom thumb track |
| SVG logo marquee | 4 repeating logo SVGs in `.s__motion` — horizontal marquee scroll animation |
| Micro-interactions | Service title words split into spans for individual transform animations |
| Editorial typography | Neue Montreal font — geometric, high-contrast, oversized display headings |
| Numbered navigation | Services prefixed 01.–04. with large numerals acting as nav anchors |

---

## 4. Color Scheme

| Role | Color | Hex | Usage |
|---|---|---|---|
| Primary (text / logo) | Near-black warm | `#100F0E` | All SVG logo fills, body text |
| Background | White | `#FFFFFF` | Page background, preloader |
| Accent | None explicitly defined | — | The design is strictly monochromatic |

The palette is intentionally **strict monochrome**. The premium feeling comes entirely from typography scale, motion, video, and spatial composition rather than color contrast.
