import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    {
      role: "AI/ML Engineer",
      company: "Personal Innovation Lab",
      period: "2023 - Present",
      description: "Spearheading development of agentic DevOps tools and BERT-based sentiment classification systems.",
      highlights: [
        "Developed AI-powered mobile apps using TensorFlow Lite",
        "Implemented secure infrastructure automation agents",
        "Integrated multi-modal LLM capabilities into mobile platforms"
      ]
    },
    {
      role: "UI/UX Designer",
      company: "Cross-Platform Projects",
      period: "2022 - 2023",
      description: "Crafting intuitive digital experiences and high-fidelity design systems for complex applications.",
      highlights: [
        "Designed and implemented 20+ custom UI components",
        "Streamlined Figma-to-Flutter handoff processes",
        "Led user research for cyber crime complaint platforms"
      ]
    },
    {
      role: "Flutter Developer",
      company: "Freelance & Startups",
      period: "2021 - 2022",
      description: "Building production-grade mobile applications with emphasis on performance and clean architecture.",
      highlights: [
        "Optimized app performance reducing load times by 40%",
        "Implemented real-time data sync with Firebase",
        "Mastered BLoC and Provider state management patterns"
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 mb-6 inline-block"
          >
            Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-12">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-white dark:bg-gray-950 border-4 border-indigo-500 rounded-full -translate-x-1/2 z-20 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />

              {/* Content Card */}
              <div className="w-full md:w-[45%] pl-8 md:pl-0">
                <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border border-gray-100 dark:border-gray-800 hover:border-indigo-500/30 transition-all duration-300 shadow-xl shadow-gray-100/50 dark:shadow-none hover:shadow-indigo-500/10">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 px-3 py-1 bg-indigo-500/5 rounded-full border border-indigo-500/10">
                      {exp.period}
                    </span>
                    <Briefcase className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-md font-medium text-purple-600 dark:text-purple-400 mb-4 italic">
                    {exp.company}
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="space-y-3">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs text-gray-500 dark:text-gray-400">
                        <div className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500/50 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
