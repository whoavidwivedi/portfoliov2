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
            className="fixed top-6 right-6 z-50 bg-background/50 backdrop-blur-md"
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
          onValueChange={(v) => setTheme(v as ThemeKey)}
        >
          {THEME_OPTIONS.map(({ key, label, icon: Icon }) => (
            <DropdownMenuRadioItem key={key} value={key} className="group rounded-xl cursor-pointer">
              <span className="relative inline-flex items-center">
                <Icon className="size-4 mr-2" />
                <span className="relative font-semibold">
                  <span className="[@media(hover:hover)_and_(pointer:fine)]:group-focus:text-emerald-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:text-emerald-500 text-foreground transition-colors">
                    {label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-0.5 left-0 h-[2px] w-full origin-center scale-x-0 bg-emerald-500/70 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] [@media(hover:hover)_and_(pointer:fine)]:group-focus:scale-x-100 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-x-100"
                  />
                </span>
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
