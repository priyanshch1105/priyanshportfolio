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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-white dark:bg-gray-950">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgb(99 102 241 / 0.1) 2px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {/* HEADER */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.span
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 inline-block"
            >
              The Story
            </motion.span>
            <h2 className="mb-6 text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
              I specialize in building{" "}
              <span className="relative inline-block font-bold text-indigo-600 dark:text-indigo-400">
                intelligent mobile applications
              </span>{" "}
              that combine cutting-edge AI/ML capabilities with beautiful UI/UX design.
            </p>
          </motion.div>

          {/* HIGHLIGHTS */}
          <div className="grid gap-8 md:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative rounded-[2.5rem] border border-gray-100 bg-gray-50/50 p-10 transition-all dark:border-gray-800 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-900 shadow-xl shadow-gray-200/20 dark:shadow-none hover:shadow-indigo-500/10"
              >
                <div
                  className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg shadow-indigo-500/20 transition-transform group-hover:scale-110 group-hover:rotate-6`}
                >
                  <item.icon className="h-8 w-8 text-white" />
                </div>

                <h4 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* STATS */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto"
          >
            {[
              { value: "10+", label: "Projects Completed" },
              { value: "2+", label: "Years Experience" },
              { value: "4", label: "Core Skill Areas" },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white dark:bg-gray-900 p-8 text-center border border-gray-100 dark:border-gray-800 shadow-lg shadow-gray-200/50 dark:shadow-none transition-transform hover:scale-105"
              >
                <div className="mb-2 text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
