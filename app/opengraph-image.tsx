import { ImageResponse } from "next/og"

export const alt = "Avi Dwivedi"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0c0a09",
          fontFamily: "Geist Mono",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(251,146,60,0.15) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #f97316, transparent)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: "50%",
              background: "#f97316",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
              color: "#0c0a09",
              marginBottom: 24,
            }}
          >
            AD
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#fafaf9",
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            Avi Dwivedi
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#a8a29e",
              letterSpacing: "0.01em",
            }}
          >
            software developer &amp; educator
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
