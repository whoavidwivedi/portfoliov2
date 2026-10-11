"use client"

import { BotAvatar } from "bot-avatars"

/**
 * One ghost, exactly as the library draws it: its own idle, its pointer
 * tracking, its hop, its shading, its theme. Nothing added, nothing wrapped.
 *
 * 15vh rather than 15%: same spot on screen, but it sits in the document
 * instead of over it, so it scrolls away rather than following you down.
 */
export function BotGhost() {
  return (
    <div
      style={{ left: "58%", top: "15vh" }}
      className="pointer-events-auto absolute"
    >
      <BotAvatar type="ghost" />
    </div>
  )
}
