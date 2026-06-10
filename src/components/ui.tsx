import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ── Scroll reveal wrapper ── */
export function Reveal({
  children,
  delay = 0,
  style,
}: {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={style}
    >
      {children}
    </motion.div>
  );
}

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

/* ── Buttons ── */
const btnBase: CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontWeight: 700,
  fontSize: "13px",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  padding: "15px 34px",
  borderRadius: "6px",
  textDecoration: "none",
  display: "inline-block",
  transition: "background 0.2s ease, color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
  whiteSpace: "nowrap",
};

export function PrimaryLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      data-cursor="cta"
      className="ui-btn-primary"
      style={{ ...btnBase, color: "#0A0A0A", background: "#00AEEF" }}
    >
      {children}
    </Link>
  );
}

export function GhostLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      data-cursor="cta"
      className="ui-btn-ghost"
      style={{
        ...btnBase,
        color: "#00AEEF",
        background: "transparent",
        border: "1px solid rgba(0,174,239,0.5)",
        padding: "14px 34px",
      }}
    >
      {children}
    </Link>
  );
}

/* ── Closing CTA banner ── */
export function CTABanner({
  title = "Stop Hiring. Start Automating.",
  sub = "Schedule a free assessment and see exactly which parts of your business an AI workforce can run.",
  cta = "Schedule Free Assessment",
}: {
  title?: string;
  sub?: string;
  cta?: string;
}) {
  return (
    <Section>
      <Reveal>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "16px",
            border: "1px solid rgba(0,174,239,0.35)",
            background:
              "radial-gradient(ellipse at 50% 120%, rgba(0,174,239,0.18) 0%, #0D0D0D 60%)",
            textAlign: "center",
            padding: "clamp(56px, 8vw, 96px) 24px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(30px, 5vw, 52px)",
              color: "var(--bone)",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              color: "var(--mist)",
              maxWidth: "560px",
              margin: "18px auto 36px",
              lineHeight: 1.7,
            }}
          >
            {sub}
          </p>
          <PrimaryLink to="/contact">{cta}</PrimaryLink>
        </div>
      </Reveal>
    </Section>
  );
}
