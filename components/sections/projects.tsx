"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

import { Squiggle } from "@/components/ui/squiggle"
import { PROJECTS } from "@/config/data"
import { playTactileSound } from "@/lib/sound"

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="mb-20 scroll-mt-28">
      <div className="w-fit mb-6">
        <h2 className="text-xs font-semibold tracking-widest text-muted-foreground/90 uppercase">
          Projects
        </h2>
        <Squiggle className="mt-1" />
      </div>

      <div
        className="relative flex flex-col space-y-2 -mx-3"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {PROJECTS.map((p, index) => {
          const url = `https://${(p.link || p.name).toLowerCase()}.whoavidwivedi.work`
          const displayDomain = `${(p.link || p.name).toLowerCase()}.whoavidwivedi.work`

          return (
            <a
              key={p.name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onClick={() => playTactileSound("click")}
              className="group relative block p-3.5 rounded-xl transition-all duration-150 active:scale-[0.99] select-none"
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="project-hover-pill"
                  className="absolute inset-0 rounded-xl bg-muted/40 border border-border/50 -z-10 shadow-2xs pointer-events-none"
                  transition={{ type: "spring", duration: 0.3, bounce: 0 }}
                />
              )}

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-foreground text-sm sm:text-base">
                    <span className="relative">
                      <span className="group-hover:text-emerald-500 transition-colors duration-150">
                        {p.name}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-3.5 text-muted-foreground/50 transition-transform duration-150 ease-out group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>

                  <span className="text-[11px] font-mono text-muted-foreground/50 group-hover:text-muted-foreground/80 transition-colors truncate hidden sm:inline-block">
                    {displayDomain}
                  </span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground text-pretty max-w-xl">
                  {p.desc}
                </p>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
