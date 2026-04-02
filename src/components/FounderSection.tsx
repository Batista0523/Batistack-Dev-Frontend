import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

// ── Checkmark SVG ─────────────────────────────────────────────────────────────

function GoldCheck() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: "2px" }}
    >
      <polyline
        points="2,8 6,12 14,4"
        stroke="#c9a84c"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Honest list items ─────────────────────────────────────────────────────────

const honestItems = [
  "Direct communication — no account managers",
  "Founding client rates — lower than market",
  "Full attention on your project",
  "30-day support included after launch",
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function FounderSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--off-white)",
        color: "var(--black)",
        padding: "120px 0",
      }}
    >
      <div className="section-container founder-container">
        {/* ── Left column ── */}
        <motion.div
          className="founder-left"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Monogram card */}
          <div
            style={{
              background: "var(--cream)",
              border: "1px solid var(--gray-light)",
              aspectRatio: "3 / 4",
              maxWidth: "400px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "200px",
                fontWeight: 300,
                color: "var(--gold)",
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              B
            </span>
          </div>

          {/* Availability badge */}
          <div style={{ marginTop: "20px" }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                padding: "8px 16px",
                border: "1px solid rgba(201,168,76,0.3)",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
              }}
            >
              [ Available for Projects ]
            </span>
          </div>
        </motion.div>

        {/* ── Right column ── */}
        <motion.div
          className="founder-right"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Label */}
          <p
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              fontWeight: 500,
              marginBottom: "20px",
              fontFamily: "var(--font-sans)",
            }}
          >
            The Developer
          </p>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4vw, 56px)",
              fontWeight: 300,
              color: "var(--black)",
              lineHeight: 1.1,
              marginBottom: "32px",
            }}
          >
            One developer.
            <br />
            Full accountability.
          </h2>

          {/* Body paragraphs */}
          <p
            style={{
              fontSize: "16px",
              color: "#555",
              lineHeight: 1.8,
              maxWidth: "480px",
              fontFamily: "var(--font-sans)",
              marginBottom: "20px",
            }}
          >
            I'm Batista — a full-stack developer based in New York City. I build
            custom websites and AI integrations for small businesses ready to
            grow online.
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#555",
              lineHeight: 1.8,
              maxWidth: "480px",
              fontFamily: "var(--font-sans)",
              marginBottom: "40px",
            }}
          >
            I'm actively building my client portfolio. That means you get my
            full focus, direct communication, and founding-client pricing —
            not an agency markup.
          </p>

          {/* Honest list */}
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 48px 0",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {honestItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  fontSize: "15px",
                  color: "#444",
                  fontFamily: "var(--font-sans)",
                  lineHeight: 1.5,
                }}
              >
                <GoldCheck />
                {item}
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            to="/contact"
            className="founder-btn-text"
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
            }}
          >
            Let's talk about your project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="#c9a84c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        .founder-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .founder-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        @media (max-width: 900px) {
          .founder-container {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          .founder-left {
            align-items: center;
          }
        }

        .founder-btn-text {
          transition: gap 0.25s ease;
        }

        .founder-btn-text:hover {
          gap: 14px !important;
        }
      `}</style>
    </section>
  );
}
