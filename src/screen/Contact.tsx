import { Mail, Github, Figma, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export function Contact() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "priyanshchourasiya000@gmail.com",
      href: "mailto:priyanshchourasiya000@gmail.com",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/priyanshch1105",
      href: "https://github.com/priyanshch1105",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: Figma,
      label: "Figma",
      value: "figma.com/@priyanshchauras",
      href: "https://www.figma.com/@priyanshchauras",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/priyanshchaurasiya1105",
      href: "https://www.linkedin.com/in/priyanshchaurasiya1105",
      gradient: "from-blue-500 to-blue-700",
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
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
          <Send className="mx-auto mb-4 h-12 w-12 text-indigo-600 dark:text-indigo-400" />

          <h2 className="mb-4 text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Let’s Connect
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            I’m always excited to collaborate on new projects or discuss design
            ideas. Feel free to reach out through any platform!
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 mb-16">
          {contacts.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${contact.gradient}`}
              >
                <contact.icon className="h-7 w-7 text-white" />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {contact.label}
                </p>
                <p className="truncate font-medium text-gray-900 dark:text-white">
                  {contact.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a href="mailto:priyanshchourasiya000@gmail.com">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-700 hover:to-purple-700"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send me an Email
            </Button>
          </a>

          <p className="mt-4 text-sm text-gray-500">
            Usually responds within 24 hours ⚡
          </p>
        </motion.div>
      </div>
    </section>
  );
}
