import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  const experiences = [
    "Developed AI-powered mobile apps using TensorFlow Lite and ML Kit for on-device inference",
    "Designed and implemented complete UI/UX workflows from user research to high-fidelity prototypes",
    "Built cross-platform applications using Flutter with BLoC/Provider state management",
    "Integrated machine learning models for image recognition, NLP, and prediction features",
    "Converted Figma designs into pixel-perfect Flutter UIs with custom animations",
    "Implemented Firebase services, REST APIs, and real-time data synchronization",
    "Optimized app performance, reduced load times, and enhanced user experience metrics",
  ];

  return (
    <section
      id="experience"
      className="py-24 px-6 bg-gradient-to-b from-white to-indigo-50/50 dark:from-gray-950 dark:to-indigo-950/20"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          {/* Gradient Border Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>

          <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Icon */}
              <motion.div
                className="flex-shrink-0 p-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg self-start"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Briefcase className="h-8 w-8 text-white" />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl mb-1 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                  AI/ML Engineer · UI/UX Designer · Flutter Developer
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  AI Integration · Mobile Development · Design Systems
                </p>

                <p className="text-indigo-600 dark:text-indigo-400 mb-6 text-sm">
                  Freelance · Startup Projects · Personal Innovation
                </p>

                <ul className="space-y-4">
                  {experiences.map((exp, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex-shrink-0"></span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {exp}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
