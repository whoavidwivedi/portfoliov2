"use client"

import { Copy, Mail, Sun, Moon, Monitor, MapPin } from "lucide-react"
import { useState, useSyncExternalStore } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import GitHubActivity from "@/components/ui/github-activity"

function Squiggle() {
  return <div className="h-px w-full bg-orange-300 dark:bg-orange-600" />
}

const THEME_OPTIONS = [
  { key: "light", label: "Light", icon: Sun },
  { key: "dark", label: "Dark", icon: Moon },
  { key: "system", label: "System", icon: Monitor },
] as const

type ThemeKey = (typeof THEME_OPTIONS)[number]["key"]

function ActiveThemeIcon({ theme, className }: { theme: ThemeKey; className?: string }) {
  const Icon = THEME_OPTIONS.find((o) => o.key === theme)?.icon ?? Monitor
  return <Icon className={className} />
}

type Project = {
  name: string
  desc: string
  link?: string
}

const PROJECTS: Project[] = [
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

export default function Page() {
  const [copied, setCopied] = useState(false)
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const { theme, setTheme } = useTheme()

  const activeTheme: ThemeKey =
    theme === "system" || theme === "light" || theme === "dark" ? theme : "system"

  return (
    <div className="size-full">
      <div className="fixed inset-0 -z-10 dot-grid" />
      <div className="mx-auto max-w-2xl px-6 py-24">
        <Tooltip>
          <DropdownMenu>
            <TooltipTrigger
              render={
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Toggle theme"
                      className="fixed top-6 right-6 z-50 rounded-full"
                    >
                      {mounted ? (
                        <ActiveThemeIcon theme={activeTheme} className="size-4" />
                      ) : (
                        <div className="size-4" />
                      )}
                    </Button>
                  }
                />
              }
            />
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup
                value={activeTheme}
                onValueChange={(v) => setTheme(v as ThemeKey)}
              >
                {THEME_OPTIONS.map(({ key, label, icon: Icon }) => (
                  <DropdownMenuRadioItem key={key} value={key}>
                    <Icon />
                    {label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </Tooltip>
        <div>
          <div className="relative mb-20">
            <Image
              src="https://avatars.githubusercontent.com/u/85203267?v=4"
              alt="Avi Dwivedi"
              width={56}
              height={56}
              draggable={false}
              className="mb-5 size-14 rounded-full select-none"
            />
<h1 className="text-4xl font-bold tracking-tight">
              Avi Dwivedi{" "}
              <Button
                variant="outline"
                size="sm"
                nativeButton={false}
                className="align-middle rounded-full"
                render={
                  <a
                    href="https://drive.google.com/file/d/11X4aurZIyXi59lym2Fs8QQwaojPnNe7X/view"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    resume
                  </a>
                }
              />
            </h1>
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
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  Remote
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2">
                <a
                  href="mailto:theavidwivedi@gmail.com"
                  className="flex items-center gap-1.5 transition-colors hover:text-orange-500"
                >
                  <Mail className="size-3.5" />
                  theavidwivedi@gmail.com
                </a>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText("theavidwivedi@gmail.com")
                          setCopied(true)
                          setTimeout(() => setCopied(false), 1500)
                        }}
                        aria-label="Copy email"
                      >
                        <Copy />
                        {copied ? "copied!" : "copy"}
                      </Button>
                    }
                  />
                  <TooltipContent>Copy email</TooltipContent>
                </Tooltip>
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
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.058c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM8.119 20H4.566V9h3.553v11.452z" />
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
          </div>

          <div className="mb-20">
            <div className="w-fit">
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Experience
              </h2>
              <Squiggle />
            </div>
            <div className="mt-6 space-y-8">
              {[
                {
                  title: "Intern @ takeUforward",
                  period: "Sep 2025 — May 2026",
                },
                {
                  title: "Coding Educator @ BrightCHAMPS",
                  period: "Sep 2024 — Feb 2025",
                },
              ].map((item) => (
                <div key={item.title}>
                  <p className="text-base font-medium">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {item.period}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <div className="w-fit">
              <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
                Projects
              </h2>
              <Squiggle />
            </div>
            <div className="mt-6 space-y-6">
              {PROJECTS.map((p) => (
                <div key={p.name}>
                  <a
                    href={`https://${(p.link || p.name).toLowerCase()}.whoavidwivedi.work`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium transition-colors hover:text-orange-500"
                  >
                    {p.name}
                  </a>
                  <p className="mt-1 text-base text-muted-foreground">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mb-20">
            <GitHubActivity username="whoavidwivedi" />
          </div>

          <div className="mb-20">
            <div className="w-fit">
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
                <Badge key={s} variant="secondary">
                  {s}
                </Badge>
              ))}
            </div>
          </div>

          <div className="border-t py-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <p>&copy; 2026 Avi Dwivedi.</p>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon-sm"
                  nativeButton={false}
                  render={
                    <a
                      href="https://github.com/whoavidwivedi"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.258.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  }
                />
                <Button
                  variant="ghost"
                  size="icon-sm"
                  nativeButton={false}
                  render={
                    <a
                      href="https://linkedin.com/in/whoavidwivedi"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.058c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM8.119 20H4.566V9h3.553v11.452z" />
                      </svg>
                    </a>
                  }
                />
                <Button
                  variant="ghost"
                  size="icon-sm"
                  nativeButton={false}
                  render={
                    <a
                      href="https://x.com/whoavidwivedi"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-4"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}