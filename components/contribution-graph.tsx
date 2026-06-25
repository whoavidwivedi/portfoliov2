"use client"

import { useEffect, useRef, useState } from "react"

type Day = { date: string; count: number; level: number }

const LEVEL = [
  "bg-muted",
  "bg-orange-200 dark:bg-orange-900",
  "bg-orange-400 dark:bg-orange-700",
  "bg-orange-500 dark:bg-orange-500",
  "bg-orange-600 dark:bg-orange-400",
]

function getMonday(d: Date) {
  const date = new Date(d)
  const day = date.getDay()
  date.setDate(date.getDate() - (day === 0 ? 6 : day - 1))
  return date
}

export default function ContributionGraph() {
  const [days, setDays] = useState<Day[]>([])
  const [total, setTotal] = useState(0)
  const [tip, setTip] = useState<{ text: string; x: number; y: number } | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch("/api/contributions")
      .then((r) => r.json())
      .then((d) => {
        setTotal(d.totalCount)
        if (d.days) setDays(d.days)
      })
  }, [])

  const updateScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.addEventListener("scroll", updateScroll)
    updateScroll()
    return () => el.removeEventListener("scroll", updateScroll)
  }, [days])

  if (!days.length) return null

  const today = new Date()
  const monday = getMonday(today)
  const dayMap = new Map(days.map((d) => [d.date, d]))

  const cells: (Day | null)[] = []
  const cursor = new Date(monday)
  cursor.setDate(cursor.getDate() - 364)
  while (cursor <= today) {
    const key = cursor.toISOString().slice(0, 10)
    cells.push(dayMap.get(key) ?? null)
    cursor.setDate(cursor.getDate() + 1)
  }

  const cols = Math.ceil(cells.length / 7)
  const size = 10
  const gap = 3

  return (
    <div>
      <p className="mb-3 text-sm text-muted-foreground">
        {total.toLocaleString()} contributions in the last year
      </p>
      <div className="relative">
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          onMouseLeave={() => setTip(null)}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, ${size}px)`,
              gridTemplateRows: `repeat(7, ${size}px)`,
              gap: `${gap}px`,
            }}
          >
            {cells.map((cell, i) => (
              <div
                key={i}
                className={`relative ${cell ? LEVEL[cell.level] : ""}`}
                onMouseEnter={(e) => {
                  if (!cell) return
                  const rect = (e.target as HTMLElement).getBoundingClientRect()
                  setTip({
                    text: `${cell.count} contribution${cell.count === 1 ? "" : "s"} on ${cell.date}`,
                    x: rect.left + rect.width / 2,
                    y: rect.top - 8,
                  })
                }}
              />
            ))}
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent transition-opacity duration-200"
          style={{ opacity: canScrollRight ? 1 : 0 }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent transition-opacity duration-200"
          style={{ opacity: canScrollLeft ? 1 : 0 }}
        />
      </div>
      {tip && (
        <div
          className="pointer-events-none fixed z-50 -translate-x-1/2 rounded-md border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-sm"
          style={{ left: tip.x, top: tip.y }}
        >
          {tip.text}
        </div>
      )}
    </div>
  )
}
