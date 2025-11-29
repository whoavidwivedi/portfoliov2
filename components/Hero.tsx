import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[100dvh] flex items-center relative overflow-hidden pt-24 pb-20 md:py-20">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(#1C1917 1px, transparent 1px), linear-gradient(90deg, #1C1917 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      {/* Main Content - Z-Index 30 ensures it sits ABOVE the marquee */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-30 grid md:grid-cols-12 gap-8 md:gap-12 items-center">

        <div className="md:col-span-7 order-2 md:order-1 relative">
          {/* Floating "Sticker" - Desktop Only */}
          <motion.div
            className="hidden md:block absolute md:-top-12 md:-left-12 rotate-[-12deg] z-20 md:scale-100 origin-bottom-right"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 1 }}
          >
            <div className="bg-yellow-300 dark:bg-yellow-500 text-ink font-bold font-display px-4 py-2 border-2 border-ink dark:border-white neo-shadow whitespace-nowrap">
              Hello there! 👋
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl font-black text-ink dark:text-white leading-[0.95] md:leading-[0.9] mb-6 md:mb-8 tracking-tighter">
              CODING <br />
              <span className="text-white bg-orange-500 px-2 inline-block transform -skew-x-6 border-2 border-ink dark:border-white neo-shadow mt-1 md:mt-0">CREATIVE</span><br />
              REALITY.
            </h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-stone-700 dark:text-stone-300 mb-8 md:mb-10 max-w-lg font-medium border-l-4 border-orange-500 pl-4 md:pl-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm <span className="font-bold underline decoration-orange-400">Avi Dwivedi</span>. I build web experiences that feel like magic but run like clockwork.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#projects" className="px-6 py-3 md:px-8 md:py-4 bg-ink dark:bg-white text-white dark:text-ink text-lg font-bold border-2 border-ink dark:border-white neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all flex items-center justify-center gap-2 group">
              Check My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-4 justify-center sm:justify-start text-ink dark:text-white">
              <a href="#" className="p-3 md:p-2 border-2 border-transparent hover:border-ink dark:hover:border-white hover:bg-white dark:hover:bg-stone-800 transition-all rounded-lg"><Github size={24} /></a>
              <a href="#" className="p-3 md:p-2 border-2 border-transparent hover:border-ink dark:hover:border-white hover:bg-white dark:hover:bg-stone-800 transition-all rounded-lg"><Linkedin size={24} /></a>
              <a href="#" className="p-3 md:p-2 border-2 border-transparent hover:border-ink dark:hover:border-white hover:bg-white dark:hover:bg-stone-800 transition-all rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end relative mt-6 md:mt-0"
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-4/5 sm:w-3/4 md:w-full aspect-square max-w-sm md:max-w-md">
            {/* Floating "Sticker" - Mobile Only */}
            <motion.div
              className="md:hidden absolute -top-8 -left-8 rotate-[-12deg] z-20 scale-90 origin-bottom-right"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 1 }}
            >
              <div className="bg-yellow-300 dark:bg-yellow-500 text-ink font-bold font-display px-4 py-2 border-2 border-ink dark:border-white neo-shadow whitespace-nowrap">
                Hello there! 👋
              </div>
            </motion.div>

            {/* Decorative elements behind */}
            <div className="absolute top-4 -right-4 w-full h-full border-2 border-ink dark:border-white bg-orange-400 z-0"></div>
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-ink dark:border-white bg-white dark:bg-stone-800 pattern-dots z-0"></div>

            {/* Main Image Frame */}
            <div className="relative z-10 w-full h-full border-2 border-ink dark:border-white bg-stone-100 dark:bg-stone-900 neo-shadow overflow-hidden group">
              <img
                src="https://picsum.photos/800/800?grayscale"
                alt="Avi Dwivedi"
                className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:mix-blend-normal dark:mix-blend-normal dark:opacity-80"
              />

              {/* Overlay Texture */}
              <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply dark:mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Floating "Card" Element */}
            <motion.div
              className="absolute -bottom-8 -right-4 md:right-auto md:-left-8 bg-white dark:bg-stone-800 p-3 md:p-4 border-2 border-ink dark:border-white neo-shadow z-20 max-w-[160px] md:max-w-[200px]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full border border-ink dark:border-stone-500"></div>
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full border border-ink dark:border-stone-500"></div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full border border-ink dark:border-stone-500"></div>
              </div>
              <div className="font-mono text-[10px] md:text-xs text-stone-500 dark:text-stone-400 mb-1">Current Status:</div>
              <div className="font-bold text-sm md:text-base text-ink dark:text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Intern @takeUforward
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Marquee Scroller at bottom - Z-Index 20 */}
      <div className="absolute bottom-8 md:bottom-10 left-0 w-full rotate-[-2deg] bg-yellow-300 dark:bg-yellow-500 border-y-2 border-ink dark:border-white py-2 md:py-3 overflow-hidden z-20">
        <div className="animate-marquee whitespace-nowrap flex gap-12 font-display font-bold text-lg md:text-xl uppercase tracking-wider text-ink">
          <span>React • TypeScript • Design Systems • Interaction • Accessibility • Performance • </span>
          <span>React • TypeScript • Design Systems • Interaction • Accessibility • Performance • </span>
          <span>React • TypeScript • Design Systems • Interaction • Accessibility • Performance • </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;