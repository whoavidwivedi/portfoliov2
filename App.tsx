import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Warning from './components/Warning';

const Portfolio: React.FC<{ isDark: boolean; toggleTheme: () => void }> = ({ isDark, toggleTheme }) => {
  return (
    <div className={`min-h-[100dvh] relative selection:bg-orange-500 selection:text-white dark:selection:text-ink`}>
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
        <p>&copy; {new Date().getFullYear()} Avi Dwivedi. Crafted with <span className="text-orange-500">♥</span> and heavy borders.</p>
      </footer>
    </div>
  );
};

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

  const navigate = useNavigate();
  const location = useLocation();

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

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      if (location.pathname !== '/warning') {
        navigate('/warning');
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        if (location.pathname !== '/warning') navigate('/warning');
      }
      // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        if (location.pathname !== '/warning') navigate('/warning');
      }
      if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        if (location.pathname !== '/warning') navigate('/warning');
      }
      // Mac: Cmd+Option+I, Cmd+Option+J
      if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        if (location.pathname !== '/warning') navigate('/warning');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [navigate, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Portfolio isDark={isDark} toggleTheme={toggleTheme} />} />
      <Route path="/warning" element={<Warning isDark={isDark} toggleTheme={toggleTheme} />} />
    </Routes>
  );
};

export default App;