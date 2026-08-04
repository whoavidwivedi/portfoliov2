"use client"

import { Copy, Mail, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

function Squiggle() {
  return <div className="h-px w-full bg-orange-300 dark:bg-orange-600" />
}

type Project = {
  name: string
  desc: string
  link?: string
}

const PROJECTS: Project[] = [
  {
    name: "Better Space",
    desc: "Better Space project.",
    link: "space",
  },
  {
    name: "Gitenius",
    desc: "Git-powered portfolio and project showcase.",
  },
  {
    name: "pricing-section",
    desc: "Pricing section UI component built with Next.js.",
  },
  { name: "Time", desc: "A time-related utility or app." },
  {
    name: "scratch-the-doubt",
    desc: "Doubt-solving platform for students.",
  },
  {
    name: "wordloom-studio",
    desc: "Word-like name generator from English letter patterns.",
  },
]

export default function Page() {
  const [copied, setCopied] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="size-full min-h-screen selection:bg-orange-400 selection:text-white dark:selection:bg-orange-600">
      <div className="fixed inset-0 -z-10 dot-grid opacity-50 dark:opacity-40" />
      <div className="mx-auto max-w-2xl px-6 py-24 sm:py-32">
        <button
          onClick={() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
            setShowHint(true)
            setTimeout(() => setShowHint(false), 2000)
          }}
          className="group fixed top-6 right-6 z-50 flex cursor-pointer items-center justify-center rounded-full border border-muted-foreground/30 bg-background p-2 text-muted-foreground transition-colors hover:border-orange-500 hover:text-orange-500"
          aria-label="Toggle theme"
        >
          {mounted &&
            (resolvedTheme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            ))}
          {!mounted && <div className="size-4" />}

          <span
            className={`absolute top-2 right-12 cursor-default text-xs whitespace-nowrap text-muted-foreground/50 transition-opacity ${showHint ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
          >
            press <kbd className="rounded border px-1 text-xs">D</kbd> to toggle
            theme
          </span>
        </button>
        <div className="flex flex-col gap-24">
          <section className="animate-fade-in-up [animation-delay:100ms] [animation-fill-mode:both]">
            <img
              src="https://avatars.githubusercontent.com/u/85203267?v=4"
              alt="Avi Dwivedi"
              draggable={false}
              className="mb-6 size-16 rounded-full ring-2 ring-orange-500/20 select-none hover:ring-orange-500/50 transition-all duration-300"
            />
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <h1 className="text-4xl font-bold tracking-tight">
                Avi Dwivedi
              </h1>
              <a
                href="https://drive.google.com/file/d/11X4aurZIyXi59lym2Fs8QQwaojPnNe7X/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-medium text-orange-600 dark:text-orange-400 transition-all hover:bg-orange-500/20 hover:border-orange-500/30 active:scale-95"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-3"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                Resume
              </a>
            </div>
            <p className="mt-2 text-base text-muted-foreground">
              focusing &middot; ex-intern @takeUforward &middot; ex-educator
              @BrightCHAMPS
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A developer who enjoys building useful things, teaching what I
              know, and learning what I don&rsquo;t. I believe in simple code,
              clear communication, and creating tools that actually make a
              difference.
            </p>
            <div className="mt-5 text-sm text-muted-foreground">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <span className="flex items-center gap-1.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="size-3.5"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Remote
                </span>
                <a
                  href="mailto:theavidwivedi@gmail.com"
                  className="flex items-center gap-1.5 transition-colors hover:text-orange-500"
                >
                  <Mail className="size-3.5" />
                  theavidwivedi@gmail.com
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("theavidwivedi@gmail.com")
                    setCopied(true)
                    setTimeout(() => setCopied(false), 1500)
                  }}
                  className="inline-flex items-center gap-1 rounded-full border border-muted-foreground/30 px-2 py-0.5 text-xs text-muted-foreground transition-colors hover:border-orange-500 hover:text-orange-500"
                >
                  <Copy className="size-3" />
                  {copied ? "copied!" : "copy"}
                </button>
              </div>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
                <a
                  href="https://github.com/whoavidwivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-orange-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3.5"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  github.com/whoavidwivedi
                </a>
                <a
                  href="https://linkedin.com/in/whoavidwivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-orange-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3.5"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  linkedin.com/in/whoavidwivedi
                </a>
                <a
                  href="https://x.com/whoavidwivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 transition-colors hover:text-orange-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3.5"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  x.com/whoavidwivedi
                </a>
              </div>
            </div>
          </section>

          <section className="animate-fade-in-up [animation-delay:300ms] [animation-fill-mode:both]">
            <div className="w-fit mb-8">
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Experience
              </h2>
              <Squiggle />
            </div>
            <div className="mt-6 relative border-l border-muted-foreground/20 ml-3 space-y-8">
              {[
                {
                  title: "Intern",
                  company: "takeUforward",
                  period: "Sep 2025 — May 2026",
                },
                {
                  title: "Coding Educator",
                  company: "BrightCHAMPS",
                  period: "Sep 2024 — Feb 2025",
                },
              ].map((item) => (
                <div key={item.title + item.company} className="relative pl-6">
                  <div className="absolute -left-[5px] top-2 size-2.5 rounded-full border-2 border-background bg-orange-400 dark:bg-orange-600 ring-2 ring-muted-foreground/20" />
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="text-base font-medium">
                      {item.title} <span className="text-orange-500/80">@ {item.company}</span>
                    </p>
                    <p className="mt-1 sm:mt-0 text-xs text-muted-foreground">
                      {item.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="animate-fade-in-up [animation-delay:500ms] [animation-fill-mode:both]">
            <div className="w-fit mb-8">
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Projects
              </h2>
              <Squiggle />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PROJECTS.map((p) => (
                <a
                  key={p.name}
                  href={`https://${(p.link || p.name).toLowerCase()}.whoavidwivedi.work`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col justify-between rounded-xl border border-muted-foreground/20 bg-muted/20 p-5 transition-all hover:-translate-y-1 hover:border-orange-500/50 hover:bg-muted/40 hover:shadow-lg hover:shadow-orange-500/5"
                >
                  <div>
                    <h3 className="text-base font-medium group-hover:text-orange-500 transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center text-xs font-medium text-orange-500 opacity-0 transition-opacity group-hover:opacity-100">
                    View Project <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section className="animate-fade-in-up [animation-delay:700ms] [animation-fill-mode:both]">
            <div className="w-fit mb-8">
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Skills
              </h2>
              <Squiggle />
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "C",
                "C++",
                "Python",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "Git",
                "GitHub",
              ].map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center rounded-md border border-muted-foreground/20 bg-muted/30 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-orange-500/50 hover:bg-orange-500/10 hover:text-orange-600 dark:hover:text-orange-400 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </section>

          <footer className="animate-fade-in-up [animation-delay:900ms] [animation-fill-mode:both] border-t py-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p>&copy; 2026 Avi Dwivedi.</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/whoavidwivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-orange-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/whoavidwivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-orange-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/whoavidwivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-orange-500"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}
