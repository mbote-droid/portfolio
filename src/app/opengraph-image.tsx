import { ImageResponse } from "next/og";
import { site } from "@/data/content";

export const alt = `${site.name} — Physician-Scientist & AI / Software Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social card. Only flexbox + a subset of CSS is supported by next/og.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #070b12 0%, #0b1220 55%, #0a1a1e 100%)",
          color: "#e5eefb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "84px",
              height: "84px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #0d9488 0%, #22d3ee 100%)",
              color: "#04121a",
              fontSize: "40px",
              fontWeight: 800,
            }}
          >
            SM
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#7c8aa5",
              fontFamily: "monospace",
            }}
          >
            portfolio-sam-mbote.vercel.app
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: "84px", fontWeight: 800, letterSpacing: "-2px" }}>
            {site.name}
          </div>
          <div style={{ fontSize: "37px", color: "#22d3ee", fontWeight: 600 }}>
            Physician-Scientist · Full-Stack SWE · IBM AI Engineer
          </div>
          <div style={{ fontSize: "29px", color: "#a9b6cc", maxWidth: "1000px" }}>
            Data science, annotation &amp; biomedical research — turning biomedical
            data into trustworthy, clinical-grade AI, end to end.
          </div>
        </div>

        <div style={{ display: "flex", gap: "16px" }}>
          {["Data Science", "Data Annotation", "Biomedical Research", "Healthcare AI"].map(
            (t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: "24px",
                  color: "#cdd8ea",
                  border: "1px solid #22384a",
                  borderRadius: "999px",
                  padding: "8px 22px",
                }}
              >
                {t}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
