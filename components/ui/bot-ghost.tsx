"use client"

import { BotAvatar } from "bot-avatars"

/**
 * Floating interactive Ghost bot avatar.
 *
 * Configured with `plastic` shading for ultra-sharp, high-definition 3D contours
 * and specular highlights (eliminating the low-res fuzzy fur artifacting of default fabric).
 * Explicit size (84px) unlocks top-tier (128x128) matcap resolution on Retina displays
 * and prevents browser CSS fallback distortions.
 *
 * Sits at 15vh in the document so it scrolls away naturally rather than sticking.
 */
export function BotGhost() {
  return (
    <div
      style={{ left: "58%", top: "15vh" }}
      className="pointer-events-auto absolute"
    >
      <BotAvatar
        type="ghost"
        size={84}
        shading="plastic"
        brightness={1.06}
        saturation={1.2}
      />
    </div>
  )
}
