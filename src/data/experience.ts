export type ExperienceEntry = {
  role: string
  org: string
  period: string
  description: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: "Frontend Developer Intern",
    org: "Bodega Delivery",
    period: "Jul 2025 — Nov 2025",
    description:
      "Worked on frontend development for a delivery platform, building responsive interfaces, integrating APIs, and improving the overall user experience.",
    highlights: [
      "Developed responsive and user-friendly web interfaces using Flutter and Dart",
      "Integrated REST APIs and implemented dynamic frontend workflows for delivery operations",
      "Built reusable UI components and optimized interfaces for desktop and mobile devices",
      "Collaborated with the development team to fix UI bugs, improve performance, and enhance user experience",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "TechnoParticles",
    period: "Apr 2026 — Aug 2026",
    description:
      "Worked on web and mobile applications using modern frontend technologies, backend APIs, and database-driven systems.",
    highlights: [
      "Developed and maintained responsive web applications using PHP, TypeScript, Flutter, Next.js, and React Native",
      "Implemented dynamic modules, forms, dashboards, and database-driven functionality",
      "Improved website responsiveness, SEO, performance, and cross-browser compatibility",
      "Integrated frontend interfaces with backend APIs and resolved production UI and functionality issues",
      "Collaborated on multiple client-facing web products and contributed to feature development and maintenance",
    ],
  },
]
