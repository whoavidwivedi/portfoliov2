"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { SoundToggle } from "@/components/sound-toggle"
import { Header } from "@/components/sections/header"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { GitHubActivity } from "@/components/ui/github-activity"
import { Skills } from "@/components/sections/skills"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main className="size-full relative min-h-screen">
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2">
        <SoundToggle />
        <ThemeToggle className="relative bg-background/50 backdrop-blur-md cursor-pointer transition-all duration-150 active:scale-[0.96]" />
      </div>

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

          <div className="my-20 flex justify-center w-full">
            <GitHubActivity username="whoavidwivedi" showMonths />
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