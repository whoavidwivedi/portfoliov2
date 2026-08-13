"use client"

import { Clock } from "lucide-react"
import { useEffect, useMemo, useState, useSyncExternalStore } from "react"

const AVI_TIME_ZONE = "Asia/Kolkata"

const AVI_TIME_FORMATTER = new Intl.DateTimeFormat("en-US", {
  timeZone: AVI_TIME_ZONE,
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
})

const offsetFormatters = new Map<string, Intl.DateTimeFormat>()

// offset = minutes to add to the wall clock to get UTC, e.g. +330 for IST.
function zoneOffsetMinutes(timeZone: string, date: Date) {
  let formatter = offsetFormatters.get(timeZone)
  if (!formatter) {
    formatter = new Intl.DateTimeFormat("en-US", {
      timeZone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hourCycle: "h23",
    })
    offsetFormatters.set(timeZone, formatter)
  }

  const parts = formatter.formatToParts(date)
  const value = (type: string) =>
    Number(parts.find((part) => part.type === type)?.value ?? NaN)
  const asUtc = Date.UTC(
    value("year"),
    value("month") - 1,
    value("day"),
    value("hour"),
    value("minute"),
    value("second")
  )

  return Math.round((asUtc - date.getTime()) / 60000)
}

function formatSpan(minutes: number) {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  if (hours === 0) return `${mins}m`
  if (mins === 0) return `${hours}h`
  return `${hours}h ${mins}m`
}

export function LiveClock() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const [now, setNow] = useState<Date>(() => new Date())

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      setNow(new Date())
      timer = setTimeout(tick, 60_000 - (Date.now() % 60_000))
    }
    tick()
    return () => clearTimeout(timer)
  }, [])

  const time = useMemo(
    () => (mounted ? AVI_TIME_FORMATTER.format(now) : null),
    [mounted, now]
  )

  const relation = useMemo(() => {
    if (!mounted) return null

    const visitorTimeZone =
      Intl.DateTimeFormat().resolvedOptions().timeZone || AVI_TIME_ZONE
    if (visitorTimeZone === AVI_TIME_ZONE) return "You're in my timezone"

    const diff =
      zoneOffsetMinutes(AVI_TIME_ZONE, now) -
      zoneOffsetMinutes(visitorTimeZone, now)
    if (diff === 0) return "You're on the same time as me"
    if (diff > 0) return `You're ${formatSpan(diff)} behind my time`
    return `You're ${formatSpan(-diff)} ahead of my time`
  }, [mounted, now])

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className="flex items-center gap-1.5">
        <Clock className="size-3.5" aria-hidden="true" />
        {time ? (
          <span className="tabular-nums">{time} IST</span>
        ) : (
          <span aria-hidden="true" className="tabular-nums opacity-0 select-none">
            12:00 PM
          </span>
        )}
      </span>
      {relation && (
        <>
          <span aria-hidden="true" className="text-muted-foreground/60">
            ·
          </span>
          <span>{relation}</span>
        </>
      )}
    </div>
  )
}