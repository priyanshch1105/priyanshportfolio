import { Download, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="h-4 w-4 text-indigo-500" />
            <span className="text-sm text-indigo-600 dark:text-indigo-400">Available for Freelance</span>
          </motion.div>

          <h1 className="mx-auto max-w-4xl text-center text-4xl sm:text-5xl md:text-7xl font-bold mb-4
               bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
               dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
               bg-clip-text text-transparent leading-tight">
            Hi, I’m <span className="whitespace-nowrap">Priyansh Chaurasiya</span>
            <span className="inline-block ml-2 align-middle animate-wave">👋</span>
          </h1>

        </motion.div>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          An <span className="text-violet-600 dark:text-violet-400 font-semibold">AI/ML Engineer</span>,{' '}
          <span className="text-pink-600 dark:text-pink-400 font-semibold">UI/UX Designer</span>, and{' '}
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Flutter Developer</span>{' '}
          building intelligent mobile apps with beautiful design
        </motion.p>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-6 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-gray-300"></span>
            Tech Stack
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-gray-300"></span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[
              { name: 'TensorFlow & PyTorch', color: 'from-violet-500 to-purple-500' },
              { name: 'Python & ML', color: 'from-blue-500 to-cyan-500' },
              { name: 'Flutter (Dart)', color: 'from-indigo-500 to-blue-500' },
              { name: 'UI/UX Design (Figma)', color: 'from-pink-500 to-rose-500' },
              { name: 'Firebase & APIs', color: 'from-orange-500 to-red-500' },
              { name: 'React & Next.js', color: 'from-cyan-500 to-teal-500' },
            ].map((tech, index) => (
              <motion.span
                key={index}
                className={`px-5 py-2.5 bg-white dark:bg-gray-800 rounded-full text-sm border-2 border-transparent hover:border-indigo-500/50 shadow-sm hover:shadow-lg transition-all cursor-pointer relative overflow-hidden group`}
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <span className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity`}></span>
                <span className="relative">{tech.name}</span>
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60 transition-all"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="https://drive.google.com/file/d/1V10CYfDhabQd7c40LZWSnF2O5oFPfXhi/view?usp=sharing" >
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 hover:border-indigo-500 transition-all"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:bg-purple-50 dark:hover:bg-purple-950/30 hover:border-purple-500 transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2
             flex flex-col items-center gap-2
             text-xs sm:text-sm tracking-widest uppercase
             text-gray-500 dark:text-gray-400 select-none"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll Down</span>

          <motion.span
            className="text-lg"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            ↓
          </motion.span>
        </motion.div>

      </div>
    </section>
  );
}
