import React from 'react';
import { motion } from 'framer-motion';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-orange-50 dark:bg-stone-900 border-t-2 border-ink dark:border-white relative overflow-hidden transition-colors">
        {/* Background Text Texture */}
        <div className="absolute top-10 -right-10 md:right-0 text-[120px] md:text-[200px] font-black font-display text-white dark:text-stone-800 opacity-60 dark:opacity-20 select-none pointer-events-none z-0 leading-none">
            BLOG
        </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
        >
            <h2 className="text-4xl md:text-6xl font-black font-display text-ink dark:text-white mb-4">Latest <span className="underline decoration-4 decoration-orange-400">Thoughts</span></h2>
            <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 font-medium">Musings on code, design, and the future of web.</p>
        </motion.div>

        {/* Coming Soon Section */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full p-8 md:p-12 bg-white dark:bg-dark-card border-2 border-ink dark:border-white neo-shadow flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-center min-h-[300px]"
        >
             {/* WhatsApp-style Typing Animation Bubble */}
             <div className="relative shrink-0">
                {/* The Bubble */}
                <div className="relative bg-white dark:bg-stone-800 border-2 border-ink dark:border-white px-8 py-6 rounded-[2rem] rounded-bl-none neo-shadow transform -rotate-2">
                   <div className="flex gap-3 items-center">
                      <motion.div 
                        className="w-4 h-4 bg-stone-400 dark:bg-stone-500 rounded-full"
                        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                      />
                      <motion.div 
                        className="w-4 h-4 bg-stone-400 dark:bg-stone-500 rounded-full"
                        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                      />
                      <motion.div 
                        className="w-4 h-4 bg-stone-400 dark:bg-stone-500 rounded-full"
                        animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                      />
                   </div>
                </div>
             </div>

             <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-black font-display text-ink dark:text-white mb-2">
                    Avi is typing...
                </h3>
                <p className="text-stone-600 dark:text-stone-300 text-base md:text-lg max-w-md font-medium leading-relaxed">
                    Compiling thoughts on React architecture and design systems. The next big post is loading.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-full shadow-sm">
                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                     <span className="text-xs font-bold text-green-700 dark:text-green-300 uppercase tracking-widest">
                        Online
                     </span>
                </div>
             </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;