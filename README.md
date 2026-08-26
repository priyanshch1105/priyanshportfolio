# PRIYANSH — Software & Mobile Developer Portfolio

An Awwwards-style, cinematic developer portfolio for **Priyansh — Software Developer & Mobile App Developer**.

Focused on building modern web applications, cross-platform mobile apps, scalable APIs, and interactive digital experiences with clean architecture, strong performance, and thoughtful UI/UX.

Dark, editorial, WebGL-driven. Built to feel like a product, not a template.

![Stack](https://img.shields.io/badge/Next.js%2015-React%2019-000000?logo=nextdotjs)
![3D](https://img.shields.io/badge/Three.js-R3F-DelftBlue)
![Motion](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02)

---

## Highlights

- **Cinematic loader** — `PRIYANSH — 00% → 100%` with clip-path curtain reveal

- **Full-screen hero** with a custom GLSL particle field + distorted geometry that reacts to mouse and scroll

- **Magnetic cursor** that expands on hover and becomes `VIEW` over projects

- **Tech Universe** — an interactive 3D technology constellation with instanced nodes, links, and hover tooltips

- **Featured projects** — full-viewport cinematic showcases with clip-path reveals, parallax, and scale animations

- **Horizontal project gallery** — vertical scrolling drives horizontal movement using GSAP ScrollTrigger pinning

- **Animated experience timeline** — timeline line draws progressively as the user scrolls

- **Achievement counters** — large animated numbers focused on real development experience and impact

- **Terminal section** — live typewriter animation of the `developer` object that morphs into `LET'S BUILD SOMETHING.`

- **Contact section** with interactive Three.js background and magnetic buttons

- **Lenis smooth scrolling** integrated with GSAP ScrollTrigger

- **Responsive design** optimized for desktop, tablet, and mobile

- **Accessibility** with `prefers-reduced-motion` support throughout the experience

---

## About

I'm **Priyansh**, a Software Developer and Mobile App Developer focused on building reliable, scalable, and user-focused applications.

My development experience spans:

- Web application development
- Mobile application development
- Frontend engineering
- REST API integration
- Backend development
- Firebase
- Application architecture
- Performance optimization
- Interactive UI/UX
- AI/ML-powered applications

I enjoy taking an idea from a simple concept to a working product — designing the interface, implementing the application logic, connecting APIs, handling data, and optimizing the final experience.

---

## Development Focus

### Software Development

Building maintainable applications with a focus on:

- Clean and reusable code
- Component-based architecture
- API integration
- State management
- Authentication
- Database integration
- Performance optimization
- Scalable application structure

### Mobile Development

Building cross-platform mobile applications using modern development frameworks.

Areas include:

- React Native
- Flutter
- Android development
- REST API integration
- Firebase
- Push notifications
- Authentication
- Local storage
- Responsive mobile UI
- App performance

### Web Development

Building modern web experiences using:

- React
- Next.js
- TypeScript
- JavaScript
- Tailwind CSS
- GSAP
- Three.js

### AI & Intelligent Applications

Experience with integrating AI capabilities into applications, including:

- AI-powered applications
- RAG systems
- Intelligent tutoring systems
- Automation
- API-based AI integrations
- Document-based question answering

---

## Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | Next.js 15, React 19 |
| Language | TypeScript, JavaScript |
| Web | React, Next.js, Tailwind CSS |
| Mobile | React Native, Flutter |
| Backend | Node.js, REST APIs |
| Database | Firebase, Realtime Database |
| Authentication | Firebase Authentication |
| Notifications | Firebase Cloud Messaging |
| 3D | Three.js, React Three Fiber, Drei |
| Motion | GSAP, ScrollTrigger, Framer Motion, Lenis |
| Icons | Lucide React |
| Version Control | Git, GitHub |
| AI/ML | RAG, AI APIs, Automation |

---

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
│
├── components/
│   ├── animations/
│   │   ├── Cursor.tsx
│   │   ├── Preloader.tsx
│   │   ├── Magnetic.tsx
│   │   ├── EditorialTitle.tsx
│   │   └── ScrollProgress.tsx
│   │
│   ├── projects/
│   │   ├── FeaturedProject.tsx
│   │   └── ProjectVisual.tsx
│   │
│   ├── sections/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Tech.tsx
│   │   ├── Projects.tsx
│   │   ├── Gallery.tsx
│   │   ├── Experience.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   │
│   └── three/
│       ├── HeroScene.tsx
│       ├── TechConstellation.tsx
│       └── ContactScene.tsx
│
├── data/
│   ├── projects.ts
│   ├── experience.ts
│   ├── achievements.ts
│   ├── technologies.ts
│   └── site.ts
│
├── hooks/
│   ├── useLenis.ts
│   ├── useIsMobile.ts
│   └── useReducedMotion.ts
│
├── lib/
│   └── cn.ts
│
└── utils/
    ├── animations.ts
    └── random.ts