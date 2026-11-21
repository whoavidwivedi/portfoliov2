import { cn } from "cn"

export function Squiggle({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-px w-full rounded-full bg-emerald-300 dark:bg-emerald-600",
        className
      )}
    />
  )
}
