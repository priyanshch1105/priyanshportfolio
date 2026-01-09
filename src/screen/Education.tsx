import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ y: -8 }}
          className="relative group"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
          
          <div className="relative p-10 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 group-hover:border-transparent transition-all duration-300 shadow-lg hover:shadow-2xl text-center">
            <motion.div
              className="inline-flex p-5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl shadow-xl mb-6"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <GraduationCap className="h-10 w-10 text-white" />
            </motion.div>

            <h3 className="text-2xl mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              B.Tech – Computer Science (Data Science)
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Maharishi University of Information Technology, Noida
            </p>
            
            {/* Decorative Elements */}
            <div className="flex justify-center gap-2 mt-6">
              <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
              <div className="w-2 h-2 rounded-full bg-purple-500"></div>
              <div className="w-2 h-2 rounded-full bg-pink-500"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
