export type Project = {
  name: string
  desc: string
  uiUxDesc: string
  stack: string[]
  link?: string
}

export const PROJECTS: Project[] = [
  {
    name: "Frames",
    desc: "Native, hardware-accelerated macOS video player & library dashboard engineered exclusively for Apple Silicon.",
    uiUxDesc:
      "Zero-copy VideoToolbox decoding, 120Hz ProMotion fluid scrubbing, and asynchronous folder indexing wrapped in a minimal shadcn dark monochrome aesthetic.",
    stack: [
      "Swift 6",
      "SwiftUI",
      "Apple Silicon",
      "VideoToolbox",
      "AVFoundation",
      "Metal",
      "shadcn",
    ],
    link: "https://github.com/whoavidwivedi/frames",
  },
  {
    name: "Better Space",
    desc: "Zero-account WebRTC voice rooms built on LiveKit - Krisp AI noise suppression, text chat, emoji reactions.",
    uiUxDesc:
      "Hosts grant and revoke the mic, mute, kick and promote co-hosts. Rooms are destroyed when the last person leaves - no history, no recordings.",
    stack: [
      "LiveKit",
      "Krisp AI",
      "Next.js",
      "React",
      "Base UI",
      "Tailwind CSS",
      "Bun",
    ],
    link: "space",
  },
  {
    name: "WordLoom Studio",
    desc: "Generates short, pronounceable brand names from real English letter patterns learned from 100k+ CMUdict words.",
    uiUxDesc:
      "Runs the Wordloom engine server-side. Filter by length, prefix, suffix and substring; real words come back with their WordNet definition.",
    stack: [
      "Wordloom",
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Motion",
      "Turborepo",
    ],
    link: "wordloom-studio",
  },
]
