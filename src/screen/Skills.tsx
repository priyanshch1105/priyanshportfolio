import { Palette, Smartphone, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      icon: Palette,
      title: "UI / UX Design",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-500/10 to-rose-500/10",
      skills: [
        "User Research & Wireframing (Figma)",
        "High-Fidelity UI Design",
        "Design Systems & Reusable Components",
        "Usability, Accessibility & Visual Consistency",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-500/10 to-purple-500/10",
      skills: [
        "Flutter (UI, State Management, Animations)",
        "React Native (Hooks, Navigation, Components)",
        "Responsive & Adaptive Layouts",
        "Android & iOS Platform-specific UI",
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Workflow",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-500/10 to-blue-500/10",
      skills: [
        "Figma (UI/UX Design & Prototyping)",
        "Firebase (Auth & Firestore – Basics)",
        "Git & GitHub (Version Control)",
        "Postman (API Testing)",
        "VS Code",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.2) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build clean, scalable, and user-centric mobile applications
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 shadow-sm hover:shadow-2xl overflow-hidden"
            >
              {/* Gradient Border */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
              />
              <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-2xl -z-10" />

              {/* Glow */}
              <div
                className={`absolute -inset-20 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-20`}
              />

              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`p-4 bg-gradient-to-br ${category.gradient} rounded-xl shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="h-7 w-7 text-white" />
                </motion.div>
                <h3 className="text-2xl">{category.title}</h3>
              </div>

              <ul className="space-y-3.5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.15 + skillIndex * 0.1,
                    }}
                    className="flex items-start gap-3"
                  >
                    <span
                      className={`mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
