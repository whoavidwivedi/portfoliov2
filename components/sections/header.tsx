"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Check, Copy, Flame, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { playTactileSound } from "@/lib/sound"

export function Header() {
  const [copied, setCopied] = useState(false)
  const [wpm, setWpm] = useState<number | null>(null)
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  useEffect(() => {
    fetch("/api/wpm")
      .then((res) => res.json())
      .then((data) => {
        if (data.wpm) setWpm(data.wpm)
      })
      .catch((err) => console.error("Failed to fetch WPM:", err))
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText("theavidwivedi@gmail.com")
    playTactileSound("pop")
    setCopied(true)
    clearTimeout(copyTimer.current)
    copyTimer.current = setTimeout(() => setCopied(false), 1500)
  }

  return (
    <header id="about" className="relative mb-20 scroll-mt-28">
      <div className="flex items-center justify-between mb-6">
        <div className="relative size-16 select-none">
          <div className="size-16 rounded-full ring-1 ring-border/80 p-0.5 shadow-xs bg-muted/20">
            <Image
              src="https://avatars.githubusercontent.com/u/85203267?v=4"
              alt="Avi Dwivedi"
              width={60}
              height={60}
              draggable={false}
              className="size-full rounded-full object-cover"
            />
          </div>
          <span
            className="absolute bottom-0 right-0 size-3.5 rounded-full bg-background ring-2 ring-background flex items-center justify-center"
            title="Focusing"
          >
            <span className="size-2.5 rounded-full bg-emerald-500 animate-pulse" />
          </span>
        </div>

        <div className="flex items-center">
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            className="h-7 px-2.5 text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground cursor-pointer active:scale-[0.96] transition-all rounded-full border-border/70"
            render={
              <a
                href="https://drive.google.com/file/d/11X4aurZIyXi59lym2Fs8QQwaojPnNe7X/view"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playTactileSound("click")}
                className="inline-flex items-center gap-1"
              >
                <span>Resume</span>
                <ArrowUpRight className="size-3 opacity-60" aria-hidden="true" />
              </a>
            }
          />
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">
        Avi Dwivedi
      </h1>

      <p className="mt-2 text-sm sm:text-base text-muted-foreground/90 text-pretty font-medium">
        focusing &middot; ex-intern @takeUforward &middot; ex-educator @BrightCHAMPS
      </p>

      <p className="mt-5 text-sm sm:text-base leading-relaxed text-muted-foreground text-pretty max-w-xl">
        A developer who enjoys building useful things, teaching what I know, and learning what I don&rsquo;t. I believe in simple code, clear communication, and creating tools that actually make a difference.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href="https://monkeytype.com/profile/whoavidwivedi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 group"
          onClick={() => playTactileSound("click")}
        >
          <kbd
            title="Typing speed on Monkeytype"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground transition duration-150 ease-out active:scale-[0.96] cursor-pointer hover:bg-muted/70 hover:text-foreground shadow-2xs"
          >
            <Flame className="size-3.5 text-foreground/80" />
            <span className="tabular-nums font-mono font-medium">{wpm || 104} WPM</span>
          </kbd>
          <div className="flex items-center pointer-events-none text-muted-foreground/60 select-none">
            <svg
              width="36"
              height="22"
              viewBox="0 0 100 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1.5 mt-0.5"
              aria-hidden="true"
            >
              <path d="M 90,25 C 70,15 40,35 10,25" />
              <path d="M 25,15 C 18,20 10,25 10,25 C 10,25 20,32 25,40" />
            </svg>
            <span className="caveat-scribble text-base sm:text-lg text-muted-foreground/80">monkeytype</span>
          </div>
        </a>

        <div className="flex items-center gap-2 ml-auto sm:ml-0">
          <a
            href="mailto:theavidwivedi@gmail.com"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-muted/30 border border-border/60 hover:bg-muted/60 transition duration-150 ease-out active:scale-[0.96] text-xs font-medium text-foreground/90"
          >
            <Mail className="size-3 text-muted-foreground" />
            <span>theavidwivedi@gmail.com</span>
          </a>

          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  onClick={copyEmail}
                  aria-label={copied ? "Email copied" : "Copy email"}
                  className={
                    "size-7 rounded-lg cursor-pointer active:scale-[0.96] transition-all duration-150 border-border/60 " +
                    (copied
                      ? "border-primary/60 bg-primary/10 text-primary"
                      : "hover:bg-muted/60")
                  }
                >
                  <div className="relative flex size-3.5 items-center justify-center">
                    <Check
                      className={`absolute size-3.5 transition-all duration-200 ease-out ${
                        copied ? "scale-100 opacity-100 blur-0" : "scale-50 opacity-0 blur-sm"
                      }`}
                    />
                    <Copy
                      className={`absolute size-3.5 transition-all duration-200 ease-out ${
                        copied ? "scale-50 opacity-0 blur-sm" : "scale-100 opacity-100 blur-0"
                      }`}
                    />
                  </div>
                </Button>
              }
            />
            <TooltipContent side="top">
              {copied ? "Email copied!" : "Copy email"}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}
