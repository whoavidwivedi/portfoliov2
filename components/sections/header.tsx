"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Check, Copy, Flame, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

export function Header() {
  const [copied, setCopied] = useState(false)
  const [tipOpen, setTipOpen] = useState(false)
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const copyEmail = () => {
    navigator.clipboard.writeText("theavidwivedi@gmail.com")
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
        priority
        draggable={false}
        className="mb-6 size-14 rounded-full ring-1 ring-border/50 select-none"
      />
      <h1 className="text-4xl font-bold tracking-tight text-balance">
        Avi Dwivedi{" "}
        <Button
          variant="outline"
          size="sm"
          nativeButton={false}
          className="ml-2 align-middle tracking-wide uppercase"
          render={
            <a
              href="https://drive.google.com/file/d/11X4aurZIyXi59lym2Fs8QQwaojPnNe7X/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          }
        />
      </h1>
      <p className="mt-2 text-base font-medium text-pretty text-muted-foreground">
        full-stack developer &middot; real-time systems, APIs & interfaces
        &middot; ex-intern @takeUforward &middot; ex-educator @BrightCHAMPS
      </p>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground">
        A developer who enjoys building useful things, teaching what I know, and
        learning what I don&rsquo;t. I craft interfaces where motion, feedback,
        and detail feel inevitable - not decorative.
      </p>
      <div className="mt-6 text-sm text-muted-foreground">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="flex items-center gap-2">
            <a
              href="https://monkeytype.com/profile/whoavidwivedi"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <kbd
                title="Typing speed on Monkeytype"
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground transition duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]"
              >
                <Flame className="size-3.5 text-black/80 dark:text-white/80" />
                <span className="shimmer shimmer-color-black dark:shimmer-color-white">
                  104 WPM
                </span>
              </kbd>
            </a>
            <div className="pointer-events-none flex items-center text-muted-foreground/80 opacity-70">
              <svg
                width="40"
                height="24"
                viewBox="0 0 100 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 mr-1.5"
              >
                <path d="M 90,25 C 70,15 40,35 10,25" />
                <path d="M 25,15 C 18,20 10,25 10,25 C 10,25 20,32 25,40" />
              </svg>
              <span className="caveat-scribble text-lg sm:text-xl">
                monkeytype
              </span>
            </div>
          </span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3">
          <a
            href="mailto:theavidwivedi@gmail.com"
            className="flex items-center gap-2 rounded-md border border-border/50 bg-muted/30 px-3 py-1.5 transition duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-muted/50 active:scale-[0.97]"
          >
            <Mail className="size-3.5" />
            theavidwivedi@gmail.com
          </a>
          <Tooltip
            // a press closes tooltips by default, which would kill the
            // "Email copied!" confirmation on the very click that triggers it
            open={copied || tipOpen}
            onOpenChange={(open, details) => {
              if (details.reason === "trigger-press") return
              setTipOpen(open)
            }}
          >
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
                        copied
                          ? "blur-0 scale-100 opacity-100"
                          : "scale-50 opacity-0 blur-sm"
                      }`}
                    />
                    <Copy
                      className={`absolute size-4 transition-all duration-200 ease-out ${
                        copied
                          ? "scale-50 opacity-0 blur-sm"
                          : "blur-0 scale-100 opacity-100"
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
          <span role="status" aria-live="polite" className="sr-only">
            {copied ? "Email copied" : ""}
          </span>
        </div>
      </div>
    </header>
  )
}
