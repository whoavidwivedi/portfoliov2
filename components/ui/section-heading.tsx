import type { ReactNode } from "react"
import { Squiggle } from "@/components/ui/squiggle"

type SectionHeadingProps = {
  children: ReactNode
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="w-fit">
      <h2 className="text-sm font-semibold tracking-widest text-foreground uppercase">
        {children}
      </h2>
      <Squiggle />
    </div>
  )
}
