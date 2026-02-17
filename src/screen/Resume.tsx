import { motion } from "framer-motion";
import { FileText, Download, Eye, Award, Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export function Resume() {
    const highlights = [
        {
            icon: Briefcase,
            title: "Work Experience",
            description: "Proven track record in AI/ML Engineering and Full Stack Development.",
        },
        {
            icon: Award,
            title: "Key Achievements",
            description: "Developed agentic DevOps tools and BERT-based sentiment systems.",
        },
        {
            icon: GraduationCap,
            title: "Education",
            description: "Focused on Computer Science and Artificial Intelligence.",
        },
    ];

    return (
        <section id="resume" className="py-24 px-6 relative overflow-hidden bg-white dark:bg-gray-950">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[100px] rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full -ml-48 -mb-48" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 inline-block border border-indigo-200 dark:border-indigo-800"
                        >
                            Curriculum Vitae
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                            Professional <span className="gradient-text">Resume</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                            My resume provides a comprehensive overview of my technical journey,
                            projects, and professional background. I specialize in building
                            intelligent applications and high-performance cross-platform solutions.
                        </p>

                        <div className="space-y-6 mb-10">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-gray-800"
                                >
                                    <div className="mt-1 p-2 bg-indigo-500/10 rounded-lg text-indigo-600 dark:text-indigo-400">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white">{item.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="h-14 px-8 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-600/20 group text-lg">
                                    <Eye className="mr-2 h-5 w-5" />
                                    View Resume
                                    <ChevronRight className="ml-2 h-5 w-5 opacity-50 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button variant="outline" className="h-14 px-8 rounded-2xl font-bold text-lg border-2">
                                    <Download className="mr-2 h-5 w-5" />
                                    Download PDF
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Content - Visual Representation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 aspect-[3/4] max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 group">
                            {/* Fake Resume Preview */}
                            <div className="absolute inset-0 bg-white dark:bg-gray-900 p-8">
                                <div className="w-1/2 h-4 bg-gray-200 dark:bg-gray-800 rounded-full mb-8" />
                                <div className="space-y-4">
                                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-800/50 rounded-full" />
                                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-800/50 rounded-full" />
                                    <div className="w-3/4 h-2 bg-gray-100 dark:bg-gray-800/50 rounded-full" />
                                </div>
                                <div className="mt-12 space-y-4">
                                    <div className="w-1/3 h-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-full" />
                                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-800/50 rounded-full" />
                                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-800/50 rounded-full" />
                                </div>
                                <div className="mt-12 space-y-4">
                                    <div className="w-1/3 h-3 bg-purple-100 dark:bg-purple-900/30 rounded-full" />
                                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-800/50 rounded-full" />
                                    <div className="w-2/3 h-2 bg-gray-100 dark:bg-gray-800/50 rounded-full" />
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-xl">
                                        <FileText className="w-12 h-12 text-indigo-600" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl -z-10 group-hover:opacity-50 transition-opacity" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
