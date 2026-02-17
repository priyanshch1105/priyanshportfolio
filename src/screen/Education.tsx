import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Education() {
  const education = {
    degree: "B.Tech in Computer Science",
    specialization: "Artificial Intelligence & Data Science",
    institution: "Maharishi University of Information Technology",
    location: "Noida, India",
    period: "2021 - 2025",
    description: "In-depth study of machine learning, neural networks, and advanced data structures. Focus on building intelligent systems and scalable architectures."
  };

  return (
    <section id="education" className="py-32 px-6 relative overflow-hidden bg-gray-50/50 dark:bg-gray-950/50">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 blur-[100px] rounded-full -ml-36" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6 inline-block"
          >
            Academic Foundation
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group "
        >
          {/* External Shadow/Glow */}
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-[2.5rem] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />

          <div className="relative p-10 md:p-16 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-2xl shadow-gray-200/50 dark:shadow-none overflow-hidden text-center transition-all duration-300 group-hover:border-blue-500/20">
            {/* Animated Icon */}
            <motion.div
              className="inline-flex p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-xl shadow-blue-500/30 mb-10 relative"
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="h-12 w-12 text-white" />
              <div className="absolute inset-0 bg-white/20 blur-lg rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <div className="space-y-4">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                {education.period}
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {education.degree} <br className="hidden md:block" />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-2xl md:text-3xl">
                  & {education.specialization}
                </span>
              </h3>
              <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
                {education.institution}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                {education.location}
              </div>

              <div className="pt-8 max-w-2xl mx-auto">
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed italic">
                  "{education.description}"
                </p>
              </div>
            </div>

            {/* Bottom corner accent */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-indigo-500 opacity-5 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
