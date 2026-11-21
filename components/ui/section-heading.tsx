import type { ReactNode } from "react"
import { cn } from "cn"
import { Squiggle } from "@/components/ui/squiggle"

type SectionHeadingProps = {
  children: ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <div className={cn("w-full", className)}>
      <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
        {children}
        <span className="text-emerald-500">.</span>
      </h2>
      <Squiggle className="mt-3 bg-linear-to-r from-emerald-500/70 via-emerald-300/40 to-transparent dark:from-emerald-400/70 dark:via-emerald-600/40" />
    </div>
  )
}
