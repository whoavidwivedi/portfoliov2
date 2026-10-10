import { Squiggle } from "@/components/ui/squiggle"
import { Badge } from "@/components/ui/badge"
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
      <div className="mt-8 space-y-8">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={`https://${(p.link || p.name).toLowerCase()}.whoavidwivedi.work`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
          >
            <div className="absolute -inset-x-4 -inset-y-3 z-0 hidden rounded-xl lg:block" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 font-semibold">
                <span className="relative">
                  <span className="text-foreground [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-emerald-500">
                    {p.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-center scale-x-0 bg-emerald-500/70 transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-x-100"
                  />
                </span>
              </span>
              <p className="mt-2 block text-sm leading-relaxed text-pretty text-muted-foreground">
                {p.desc}
              </p>
              <p className="mt-2 block text-sm leading-relaxed font-medium tracking-tight text-pretty text-muted-foreground/70">
                {p.uiUxDesc}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
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
          </a>
        ))}
      </div>
    </section>
  )
}
