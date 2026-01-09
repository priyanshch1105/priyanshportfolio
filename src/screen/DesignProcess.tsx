import { Search, Pencil, Palette, Play, Code, TestTube } from 'lucide-react';
import { motion } from 'framer-motion';

export function DesignProcess() {
  const steps = [
    {
      title: 'Understand User & Problem',
      icon: Search,
      color: 'from-red-500 to-orange-500',
      description: 'Research & analyze',
    },
    {
      title: 'Wireframes',
      icon: Pencil,
      color: 'from-orange-500 to-yellow-500',
      description: 'Structure & layout',
    },
    {
      title: 'High-Fidelity UI',
      icon: Palette,
      color: 'from-yellow-500 to-green-500',
      description: 'Visual design',
    },
    {
      title: 'Prototype',
      icon: Play,
      color: 'from-green-500 to-cyan-500',
      description: 'Interactive mockups',
    },
    {
      title: 'Development',
      icon: Code,
      color: 'from-cyan-500 to-blue-500',
      description: 'Build & integrate',
    },
    {
      title: 'Testing & Iteration',
      icon: TestTube,
      color: 'from-blue-500 to-purple-500',
      description: 'Refine & improve',
    },
  ];

  return (
    <section id="process" className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Design Process
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From concept to launch: my systematic approach to creating exceptional user experiences
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-green-500 to-purple-500 opacity-20"></div>

            <div className="grid grid-cols-6 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    className="relative mb-6 group cursor-pointer"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity rounded-full`}></div>
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                      <step.icon className="h-9 w-9 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md border-2 border-gray-200 dark:border-gray-700">
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{index + 1}</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="text-center"
                  >
                    <h4 className="mb-2 text-sm font-semibold">{step.title}</h4>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative flex-shrink-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-lg rounded-full`}></div>
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                  <step.icon className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md border-2 border-gray-200 dark:border-gray-700">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{index + 1}</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-1">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
