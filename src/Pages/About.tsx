import { useTrafficTracker } from "../hook/useTrafficTracker";
import { localBusinessSchema, generatePageMeta } from "../lib/seoSchema";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ─── Values data ──────────────────────────────────────────────────────────────

const values = [
  {
    number: "01",
    name: "Speed",
    description:
      "We respect your time. Projects are scoped tightly and delivered fast. If it's taking forever, something's wrong.",
  },
  {
    number: "02",
    name: "Honesty",
    description:
      "We quote what it actually costs. We tell you when something won't work. We don't upsell what you don't need.",
  },
  {
    number: "03",
    name: "Results",
    description:
      "The goal is never a beautiful website. The goal is a website that gets you more customers.",
  },
];

// ─── SVG icons ────────────────────────────────────────────────────────────────

function IconLocation() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M12 2C8.69 2 6 4.69 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.31-2.69-6-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconEmail() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
      />
      <polyline
        points="22,6 12,13 2,6"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.5"
      />
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function About() {
  useTrafficTracker("page_view", "/about");

  return (
    <>
      <Helmet>
        {(() => {
          const meta = generatePageMeta(
            "About Batistack — NYC Web Designer & AI Developer",
            "Batistack is an NYC-based web design studio building conversion-focused websites and AI tools for small businesses.",
            "/about"
          );
          return (
            <>
              <title>{meta.title}</title>
              <meta name="description" content={meta.description} />
              <link rel="canonical" href={meta.canonical} />
              <meta property="og:title" content={meta.ogTitle} />
              <meta property="og:description" content={meta.ogDescription} />
              <meta property="og:url" content={meta.canonical} />
              <meta property="og:image" content={meta.ogImage} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />
              <meta property="og:type" content="website" />
              <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
            </>
          );
        })()}
      </Helmet>

      <div style={{ background: "var(--void)", color: "var(--bone)", overflowX: "hidden" }}>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section style={{ background: "var(--void)", padding: "160px 0 80px" }}>
          <div className="about-container">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "24px",
                }}
              >
                ABOUT
              </p>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(80px, 14vw, 150px)",
                  lineHeight: 0.9,
                  margin: 0,
                }}
              >
                <span style={{ color: "var(--bone)" }}>BUILT IN</span>
                <br />
                <span style={{ color: "var(--gold)" }}>NEW YORK.</span>
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "24px",
                  color: "var(--mist)",
                  maxWidth: "560px",
                  marginTop: "32px",
                  lineHeight: 1.5,
                }}
              >
                A small team with a big obsession: building websites that actually move the needle.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── STORY SECTION ────────────────────────────────────────────── */}
        <section style={{ background: "var(--bone)", color: "var(--void)", padding: "120px 0" }}>
          <div className="about-container">
            <div
              className="about-story-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "60fr 40fr",
                gap: "80px",
                alignItems: "start",
              }}
            >
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold-dim)",
                    marginBottom: "24px",
                  }}
                >
                  THE STORY
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "44px",
                    fontWeight: 300,
                    color: "var(--void)",
                    lineHeight: 1.2,
                    marginBottom: "32px",
                  }}
                >
                  Started because we were tired of overpriced mediocrity.
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "16px",
                    color: "#333",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                  }}
                >
                  Batistack was built in New York City by Elisaul Batista — a developer who spent years watching businesses overpay for websites that didn't convert, didn't load fast, and didn't grow with them.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "16px",
                    color: "#333",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                  }}
                >
                  The mission is simple: deliver agency-quality work at a price that makes sense for real businesses. Custom-built in React, AI-integrated from day one, shipped fast.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "16px",
                    color: "#333",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                  }}
                >
                  No subcontractors. No templates. No account managers between you and the person doing the work.
                </p>
              </motion.div>

              {/* Right — founder card */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: 0.15 }}
              >
                <div
                  style={{
                    border: "1px solid var(--smoke)",
                    padding: "40px",
                    background: "var(--void)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "28px",
                      fontWeight: 300,
                      color: "var(--bone)",
                      marginBottom: "8px",
                    }}
                  >
                    Elisaul Batista
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--mist)",
                      marginBottom: "0",
                    }}
                  >
                    Founder &amp; Lead Developer
                  </p>

                  <div
                    style={{
                      height: "1px",
                      background: "var(--smoke)",
                      margin: "24px 0",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "var(--mist)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      marginBottom: "16px",
                    }}
                  >
                    <IconLocation />
                    New York City
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      color: "var(--mist)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                    }}
                  >
                    <IconEmail />
                    elisaul@batistack.com
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── VALUES SECTION ───────────────────────────────────────────── */}
        <section style={{ background: "var(--void)", padding: "120px 0" }}>
          <div className="about-container">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              style={{ marginBottom: "60px" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "16px",
                }}
              >
                HOW WE WORK
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "52px",
                  fontWeight: 300,
                  color: "var(--bone)",
                  lineHeight: 1.15,
                }}
              >
                Three things we never compromise on.
              </h2>
            </motion.div>

            {/* Value cards */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="about-values-cards"
              style={{
                display: "flex",
                gap: "1px",
                background: "var(--smoke)",
              }}
            >
              {values.map((v) => (
                <div
                  key={v.number}
                  style={{
                    background: "var(--ash)",
                    padding: "48px 40px",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "48px",
                      color: "var(--gold-dim)",
                      lineHeight: 1,
                    }}
                  >
                    {v.number}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "32px",
                      fontWeight: 300,
                      color: "var(--bone)",
                      margin: "16px 0 12px",
                    }}
                  >
                    {v.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "15px",
                      color: "var(--mist)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {v.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA SECTION ──────────────────────────────────────────────── */}
        <section style={{ background: "var(--ash)", padding: "120px 0" }}>
          <div className="about-container" style={{ textAlign: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "80px",
                  color: "var(--bone)",
                  lineHeight: 0.9,
                  marginBottom: "24px",
                }}
              >
                LET'S BUILD
                <br />
                SOMETHING.
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "22px",
                  color: "var(--mist)",
                  marginBottom: "40px",
                }}
              >
                No application needed. Just a conversation.
              </p>
              <Link
                to="/contact"
                data-cursor="cta"
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  background: "var(--gold)",
                  color: "var(--void)",
                  padding: "18px 48px",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                START THE CONVERSATION →
              </Link>
            </motion.div>
          </div>
        </section>

      </div>

      <style>{`
        .about-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 60px;
        }

        @media (max-width: 900px) {
          .about-container {
            padding: 0 32px;
          }

          .about-story-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          .about-values-cards {
            flex-direction: column !important;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 0 24px;
          }
        }
      `}</style>
    </>
  );
}
