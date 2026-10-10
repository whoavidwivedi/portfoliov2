import "@fontsource-variable/google-sans-flex"
import type { Metadata, Viewport } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Caveat, JetBrains_Mono, Public_Sans } from "next/font/google"
import { cn } from "@/lib/utils"

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-sans" })

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })

export const metadata: Metadata = {
  title: "Avi Dwivedi",
  description:
    "Avi Dwivedi - full-stack developer building real-time systems, APIs and interfaces. WebRTC voice rooms, a naming engine, TypeScript, Next.js, Postgres.",
  metadataBase: new URL("https://whoavidwivedi.work"),
  openGraph: {
    title: "Avi Dwivedi",
    description:
      "Avi Dwivedi - full-stack developer building real-time systems, APIs and interfaces. WebRTC voice rooms, a naming engine, TypeScript, Next.js, Postgres.",
    siteName: "Avi Dwivedi",
    url: "https://whoavidwivedi.work",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avi Dwivedi",
    description:
      "Avi Dwivedi - full-stack developer building real-time systems, APIs and interfaces.",
    creator: "@whoavidwivedi",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        jetbrainsMono.variable,
        caveat.variable,
        "font-sans",
        publicSans.variable
      )}
    >
      <body>
        <TooltipProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
