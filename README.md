# PRIYANSH — Cinematic Developer Portfolio

An Awwwards-style, cinematic developer portfolio for **Priyansh — Frontend Developer, AI/ML Engineer & Mobile App Developer**.

Dark, editorial, WebGL-driven. Built to feel like a product, not a template.

![Stack](https://img.shields.io/badge/Next.js%2015-React%2019-000000?logo=nextdotjs) ![3D](https://img.shields.io/badge/Three.js-R3F-DelftBlue) ![Motion](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02)

---

## Highlights

- **Cinematic loader** — `PRIYANSH — 00% → 100%` with clip-path curtain reveal
- **Full-screen hero** with a custom GLSL particle field + distorted geometry that reacts to mouse and scroll
- **Magnetic cursor** that expands on hover and becomes `VIEW` over projects
- **Tech Universe** — an interactive 3D technology constellation (instanced nodes + links, hover tooltips)
- **Featured projects** — full-viewport cinematic showcases with clip-path reveals, parallax and scale
- **Horizontal project gallery** — vertical scrolling drives horizontal movement via ScrollTrigger pinning
- **Animated timeline** for experience, with the line drawing as you scroll
- **Dramatic achievement counters** — big numbers, no cards
- **Terminal section** — live typewriter of the `developer` object that morphs into `LET'S BUILD SOMETHING.`
- **Contact** with interactive Three.js background and magnetic buttons
- **Lenis smooth scrolling** integrated with GSAP ScrollTrigger
- **`prefers-reduced-motion`** respected throughout

## Tech Stack

| Layer      | Tools |
| ---------- | ----- |
| Framework  | Next.js 15 (App Router) + TypeScript |
| Styling    | Tailwind CSS v4 (CSS-first theme) |
| 3D         | Three.js + React Three Fiber + Drei |
| Motion     | GSAP + ScrollTrigger, Framer Motion, Lenis |
| Icons      | Lucide React |

## Project Structure

```
src/
├── app/                 # Layout, metadata, sitemap, robots, globals.css
├── components/
│   ├── animations/      # Cursor, preloader, magnetic, split-text, scroll progress
│   ├── projects/        # Featured project showcase + generative visuals
│   ├── sections/        # Nav, Hero, About, Tech, Work, Gallery, Experience…
│   └── three/           # HeroScene, TechConstellation, ContactScene
├── data/                # Projects, experience, achievements, technologies, site
├── hooks/               # useLenis, useIsMobile, useReducedMotion
├── lib/                 # cn() helper
└── utils/               # GSAP animation primitives, seeded PRNG
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

| Command            | Description             |
| ------------------ | ----------------------- |
| `npm run dev`      | Start the dev server    |
| `npm run build`    | Production build        |
| `npm run start`    | Serve the production build |
| `npm run lint`     | ESLint (Next + TS)      |

## Contact

- Email: priyanshchourasiya000@gmail.com
- GitHub: [@priyanshch1105](https://github.com/priyanshch1105)
- LinkedIn: [in/priyanshchaurasiya1105](https://www.linkedin.com/in/priyanshchaurasiya1105)

---

Built with care by Priyansh.
