import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Sun,
  Moon,
  Mail,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isDark, setIsDark] = useState(false);

  const socialLinks = [
    { icon: Mail, href: "mailto:priyanshch1105@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://linkedin.com/in/priyansh-chaurasiya", label: "LinkedIn" },
    { icon: MessageCircle, href: "https://wa.me/91XXXXXXXXXX", label: "WhatsApp" },
  ];

  /* ------------------------------------------------------ */
  /* Scroll + Active Section                                */
  /* ------------------------------------------------------ */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "about",
        "resume",
        "projects",
        "experience",
        "contact",
      ];

      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ------------------------------------------------------ */
  /* Dark Mode Init                                         */
  /* ------------------------------------------------------ */
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Resume", href: "#resume" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${isScrolled
        ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-border shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container-center py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 blur opacity-50" />
              <div className="relative px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">
              Priyansh Chaurasiya
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm rounded-lg ${activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
                whileHover={{ scale: 1.05 }}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/10 rounded-lg"
                  />
                )}
                <span className="relative z-10">
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-2 border-r border-border pr-4 mr-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg border border-border bg-background/70 backdrop-blur"
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="h-4 w-4 text-indigo-600" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 space-y-2">

                {/* ABOUT + THEME TOGGLE (SAME ROW) */}
                <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-muted transition-colors">
                  <button
                    onClick={() => scrollToSection("#about")}
                    className="text-left text-muted-foreground hover:text-foreground"
                  >
                    About
                  </button>

                  <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-md border border-border"
                  >
                    {isDark ? (
                      <Sun className="h-4 w-4 text-yellow-400" />
                    ) : (
                      <Moon className="h-4 w-4 text-indigo-600" />
                    )}
                  </motion.button>
                </div>

                {/* REST OF NAV ITEMS */}
                {["resume", "projects", "experience", "contact"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(`#${section}`)}
                    className="block w-full px-4 py-3 text-left rounded-lg
                       text-muted-foreground hover:text-foreground
                       hover:bg-muted transition-colors"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}

                {/* MOBILE SOCIAL LINKS */}
                <div className="flex items-center gap-4 px-4 py-3 border-t border-border mt-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-muted text-muted-foreground hover:text-primary transition-colors"
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
