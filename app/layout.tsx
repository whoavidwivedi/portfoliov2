import "@fontsource-variable/google-sans-flex"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { JetBrains_Mono } from "next/font/google";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

export const metadata: Metadata = {
  title: "Avi Dwivedi",
  description:
    "Portfolio of Avi Dwivedi — software developer, educator, and builder. I write code, teach people, and build in public.",
  metadataBase: new URL("https://whoavidwivedi.work"),
  openGraph: {
    title: "Avi Dwivedi",
    description:
      "Portfolio of Avi Dwivedi — software developer, educator, and builder. I write code, teach people, and build in public.",
    siteName: "Avi Dwivedi",
    url: "https://whoavidwivedi.work",
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
    <html lang="en" suppressHydrationWarning className={cn("antialiased font-sans", jetbrainsMono.variable)}>
      <body>
        <TooltipProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
