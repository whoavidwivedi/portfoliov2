import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowLeft, Eye, Sun, Moon } from 'lucide-react';

interface WarningProps {
    isDark: boolean;
    toggleTheme: () => void;
}

const Warning: React.FC<WarningProps> = ({ isDark, toggleTheme }) => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-paper dark:bg-dark-paper text-ink dark:text-stone-100 flex flex-col items-center justify-center p-4 relative overflow-hidden">

            {/* Theme Toggle */}
            <div className="absolute top-6 right-6 z-50">
                <button
                    onClick={toggleTheme}
                    className="p-2 border-2 border-ink dark:border-white rounded-full bg-white dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors neo-shadow hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
                    aria-label="Toggle Dark Mode"
                >
                    {isDark ? <Sun size={20} className="text-orange-400" /> : <Moon size={20} className="text-ink" />}
                </button>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
                backgroundImage: 'linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            {/* Floating Decorative Elements */}
            <motion.div
                className="absolute top-10 left-10 md:top-20 md:left-20 rotate-[-12deg] hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="bg-yellow-300 dark:bg-yellow-500 text-ink font-bold font-display px-4 py-2 border-2 border-ink dark:border-white neo-shadow">
                    RESTRICTED AREA
                </div>
            </motion.div>

            <motion.div
                className="absolute bottom-10 right-10 md:bottom-20 md:right-20 rotate-[6deg] hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="bg-orange-400 text-ink font-bold font-display px-4 py-2 border-2 border-ink dark:border-white neo-shadow">
                    DO NOT ENTER
                </div>
            </motion.div>

            {/* Main Card */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl w-full relative z-10"
            >
                {/* Card Shadow Layer */}
                <div className="absolute inset-0 bg-ink dark:bg-stone-700 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 border-2 border-ink dark:border-white"></div>

                {/* Card Content */}
                <div className="relative bg-white dark:bg-stone-900 border-2 border-ink dark:border-white p-8 md:p-12 text-center">

                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-500 rounded-full blur-xl opacity-20"></div>
                            <div className="bg-orange-500 text-white p-4 border-2 border-ink dark:border-white neo-shadow relative z-10">
                                <AlertTriangle size={48} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">
                        Whoa there! <br />
                        <span className="text-orange-500">Curious?</span>
                    </h1>

                    <p className="text-lg text-stone-600 dark:text-stone-300 mb-8 font-medium leading-relaxed">
                        I see you trying to peek behind the curtain. While I appreciate the interest in my code, the best way to understand it is to work with me.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/')}
                            className="px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink font-bold border-2 border-ink dark:border-white neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2 group"
                        >
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            Return Home
                        </button>

                        <button
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({ behavior: 'smooth' });
                                } else {
                                    navigate('/');
                                    setTimeout(() => {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    }, 100);
                                }
                            }}
                            className="px-6 py-3 bg-white dark:bg-stone-800 text-ink dark:text-white font-bold border-2 border-ink dark:border-white hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors flex items-center justify-center gap-2"
                        >
                            <Eye size={20} />
                            Hire Me Instead
                        </button>
                    </div>

                    {/* Decorative Corner Tape */}
                    <div className="absolute -top-3 -left-3 w-16 h-8 bg-yellow-300 border-2 border-ink dark:border-white rotate-[-45deg] z-20 opacity-80"></div>
                    <div className="absolute -bottom-3 -right-3 w-16 h-8 bg-yellow-300 border-2 border-ink dark:border-white rotate-[-45deg] z-20 opacity-80"></div>
                </div>
            </motion.div>

            <div className="mt-12 text-stone-500 dark:text-stone-400 font-mono text-xs uppercase tracking-widest">
                Error: 403_FORBIDDEN_ACCESS
            </div>

        </div>
    );
};

export default Warning;
