import { Squiggle } from "@/components/ui/squiggle"
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
      <div className="mt-8 space-y-6">
        {PROJECTS.map((p) => (
          <a
            key={p.name}
            href={`https://${(p.link || p.name).toLowerCase()}.whoavidwivedi.work`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative"
          >
            <div className="absolute -inset-x-4 -inset-y-3 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:block lg:group-hover:bg-muted/40 lg:group-hover:drop-shadow-sm" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 font-semibold">
                <span className="relative">
                  <span className="transition-colors duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-emerald-500 text-foreground">
                    {p.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-center scale-x-0 bg-emerald-500/70 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-x-100 motion-reduce:transition-none"
                  />
                </span>
              </span>
              <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground text-pretty">
                {p.desc}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
