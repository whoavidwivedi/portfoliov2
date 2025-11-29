import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        company: 'takeUforward',
        role: 'Member of Technical Staff',
        period: 'Sep 2025 - Present',
        description: 'Contributing to the development of high-quality educational content and platform features.',
        color: 'bg-orange-500',
    },
    {
        company: 'BrightChamps',
        role: 'Coding Educator',
        period: 'Sep 2024 - Feb 2025',
        description: 'Mentored students in coding concepts, fostering a passion for technology and problem-solving.',
        color: 'bg-blue-500',
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-16 md:py-20 bg-paper dark:bg-dark-paper relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-0 w-64 h-64 bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display font-black text-4xl md:text-5xl text-ink dark:text-white mb-4">
                        Experience<span className="text-orange-500">.</span>
                    </h2>
                    <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl mx-auto">
                        My professional journey and the companies I've had the privilege to work with.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-ink/10 dark:bg-white/10 transform -translate-x-1/2 md:translate-x-0"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-paper dark:bg-dark-paper border-4 border-ink dark:border-white rounded-full z-10 transform -translate-x-1/2 flex items-center justify-center">
                                    <div className={`w-3 h-3 rounded-full ${exp.color}`}></div>
                                </div>

                                {/* Content Card */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-right'}`}>
                                    <div className="bg-white dark:bg-stone-800 p-6 border-2 border-ink dark:border-white neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-300 group">
                                        <div className={`flex items-center gap-2 mb-2 ${index % 2 !== 0 ? 'md:justify-end' : ''}`}>
                                            <span className={`px-3 py-1 text-xs font-bold text-white ${exp.color} border border-ink dark:border-white rounded-full flex items-center gap-1`}>
                                                <Calendar size={12} />
                                                {exp.period}
                                            </span>
                                        </div>
                                        <h3 className="font-display font-bold text-xl text-ink dark:text-white mb-1 group-hover:text-orange-500 transition-colors">
                                            {exp.company}
                                        </h3>
                                        <h4 className="font-medium text-stone-500 dark:text-stone-400 mb-3 flex items-center gap-2 md:inline-flex">
                                            <Briefcase size={16} />
                                            {exp.role}
                                        </h4>
                                        <p className="text-stone-600 dark:text-stone-300 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
