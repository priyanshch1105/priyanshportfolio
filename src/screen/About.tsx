import { Brain, Palette, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Smart features with ML models",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Palette,
      title: "Design to Code",
      description: "Pixel-perfect implementation from Figma",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Expertise",
      description: "Flutter & React Native mastery",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.15) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <motion.p
            className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-left md:text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I specialize in building{" "}
            <span className="relative inline-block font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              intelligent mobile applications
            </span>{" "}
            that combine cutting-edge AI/ML capabilities with beautiful UI/UX design.
            From designing user flows in Figma to deploying Flutter apps with integrated
            machine learning models, I create end-to-end solutions that are both
            visually stunning and functionally intelligent.
          </motion.p>
        </motion.div>

        {/* HIGHLIGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="mb-8 text-center text-sm uppercase tracking-wider text-gray-500">
            What I Bring to the Table
          </h3>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all dark:border-gray-700 dark:bg-gray-800 hover:shadow-2xl"
              >
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg`}
                >
                  <item.icon className="h-7 w-7 text-white" />
                </div>

                <h4 className="mb-2 text-center text-lg font-semibold">
                  {item.title}
                </h4>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto"
        >
          {[
            { value: "10+", label: "Projects Completed" },
            { value: "2+", label: "Years Experience" },
            { value: "4", label: "Core Skill Areas" },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 p-6 text-center dark:from-indigo-950/30 dark:to-purple-950/30"
            >
              <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
