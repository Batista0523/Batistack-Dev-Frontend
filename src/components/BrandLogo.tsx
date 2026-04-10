import type { CSSProperties } from "react";

type BrandLogoProps = {
  size?: "sm" | "md" | "lg";
  muted?: boolean;
};

const sizeStyles: Record<NonNullable<BrandLogoProps["size"]>, CSSProperties> = {
  sm: { fontSize: "18px" },
  md: { fontSize: "25px" },
  lg: { fontSize: "32px" },
};

export default function BrandLogo({ size = "md", muted = false }: BrandLogoProps) {
  return (
    <span
      aria-label="Batistack"
      role="img"
      style={{
        ...sizeStyles[size],
        display: "inline-flex",
        alignItems: "center",
        gap: "0.2em",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        fontWeight: 800,
        letterSpacing: "-0.015em",
        lineHeight: 1,
        color: muted ? "var(--mist)" : "var(--bone)",
        whiteSpace: "nowrap",
      }}
    >
      <span>Batista</span>
      <span
        aria-hidden="true"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "1.58em",
          height: "1em",
          border: `1px solid ${muted ? "rgba(255,255,255,0.18)" : "rgba(201,168,76,0.35)"}`,
          borderRadius: "4px",
          fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
          fontSize: "0.58em",
          fontWeight: 800,
          letterSpacing: "-0.08em",
          color: muted ? "var(--mist)" : "var(--bone)",
          transform: "translateY(0.01em)",
        }}
      >
        &lt;/&gt;
      </span>
      <span
        style={{
          position: "relative",
          color: "var(--gold)",
          paddingBottom: "0.08em",
        }}
      >
        CK
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: "-0.08em",
            height: "0.08em",
            background: "var(--gold)",
            opacity: 0.55,
          }}
        />
      </span>
    </span>
  );
}
