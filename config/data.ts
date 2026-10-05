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
  uiUxDesc: string
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
    desc: "Zero-account real-time audio rooms - spatial audio, hand-raise, emoji reactions.",
    uiUxDesc: "Dark-first, emerald accents. Tactile mic toggle, reaction bursts. Spatial avatar layout. No accounts, just a link.",
    link: "space",
  },
  {
    name: "WordLoom Studio",
    desc: "Brand names from English phonotactics - length slider, vibe toggles, instant results.",
    uiUxDesc: "One screen: 4-8 chars, tech/friendly/bold. Pronunciation, domain check, copy. Local history persists.",
    link: "wordloom-studio",
  },
  {
    name: "Pricing Page",
    desc: "Animated tier cards, shared usage slider, progressive feature matrix.",
    uiUxDesc: "Spring hover, live price updates. Scroll-reveal checkmarks. Emerald CTAs, zinc base. Reduced-motion safe. 360px+.",
    link: "pricing-section",
  },
]