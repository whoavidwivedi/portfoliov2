"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { GitHubActivity } from "@/components/ui/github-activity"
import { PROJECTS, SKILLS } from "@/config/data"

const EXPERIENCES = [
  {
    role: "Intern",
    company: "takeUforward",
    period: "Sep 2025 — May 2026",
  },
  {
    role: "Coding Educator",
    company: "BrightCHAMPS",
    period: "Sep 2024 — Feb 2025",
  },
]

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/whoavidwivedi" },
  { label: "LinkedIn", href: "https://linkedin.com/in/whoavidwivedi" },
  { label: "X", href: "https://x.com/whoavidwivedi" },
]

function getProjectUrl(project: (typeof PROJECTS)[number]) {
  if (project.href) return project.href
  if (project.link) return `https://${project.link}.whoavidwivedi.work`
  return undefined
}

function getHostName(url?: string) {
  if (!url) return null
  try {
    const host = new URL(url).hostname.replace("www.", "")
    return host
  } catch {
    return null
  }
}

export default function Page() {
  return (
    <main className="mx-auto max-w-xl px-6 py-20 sm:py-28">
      {/* Theme toggle */}
      <ThemeToggle className="fixed top-5 right-5 z-50 size-8 rounded-lg border border-border bg-background hover:bg-muted cursor-pointer transition-colors active:scale-[0.96] [&_svg:not([class*='size-'])]:size-4" />

      {/* ─── Header ─── */}
      <header className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <Image
            src="https://avatars.githubusercontent.com/u/85203267?v=4"
            alt="Avi Dwivedi"
            width={44}
            height={44}
            draggable={false}
            className="size-11 rounded-full outline outline-1 outline-black/[0.08] dark:outline-white/[0.08] outline-offset-0"
          />
          <div>
            <h1 className="text-lg font-semibold tracking-[-0.02em] text-foreground text-balance">
              Avi Dwivedi
            </h1>
            <p className="text-sm text-muted-foreground">
              Software Developer
            </p>
          </div>
        </div>

        <p className="text-[15px] leading-[1.7] text-muted-foreground text-pretty">
          A developer who enjoys building useful things, teaching what I know,
          and learning what I don&rsquo;t. Simple code, clear communication,
          and tools that actually make a difference.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <a
            href="mailto:theavidwivedi@gmail.com"
            className="text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/50"
          >
            theavidwivedi@gmail.com
          </a>
          <a
            href="https://drive.google.com/file/d/11X4aurZIyXi59lym2Fs8QQwaojPnNe7X/view"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-foreground/70 hover:text-foreground transition-colors underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/50"
          >
            Resume
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </header>

      {/* ─── Experience ─── */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-foreground mb-6 text-balance">
          Experience
        </h2>
        <div className="space-y-5">
          {EXPERIENCES.map((item) => (
            <div
              key={item.company}
              className="flex items-baseline justify-between gap-4"
            >
              <p className="text-[15px] text-foreground">
                <span className="font-medium">{item.role}</span>
                <span className="text-muted-foreground">{" "}at {item.company}</span>
              </p>
              <span className="text-xs text-muted-foreground/70 font-mono tabular-nums shrink-0">
                {item.period}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-foreground mb-4 text-balance">
          Projects
        </h2>
        <div className="space-y-1">
          {PROJECTS.map((project) => {
            const url = getProjectUrl(project)
            const host = getHostName(url)
            const Wrapper = url ? "a" : "div"
            const linkProps = url
              ? {
                  href: url,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                }
              : {}

            return (
              <Wrapper
                key={project.name}
                {...linkProps}
                className="group block -mx-3 px-3 py-3 rounded-xl hover:bg-muted/50 dark:hover:bg-muted/30 transition-all duration-150 active:scale-[0.99]"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[15px] font-medium text-foreground group-hover:text-foreground transition-colors">
                    {project.name}
                  </span>
                  {url && (
                    <span className="inline-flex items-center gap-1 shrink-0">
                      {host && (
                        <span className="text-[11px] font-mono text-muted-foreground/50 group-hover:text-muted-foreground/80 transition-colors hidden sm:inline">
                          {host}
                        </span>
                      )}
                      <ArrowUpRight className="size-3.5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150" />
                    </span>
                  )}
                </div>
                <p className="mt-1 text-[13.5px] text-muted-foreground leading-relaxed text-pretty">
                  {project.desc}
                </p>
              </Wrapper>
            )
          })}
        </div>
      </section>

      {/* ─── Activity ─── */}
      <section className="mb-16">
        <div className="flex items-baseline justify-between mb-4">
          <h2 className="text-sm font-medium text-foreground text-balance">
            Activity
          </h2>
          <a
            href="https://github.com/whoavidwivedi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground/70 hover:text-foreground transition-colors font-mono"
          >
            github.com/whoavidwivedi
          </a>
        </div>
        <div className="overflow-x-auto py-1">
          <GitHubActivity username="whoavidwivedi" showMonths hideHeading />
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section className="mb-16">
        <h2 className="text-sm font-medium text-foreground mb-6 text-balance">
          Skills
        </h2>
        <div className="space-y-3.5">
          {SKILLS.map((group) => (
            <div key={group.category} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-xs text-muted-foreground/70 font-mono shrink-0 sm:w-44">
                {group.category}
              </span>
              <span className="text-[15px] text-foreground/90 text-pretty">
                {group.skills.join(", ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-border/60 pt-8 pb-4 flex items-center justify-between text-xs text-muted-foreground/70">
        <span>&copy; {new Date().getFullYear()} Avi Dwivedi</span>
        <nav className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </footer>
    </main>
  )
}