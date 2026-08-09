import "@fontsource-variable/google-sans-flex"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"

export const metadata: Metadata = {
  title: "Avi Dwivedi",
  description:
    "Portfolio of Avi Dwivedi — software developer, educator, and builder. I write code, teach people, and build in public.",
  metadataBase: new URL("https://whoavidwivedi.vercel.app"),
  openGraph: {
    title: "Avi Dwivedi",
    description:
      "Portfolio of Avi Dwivedi — software developer, educator, and builder. I write code, teach people, and build in public.",
    siteName: "Avi Dwivedi",
    url: "https://whoavidwivedi.vercel.app",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avi Dwivedi",
    description:
      "Portfolio of Avi Dwivedi — software developer, educator, and builder.",
    creator: "@whoavidwivedi",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="antialiased font-sans">
      <body>
        <TooltipProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
