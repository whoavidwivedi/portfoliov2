"use client"

import { useSyncExternalStore } from "react"
import { useTheme } from "next-themes"
import { Monitor } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { THEME_OPTIONS, type ThemeKey } from "@/config/data"
import { playTactileSound } from "@/lib/sound"

function ActiveThemeIcon({ theme, className }: { theme: ThemeKey; className?: string }) {
  const Icon = THEME_OPTIONS.find((o) => o.key === theme)?.icon ?? Monitor
  return <Icon className={className} />
}

export function ThemeToggle({ className }: { className?: string } = {}) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const { theme, setTheme } = useTheme()

  const activeTheme: ThemeKey =
    theme === "system" || theme === "light" || theme === "dark" ? theme : "system"

  const handleThemeChange = (v: string) => {
    if (v !== activeTheme) {
      playTactileSound("switch")
    }
    setTheme(v as ThemeKey)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            onClick={() => playTactileSound("click")}
            aria-label="Toggle theme"
            className={
              className ??
              "fixed top-6 right-6 z-50 bg-background/50 backdrop-blur-md cursor-pointer transition-all duration-150 active:scale-[0.96]"
            }
          >
            {mounted ? (
              <ActiveThemeIcon theme={activeTheme} className="size-4" />
            ) : (
              <div className="size-4" />
            )}
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="rounded-2xl border-border/50 bg-background/80 backdrop-blur-xl">
        <DropdownMenuRadioGroup
          value={activeTheme}
          onValueChange={handleThemeChange}
        >
          {THEME_OPTIONS.map(({ key, label, icon: Icon }) => (
            <DropdownMenuRadioItem key={key} value={key} className="rounded-xl cursor-pointer text-foreground/80 focus:text-foreground">
              <Icon className="size-4 mr-2" />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
