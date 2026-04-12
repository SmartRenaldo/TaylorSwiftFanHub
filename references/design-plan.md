# Taylor Swift Fan Hub — Design Plan

> Research-backed visual design plan. Reference alongside `web.html` (BLÆD Agency) for interaction and layout inspiration.

---

## 1. Visual DNA

**Core identity:** Taylor Swift's brand is uniquely multi-era — she doesn't have one fixed aesthetic, she *reinvents* it per album cycle. The opportunity here is to build a site that *shifts tone* across eras while maintaining a cohesive identity.

**Recurring motifs across all eras:**
- Stars / constellations (aspirational, dreamy)
- Butterflies (transformation)
- Hearts (love's complexity)
- Handwritten text / intimate typography
- Golden shimmer → dark mystery (the full arc of her career)
- Polaroids, film grain, nostalgia

**Personality:** Intimate yet grand. She always makes the audience feel like *they* are the ones being let in on a secret. The site should feel like a discovered scrapbook, not a press kit.

---

## 2. Style Definition

**Direction: "Midnight Scrapbook"** — a dark editorial base (Midnights/TTPD era) layered with warm, tactile, scrapbook nostalgia. Feels like you found Taylor's personal journal at midnight. Think: *dark academia meets glittering pop*.

Keywords: `cinematic` · `intimate` · `layered` · `typographically rich` · `era-shifting` · `nostalgic luxury`

---

## 3. Color Palette

### Base (dark mode foundation — Midnights/TTPD)

| Role           | Name             | Hex       |
|----------------|------------------|-----------|
| Background     | Midnight Navy    | `#0D1117` |
| Surface        | Dark Slate       | `#1A1F2E` |
| Text Primary   | Warm Ivory       | `#F5F0E8` |

### Secondary (warm bridges across all eras)

| Role           | Name             | Hex       |
|----------------|------------------|-----------|
| Gold Shimmer   | Fearless Gold    | `#C9A84C` |
| Muted Mauve    | Midnights Purple | `#AC9FBB` |
| Deep Burgundy  | Red TV           | `#7C2030` |

### Accent (interactive + highlights)

| Role           | Name             | Hex       |
|----------------|------------------|-----------|
| Hover / CTA    | Lover Pink       | `#F9B2D0` |
| Era Glow       | Glitter Silver   | `#D4D4D8` |
| Link / Active  | Sky Blue         | `#87CEEB` |

### Era-specific accent overrides

Applied via CSS variable swap when user enters each era section:

| Era        | Accent Color           | Hex       |
|------------|------------------------|-----------|
| Fearless   | Golden Wash            | `#F4CB8D` |
| Speak Now  | Royal Purple           | `#9B59B6` |
| Red        | Bold Red               | `#FF2400` |
| 1989       | Sky Blue               | `#87CEEB` |
| Reputation | Metallic Silver        | `#C0C0C0` |
| Lover      | Pastel Lavender        | `#DDA0DD` |
| Folklore   | Sepia Fog              | `#C8AE95` |
| Evermore   | Autumn Brown           | `#8B4513` |
| Midnights  | Deep Navy              | `#1E264C` |
| TTPD       | Near-white Monochrome  | `#F5F5F5` |

---

## 4. Typography

| Role            | Font                        | Style                        |
|-----------------|-----------------------------|------------------------------|
| Display / H1    | Big Caslon CC or Playfair Display | Condensed editorial serif |
| Subheadings     | Neue Haas Grotesk / Inter   | Clean grotesque              |
| Decorative      | Satisfy or Caveat           | Handwritten, accent use only |
| Body            | Inter                       | Readable sans-serif          |

**Rule:** Handwriting fonts are accent-only — never body copy.

---

## 5. Hero Section

**Layout:** Full-viewport, split-layer parallax with two planes:
- **Back layer:** Slowly drifting star field / constellation pattern (CSS or canvas) in deep navy
- **Front layer:** Large-scale typographic lockup in a condensed serif, with animated glitter shimmer (`background-clip: text` + sparkle SVG pattern)

**Tagline:** Handwritten-style font in Fearless Gold beneath the main title:
> *"In a world full of ordinary, she writes the chapters."*

**Center element:** A circular or polaroid-style frame that slowly rotates through era-representative color tints (CSS `hue-rotate` or `filter` transition), implying the era carousel.

**Scroll cue:** Small-caps "scroll" label with a thin line that pulses downward.

### Motion & Interaction

| Element           | Effect                                                                 |
|-------------------|------------------------------------------------------------------------|
| Title on load     | Letters fade in staggered bottom-up (stage curtain reveal)             |
| Custom cursor     | SVG star cursor with brief glitter trail (canvas dots)                 |
| Hero background   | Subtle CSS `@keyframes` star twinkle — alive but not distracting       |
| Polaroid frame    | Slow color-tint rotation through eras                                  |

---

## 6. Design Techniques

### Era Transitions (signature feature)
When scrolling into an era section, the page bleeds into a new palette via a full-viewport color wash. Implement with:
- `IntersectionObserver` triggering a class swap on `<body>` or root CSS variable update
- `mix-blend-mode` overlay for the color bleed effect

### Film Grain
Semi-transparent SVG/canvas noise texture applied site-wide at ~4–6% opacity — gives everything a warm analog feel.

### Glitter / Shimmer Text
```css
background: linear-gradient(90deg, #C9A84C, #F5F0E8, #C9A84C);
background-clip: text;
-webkit-background-clip: text;
color: transparent;
animation: shimmer 3s linear infinite;
background-size: 200%;
```

### Parallax Layers
Three-layer parallax per era card:
1. Background texture
2. Mid-layer motif (butterfly SVG, snake SVG, etc.)
3. Foreground text

### Polaroid Cards
Era album cards styled as polaroids:
- Slight random `transform: rotate(Xdeg)` at rest
- On hover: straightens to `rotate(0deg)` + `box-shadow` pop
- Caption in handwriting font below image

### Custom Scrollbar
Thin, era-color-tinted scrollbar via `scrollbar-color` CSS that shifts hue as user scrolls through eras.

### Loading Screen
Preloader: TS monogram drawing itself via SVG `stroke-dashoffset` animation → fades to reveal hero.

### Micro-interactions

| Element     | Effect                                                        |
|-------------|---------------------------------------------------------------|
| Buttons     | Gold shimmer sweep on hover (`::after` pseudo-element)        |
| Nav links   | Underline draws in from left on hover                         |
| Cards       | Lift + era-accent color `box-shadow` glow on hover            |

---

## 7. Architecture Notes (from BLÆD reference)

The reference site (`web.html`) uses:
- `data-lg-smooth` — custom smooth scroll (replicate with Lenis or native CSS `scroll-behavior`)
- Component-based CSS loading (`b-baseline`, `site-head`, `s-hero`, etc.) — chunk CSS per section for performance
- Rotating text baseline ticker below the nav
- Full-page preloader with white background fade

Mirror this architecture:
- Lenis for smooth scroll
- Era-name rotating ticker in the nav or below the hero
- IntersectionObserver for all enter animations (no GSAP ScrollTrigger dependency unless needed)

---

## 8. Era Motif Reference

| Era        | Primary Motif        | Texture              | Aesthetic Keyword     |
|------------|---------------------|----------------------|-----------------------|
| Fearless   | Stars, golden shimmer | Glitter, warm light | Fairytale             |
| Speak Now  | Purple haze, florals  | Soft velvet          | Enchanted romance     |
| Red        | Hearts, autumn leaves | Bold, raw            | Passionate heartbreak |
| 1989       | Polaroids, skyline    | Clean, bright        | Urban pop             |
| Reputation | Snakes, chains        | Metallic, dark       | Gothic rebellion      |
| Lover      | Butterflies, hearts   | Pastel, soft         | Pastel dreamland      |
| Folklore   | Ivy, mist, forest     | Film grain, sepia    | Cottagecore           |
| Evermore   | Autumn, burning logs  | Aged paper, rust     | Dark academia (early) |
| Midnights  | Stars, blue velvet    | Glitter, hazy        | Midnight reverie      |
| TTPD       | Quill, draped linen   | Matte, linen, B&W    | Dark academia (peak)  |
