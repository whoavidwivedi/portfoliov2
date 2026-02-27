'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';

export default function PortfolioClient() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const shouldUseDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(shouldUseDark);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      window.location.href = '/warning';
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const isDevToolsKey =
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'i', 'J', 'j'].includes(e.key)) ||
        (e.ctrlKey && ['U', 'u'].includes(e.key)) ||
        (e.metaKey && e.altKey && ['I', 'i', 'J', 'j'].includes(e.key));

      if (isDevToolsKey) {
        e.preventDefault();
        window.location.href = '/warning';
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="min-h-[100dvh] relative selection:bg-orange-500 selection:text-white dark:selection:text-ink">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <footer className="py-12 bg-ink dark:bg-black text-center text-stone-400 text-sm border-t-4 border-orange-500">
        <div className="mb-4">
          <span className="font-display font-bold text-2xl text-white">Avi.</span>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Avi Dwivedi. Crafted with <span className="text-orange-500">♥</span> and heavy
          borders.
        </p>
      </footer>
    </div>
  );
}
