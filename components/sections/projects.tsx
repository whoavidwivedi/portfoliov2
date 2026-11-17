import { ArrowUpRight } from "lucide-react"
import { Squiggle } from "@/components/ui/squiggle"
import { Badge } from "@/components/ui/badge"
import {
  CodeBlock,
  CodeBlockActions,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockHeader,
  CodeBlockTitle,
} from "@/components/ui/code-block"
import { Command } from "lucide-react"
import { PROJECTS } from "@/config/data"

export function Projects() {
  return (
    <section id="projects" className="mb-20">
      <div className="w-fit">
        <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Projects
        </h2>
        <Squiggle />
      </div>
      <div className="mt-8 space-y-10">
        {PROJECTS.map((p) => {
          const href = p.link?.startsWith("http")
            ? p.link
            : `https://${(p.link || p.name).toLowerCase()}.whoavidwivedi.work`

          return (
            <div key={p.name} className="group relative block">
              <div className="absolute -inset-x-4 -inset-y-3 z-0 hidden rounded-xl lg:block" />
              <div className="relative z-10">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-center gap-1.5 font-semibold"
                >
                  <span className="relative">
                    <span className="text-foreground transition-colors duration-150 [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:text-emerald-500">
                      {p.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-center scale-x-0 bg-emerald-500/70 transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:scale-x-100"
                    />
                  </span>
                  <ArrowUpRight className="size-3.5 text-muted-foreground/60 transition-transform duration-200 [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:translate-x-0.5 [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:group-hover/link:text-emerald-500" />
                </a>
                <p className="mt-2 block text-sm leading-relaxed text-pretty text-muted-foreground">
                  {p.desc}
                </p>
                <p className="mt-2 block text-sm leading-relaxed font-medium tracking-tight text-pretty text-muted-foreground/70">
                  {p.uiUxDesc}
                </p>

                {p.installCommand && (
                  <div className="mt-3.5 max-w-xl">
                    <CodeBlock size="sm">
                      <CodeBlockHeader>
                        <CodeBlockTitle>
                          <Command className="size-3 text-emerald-500/80" />
                          Quick install (macOS)
                        </CodeBlockTitle>
                        <CodeBlockActions>
                          <CodeBlockCopyButton value={p.installCommand} />
                        </CodeBlockActions>
                      </CodeBlockHeader>
                      <CodeBlockContent wrap>{p.installCommand}</CodeBlockContent>
                    </CodeBlock>
                  </div>
                )}

                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Badge
                      key={s}
                      variant="outline"
                      className="border-border/60 text-muted-foreground"
                    >
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
