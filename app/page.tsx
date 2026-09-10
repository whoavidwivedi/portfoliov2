"use client"

import { motion, type Variants } from "motion/react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Header } from "@/components/sections/header"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Footer } from "@/components/sections/footer"

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
}

export default function Page() {
  return (
    <main className="size-full relative min-h-screen">
      {/* Subtle ambient background glow */}
      <div className="pointer-events-none fixed inset-0 flex justify-center z-[-1]">
        <div className="h-[400px] w-[800px] max-w-full -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px] opacity-50 dark:opacity-20" />
      </div>

      <ThemeToggle />

      <div className="mx-auto max-w-2xl px-6 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Header />
          </motion.div>
          
          <motion.div variants={item}>
            <Experience />
          </motion.div>
          
          <motion.div variants={item}>
            <Projects />
          </motion.div>
          
          <motion.div variants={item}>
            <Skills />
          </motion.div>
          
          <motion.div variants={item}>
            <Footer />
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}