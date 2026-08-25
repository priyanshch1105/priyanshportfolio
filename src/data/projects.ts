export type ProjectVisual =
  | "neural"
  | "radar"
  | "shield"
  | "graph"
  | "pulse"
  | "network"
  | "orbit"
  | "terminal"
  | "layers"
  | "grid"

export type Project = {
  id: string
  number: string
  title: string
  category: string
  description: string
  stack: string[]
  cta: {
    label: string
    href: string
  }
  accent: string
  visual: ProjectVisual
  year: string
}

export const projects: Project[] = [
  {
    id: "flowconnect",
    number: "01",
    title: "FlowConnect",
    category: "AI Automation · Open Source",
    description:
      "An open-source AI automation platform for connecting applications and creating reusable workflows, with AI-agent integration through MCP and a FastAPI backend.",
    stack: ["React.js", "FastAPI", "MCP", "REST APIs", "AI Automation"],
    cta: {
      label: "VIEW CASE STUDY",
      href: "https://github.com/priyanshch1105",
    },
    accent: "#7b6bff",
    visual: "neural",
    year: "2026",
  },

  {
    id: "rakshak",
    number: "02",
    title: "Rakshak",
    category: "Women Safety · SOS",
    description:
      "A women safety and emergency SOS platform featuring one-tap distress alerts, live location sharing, WebSocket-based communication and background location tracking.",
    stack: [
      "React Native",
      "FastAPI",
      "WebSockets",
      "Maps",
      "Firebase",
      "Background Location",
    ],
    cta: {
      label: "VIEW CASE STUDY",
      href: "https://github.com/priyanshch1105",
    },
    accent: "#ff5f8f",
    visual: "radar",
    year: "2025",
  },

  {
    id: "kawach",
    number: "03",
    title: "Kawach",
    category: "Cyber Crime · Reporting Platform",
    description:
      "A cyber crime complaint and support platform designed to guide victims through incident reporting, evidence collection and complaint tracking.",
    stack: ["Flutter", "FastAPI", "REST APIs", "Firebase"],
    cta: {
      label: "VIEW CASE STUDY",
      href: "https://github.com/priyanshch1105",
    },
    accent: "#5fe8e0",
    visual: "shield",
    year: "2024",
  },

  {
    id: "maharishi-connect",
    number: "04",
    title: "Maharishi Connect",
    category: "University · Mobile Platform",
    description:
      "A React Native university administration and student services platform with modules for students, faculty, attendance, notices, events and administrative workflows.",
    stack: ["React Native", "Node.js", "REST APIs", "Firebase"],
    cta: {
      label: "VIEW CASE STUDY",
      href: "https://github.com/priyanshch1105",
    },
    accent: "#4d7cff",
    visual: "network",
    year: "2025",
  },

  {
    id: "technomeet",
    number: "05",
    title: "TechnoMeet",
    category: "Full Stack · Meeting Platform",
    description:
      "A full-stack meeting platform inspired by Google Meet and Zoom, featuring authentication, meeting scheduling, user management and interactive web interfaces.",
    stack: ["Next.js", "Node.js", "Three.js", "REST APIs"],
    cta: {
      label: "VIEW CASE STUDY",
      href: "https://github.com/priyanshch1105",
    },
    accent: "#4d7cff",
    visual: "orbit",
    year: "2025",
  },

  {
    id: "startupinvo",
    number: "06",
    title: "StartupInvo",
    category: "Startup · Community Platform",
    description:
      "A platform connecting startup founders and angel investors through community channels, private messaging, profiles and authentication.",
    stack: ["Flutter", "Node.js", "MongoDB", "REST APIs"],
    cta: {
      label: "VIEW CASE STUDY",
      href: "https://github.com/priyanshch1105",
    },
    accent: "#a3e635",
    visual: "graph",
    year: "2025",
  },

  {
    id: "apna-healthcare",
    number: "07",
    title: "Apna Healthcare",
    category: "HealthTech · Cross-Platform",
    description:
      "A cross-platform healthcare application focused on connecting patients with healthcare services through a unified mobile experience and backend-driven workflows.",
    stack: ["Flutter", "React", "Node.js", "Firebase", "REST APIs"],
    cta: {
      label: "VIEW CASE STUDY",
      href: "https://github.com/priyanshch1105",
    },
    accent: "#a3e635",
    visual: "pulse",
    year: "2024",
  },

  {
    id: "rendvo",
    number: "08",
    title: "Rendvo",
    category: "Dating · React Native",
    description:
      "A production-level UK dating application focused on authentication, profile management and API-driven mobile experiences with responsive and performant interfaces.",
    stack: ["React Native", "Zustand", "REST APIs"],
    cta: {
      label: "VIEW CASE STUDY",
      href: "https://github.com/priyanshch1105",
    },
    accent: "#ff5f8f",
    visual: "radar",
    year: "2025",
  },

  {
    id: "petiole",
    number: "09",
    title: "Petiole Website",
    category: "Web Development · PHP",
    description:
      "A dynamic business website built with PHP, MySQL and JavaScript, featuring database-driven modules and responsive interfaces.",
    stack: ["PHP", "MySQL", "JavaScript"],
    cta: {
      label: "VIEW CASE STUDY",
      href: "https://github.com/priyanshch1105",
    },
    accent: "#ff9f43",
    visual: "terminal",
    year: "2025",
  },

  {
    id: "lino-bud",
    number: "10",
    title: "Lino Bud Website",
    category: "Web Development · PHP",
    description:
      "A responsive company website with dynamic PHP and MySQL modules, reusable frontend components and administrative functionality.",
    stack: ["PHP", "MySQL", "JavaScript"],
    cta: {
      label: "VIEW CASE STUDY",
      href: "https://github.com/priyanshch1105",
    },
    accent: "#4d7cff",
    visual: "layers",
    year: "2025",
  },
]
