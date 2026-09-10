import { Button } from "@/components/ui/button"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 text-sm text-muted-foreground">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-medium">&copy; {new Date().getFullYear()} Avi Dwivedi.</p>
        <div className="flex items-center gap-3">
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  nativeButton={false}
                  className="text-foreground/80 shadow-sm bg-background/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-500 hover:scale-110 active:scale-95 [&_svg:not([class*='size-'])]:size-4"
                  render={
                    <a
                      href="https://github.com/whoavidwivedi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.258.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span className="sr-only">GitHub</span>
                    </a>
                  }
                />
              }
            />
            <TooltipContent className="rounded-xl shadow-lg border-border/50 bg-background/90 backdrop-blur-md">GitHub (@whoavidwivedi)</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  nativeButton={false}
                  className="text-foreground/80 shadow-sm bg-background/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-500 hover:scale-110 active:scale-95 [&_svg:not([class*='size-'])]:size-4"
                  render={
                    <a
                      href="https://linkedin.com/in/whoavidwivedi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.058c.477-.9 1.637-1.85 3.37-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM8.119 20H4.566V9h3.553v11.452z" />
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  }
                />
              }
            />
            <TooltipContent className="rounded-xl shadow-lg border-border/50 bg-background/90 backdrop-blur-md">LinkedIn (@whoavidwivedi)</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="outline"
                  size="icon"
                  nativeButton={false}
                  className="text-foreground/80 shadow-sm bg-background/50 backdrop-blur-sm rounded-full transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/10 hover:text-emerald-500 hover:scale-110 active:scale-95 [&_svg:not([class*='size-'])]:size-4"
                  render={
                    <a
                      href="https://x.com/whoavidwivedi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                      <span className="sr-only">X</span>
                    </a>
                  }
                />
              }
            />
            <TooltipContent className="rounded-xl shadow-lg border-border/50 bg-background/90 backdrop-blur-md">X (@whoavidwivedi)</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </footer>
  )
}
