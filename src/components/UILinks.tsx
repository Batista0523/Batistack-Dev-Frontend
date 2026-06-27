'use client';
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { fireConversionEvent } from "../ga";
import { Reveal } from "./Reveal";

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
      href={to}
      data-cursor="cta"
      className="ui-btn-primary"
      style={{ ...btnBase, color: "#0A0A0A", background: "#00AEEF" }}
      onClick={to === "/contact" ? fireConversionEvent : undefined}
    >
      {children}
    </Link>
  );
}

export function GhostLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      href={to}
      data-cursor="cta"
      className="ui-btn-ghost"
      style={{
        ...btnBase,
        color: "#00AEEF",
        background: "transparent",
        border: "1px solid rgba(0,174,239,0.5)",
        padding: "14px 34px",
      }}
      onClick={to === "/contact" ? fireConversionEvent : undefined}
    >
      {children}
    </Link>
  );
}

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
    <section style={{ background: "transparent", padding: "96px 0" }}>
      <div className="section-container">
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
            <img
              src="/brand/batistack-mark.png"
              alt=""
              aria-hidden
              style={{
                position: "absolute",
                right: "clamp(16px, 5%, 80px)",
                top: "50%",
                transform: "translateY(-50%)",
                width: "220px",
                height: "auto",
                opacity: 0.05,
                pointerEvents: "none",
                userSelect: "none",
              }}
            />
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
      </div>
    </section>
  );
}
