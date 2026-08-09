import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const token = process.env.GITHUB_TOKEN
  const username = "whoavidwivedi"

  try {
    const eventsRes = await fetch(`https://api.github.com/users/${username}/events?per_page=100`, {
      headers: { Accept: "application/vnd.github.v3+json" },
      next: { revalidate: 600 },
    })
    
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

    // Try GraphQL if token exists
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
        },
        body: JSON.stringify({ query, variables: { username } }),
        next: { revalidate: 3600 },
      })
      
      if (gqlRes.ok) {
        const json = await gqlRes.json()
        if (!json.errors && json.data) {
          const calendar = json.data.user.contributionsCollection.contributionCalendar
          const totalCount = calendar.totalContributions
          
          const days = calendar.weeks.flatMap((week: any) => 
            week.contributionDays.map((day: any) => {
              const count = day.contributionCount
              let level = 0
              if (count > 0 && count <= 3) level = 1
              else if (count > 3 && count <= 6) level = 2
              else if (count > 6 && count <= 9) level = 3
              else if (count > 9) level = 4
              
              return {
                date: day.date,
                count: count,
                level: level,
              }
            })
          )
          
          return NextResponse.json({ totalCount, days, reposByDate })
        }
      }
    }

    // Fallback: Use jogruber API
    const fallbackRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`, {
      next: { revalidate: 3600 }
    })
    
    if (fallbackRes.ok) {
      const fallbackData = await fallbackRes.json()
      const totalCount = fallbackData.total?.lastYear ?? 0
      
      const days = fallbackData.contributions?.map((day: any) => ({
        date: day.date,
        count: day.count,
        level: day.level
      })) ?? []

      return NextResponse.json({ totalCount, days, reposByDate })
    }

    return NextResponse.json({ totalCount: 0, days: [], reposByDate })
  } catch {
    return NextResponse.json({ totalCount: 0, days: [], reposByDate: {} }, { status: 500 })
  }
}
