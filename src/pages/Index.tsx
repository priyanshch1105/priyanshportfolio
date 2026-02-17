import { motion } from "framer-motion";
import { Heart } from "lucide-react";

import { Navbar } from "../screen/Navbar";
import { Hero } from "../screen/Hero";
import { About } from "../screen/About";
import { Resume } from "../screen/Resume";
import { Projects } from "../screen/Projects";
import { DesignProcess } from "../screen/DesignProcess";
import { Experience } from "../screen/Experience";
import { Education } from "../screen/Education";
import { Contact } from "../screen/Contact";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/30 dark:from-gray-950 dark:via-indigo-950/20 dark:to-purple-950/20 text-gray-900 dark:text-gray-100">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Resume />
        <Projects />
        <DesignProcess />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Footer                                   */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 dark:border-gray-800">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8 text-center">
        <motion.p
          className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          © 2026 Priyansh. Crafted with
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
          >
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
          </motion.span>
          and React
        </motion.p>

        <p className="mt-2 text-xs text-gray-500">
          Building beautiful experiences, one pixel at a time ✨
        </p>
      </div>
    </footer>
  );
}
