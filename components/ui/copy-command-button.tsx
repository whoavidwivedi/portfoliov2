"use client"

import { useRef, useState } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"

export function CopyCommandButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const textarea = document.createElement("textarea")
      textarea.value = value
      textarea.style.position = "fixed"
      textarea.style.opacity = "0"
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand("copy")
      document.body.removeChild(textarea)
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="outline"
            size="icon-xs"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy command"}
            className={
              "cursor-pointer " +
              (copied
                ? "border-primary/60 bg-primary/10 text-primary"
                : "")
            }
          >
            <div className="relative flex size-3.5 items-center justify-center">
              <Check
                className={`absolute size-3.5 transition-all duration-200 ease-out ${
                  copied
                    ? "blur-0 scale-100 opacity-100"
                    : "scale-50 opacity-0 blur-sm"
                }`}
              />
              <Copy
                className={`absolute size-3.5 transition-all duration-200 ease-out ${
                  copied
                    ? "scale-50 opacity-0 blur-sm"
                    : "blur-0 scale-100 opacity-100"
                }`}
              />
            </div>
          </Button>
        }
      />
      <TooltipContent side="top">
        {copied ? "Copied!" : "Copy command"}
      </TooltipContent>
    </Tooltip>
  )
}