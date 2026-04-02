import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ── Animation variants ──────────────────────────────────────────────────────
const EASE = [0.25, 0.46, 0.45, 0.94] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: EASE, delay },
});

// ── Inline SVG arrow icon ───────────────────────────────────────────────────
function ArrowRight({ size = 14, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 7h12M8 2l5 5-5 5"
        stroke={color}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Stat item ───────────────────────────────────────────────────────────────
interface StatProps {
  number: string;
  label: string;
  hideDivider?: boolean;
}

function StatItem({ number, label, hideDivider = false }: StatProps) {
  return (
    <div style={{ display: "flex", alignItems: "stretch", gap: 0 }}>
      {!hideDivider && (
        <div
          style={{
            width: "1px",
            background: "#222",
            marginRight: "clamp(24px, 4vw, 56px)",
            alignSelf: "stretch",
          }}
          aria-hidden="true"
        />
      )}
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3vw, 36px)",
            fontWeight: 400,
            color: "var(--gold)",
            lineHeight: 1,
            letterSpacing: "0.01em",
          }}
        >
          {number}
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "10px",
            fontWeight: 500,
            color: "var(--gray)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginTop: "8px",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export default function HeroSection2() {
  return (
    <>
      <section
        aria-label="Hero"
        style={{
          minHeight: "100vh",
          background: "var(--black)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "120px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Very subtle radial glow behind headline */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "500px",
            background: "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          className="section-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* 1. Eyebrow label */}
          <motion.div {...fadeUp(0.2)}>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#555",
                border: "1px solid #222",
                padding: "6px 16px",
                marginBottom: "clamp(32px, 5vw, 56px)",
              }}
            >
              [ NYC — Web Design &amp; AI ]
            </span>
          </motion.div>

          {/* 2. Main headline */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "clamp(24px, 4vw, 40px)",
            }}
          >
            {/* Line 1 */}
            <motion.div {...fadeUp(0.4)}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(48px, 8vw, 110px)",
                  fontWeight: 300,
                  color: "var(--off-white)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                }}
              >
                We build websites
              </span>
            </motion.div>

            {/* Line 2 — italic gold */}
            <motion.div {...fadeUp(0.55)}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(48px, 8vw, 110px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "var(--gold)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.01em",
                }}
              >
                that make money.
              </span>
            </motion.div>

            {/* Line 3 — muted, dramatic contrast */}
            <motion.div
              className="hero-line3"
              {...fadeUp(0.7)}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(48px, 8vw, 110px)",
                  fontWeight: 300,
                  color: "#2e2e2e",
                  lineHeight: 0.95,
                  letterSpacing: "-0.01em",
                }}
              >
                for NYC businesses.
              </span>
            </motion.div>
          </div>

          {/* 3. Subheading */}
          <motion.p
            {...fadeUp(0.9)}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              fontWeight: 400,
              color: "#666",
              lineHeight: 1.75,
              maxWidth: "520px",
              textAlign: "center",
              marginBottom: 0,
            }}
          >
            Custom websites + AI integrations. Delivered in 2–3 weeks.
            Built by one developer who cares about your results.
          </motion.p>

          {/* 4. CTA row */}
          <motion.div
            {...fadeUp(1.1)}
            style={{
              display: "flex",
              gap: "16px",
              marginTop: "56px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link to="/contact" className="btn-primary">
              Start a Project
              <ArrowRight size={13} color="var(--black)" />
            </Link>
            <Link to="/services" className="btn-ghost">
              See What I Build
            </Link>
          </motion.div>

          {/* 5. Stats strip */}
          <motion.div
            {...fadeUp(1.3)}
            className="hero-stats"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(24px, 4vw, 56px)",
              marginTop: "80px",
              paddingTop: "40px",
              borderTop: "1px solid #161616",
              width: "100%",
              maxWidth: "640px",
            }}
          >
            <StatItem number="2–3 Weeks" label="Average delivery" hideDivider />
            <StatItem number="From $1,200" label="Starting price" />
            <StatItem number="100% Custom" label="No templates ever" />
          </motion.div>
        </div>

        {/* 6. Scroll indicator */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "9px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#333",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "var(--gold)",
              transformOrigin: "top center",
              animation: "scrollLineAnim 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ── Responsive overrides ── */}
      <style>{`
        @media (max-width: 768px) {
          .hero-line3 {
            display: none !important;
          }
          .hero-stats {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 24px !important;
            padding-left: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
