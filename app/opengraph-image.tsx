import { ImageResponse } from "next/og"

export const alt = "Avi Dwivedi — software developer & educator"
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
          background: "#0c0a09",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(251,146,60,0.12) 1px, transparent 1px)",
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
            padding: "72px 80px",
            zIndex: 1,
            flex: 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "#292524",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src="https://avatars.githubusercontent.com/u/85203267?v=4"
                width={72}
                height={72}
                alt=""
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 48, fontWeight: 700, color: "#fafaf9", letterSpacing: "-0.02em" }}>
                  Avi Dwivedi
                </span>
                <span
                  style={{
                    fontSize: 20,
                    color: "#a8a29e",
                    border: "1px solid rgba(168,162,158,0.3)",
                    borderRadius: 9999,
                    padding: "4px 14px",
                  }}
                >
                  resume
                </span>
              </div>
              <span style={{ fontSize: 22, color: "#a8a29e", marginTop: 4 }}>
                focusing · ex-intern @takeUforward · ex-educator @BrightCHAMPS
              </span>
            </div>
          </div>
          <p style={{ fontSize: 22, color: "#a8a29e", lineHeight: 1.6, maxWidth: 700, margin: 0 }}>
            I write code, teach people, and build in public. Built tools to help students
            crack interviews at takeUforward. Previously taught programming at
            BrightCHAMPS, working with C, C++, Python, and web development.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 40 }}>
            {["C", "C++", "Python", "TypeScript", "React", "Next.js"].map((s) => (
              <span
                key={s}
                style={{
                  fontSize: 18,
                  color: "#78716c",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "24px 80px",
            borderTop: "1px solid #292524",
            zIndex: 1,
          }}
        >
          <span style={{ fontSize: 16, color: "#57534e" }}>
            github.com/whoavidwivedi
          </span>
          <span style={{ fontSize: 16, color: "#57534e" }}>
            linkedin.com/in/whoavidwivedi
          </span>
          <span style={{ fontSize: 16, color: "#57534e" }}>
            x.com/whoavidwivedi
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  )
}
