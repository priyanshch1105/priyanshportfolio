export type TechNode = {
  name: string
  domain: "frontend" | "mobile" | "backend"
}

export const technologies: TechNode[] = [
  // Frontend
  { name: "React", domain: "frontend" },
  { name: "Next.js", domain: "frontend" },
  { name: "TypeScript", domain: "frontend" },
  { name: "JavaScript", domain: "frontend" },
  { name: "HTML5", domain: "frontend" },
  { name: "CSS3", domain: "frontend" },
  { name: "Tailwind CSS", domain: "frontend" },
  { name: "Three.js", domain: "frontend" },

  // Mobile
  { name: "React Native", domain: "mobile" },
  { name: "Flutter", domain: "mobile" },
  { name: "Dart", domain: "mobile" },

  // Backend
  { name: "C#", domain: "backend" },
  { name: ".NET", domain: "backend" },
  { name: "ASP.NET Core", domain: "backend" },
  { name: "Web API", domain: "backend" },
  { name: "Node.js", domain: "backend" },
  { name: "Express.js", domain: "backend" },
  { name: "PHP", domain: "backend" },
  { name: "REST APIs", domain: "backend" },
  { name: "MySQL", domain: "backend" },
  { name: "MongoDB", domain: "backend" },
]

export const domainColors: Record<TechNode["domain"], string> = {
  frontend: "#7b6bff",
  mobile: "#5fe8e0",
  backend: "#4d7cff",
}

export const expertise = [
  "React",
  "Next.js",
  "TypeScript",
  "React Native",
  "Flutter",
  "C#",
  ".NET",
  "ASP.NET Core",
  "Node.js",
  "PHP",
]
