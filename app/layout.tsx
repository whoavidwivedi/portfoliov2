import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Avi Dwivedi | Creative Developer',
  description: "Avi Dwivedi's portfolio website built with Next.js.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} paper-texture text-ink dark:text-stone-100 antialiased transition-colors duration-300 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
