import { Squiggle } from "@/components/ui/squiggle"

const EXPERIENCES = [
  {
    title: "Intern @ takeUforward",
    period: "Sep 2025 — May 2026",
  },
  {
    title: "Coding Educator @ BrightCHAMPS",
    period: "Sep 2024 — Feb 2025",
  },
]

export function Experience() {
  return (
    <section id="experience" className="mb-20 scroll-mt-28">
      <div className="w-fit mb-6">
        <h2 className="text-xs font-semibold tracking-widest text-muted-foreground/90 uppercase">
          Experience
        </h2>
        <Squiggle className="mt-1" />
      </div>

      <div className="relative border-l border-border/60 ml-2 pl-6 space-y-6">
        {EXPERIENCES.map((item) => (
          <div key={item.title} className="group relative -my-1 p-2 rounded-xl transition-colors duration-150 hover:bg-muted/30">
            {/* Timeline node dot */}
            <span
              className="absolute -left-[30px] top-3.5 size-2 rounded-full bg-border ring-4 ring-background group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-150"
              aria-hidden="true"
            />

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <p className="text-base font-semibold text-foreground tracking-tight group-hover:text-foreground">
                {item.title}
              </p>
              <span className="text-xs text-muted-foreground/80 font-mono tabular-nums shrink-0">
                {item.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
