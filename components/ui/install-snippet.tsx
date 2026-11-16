"use client"

import { useRef, useState } from "react"
import { Check, Command, Copy } from "lucide-react"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

interface InstallSnippetProps {
  command: string
  label?: string
}

export function InstallSnippet({
  command,
  label = "Quick install (macOS)",
}: InstallSnippetProps) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(command)
    setCopied(true)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="group/snippet flex flex-col gap-1.5">
      {label && (
        <span className="flex items-center gap-1.5 text-[11px] font-medium tracking-wide text-muted-foreground/80 uppercase">
          <Command className="size-3 text-emerald-500/80" />
          {label}
        </span>
      )}
      <div className="flex items-center gap-2 rounded-lg border border-border/70 bg-muted/40 py-1.5 pr-1.5 pl-3 transition-colors duration-150 hover:border-border hover:bg-muted/70 dark:bg-muted/20 dark:hover:bg-muted/40">
        <span className="font-mono text-xs text-muted-foreground/60 select-none">
          $
        </span>
        <code className="min-w-0 flex-1 [scrollbar-width:none] overflow-x-auto font-mono text-[11px] whitespace-nowrap text-foreground/90 select-all [&::-webkit-scrollbar]:hidden">
          {command}
        </code>

        <Tooltip>
          <TooltipTrigger
            render={
              <button
                type="button"
                onClick={handleCopy}
                aria-label={copied ? "Copied" : "Copy command"}
                className="inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-border/50 bg-background/80 text-muted-foreground transition duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-background hover:text-foreground active:scale-[0.95]"
              >
                {copied ? (
                  <Check className="size-3.5 text-emerald-500 transition-transform duration-150" />
                ) : (
                  <Copy className="size-3.5 transition-transform duration-150" />
                )}
              </button>
            }
          />
          <TooltipContent side="top">
            {copied ? "Copied to clipboard!" : "Copy command"}
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
