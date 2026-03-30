import { useState } from "react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  tier: string;
  price: string;
  period: string;
  features: string[];
  featured?: boolean;
  badgeText?: string;
  ctaLabel?: string;
}

export default function PricingCard({ tier, price, period, features, featured, badgeText, ctaLabel = "Get Started" }: PricingCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="pricing-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: featured ? "var(--black)" : hovered ? "var(--cream)" : "var(--off-white)",
        color: featured ? "var(--off-white)" : "var(--black)",
        padding: "60px 48px",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
      }}
    >
      {badgeText && (
        <div
          style={{
            position: "absolute",
            top: "28px",
            right: "28px",
            background: "var(--gold)",
            color: "var(--black)",
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "5px 14px",
            fontWeight: 500,
          }}
        >
          {badgeText}
        </div>
      )}

      <p
        style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "24px",
        }}
      >
        {tier}
      </p>

      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: price === "Custom" ? "48px" : "64px",
          fontWeight: 300,
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        {price !== "Custom" && (
          <span style={{ fontSize: "20px", verticalAlign: "super", marginRight: "2px" }}>$</span>
        )}
        {price}
      </div>

      <p
        style={{
          fontSize: "12px",
          color: featured ? "#777" : "var(--gray)",
          letterSpacing: "0.05em",
          marginBottom: "40px",
        }}
      >
        {period}
      </p>

      <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}>
        {features.map((f) => (
          <li
            key={f}
            style={{
              fontSize: "14px",
              color: featured ? "#aaa" : "var(--gray)",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}
          >
            <span style={{ color: "var(--gold)", flexShrink: 0 }}>—</span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        style={{
          display: "block",
          textAlign: "center",
          padding: "16px 32px",
          fontSize: "11px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 500,
          textDecoration: "none",
          border: featured ? "1.5px solid var(--gold)" : "1.5px solid var(--gray-light)",
          color: featured ? "var(--black)" : "var(--black)",
          background: featured ? "var(--gold)" : "transparent",
          transition: "all 0.25s",
        }}
        onMouseEnter={(e) => {
          if (!featured) {
            (e.currentTarget as HTMLElement).style.background = "var(--black)";
            (e.currentTarget as HTMLElement).style.color = "var(--off-white)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--black)";
          } else {
            (e.currentTarget as HTMLElement).style.background = "var(--gold-light)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-light)";
          }
        }}
        onMouseLeave={(e) => {
          if (!featured) {
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.color = "var(--black)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--gray-light)";
          } else {
            (e.currentTarget as HTMLElement).style.background = "var(--gold)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
          }
        }}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
