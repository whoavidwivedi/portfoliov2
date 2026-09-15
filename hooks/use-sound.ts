"use client"

import { useSyncExternalStore } from "react"
import {
  isSoundEnabled,
  playTactileSound,
  subscribeSound,
  toggleSound,
  type SoundType,
} from "@/lib/sound"

export function useSound() {
  const soundEnabled = useSyncExternalStore(
    subscribeSound,
    isSoundEnabled,
    () => true // SSR default
  )

  return {
    soundEnabled,
    toggleSound,
    playSound: (type?: SoundType, volume?: number) => playTactileSound(type, volume),
  }
}
