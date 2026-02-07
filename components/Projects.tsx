import React from 'react';
import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-paper dark:bg-dark-paper relative transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-4">
          <div className="text-center md:text-left">
            <div className="inline-block px-3 py-1 bg-ink dark:bg-white text-white dark:text-ink font-mono text-xs mb-4">SELECTED WORKS 2023-2025</div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-7xl font-black font-display text-ink dark:text-white uppercase"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured <span className="text-orange-500">Projects</span>
            </motion.h2>
          </div>
          <a href="#" className="text-ink dark:text-white font-bold border-b-2 border-ink dark:border-white hover:text-orange-500 hover:border-orange-500 transition-colors opacity-50 cursor-not-allowed hidden md:block">View All on GitHub &rarr;</a>
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full min-h-[250px] md:min-h-[400px] flex flex-col items-center justify-center bg-stone-100 dark:bg-stone-800 border-2 border-dashed border-ink dark:border-white neo-shadow bg-stripes relative overflow-hidden p-6 md:p-8"
        >
          {/* Caution Tape Effect */}
          <div className="absolute top-5 -left-8 sm:top-10 sm:-left-10 w-64 h-8 md:h-12 bg-yellow-400 text-black font-black flex items-center justify-center transform -rotate-45 border-y-2 md:border-y-4 border-black z-10 opacity-90 shadow-lg text-xs md:text-base">
            UNDER CONSTRUCTION
          </div>

          <div className="absolute bottom-5 -right-8 sm:bottom-10 sm:-right-10 w-64 h-8 md:h-12 bg-yellow-400 text-black font-black flex items-center justify-center transform -rotate-45 border-y-2 md:border-y-4 border-black z-10 opacity-90 shadow-lg text-xs md:text-base">
            UNDER CONSTRUCTION
          </div>

          <div className="bg-white dark:bg-stone-900 p-6 md:p-8 border-4 border-ink dark:border-white text-center max-w-sm md:max-w-lg z-20 neo-shadow relative">
            <div className="flex justify-center mb-4 md:mb-6">
              <Construction size={48} className="text-orange-500 md:w-16 md:h-16" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black font-display text-ink dark:text-white mb-3 md:mb-4 uppercase">
              Work in Progress
            </h3>
            <p className="text-base md:text-lg text-stone-600 dark:text-stone-300 font-medium mb-6">
              I'm currently curating my best work for this showcase. Good things take time (and caffeine).
            </p>
            <div className="inline-block px-3 py-1 md:px-4 md:py-2 bg-ink dark:bg-white text-white dark:text-ink font-mono font-bold text-xs md:text-sm">
              EST. ARRIVAL: Q2 2026
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
