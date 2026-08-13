import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

const USERNAME = "whoavidwivedi"

type ApiDay = {
  date: string
  count: number
  level: number
}

type GqlDay = {
  date: string
  contributionCount: number
}

type GqlWeek = {
  contributionDays: GqlDay[]
}

function levelForCount(count: number) {
  if (count <= 0) return 0
  if (count <= 3) return 1
  if (count <= 6) return 2
  if (count <= 9) return 3
  return 4
}

// GitHub's contribution calendar lags real activity by hours. The Events API
// is realtime, so patch today's cell so fresh commits show immediately.
const TODAY = new Date().toISOString().slice(0, 10)

function patchRealtimeToday(days: ApiDay[], realtimeCount: number): ApiDay[] {
  if (realtimeCount <= 0) return days

  const index = days.findIndex((d) => d.date === TODAY)
  if (index >= 0) {
    const day = days[index]
    const count = Math.max(day.count, realtimeCount)
    const patched = days.slice()
    patched[index] = { ...day, count, level: levelForCount(count) }
    return patched
  }

  return [...days, { date: TODAY, count: realtimeCount, level: levelForCount(realtimeCount) }]
}

// GitHub renders the contribution graph on its own profile partial
// (https://github.com/users/<user>/contributions). Each day is a td with
// data-date/data-level plus a <tool-tip> carrying the exact count. This is
// GitHub's own realtime data and needs no token.
function parseContributionsFragment(fragment: string): ApiDay[] {
  const cells = new Map<string, { date: string; level: number }>()
  const cellRe = /data-date="(\d{4}-\d{2}-\d{2})" id="(contribution-day-component-\d+-\d+)" data-level="(\d)"/g
  let cellMatch: RegExpExecArray | null
  while ((cellMatch = cellRe.exec(fragment))) {
    cells.set(cellMatch[2], { date: cellMatch[1], level: Number(cellMatch[3]) })
  }

  const tips = new Map<string, string>()
  const tipRe = /<tool-tip[^>]*for="(contribution-day-component-\d+-\d+)"[^>]*>([\s\S]*?)<\/tool-tip>/g
  let tipMatch: RegExpExecArray | null
  while ((tipMatch = tipRe.exec(fragment))) {
    tips.set(tipMatch[1], tipMatch[2])
  }

  const days: ApiDay[] = []
  for (const [id, { date, level }] of cells) {
    const tip = tips.get(id)?.replace(/\s+/g, " ").trim() ?? ""
    const countMatch = tip.match(/(\d+)\s+contributions?/)
    const count = countMatch ? Number(countMatch[1]) : 0

    if (date) days.push({ date, count, level })
  }

  return days.sort((a, b) => a.date.localeCompare(b.date))
}

export async function GET() {
  const userAgent = "portfoliov2/1.0 (+https://github.com/whoavidwivedi/portfoliov2)"
  const token = process.env.GITHUB_TOKEN

  try {
    const eventsRes = await fetch(`https://api.github.com/users/${USERNAME}/events?per_page=100`, {
      headers: { Accept: "application/vnd.github.v3+json", "User-Agent": userAgent },
      cache: "no-store",
    })

    const reposByDate: Record<string, string[]> = {}
    let realtimeToday = 0
    if (eventsRes.ok) {
      const events = await eventsRes.json()
      for (const event of events) {
        if (
          event.type === "PushEvent" ||
          event.type === "CreateEvent" ||
          event.type === "PullRequestEvent"
        ) {
          const date = event.created_at?.slice(0, 10)
          const repo = event.repo?.name
          if (date && repo) {
            if (!reposByDate[date]) reposByDate[date] = []
            if (!reposByDate[date].includes(repo)) reposByDate[date].push(repo)
          }
        }

        if (event.created_at?.slice(0, 10) !== TODAY) continue
        if (event.type === "PushEvent") {
          const size = event.payload?.size
          const count = typeof size === "number" && size > 0 ? size : event.payload?.commits?.length ?? 1
          realtimeToday += count
        } else if (
          event.type === "PullRequestEvent" ||
          event.type === "IssuesEvent" ||
          event.type === "PullRequestReviewEvent"
        ) {
          realtimeToday += 1
        }
      }
    }

    // Prefer the official GraphQL API when a token is configured.
    if (token) {
      const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `

      const gqlRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          "User-Agent": userAgent,
        },
        body: JSON.stringify({ query, variables: { username: USERNAME } }),
        cache: "no-store",
      })

      if (gqlRes.ok) {
        const json = await gqlRes.json()
        if (!json.errors && json.data) {
          const calendar = json.data.user.contributionsCollection.contributionCalendar

          const days = patchRealtimeToday(
            calendar.weeks.flatMap((week: GqlWeek) =>
              week.contributionDays.map((day: GqlDay) => ({
                date: day.date,
                count: day.contributionCount,
                level: levelForCount(day.contributionCount),
              })),
            ),
            realtimeToday,
          )
          const totalCount = days.reduce((sum, day) => sum + day.count, 0)

          return NextResponse.json({
            totalCount,
            days,
            reposByDate,
          })
        }
      }
    }

    // Otherwise read GitHub's own realtime contribution calendar partial.
    const fragmentRes = await fetch(`https://github.com/users/${USERNAME}/contributions`, {
      headers: { "User-Agent": userAgent },
      cache: "no-store",
    })

    if (fragmentRes.ok) {
      const fragment = await fragmentRes.text()
      const days = patchRealtimeToday(parseContributionsFragment(fragment), realtimeToday)
      const totalCount = days.reduce((sum, day) => sum + day.count, 0)

      if (days.length) {
        return NextResponse.json({ totalCount, days, reposByDate })
      }
    }

    const realtimeDays = realtimeToday > 0
      ? [{ date: TODAY, count: realtimeToday, level: levelForCount(realtimeToday) }]
      : []
    const fallbackTotal = realtimeDays.reduce((sum, day) => sum + day.count, 0)

    return NextResponse.json({ totalCount: fallbackTotal, days: realtimeDays, reposByDate })
  } catch {
    return NextResponse.json({ totalCount: 0, days: [], reposByDate: {} }, { status: 500 })
  }
}