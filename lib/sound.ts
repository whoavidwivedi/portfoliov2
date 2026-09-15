// Zero-dependency tactile sound synthesis using the Web Audio API.

export type SoundType = "click" | "pop" | "switch"

const STORAGE_KEY = "portfolio_sound_enabled"

let audioCtx: AudioContext | null = null
let soundEnabled = true
const listeners = new Set<() => void>()

// Initialize state from localStorage in browser
if (typeof window !== "undefined") {
  const stored = localStorage.getItem(STORAGE_KEY)
  soundEnabled = stored === null ? true : stored === "true"
}

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null
  if (!audioCtx) {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext
    if (AudioCtx) {
      audioCtx = new AudioCtx()
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume().catch(() => {})
  }
  return audioCtx
}

export function isSoundEnabled(): boolean {
  return soundEnabled
}

export function setSoundEnabled(enabled: boolean) {
  soundEnabled = enabled
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, String(enabled))
  }
  listeners.forEach((listener) => listener())
}

export function toggleSound(): boolean {
  const next = !soundEnabled
  setSoundEnabled(next)
  if (next) {
    // Play a gentle confirmation click when unmuting
    playTactileSound("pop", 0.15)
  }
  return next
}

export function subscribeSound(callback: () => void): () => void {
  listeners.add(callback)
  return () => listeners.delete(callback)
}

/**
 * Synthesizes a crisp, low-latency mechanical click or pop.
 * Zero asset files, zero network request, pure Web Audio.
 */
export function playTactileSound(type: SoundType = "click", customVolume?: number) {
  if (!soundEnabled) return

  try {
    const ctx = getAudioContext()
    if (!ctx) return

    const now = ctx.currentTime

    if (type === "click") {
      // Crisp mechanical micro-tick (~18ms)
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      const filter = ctx.createBiquadFilter()

      filter.type = "bandpass"
      filter.frequency.setValueAtTime(1400, now)
      filter.Q.setValueAtTime(3, now)

      osc.type = "sine"
      osc.frequency.setValueAtTime(800, now)
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.018)

      const vol = customVolume ?? 0.14
      gain.gain.setValueAtTime(vol, now)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018)

      osc.connect(filter)
      filter.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.02)
    } else if (type === "pop") {
      // Soft, satisfying bubble/pop confirmation (~40ms)
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = "sine"
      osc.frequency.setValueAtTime(380, now)
      osc.frequency.exponentialRampToValueAtTime(750, now + 0.02)
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.04)

      const vol = customVolume ?? 0.18
      gain.gain.setValueAtTime(vol, now)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.05)
    } else if (type === "switch") {
      // Dual-frequency mechanical toggle sound (~35ms)
      const osc1 = ctx.createOscillator()
      const osc2 = ctx.createOscillator()
      const gain = ctx.createGain()

      osc1.type = "triangle"
      osc1.frequency.setValueAtTime(650, now)
      osc1.frequency.exponentialRampToValueAtTime(1200, now + 0.015)

      osc2.type = "sine"
      osc2.frequency.setValueAtTime(1200, now + 0.015)
      osc2.frequency.exponentialRampToValueAtTime(450, now + 0.035)

      const vol = customVolume ?? 0.12
      gain.gain.setValueAtTime(vol, now)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.038)

      osc1.connect(gain)
      osc2.connect(gain)
      gain.connect(ctx.destination)

      osc1.start(now)
      osc1.stop(now + 0.018)
      osc2.start(now + 0.015)
      osc2.stop(now + 0.04)
    }
  } catch {
    // Graceful silence on any unsupported browser quirks
  }
}
