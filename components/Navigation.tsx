import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-3 md:py-6'}`}>
      {/* Background Layer - Handles blur and styles without trapping fixed children */}
      <div className={`absolute inset-0 -z-10 transition-all duration-300 ${isScrolled ? 'bg-paper/90 dark:bg-dark-paper/90 backdrop-blur-md shadow-md border-b-2 border-ink dark:border-white' : 'bg-transparent'}`} />

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-10">
        <a href="#hero" className="font-display font-bold text-2xl tracking-tight text-ink dark:text-white border-2 border-transparent hover:border-ink dark:hover:border-white hover:bg-orange-400 hover:text-white px-2 -ml-2 transition-all transform hover:-rotate-2">
          Avi<span className="text-orange-500 hover:text-white">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-display font-bold text-lg text-ink dark:text-stone-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-0 left-0 w-0 h-3 bg-orange-200/50 dark:bg-orange-500/30 -z-10 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="p-2 border-2 border-ink dark:border-white rounded-full bg-white dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 transition-colors neo-shadow hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} className="text-orange-400" /> : <Moon size={20} className="text-ink" />}
          </button>

          <a href="#contact" className="px-5 py-2 bg-ink dark:bg-white text-white dark:text-ink font-bold border-2 border-ink dark:border-white hover:bg-orange-500 dark:hover:bg-orange-400 hover:text-white transition-all neo-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle & Menu */}
        <div className="md:hidden flex gap-4 items-center">
          <button
            onClick={toggleTheme}
            className="p-2 border-2 border-ink dark:border-white rounded-full bg-white dark:bg-stone-800 text-ink dark:text-white active:translate-x-[1px] active:translate-y-[1px]"
          >
            {isDark ? <Sun size={20} className="text-orange-400" /> : <Moon size={20} />}
          </button>
          <button
            className="text-ink dark:text-white p-1 border-2 border-transparent hover:border-ink dark:hover:border-white rounded-md transition-all"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-paper/95 dark:bg-dark-paper/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center paper-texture"
          >
            <button
              className="absolute top-6 right-6 p-2 border-2 border-ink dark:border-white rounded-full hover:bg-orange-400 transition-colors text-ink dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col gap-8 text-center">
              {links.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-4xl sm:text-5xl font-black text-ink dark:text-white hover:text-orange-500 transition-colors underline decoration-4 decoration-orange-200 dark:decoration-orange-800"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;