import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────────

interface PricingFeature {
  text: string;
}

interface PricingCardData {
  tier: string;
  price: string;
  period: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaVariant: "text" | "primary";
  popular?: boolean;
}

// ── Data ───────────────────────────────────────────────────────────────────────

const cards: PricingCardData[] = [
  {
    tier: "Starter",
    price: "$1,200",
    period: "one-time payment",
    features: [
      { text: "Custom 5-page website" },
      { text: "Mobile responsive design" },
      { text: "Contact form setup" },
      { text: "Basic SEO (title, meta, sitemap)" },
      { text: "2 revision rounds" },
      { text: "14-day delivery" },
    ],
    ctaLabel: "Get Started",
    ctaVariant: "text",
  },
  {
    tier: "Growth",
    price: "$2,800",
    period: "one-time payment",
    features: [
      { text: "Custom website (up to 10 pages)" },
      { text: "AI chatbot integration" },
      { text: "Lead capture automation" },
      { text: "Advanced SEO setup" },
      { text: "3 revision rounds" },
      { text: "21-day delivery" },
    ],
    ctaLabel: "Start a Project",
    ctaVariant: "primary",
    popular: true,
  },
  {
    tier: "Custom",
    price: "Custom",
    period: "let's scope it together",
    features: [
      { text: "Complex web platforms" },
      { text: "Custom AI integrations" },
      { text: "API connections & workflows" },
      { text: "Priority communication" },
      { text: "Ongoing retainer available" },
    ],
    ctaLabel: "Contact Me",
    ctaVariant: "text",
  },
];

// ── Check Icon ─────────────────────────────────────────────────────────────────

function CheckIcon({ dark }: { dark?: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, marginTop: "2px" }}
      aria-hidden="true"
    >
      <circle
        cx="8"
        cy="8"
        r="7"
        stroke={dark ? "rgba(201,168,76,0.35)" : "rgba(201,168,76,0.25)"}
        strokeWidth="1"
      />
      <polyline
        points="5,8.2 7,10.2 11,6"
        stroke="#c9a84c"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Arrow Icon (for btn-text) ──────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="2" y1="8" x2="13" y2="8" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" />
      <polyline
        points="9,4.5 13,8 9,11.5"
        stroke="#c9a84c"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Pricing Card ───────────────────────────────────────────────────────────────

function PricingCard({
  card,
  index,
  inView,
}: {
  card: PricingCardData;
  index: number;
  inView: boolean;
}) {
  const isPopular = card.popular === true;
  const isCustom = card.price === "Custom";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        position: "relative",
        background: isPopular ? "var(--black)" : "white",
        border: isPopular ? "2px solid var(--gold)" : "1px solid var(--gray-light)",
        padding: "48px 40px",
        color: isPopular ? "var(--off-white)" : "var(--black)",
        boxShadow: isPopular ? "0 24px 80px rgba(0,0,0,0.15)" : "none",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Most Popular badge */}
      {isPopular && (
        <span
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "var(--gold)",
            color: "var(--black)",
            fontSize: "9px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            fontFamily: "var(--font-sans)",
            fontWeight: 600,
            padding: "4px 12px",
          }}
        >
          Most Popular
        </span>
      )}

      {/* Tier */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "11px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--gold)",
          fontWeight: 500,
          marginBottom: "24px",
        }}
      >
        {card.tier}
      </p>

      {/* Price */}
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: isCustom ? "48px" : "64px",
          fontWeight: 300,
          lineHeight: 1,
          color: isPopular ? "var(--off-white)" : "var(--black)",
          marginBottom: "8px",
        }}
      >
        {card.price}
      </p>

      {/* Period */}
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "12px",
          color: "#888",
          marginBottom: "32px",
        }}
      >
        {card.period}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: isPopular ? "#1e1e1e" : "var(--gray-light)",
          marginBottom: "32px",
        }}
      />

      {/* Features */}
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: "0 0 40px 0",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        {card.features.map((feat) => (
          <li
            key={feat.text}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              lineHeight: 1.8,
              color: isPopular ? "rgba(245,243,239,0.8)" : "#444",
            }}
          >
            <CheckIcon dark={isPopular} />
            {feat.text}
          </li>
        ))}
      </ul>

      {/* CTA */}
      {card.ctaVariant === "primary" ? (
        <Link
          to="/contact"
          className="btn-primary"
          style={{ justifyContent: "center", textAlign: "center" }}
        >
          {card.ctaLabel}
        </Link>
      ) : (
        <Link to="/contact" className="btn-text pricing-btn-text">
          {card.ctaLabel}
          <ArrowIcon />
        </Link>
      )}
    </motion.div>
  );
}

// ── Component ──────────────────────────────────────────────────────────────────

export default function PricingSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  const noteRef = useRef<HTMLParagraphElement>(null);
  const noteInView = useInView(noteRef, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        background: "var(--off-white)",
        color: "var(--black)",
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
          style={{ textAlign: "center", marginBottom: "72px" }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 500,
              marginBottom: "20px",
            }}
          >
            Transparent Pricing
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 300,
              color: "var(--black)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Simple packages. No surprises.
          </h2>
        </motion.div>

        {/* ── Cards grid ── */}
        <div
          ref={gridRef}
          className="pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {cards.map((card, index) => (
            <PricingCard
              key={card.tier}
              card={card}
              index={index}
              inView={gridInView}
            />
          ))}
        </div>

        {/* ── Footnote ── */}
        <motion.p
          ref={noteRef}
          initial={{ opacity: 0, y: 20 }}
          animate={noteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "var(--gray)",
            fontStyle: "italic",
            fontFamily: "var(--font-sans)",
            marginTop: "40px",
          }}
        >
          Current rates are guaranteed through June 2026. Pricing increases for new clients in Q3.
        </motion.p>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 480px;
            margin: 0 auto;
          }
        }

        .pricing-btn-text {
          align-self: flex-start;
        }
      `}</style>
    </section>
  );
}
