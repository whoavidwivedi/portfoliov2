import { SocialLinks } from "@/components/sections/social-links"

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 text-sm text-muted-foreground">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-center">
        <p className="font-medium">
          &copy; {new Date().getFullYear()} Avi Dwivedi.
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}