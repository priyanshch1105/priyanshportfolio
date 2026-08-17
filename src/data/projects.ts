export type Project = {
  id: string
  number: string
  title: string
  category: string
  description: string
  stack: string[]
  cta: { label: string; href: string }
  accent: string
  visual: "radar" | "shield" | "neural" | "graph" | "pulse"
  year: string
}

export const projects: Project[] = [
  {
    id: "rakshak",
    number: "01",
    title: "Rakshak",
    category: "Women Safety · SOS",
    description:
      "A women safety and SOS platform built for real emergencies — live location streaming over WebSockets, one-tap distress beacon, and background location tracking that keeps running even when the app is closed.",
    stack: ["React Native", "FastAPI", "WebSockets", "Maps", "Background Location"],
    cta: { label: "VIEW CASE STUDY", href: "https://github.com/priyanshch1105" },
    accent: "#ff5f8f",
    visual: "radar",
    year: "2025",
  },
  {
    id: "kawach",
    number: "02",
    title: "Kawach",
    category: "Cyber Crime Reporting",
    description:
      "A cyber crime complaint and legal support app that guides victims through structured reporting, evidence collection and case tracking — turning a stressful process into a calm, guided flow.",
    stack: ["Flutter", "FastAPI"],
    cta: { label: "VIEW CASE STUDY", href: "https://github.com/priyanshch1105" },
    accent: "#5fe8e0",
    visual: "shield",
    year: "2024",
  },
  {
    id: "ai-tutor",
    number: "03",
    title: "AI Learning Tutor",
    category: "RAG · AI / ML",
    description:
      "An intelligent tutoring system built on retrieval-augmented generation. Source documents are embedded into FAISS, retrieved contextually, and answered with source-grounded confidence via LangChain and HuggingFace models.",
    stack: ["Python", "FastAPI", "LangChain", "FAISS", "HuggingFace", "RAG"],
    cta: { label: "VIEW CASE STUDY", href: "https://github.com/priyanshch1105" },
    accent: "#7b6bff",
    visual: "neural",
    year: "2024",
  },
  {
    id: "agentic-devops",
    number: "04",
    title: "Agentic DevOps Automation",
    category: "AI Agents · Infrastructure",
    description:
      "A safe-by-default agentic DevOps assistant. Natural language becomes Terraform plans, executed in a Docker sandbox, governed by OPA policies, audited against AWS read-only — CI/CD generated, nothing applied automatically.",
    stack: ["LangGraph", "Terraform", "Docker", "OPA", "AWS", "GitHub Actions"],
    cta: { label: "VIEW CASE STUDY", href: "https://github.com/priyanshch1105" },
    accent: "#4d7cff",
    visual: "graph",
    year: "2025",
  },
  {
    id: "apna-healthcare",
    number: "05",
    title: "Apna Healthcare",
    category: "HealthTech · Cross-Platform",
    description:
      "A connected healthcare platform with cross-platform apps, a real-time backend and AI-assisted guidance — unified patient experience across Flutter, React and Node.js with Firebase sync.",
    stack: ["Flutter", "React", "FastAPI", "Node.js", "Firebase", "AI"],
    cta: { label: "VIEW CASE STUDY", href: "https://github.com/priyanshch1105" },
    accent: "#a3e635",
    visual: "pulse",
    year: "2023",
  },
]
