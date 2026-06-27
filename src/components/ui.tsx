import type { CSSProperties, ReactNode } from "react";
import { Reveal } from "./Reveal";

export { Reveal } from "./Reveal";
export { PrimaryLink, GhostLink, CTABanner } from "./UILinks";

/* ── Section shell ── */
export function Section({
  children,
  bg = "transparent",
  style,
}: {
  children: ReactNode;
  bg?: string;
  style?: CSSProperties;
}) {
  return (
    <section style={{ background: bg, padding: "96px 0", ...style }}>
      <div className="section-container">{children}</div>
    </section>
  );
}

/* ── Section heading block ── */
export function SectionHeading({
  label,
  title,
  sub,
  align = "center",
}: {
  label: string;
  title: ReactNode;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal>
      <div style={{ textAlign: align, marginBottom: "56px", maxWidth: align === "center" ? "720px" : "640px", marginLeft: align === "center" ? "auto" : 0, marginRight: align === "center" ? "auto" : 0 }}>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#00AEEF",
            marginBottom: "14px",
          }}
        >
          {label}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(30px, 4.5vw, 48px)",
            lineHeight: 1.12,
            color: "var(--bone)",
            margin: 0,
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h2>
        {sub && (
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              color: "var(--mist)",
              lineHeight: 1.7,
              marginTop: "18px",
              marginBottom: 0,
            }}
          >
            {sub}
          </p>
        )}
      </div>
    </Reveal>
  );
}

/* ── Card with blue hover glow ── */
export function GlowCard({
  children,
  featured = false,
  accentBorder = false,
  style,
}: {
  children: ReactNode;
  featured?: boolean;
  accentBorder?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      className="glow-card"
      style={{
        background: featured
          ? "linear-gradient(160deg, rgba(0,174,239,0.08) 0%, #141414 45%)"
          : "#141414",
        border: featured ? "1px solid rgba(0,174,239,0.45)" : "1px solid #1E1E1E",
        borderLeft: accentBorder ? "3px solid #00AEEF" : undefined,
        borderRadius: "12px",
        padding: "32px",
        position: "relative",
        transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
        height: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
