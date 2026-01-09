import { ExternalLink, Github } from "lucide-react";
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
      title: "Bodega Delivery App",
      subtitle: "Flutter",
      role: "UI Design + Frontend Development",
      description:
        "Blinkit-inspired food delivery app with modern UI and smooth UX.",
      highlights: [
        "Clean home screen layout",
        "Product cards & animations",
        "Custom bottom navigation",
        "Dark & Light theme support",
      ],
      tech: "Flutter, Material UI",
      image: bodegaimage,
      gradient: "from-orange-500 to-red-500",
      tags: ["Flutter", "UI/UX", "Animation"],
      githubLink: "https://github.com/priyanshch1105/bodega-users/tree/priyansh_main",
    },
    {
      title: "Kawach App",
      subtitle: "Flutter + Firebase",
      role: "UI/UX + Flutter Developer",
      description:
        "Cyber crime complaint app allowing FIR submission to nearby cyber cells with lawyer & forensic support.",
      highlights: [
        "User-friendly complaint flow",
        "Card-based UI",
        "Scalable screen architecture",
      ],
      tech: "Flutter, Firebase",
      image: kawachimage,
      gradient: "from-blue-500 to-indigo-500",
      tags: ["Flutter", "Firebase", "Legal Tech"],
      githubLink: "https://github.com/priyanshch1105/kavach",
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
            Showcase of my design and development work across mobile platforms
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
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                className={`relative group ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
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
