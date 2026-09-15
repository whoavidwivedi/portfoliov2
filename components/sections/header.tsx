"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Check, Copy, Flame, Mail } from "lucide-react"

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
    <header id="about" className="relative mb-20">
      <Image
        src="https://avatars.githubusercontent.com/u/85203267?v=4"
        alt="Avi Dwivedi"
        width={56}
        height={56}
        draggable={false}
        className="mb-6 size-14 rounded-full select-none ring-1 ring-border/50"
      />
      <h1 className="text-4xl font-bold tracking-tight text-balance">
        Avi Dwivedi{" "}
        <Button
          variant="outline"
          size="sm"
          nativeButton={false}
          className="align-middle uppercase tracking-wide ml-2"
          render={
            <a
              href="https://drive.google.com/file/d/11X4aurZIyXi59lym2Fs8QQwaojPnNe7X/view"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playTactileSound("click")}
            >
              resume
            </a>
          }
        />
      </h1>
      <p className="mt-2 text-base text-muted-foreground text-pretty font-medium">
        focusing &middot; ex-intern @takeUforward &middot; ex-educator
        @BrightCHAMPS
      </p>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground text-pretty max-w-xl">
        A developer who enjoys building useful things, teaching what I
        know, and learning what I don&rsquo;t. I believe in simple code,
        clear communication, and creating tools that actually make a
        difference.
      </p>
      <div className="mt-6 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="flex items-center gap-2">
            <a
              href="https://monkeytype.com/profile/whoavidwivedi"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              onClick={() => playTactileSound("click")}
            >
              <kbd 
                title="Typing speed on Monkeytype"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground transition duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
              >
                <Flame className="size-3.5 text-black/80 dark:text-white/80" />
                <span className="shimmer shimmer-color-black dark:shimmer-color-white">{wpm || 104} WPM</span>
              </kbd>
            </a>
            <div className="flex items-center pointer-events-none text-muted-foreground/80 opacity-70">
              <svg width="40" height="24" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5 mt-0.5">
                <path d="M 90,25 C 70,15 40,35 10,25" />
                <path d="M 25,15 C 18,20 10,25 10,25 C 10,25 20,32 25,40" />
              </svg>
              <span className="caveat-scribble text-lg sm:text-xl">monkeytype</span>
            </div>
          </span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3">
          <a
            href="mailto:theavidwivedi@gmail.com"
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/30 border border-border/50 hover:bg-muted/50 transition duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
          >
            <Mail className="size-3.5" />
            theavidwivedi@gmail.com
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
                    "cursor-pointer " +
                    (copied
                      ? "border-primary/60 bg-primary/10 text-primary"
                      : "")
                  }
                >
                  <div className="relative flex size-4 items-center justify-center">
                    <Check
                      className={`absolute size-4 transition-all duration-200 ease-out ${
                        copied ? "scale-100 opacity-100 blur-0" : "scale-50 opacity-0 blur-sm"
                      }`}
                    />
                    <Copy
                      className={`absolute size-4 transition-all duration-200 ease-out ${
                        copied ? "scale-50 opacity-0 blur-sm" : "scale-100 opacity-100 blur-0"
                      }`}
                    />
                  </div>
                </Button>
              }
            />
            <TooltipContent side="right">
              {copied ? "Email copied!" : "Copy email"}
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  )
}
