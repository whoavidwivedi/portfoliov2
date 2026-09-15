import { Squiggle } from "@/components/ui/squiggle"
import { Badge } from "@/components/ui/badge"
import { SKILLS } from "@/config/data"

export function Skills() {
  return (
    <section id="skills" className="mb-20 scroll-mt-28">
      <div className="w-fit mb-6">
        <h2 className="text-xs font-semibold tracking-widest text-muted-foreground/90 uppercase">
          Skills
        </h2>
        <Squiggle className="mt-1" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SKILLS.map((group) => (
          <div
            key={group.category}
            className="p-4 rounded-xl border border-border/40 bg-card/20 backdrop-blur-xs flex flex-col gap-3"
          >
            <p className="text-xs font-semibold tracking-wider text-muted-foreground/80 uppercase">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((s) => (
                <Badge
                  key={s}
                  variant="outline"
                  className="bg-muted/30 border-border/60 hover:bg-muted/70 hover:border-border hover:text-foreground transition-all duration-150 rounded-md font-medium text-xs px-2.5 py-1 select-none active:scale-[0.96]"
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
