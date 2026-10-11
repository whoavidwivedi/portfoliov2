"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Check, Copy, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

const EMAIL = "theavidwivedi@gmail.com"

// Gmail's web composer instead of mailto:, so the draft always opens in Gmail
// with the template prefilled rather than in whatever the OS defaults to.
const GMAIL_COMPOSE =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}` +
  `&su=${encodeURIComponent("Hello Avi")}` +
  `&body=${encodeURIComponent("Hi Avi,\n\n")}`

export function Header() {
  const [copied, setCopied] = useState(false)
  const [tipOpen, setTipOpen] = useState(false)
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
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
        <Tooltip>
          <TooltipTrigger
            render={
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
                    <ExternalLink aria-hidden className="opacity-60" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                }
              />
            }
          />
          <TooltipContent side="right">
            Opens resume.pdf on Google Drive
          </TooltipContent>
        </Tooltip>
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
          <Tooltip>
            <TooltipTrigger
              render={
                <a
                  href="https://monkeytype.com/profile/whoavidwivedi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <kbd className="inline-flex items-center gap-1.5 rounded-md border border-border bg-muted/50 px-2 py-0.5 text-xs font-medium text-muted-foreground transition duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.97]">
                    {/* Simple Icons "Monkeytype" - CC0, single path */}
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      role="img"
                      aria-label="Monkeytype"
                      className="size-3.5 text-[#e2b714]"
                    >
                      <path d="M20 14.4a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6ZM8.8 14.4h4.8a.8.8 0 1 1 0 1.6H8.8a.8.8 0 1 1 0-1.6ZM7.2 9.6a.8.8 0 0 1 .8.8V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 0 1 .8-.8Z M3.201 10.359A2.4 2.4 0 0 1 7.2 8.612a2.4 2.4 0 0 1 4 1.788V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 1 0-1.6 0V12a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 1 0-1.6 0V12a.8.8 0 1 1-1.6 0v-1.6l.001-.041ZM17.6 12.8v2.4a.8.8 0 1 1-1.6 0v-2.4h-2.306c-.493 0-.894-.358-.894-.8 0-.442.401-.8.894-.8h6.212c.493 0 .894.358.894.8 0 .442-.401.8-.894.8H17.6ZM16.8 8H20a.8.8 0 1 1 0 1.6h-3.2a.8.8 0 1 1 0-1.6ZM4 14.4h1.6a.8.8 0 1 1 0 1.6H4a.8.8 0 1 1 0-1.6ZM13.2 8h.4a.8.8 0 1 1 0 1.6h-.4a.8.8 0 1 1 0-1.6Z M1.6 14.4H0V8.8c0-2.208 1.792-4 4-4h16c2.208 0 4 1.792 4 4v6.4c0 2.208-1.792 4-4 4H4c-2.208 0-4-1.792-4-4v-1.6h1.6v1.6A2.4 2.4 0 0 0 4 17.6h16a2.4 2.4 0 0 0 2.4-2.4V8.8A2.4 2.4 0 0 0 20 6.4H4a2.4 2.4 0 0 0-2.4 2.4v5.6Z" />
                    </svg>
                    <span>104 WPM</span>
                  </kbd>
                </a>
              }
            />
            <TooltipContent side="right">
              Average typing speed on Monkeytype
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-3">
          <a
            href={GMAIL_COMPOSE}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-border/50 bg-muted/30 px-3 py-1.5 transition duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-muted/50 active:scale-[0.97]"
          >
            {/* Gmail 2020 icon (Wikimedia Commons) */}
            <svg
              viewBox="52 42 88 66"
              role="img"
              aria-label="Gmail"
              className="size-3.5"
            >
              <path
                fill="#4285f4"
                d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
              />
              <path
                fill="#34a853"
                d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
              />
              <path
                fill="#fbbc04"
                d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
              />
              <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
              <path
                fill="#c5221f"
                d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
              />
            </svg>
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
