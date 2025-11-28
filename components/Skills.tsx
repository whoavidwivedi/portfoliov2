import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'React 19', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'Frontend', level: 95 },
  { name: 'Next.js', category: 'Frontend', level: 85 },
  { name: 'Node.js', category: 'Backend', level: 80 },
  { name: 'GraphQL', category: 'Backend', level: 75 },
  { name: 'Gemini API', category: 'AI', level: 90 },
  { name: 'Figma', category: 'Tools', level: 80 },
  { name: 'Git', category: 'Tools', level: 90 },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-stone-900 relative border-b-2 border-ink dark:border-white transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12">
           <div className="md:col-span-4">
              <motion.h2 
                className="text-6xl font-black font-display text-ink dark:text-white mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                TOOL<br/>KIT
              </motion.h2>
              <p className="text-lg text-stone-600 dark:text-stone-400 font-medium leading-relaxed">
                 I don't just use tools; I craft solutions. My stack is focused on reliability, speed, and developer experience.
              </p>
           </div>
           
           <div className="md:col-span-8">
              <div className="flex flex-wrap gap-4">
                 {skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                      className={`
                        px-6 py-4 border-2 border-ink dark:border-white text-lg font-bold
                        ${idx % 3 === 0 ? 'bg-orange-100 dark:bg-orange-900 dark:text-white' : idx % 3 === 1 ? 'bg-white dark:bg-stone-800 dark:text-white' : 'bg-stone-800 dark:bg-stone-700 text-white'}
                        neo-shadow cursor-default transition-colors
                      `}
                    >
                       {skill.name}
                    </motion.div>
                 ))}
                 <div className="px-6 py-4 border-2 border-dashed border-stone-300 dark:border-stone-600 text-stone-400 dark:text-stone-500 font-bold text-lg rounded-lg">
                    And always learning...
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;