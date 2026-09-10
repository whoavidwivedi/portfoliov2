import { Sun, Moon, Monitor } from "lucide-react"

export const THEME_OPTIONS = [
  { key: "light", label: "Light", icon: Sun },
  { key: "dark", label: "Dark", icon: Moon },
  { key: "system", label: "System", icon: Monitor },
] as const

export type ThemeKey = (typeof THEME_OPTIONS)[number]["key"]

export type Project = {
  name: string
  desc: string
  link?: string
}

export const SKILLS = [
  {
    category: "Languages",
    skills: ["C++", "Go", "HTML/CSS", "Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["Framer Motion", "Next.js", "Node.js", "React", "Tailwind CSS"],
  },
  {
    category: "Databases & Backend",
    skills: ["PostgreSQL", "Supabase"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Vercel"],
  },
]

export const PROJECTS: Project[] = [
  {
    name: "Better Space",
    desc: "High-fidelity, zero-account real-time audio spaces built with Next.js, LiveKit, and Base UI.",
    link: "space",
  },
  {
    name: "Gitenius",
    desc: "AI-powered GitHub profile analyzer and developer portfolio generator.",
  },
  {
    name: "pricing-section",
    desc: "Interactive pricing section UI built with Next.js and Framer Motion.",
  },
  {
    name: "Time",
    desc: "Real-time collaborative whiteboard for conversations — no login, no database.",
  },
  {
    name: "scratch-the-doubt",
    desc: "Real-time collaborative whiteboard for learners to solve doubts together.",
  },
  {
    name: "wordloom-studio",
    desc: "Web-based studio generating short, pronounceable names from real English letter patterns.",
  },
]
