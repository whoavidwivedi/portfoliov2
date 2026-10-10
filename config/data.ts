export type Project = {
  name: string
  desc: string
  uiUxDesc: string
  stack: string[]
  link?: string
}

export const SKILLS = [
  {
    category: "Real-time & Audio",
    skills: ["WebRTC", "LiveKit", "Krisp AI"],
  },
  {
    category: "Frontend",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Base UI",
      "Motion",
      "shadcn/ui",
    ],
  },
  {
    category: "Backend & Data",
    skills: ["Node.js", "Server Actions", "PostgreSQL", "Supabase"],
  },
  {
    category: "Tooling",
    skills: ["Git", "GitHub", "Vercel", "Bun", "Turborepo", "Postman"],
  },
]

export const PROJECTS: Project[] = [
  {
    name: "Better Space",
    desc: "Zero-account WebRTC voice rooms built on LiveKit - Krisp AI noise suppression, text chat, emoji reactions.",
    uiUxDesc:
      "Hosts grant and revoke the mic, mute, kick and promote co-hosts. Rooms are destroyed when the last person leaves - no history, no recordings.",
    stack: [
      "LiveKit",
      "Krisp AI",
      "Next.js",
      "React",
      "Base UI",
      "Tailwind CSS",
      "Bun",
    ],
    link: "space",
  },
  {
    name: "WordLoom Studio",
    desc: "Generates short, pronounceable brand names from real English letter patterns learned from 100k+ CMUdict words.",
    uiUxDesc:
      "Runs the Wordloom engine server-side. Filter by length, prefix, suffix and substring; real words come back with their WordNet definition.",
    stack: [
      "Wordloom",
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Motion",
      "Turborepo",
    ],
    link: "wordloom-studio",
  },
]
