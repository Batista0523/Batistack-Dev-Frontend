import { useState } from "react";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export default function ServiceCard({ number, title, description, tags }: ServiceCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="service-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--cream)" : "var(--off-white)",
        padding: "48px 40px",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
      }}
    >
      {/* Gold left accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "3px",
          height: hovered ? "100%" : "0%",
          background: "var(--gold)",
          transition: "height 0.4s ease",
        }}
      />
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "13px",
          color: "var(--gold)",
          letterSpacing: "0.1em",
          marginBottom: "24px",
        }}
      >
        {number}
      </div>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "26px",
          fontWeight: 400,
          lineHeight: 1.2,
          marginBottom: "16px",
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: "14px", lineHeight: 1.7, color: "var(--gray)" }}>
        {description}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "5px 12px",
              border: "1px solid var(--gray-light)",
              color: "var(--gray)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
