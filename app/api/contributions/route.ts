import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const [contribRes, eventsRes] = await Promise.all([
      fetch("https://github.com/users/whoavidwivedi/contributions", {
        next: { revalidate: 3600 },
      }),
      fetch("https://api.github.com/users/whoavidwivedi/events?per_page=100", {
        headers: { Accept: "application/vnd.github.v3+json" },
        next: { revalidate: 600 },
      }),
    ])

    const html = await contribRes.text()

    const dateRegex = /data-date="(\d{4}-\d{2}-\d{2})"/g
    const levelRegex = /data-level="(\d)"/g

    const dates = [...html.matchAll(dateRegex)].map((m) => m[1])
    const levels = [...html.matchAll(levelRegex)].map((m) => parseInt(m[1]))

    const totalMatch = html.match(/(\d+)\s*contributions?\s+in the last year/)
    const totalCount = totalMatch ? parseInt(totalMatch[1]) : 0

    const days = dates.map((date, i) => ({
      date,
      count: levels[i] ?? 0,
      level: levels[i] ?? 0,
    }))

    const reposByDate: Record<string, string[]> = {}
    if (eventsRes.ok) {
      const events = await eventsRes.json()
      for (const event of events) {
        if (event.type === "PushEvent" || event.type === "CreateEvent" || event.type === "PullRequestEvent") {
          const date = event.created_at?.slice(0, 10)
          const repo = event.repo?.name
          if (date && repo) {
            if (!reposByDate[date]) reposByDate[date] = []
            if (!reposByDate[date].includes(repo)) reposByDate[date].push(repo)
          }
        }
      }
    }

    return NextResponse.json({ totalCount, days, reposByDate })
  } catch {
    return NextResponse.json({ totalCount: 0, days: [], reposByDate: {} }, { status: 500 })
  }
}
