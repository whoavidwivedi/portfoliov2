import { ThemeToggle } from "@/components/theme-toggle"
import { Header } from "@/components/sections/header"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { GitHubActivityLazy } from "@/components/ui/github-activity-lazy"
import { Skills } from "@/components/sections/skills"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main id="main" className="relative size-full min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:border focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow-lg"
      >
        Skip to content
      </a>

      <ThemeToggle />

      <div className="mx-auto max-w-2xl px-6 py-24">
        <div>
          <div>
            <Header />
          </div>

          <div>
            <Experience />
          </div>

          <div>
            <Projects />
          </div>

          <div className="my-20 flex w-full justify-center">
            <GitHubActivityLazy username="whoavidwivedi" showMonths />
          </div>

          <div>
            <Skills />
          </div>

          <div>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}
