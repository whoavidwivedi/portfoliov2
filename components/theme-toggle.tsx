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

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )
  const { theme, setTheme } = useTheme()

  const activeTheme: ThemeKey =
    theme === "system" || theme === "light" || theme === "dark" ? theme : "system"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle theme"
            className="fixed top-6 right-6 z-50 rounded-full bg-background/50 backdrop-blur-md shadow-sm transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-500 hover:scale-105"
          >
            {mounted ? (
              <ActiveThemeIcon theme={activeTheme} className="size-4" />
            ) : (
              <div className="size-4" />
            )}
          </Button>
        }
      />
      <DropdownMenuContent align="end" className="rounded-2xl shadow-lg border-border/50 bg-background/80 backdrop-blur-xl">
        <DropdownMenuRadioGroup
          value={activeTheme}
          onValueChange={(v) => setTheme(v as ThemeKey)}
        >
          {THEME_OPTIONS.map(({ key, label, icon: Icon }) => (
            <DropdownMenuRadioItem key={key} value={key} className="rounded-xl cursor-pointer transition-colors hover:bg-muted/50">
              <Icon className="size-4 mr-2" />
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
