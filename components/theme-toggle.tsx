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
    setTheme(v as ThemeKey)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle theme"
            className={
              className ??
              "fixed top-6 right-6 z-50 bg-background cursor-pointer transition-colors active:scale-[0.96]"
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
      <DropdownMenuContent align="end" className="rounded-lg border border-border bg-popover shadow-sm">
        <DropdownMenuRadioGroup
          value={activeTheme}
          onValueChange={handleThemeChange}
        >
          {THEME_OPTIONS.map(({ key, label, icon: Icon }) => (
            <DropdownMenuRadioItem key={key} value={key} className="rounded-md cursor-pointer text-foreground/80 focus:text-foreground">
              <Icon className="size-4 mr-2" />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
