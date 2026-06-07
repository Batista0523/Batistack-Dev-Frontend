import { useId } from "react";
import type { CSSProperties } from "react";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  muted?: boolean;
};

export default function BrandLogo({ size = "md", muted = false }: BrandLogoProps) {
  const uid = useId().replace(/:/g, "");
  const chromeId = `btiChr${uid}`;

  const scale = size === "sm" ? 0.75 : size === "lg" ? 1.3 : 1;
  const iconPx = Math.round(44 * scale);
  const wordPx = Math.round(19 * scale);
  const subtitlePx = Math.round(7.5 * scale);
  const gap = Math.round(11 * scale);

  const containerStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: `${gap}px`,
    textDecoration: "none",
  };

  const wordmarkStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1,
  };

  const nameStyle: CSSProperties = {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 800,
    fontSize: `${wordPx}px`,
    letterSpacing: "0.06em",
    color: muted ? "#888888" : "#FFFFFF",
    lineHeight: 1,
    whiteSpace: "nowrap",
  };

  const taglineStyle: CSSProperties = {
    fontFamily: "'Raleway', sans-serif",
    fontWeight: 400,
    fontSize: `${subtitlePx}px`,
    letterSpacing: "0.13em",
    color: "#00AEEF",
    marginTop: "4px",
    lineHeight: 1,
    opacity: muted ? 0.5 : 1,
    whiteSpace: "nowrap",
  };

  return (
    <span aria-label="Batistack — AI Infrastructure & Agent Services" style={containerStyle}>
      {/* B Monogram */}
      <svg
        width={iconPx}
        height={iconPx}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id={chromeId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#FFFFFF" />
            <stop offset="35%"  stopColor="#D9D9D9" />
            <stop offset="100%" stopColor="#8A8A8A" />
          </linearGradient>
        </defs>

        {/* Dark background container */}
        <rect x="0.5" y="0.5" width="43" height="43" rx="7" fill="#0D0D0D" stroke="#1E1E1E" />

        {/* Blue bottom glow strip */}
        <rect x="0.5" y="36.5" width="43" height="7" fill="rgba(0,174,239,0.12)" />
        <rect x="0.5" y="43" width="43" height="0.5" fill="rgba(0,174,239,0.6)" />

        {/* B spine (vertical bar) */}
        <rect x="9" y="7" width="5" height="30" rx="1.5" fill={`url(#${chromeId})`} />

        {/* B upper bump */}
        <path
          d="M14 7 L20.5 7 C26.5 7 29.5 10 29.5 13.5 C29.5 17 26.5 20 20.5 20 L14 20 Z"
          fill={`url(#${chromeId})`}
        />

        {/* B lower bump — slightly wider */}
        <path
          d="M14 20 L21.5 20 C28 20 31.5 23.5 31.5 27 C31.5 30.5 28 37 21.5 37 L14 37 Z"
          fill={`url(#${chromeId})`}
        />

        {/* Robot eye — upper */}
        <circle cx="22.5" cy="13.5" r="3.2" fill="#00AEEF" />
        {/* Inner reflection dot */}
        <circle cx="23.6" cy="12.4" r="0.9" fill="rgba(255,255,255,0.55)" />

        {/* Robot eye — lower */}
        <circle cx="23.5" cy="28" r="3.2" fill="#00AEEF" />
        {/* Inner reflection dot */}
        <circle cx="24.6" cy="26.9" r="0.9" fill="rgba(255,255,255,0.55)" />
      </svg>

      {/* Wordmark */}
      <span style={wordmarkStyle}>
        <span style={nameStyle}>
          BATI
          <span style={{ color: muted ? "#888888" : "#00AEEF" }}>STACK</span>
        </span>
        {size !== "sm" && (
          <span style={taglineStyle}>
            AI INFRASTRUCTURE &amp; AGENT SERVICES
          </span>
        )}
      </span>
    </span>
  );
}
