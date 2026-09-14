"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Header } from "@/components/sections/header"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { GitHubActivity } from "@/components/ui/github-activity"
import { Skills } from "@/components/sections/skills"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <main className="size-full relative min-h-screen">


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

          <div className="my-20 flex justify-center w-full">
            <GitHubActivity username="whoavidwivedi" />
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