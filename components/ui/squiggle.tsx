export function Squiggle({ className }: { className?: string } = {}) {
  return (
    <svg
      viewBox="0 0 100 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className={`h-1.5 w-full text-emerald-400/90 dark:text-emerald-500/80 ${className ?? ""}`}
      aria-hidden="true"
    >
      <path
        d="M0 3.5 Q 12.5 0.8, 25 3.5 T 50 3.5 T 75 3.5 T 100 3.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}
