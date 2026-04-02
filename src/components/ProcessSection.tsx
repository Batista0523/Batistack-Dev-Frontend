import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// ── Step data ─────────────────────────────────────────────────────────────────

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We talk through your business, goals, and what you need. I ask questions. You get honest recommendations.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I wireframe and design your site — you review and give feedback. Two rounds of revisions included.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I code your site using React and modern tools. Clean, fast, maintainable code — not a page builder.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "I deploy to production, test everything, and hand it over. 30-day support window included.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function ProcessSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const stepsRef = useRef(null);
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

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
          style={{ marginBottom: "80px" }}
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
            How It Works
          </p>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 300,
              color: "var(--off-white)",
              lineHeight: 1.1,
              marginBottom: "20px",
              maxWidth: "640px",
            }}
          >
            From first message to live website.
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              fontFamily: "var(--font-sans)",
              lineHeight: 1.6,
            }}
          >
            A simple, predictable process with clear milestones.
          </p>
        </motion.div>

        {/* ── Steps ── */}
        <div
          ref={stepsRef}
          style={{ position: "relative" }}
        >
          {/* Connecting line (desktop) */}
          <div
            className="process-connector"
            style={{
              position: "absolute",
              top: "20px",
              left: "0",
              right: "0",
              height: "1px",
              background: "#1a1a1a",
              zIndex: 0,
            }}
          />

          <div
            className="process-steps"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "40px",
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Gold accent line */}
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    background: "var(--gold)",
                    marginBottom: "32px",
                  }}
                />

                {/* Large background number */}
                <div style={{ position: "relative", marginBottom: "4px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "72px",
                      fontWeight: 200,
                      color: "#1a1a1a",
                      lineHeight: 1,
                      display: "block",
                      userSelect: "none",
                    }}
                  >
                    {step.number}
                  </span>

                  {/* Step title overlaid */}
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "var(--off-white)",
                      marginTop: "-20px",
                      marginBottom: "12px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.7,
                    fontFamily: "var(--font-sans)",
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            marginTop: "80px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "48px",
              fontStyle: "italic",
              color: "var(--gold)",
              marginBottom: "40px",
              lineHeight: 1.1,
            }}
          >
            Ready to start?
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/contact"
              style={{
                display: "inline-block",
                padding: "16px 40px",
                background: "var(--gold)",
                color: "var(--black)",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                textDecoration: "none",
                fontFamily: "var(--font-sans)",
                transition: "opacity 0.25s, transform 0.2s",
              }}
              className="process-btn-primary"
            >
              Book a Free Call
            </Link>
            <Link
              to="/services"
              style={{
                display: "inline-block",
                padding: "16px 40px",
                background: "transparent",
                color: "var(--off-white)",
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                textDecoration: "none",
                fontFamily: "var(--font-sans)",
                border: "1px solid rgba(245,243,239,0.25)",
                transition: "border-color 0.25s, color 0.25s, transform 0.2s",
              }}
              className="process-btn-ghost"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        .process-steps {
          grid-template-columns: repeat(4, 1fr) !important;
        }

        .process-connector {
          display: block;
        }

        @media (max-width: 900px) {
          .process-steps {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          .process-connector {
            display: none !important;
          }
        }

        .process-btn-primary:hover {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .process-btn-ghost:hover {
          border-color: rgba(245,243,239,0.55) !important;
          color: var(--off-white) !important;
          transform: translateY(-1px);
        }
      `}</style>
    </section>
  );
}
