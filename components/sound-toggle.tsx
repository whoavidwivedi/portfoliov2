"use client"

import { useSyncExternalStore } from "react"
import { Volume2, VolumeX } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { useSound } from "@/hooks/use-sound"

export function SoundToggle({ className }: { className?: string }) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const { soundEnabled, toggleSound } = useSound()

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            onClick={toggleSound}
            aria-label={soundEnabled ? "Mute audio feedback" : "Enable audio feedback"}
            className={
              className ??
              "bg-background/50 backdrop-blur-md cursor-pointer transition-all duration-150 active:scale-[0.96]"
            }
          >
            {mounted ? (
              soundEnabled ? (
                <Volume2 className="size-4 text-foreground/80" />
              ) : (
                <VolumeX className="size-4 text-muted-foreground" />
              )
            ) : (
              <div className="size-4" />
            )}
          </Button>
        }
      />
      <TooltipContent side="bottom">
        {soundEnabled ? "Sound effects on (click to mute)" : "Sound effects muted (click to turn on)"}
      </TooltipContent>
    </Tooltip>
  )
}
