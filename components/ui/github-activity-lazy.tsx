"use client"

import dynamic from "next/dynamic"

// Below-the-fold and animation-heavy: keep `motion` out of the initial load.
// ponytail: placeholder height mirrors the card (p-4 + heading + 7 rows of 11px
// cells) so nothing shifts when it swaps in.
export const GitHubActivityLazy = dynamic(
  () => import("@/components/ui/github-activity").then((m) => m.GitHubActivity),
  {
    ssr: false,
    loading: () => (
      <div
        aria-hidden
        className="h-[190px] w-full rounded-[28px] border border-border/50 bg-white p-4 dark:bg-black"
      />
    ),
  }
)
