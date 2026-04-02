import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// ── SVG Icons ──────────────────────────────────────────────────────────────

function BrowserIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="8"
        width="32"
        height="24"
        rx="2"
        stroke="#c9a84c"
        strokeWidth="1.5"
      />
      <line x1="4" y1="15" x2="36" y2="15" stroke="#c9a84c" strokeWidth="1.5" />
      <circle cx="9" cy="11.5" r="1.5" fill="#c9a84c" />
      <circle cx="14" cy="11.5" r="1.5" fill="#c9a84c" />
      <circle cx="19" cy="11.5" r="1.5" fill="#c9a84c" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <polyline
        points="22,4 12,22 20,22 18,36 28,18 20,18 22,4"
        stroke="#c9a84c"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 8h28a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H14l-8 6V10a2 2 0 0 1 2-2z"
        stroke="#c9a84c"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <line x1="12" y1="17" x2="28" y2="17" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="12" y1="22" x2="22" y2="22" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Card data ───────────────────────────────────────────────────────────────

interface CardData {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

const cards: CardData[] = [
  {
    number: "01",
    icon: <BrowserIcon />,
    title: "Custom Website Design",
    description:
      "A hand-coded website built around your specific business — not a template. Responsive, fast, and designed to convert visitors into customers.",
    tags: ["React", "TypeScript", "Framer Motion"],
  },
  {
    number: "02",
    icon: <LightningIcon />,
    title: "AI Chatbot & Automation",
    description:
      "A custom AI assistant trained on your business. It answers questions, qualifies leads, and follows up — automatically, 24/7.",
    tags: ["Claude API", "OpenAI", "Automation"],
  },
  {
    number: "03",
    icon: <ChatIcon />,
    title: "High-Converting Landing Page",
    description:
      "A single-purpose page built to turn ad traffic into customers. Optimized for speed, clarity, and maximum ROI on your marketing spend.",
    tags: ["Performance", "SEO", "Analytics"],
  },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function WhatIBuild() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  const bottomRef = useRef(null);
  const bottomInView = useInView(bottomRef, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        background: "var(--black)",
        padding: "120px 0",
      }}
    >
      <div className="section-container">

        {/* ── Header ── */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ marginBottom: "72px" }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 500,
              marginBottom: "20px",
              fontFamily: "var(--font-sans)",
            }}
          >
            What I Build
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(40px, 5vw, 72px)",
              fontWeight: 300,
              color: "var(--off-white)",
              lineHeight: 1.1,
              maxWidth: "720px",
            }}
          >
            Every type of digital product your business needs.
          </h2>
        </motion.div>

        {/* ── Cards grid ── */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
          }}
          className="wib-grid"
        >
          {cards.map((card, index) => (
            <CapabilityCard
              key={card.number}
              card={card}
              index={index}
              inView={cardsInView}
            />
          ))}
        </div>

        {/* ── Divider ── */}
        <div
          style={{
            borderTop: "1px solid #1a1a1a",
            marginTop: "64px",
          }}
        />

        {/* ── Bottom row ── */}
        <motion.div
          ref={bottomRef}
          initial={{ opacity: 0, y: 24 }}
          animate={bottomInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "32px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <p
            style={{
              fontSize: "15px",
              color: "#666",
              fontFamily: "var(--font-sans)",
              margin: 0,
            }}
          >
            Want something specific? Let's talk.
          </p>
          <Link
            to="/contact"
            style={{
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--gold)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              transition: "gap 0.25s",
            }}
            className="wib-btn-text"
          >
            Get in touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 60px;
        }

        .wib-grid {
          grid-template-columns: repeat(3, 1fr) !important;
        }

        @media (max-width: 900px) {
          .wib-grid {
            grid-template-columns: 1fr !important;
          }

          .section-container {
            padding: 0 28px;
          }
        }

        .wib-card {
          transition: border-color 0.3s ease;
        }

        .wib-card:hover {
          border-color: rgba(201, 168, 76, 0.3) !important;
        }

        .wib-btn-text:hover {
          gap: 14px !important;
        }
      `}</style>
    </section>
  );
}

// ── Card sub-component ───────────────────────────────────────────────────────

interface CardProps {
  card: CardData;
  index: number;
  inView: boolean;
}

function CapabilityCard({ card, index, inView }: CardProps) {
  return (
    <motion.div
      className="wib-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
      style={{
        background: "#111",
        border: "1px solid #1a1a1a",
        padding: "48px 40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Icon */}
      <div>{card.icon}</div>

      {/* Number */}
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "14px",
          letterSpacing: "0.15em",
          color: "var(--gold)",
          margin: 0,
        }}
      >
        {card.number}
      </p>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "28px",
          fontWeight: 400,
          color: "var(--off-white)",
          lineHeight: 1.2,
          margin: 0,
        }}
      >
        {card.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: "15px",
          color: "#888",
          lineHeight: 1.75,
          fontFamily: "var(--font-sans)",
          margin: 0,
          flexGrow: 1,
        }}
      >
        {card.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
        {card.tags.map((tag) => (
          <span
            key={tag}
            style={{
              border: "1px solid #2a2a2a",
              color: "#666",
              padding: "4px 10px",
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "var(--font-sans)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
