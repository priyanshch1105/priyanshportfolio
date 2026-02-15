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
    {
      title: "AI Image Recognition App",
      subtitle: "Flutter + TensorFlow Lite",
      role: "AI/ML Engineer + Flutter Developer",
      description:
        "Real-time object detection and image classification app using custom-trained ML models integrated with Flutter.",
      highlights: [
        "Custom TensorFlow Lite model integration",
        "Real-time camera-based object detection",
        "95%+ accuracy on custom dataset",
        "Optimized for on-device inference",
      ],
      tech: "Flutter, TensorFlow Lite, Python, Dart",
      image: bodegaimage,
      gradient: "from-violet-500 to-purple-500",
      tags: ["AI/ML", "Flutter", "Computer Vision"],
      githubLink: "https://github.com/priyanshch1105",
    },
    {
      title: "Smart Sentiment Analysis Chatbot",
      subtitle: "Python + NLP + React",
      role: "AI/ML Developer + UI/UX Designer",
      description:
        "Intelligent chatbot with sentiment analysis, emotion detection, and context-aware responses using advanced NLP.",
      highlights: [
        "BERT-based sentiment classification",
        "Real-time emotion detection",
        "Beautiful chat UI with animations",
        "Context-aware conversation flow",
      ],
      tech: "Python, PyTorch, React, Node.js",
      image: kawachimage,
      gradient: "from-blue-500 to-cyan-500",
      tags: ["NLP", "AI/ML", "React"],
      githubLink: "https://github.com/priyanshch1105",
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
      title: "Health Tracker with AI Predictions",
      subtitle: "Flutter + ML Kit + Firebase",
      role: "Full Stack AI/ML Developer",
      description:
        "Smart health monitoring app with ML-powered activity prediction, calorie estimation, and personalized recommendations.",
      highlights: [
        "Activity recognition using ML Kit",
        "Predictive health analytics",
        "Real-time Firebase synchronization",
        "Beautiful data visualizations",
      ],
      tech: "Flutter, ML Kit, Firebase, Chart.js",
      image: kawachimage,
      gradient: "from-green-500 to-emerald-500",
      tags: ["AI/ML", "Flutter", "Health Tech"],
      githubLink: "https://github.com/priyanshch1105",
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
      title: "AI-Powered Design Assistant",
      subtitle: "React + OpenAI + Figma Plugin",
      role: "AI/ML Engineer + UI/UX Developer",
      description:
        "Figma plugin that uses AI to suggest color palettes, generate layouts, and provide accessibility recommendations.",
      highlights: [
        "GPT-powered design suggestions",
        "Automated accessibility checks (WCAG)",
        "Smart color palette generation",
        "Component design patterns library",
      ],
      tech: "React, TypeScript, OpenAI API, Figma API",
      image: bodegaimage,
      gradient: "from-pink-500 to-rose-500",
      tags: ["AI/ML", "UI/UX", "Design Tools"],
      githubLink: "https://github.com/priyanshch1105",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing AI/ML intelligence, stunning UI/UX design, and robust mobile development across innovative projects
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
            >
              {/* Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                  />

                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 z-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-white/90 dark:bg-gray-900/90 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`absolute -inset-4 bg-gradient-to-br ${project.gradient} opacity-20 blur-2xl -z-10`}
                />
              </motion.div>

              {/* Content */}
              <div>
                <h3 className="text-3xl mb-1">{project.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span
                        className={`mt-2 h-2 w-2 rounded-full bg-gradient-to-r ${project.gradient}`}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <p className="text-sm mb-6">
                  <span className="text-gray-500">Tech: </span>
                  <span
                    className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent font-medium`}
                  >
                    {project.tech}
                  </span>
                </p>

                <div className="flex gap-3">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
