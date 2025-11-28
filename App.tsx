import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen relative selection:bg-orange-500 selection:text-white dark:selection:text-ink`}>
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <footer className="py-12 bg-ink dark:bg-black text-center text-stone-400 text-sm border-t-4 border-orange-500">
        <div className="mb-4">
             <span className="font-display font-bold text-2xl text-white">Avi.</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Avi Dwivedi. Crafted with <span className="text-orange-500">♥</span> and heavy borders.</p>
      </footer>

      <ChatBot />
    </div>
  );
};

export default App;