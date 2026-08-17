export type TechNode = {
  name: string
  domain: "frontend" | "mobile" | "ai" | "backend" | "infra"
}

export const technologies: TechNode[] = [
  { name: "React", domain: "frontend" },
  { name: "Next.js", domain: "frontend" },
  { name: "TypeScript", domain: "frontend" },
  { name: "React Native", domain: "mobile" },
  { name: "Flutter", domain: "mobile" },
  { name: "Python", domain: "ai" },
  { name: "FastAPI", domain: "backend" },
  { name: "Node.js", domain: "backend" },
  { name: "Three.js", domain: "frontend" },
  { name: "GSAP", domain: "frontend" },
  { name: "LangChain", domain: "ai" },
  { name: "LangGraph", domain: "ai" },
  { name: "FAISS", domain: "ai" },
  { name: "PostgreSQL", domain: "backend" },
  { name: "Docker", domain: "infra" },
  { name: "AWS", domain: "infra" },
]

export const domainColors: Record<TechNode["domain"], string> = {
  frontend: "#7b6bff",
  mobile: "#5fe8e0",
  ai: "#ff7bd5",
  backend: "#4d7cff",
  infra: "#a3e635",
}

export const expertise = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Flutter",
  "Python",
  "FastAPI",
  "AI / ML",
  "Three.js",
  "GSAP",
]
