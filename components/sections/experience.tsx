import { Squiggle } from "@/components/ui/squiggle"

export function Experience() {
  return (
    <section id="experience" className="mb-20">
      <div className="w-fit">
        <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Experience
        </h2>
        <Squiggle />
      </div>
      <div className="mt-8 space-y-10">
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
          <div key={item.title} className="group relative">
            <div className="absolute -inset-x-4 -inset-y-3 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:block lg:group-hover:bg-muted/40 lg:group-hover:drop-shadow-sm" />
            <div className="relative z-10">
              <p className="text-base font-semibold text-foreground">{item.title}</p>
              <p className="mt-1 text-sm text-muted-foreground font-medium">
                {item.period}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
