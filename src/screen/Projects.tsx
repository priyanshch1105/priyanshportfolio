import { Github } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

import bodegaimage from "../assets/bodegaimage.png";
import kawachimage from "../assets/kawachimage.png";

type Project = {
  title: string;
  subtitle: string;
  role: string;
  description: string;
  highlights: string[];
  tech: string;
  image: string;
  gradient: string;
  tags: string[];
  githubLink: string;
};

export function Projects() {
  const projects: Project[] = [
    // ... projects data remains same ...
    {
      title: "Agentic DevOps Automation",
      subtitle: "Python , git , LLM",
      role: "AI/ML Engineer",
      description:
        "An agentic, safe-by-default DevOps assistant that converts natural language into Terraform plans, runs them in a Docker sandbox, enforces OPA policies, audits AWS (read-only), estimates costs, and generates CI/CD pipelines — without ever applying infrastructure automatically.",
      highlights: [
        "Converts natural language into Terraform plans",
        "Runs them in a Docker sandbox",
        "Enforces OPA policies",
        "Audits AWS (read-only)",
        "Estimates costs",
        "Generates CI/CD pipelines",
      ],
      tech: "Python, git, LLM",
      image: bodegaimage,
      gradient: "from-violet-500 to-purple-500",
      tags: ["AI/ML", "DevOps", "Computer Vision"],
      githubLink: "https://github.com/priyanshch1105/agentic-devops-automation",
    },
    {
      title: "Sense AI",
      subtitle: "Python + ML + ReactNative",
      role: "AI/ML Developer + Mobile Developer",
      description:
        "SenseAI is a React Native (CLI) mobile application focused on therapy assistance, guided exercise sessions, and speech-based learning.",
      highlights: [
        "BERT-based sentiment classification",
        "Real-time emotion detection",
        "Beautiful chat UI with animations",
        "Context-aware conversation flow",
      ],
      tech: "Python, PyTorch, ReactNative, Node.js",
      image: kawachimage,
      gradient: "from-blue-500 to-cyan-500",
      tags: ["NLP", "AI/ML", "React"],
      githubLink: "https://github.com/priyanshch1105/senseAi",
    },
    {
      title: "Bodega Delivery App",
      subtitle: "Flutter + UI/UX Design",
      role: "UI/UX Designer + Flutter Developer",
      description:
        "Blinkit-inspired food delivery app with stunning UI, smooth animations, and comprehensive design system.",
      highlights: [
        "Complete design system in Figma",
        "Micro-interactions and animations",
        "Custom bottom navigation",
        "Dark & Light theme support",
      ],
      tech: "Flutter, Figma, Material UI, Dart",
      image: bodegaimage,
      gradient: "from-orange-500 to-red-500",
      tags: ["Flutter", "UI/UX", "Design"],
      githubLink: "https://github.com/priyanshch1105/bodega-users/tree/priyansh_main",
    },
    {
      title: "Maharishi Chat App",
      subtitle: "ReactNative + Firebase + Websocket",
      role: "Full Stack AI/ML Developer",
      description:
        "Maharishi Chat App is a React Native mobile application focused on chat in between Management and teachers of Maharishi University of Management.",
      highlights: [
        "Activity recognition using ML Kit",
        "Predictive health analytics",
        "Real-time Firebase synchronization",
        "Beautiful data visualizations",
      ],
      tech: "ReactNative, Firebase, Websocket, Node.js",
      image: kawachimage,
      gradient: "from-green-500 to-emerald-500",
      tags: ["ReactNative", "Chat App"],
      githubLink: "https://github.com/priyanshch1105/maharishi-message-app",
    },
    {
      title: "Kawach - Cyber Crime App",
      subtitle: "Flutter + Firebase + UI/UX",
      role: "UI/UX Designer + Flutter Developer",
      description:
        "Cyber crime complaint platform with intuitive user flow, lawyer integration, and forensic support features.",
      highlights: [
        "User research-driven design",
        "Streamlined complaint workflow",
        "Location-based cyber cell mapping",
        "Secure data handling with Firebase",
      ],
      tech: "Flutter, Firebase, Figma, Dart",
      image: kawachimage,
      gradient: "from-blue-500 to-indigo-500",
      tags: ["Flutter", "UI/UX", "Legal Tech"],
      githubLink: "https://github.com/priyanshch1105/kavach",
    },
    {
      title: "AI-Powered Learning App",
      subtitle: "Flutter + OpenAI + Figma Plugin",
      role: "AI/ML Engineer + UI/UX Developer",
      description:
        "Figma plugin that uses AI to suggest color palettes, generate layouts, and provide accessibility recommendations.",
      highlights: [
        "GPT-powered design suggestions",
        "Automated accessibility checks (WCAG)",
        "Smart color palette generation",
        "Component design patterns library",
      ],
      tech: "Flutter, OpenAI API, Figma API",
      image: bodegaimage,
      gradient: "from-pink-500 to-rose-500",
      tags: ["Flutter", "AI/ML", "Design Tools"],
      githubLink: "https://github.com/priyanshch1105/AILearningTutor",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 inline-block border border-indigo-200 dark:border-indigo-800"
          >
            Portfolio
          </motion.span>
          <h2 className="mb-6 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing AI/ML intelligence, stunning UI/UX design, and robust mobile development across innovative projects.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
            >
              {/* Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  />

                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 z-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-xs font-bold bg-white/90 dark:bg-gray-900/90 rounded-full shadow-lg backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative background glow */}
                <div
                  className={`absolute -inset-8 bg-gradient-to-br ${project.gradient} opacity-10 blur-3xl -z-10 group-hover:opacity-20 transition-opacity duration-500`}
                />
              </motion.div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-2 text-gray-900 dark:text-white leading-tight">
                    {project.title}
                  </h3>
                  <p className={`text-lg font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>

                <ul className="grid gap-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                      <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 bg-gradient-to-r ${project.gradient} shadow-lg shadow-indigo-500/20`} />
                      <span className="text-sm font-medium">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-wrap gap-4 items-center">
                  <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-400">
                    Tech: <span className="text-gray-900 dark:text-white">{project.tech}</span>
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="h-12 px-6 rounded-xl font-bold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
                      <Github className="mr-2 h-5 w-5" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
