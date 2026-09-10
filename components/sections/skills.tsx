import { Squiggle } from "@/components/ui/squiggle"
import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/config/data"

export function Skills() {
  return (
    <section id="skills" className="mb-20">
      <div className="w-fit">
        <h2 className="text-sm font-medium tracking-widest text-muted-foreground uppercase">
          Skills
        </h2>
        <Squiggle />
      </div>
      <div className="mt-8 space-y-8">
        {SKILLS.map((group) => (
          <div key={group.category} className="group">
            <p className="text-xs font-semibold tracking-wider text-muted-foreground/80 uppercase mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {group.skills.map((s) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-500 hover:-translate-y-0.5 shadow-sm bg-background/50 backdrop-blur-sm"
                >
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
