export type ExperienceEntry = {
  role: string
  org: string
  period: string
  description: string
  highlights: string[]
}

export const experience: ExperienceEntry[] = [
  {
    role: "AI / ML Engineer",
    org: "Personal Innovation Lab",
    period: "2023 — Present",
    description:
      "Spearheading agentic DevOps systems and BERT-based sentiment intelligence, shipping AI-first products end to end.",
    highlights: [
      "Architected agentic DevOps automation with LangGraph, OPA and Docker sandboxing",
      "Built BERT-based sentiment classification for real-time emotion detection",
      "Integrated multi-modal LLM capabilities into mobile platforms",
    ],
  },
  {
    role: "UI / UX Designer & Frontend Engineer",
    org: "Cross-Platform Projects",
    period: "2022 — 2023",
    description:
      "Crafting intuitive digital experiences and design systems for complex, data-dense applications.",
    highlights: [
      "Designed and implemented 20+ custom UI components",
      "Streamlined Figma-to-Flutter and Figma-to-React handoff pipelines",
      "Led user research for cyber crime complaint platforms",
    ],
  },
  {
    role: "Flutter Developer",
    org: "Freelance & Startups",
    period: "2021 — 2022",
    description:
      "Building production-grade cross-platform applications with a focus on performance and clean architecture.",
    highlights: [
      "Optimized app performance, reducing load times by 40%",
      "Implemented real-time data sync with Firebase",
      "Mastered BLoC and Provider state management patterns",
    ],
  },
]
