import { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { caseStudies } from "../data/caseStudies";
import SectionLabel from "../components/SectionLabel";
import FinalCTA from "../components/FinalCTA";

// ─── Scroll-animated wrapper ────────────────────────────────────────────────

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      initial={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const study = caseStudies.find((c) => c.id === id);

  if (!study) {
    return (
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          padding: "120px 60px",
          textAlign: "center",
        }}
      >
        <Helmet>
          <title>Case Study Not Found — Batistack</title>
        </Helmet>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 300,
            color: "var(--black)",
          }}
        >
          Case study not found.
        </p>
        <Link to="/" className="btn-ghost-bs">
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{study.title} — Batistack Case Study</title>
        <meta
          name="description"
          content={`${study.category} case study: ${study.challenge.slice(0, 120)}...`}
        />
      </Helmet>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--black)",
          padding: "140px 60px 80px",
        }}
        className="cs-hero"
      >
        <div style={{ maxWidth: "860px" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                margin: "0 0 32px 0",
              }}
            >
              {study.category}
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(40px, 6vw, 64px)",
              fontWeight: 300,
              lineHeight: 1.08,
              color: "var(--off-white)",
              margin: "0 0 40px 0",
            }}
          >
            {study.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center" }}
          >
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold-light)",
                fontFamily: "var(--font-sans)",
                background: "rgba(201,168,76,0.12)",
                padding: "8px 16px",
                border: "1px solid rgba(201,168,76,0.25)",
              }}
            >
              {study.timeline} delivery
            </span>
            <span
              style={{
                fontSize: "13px",
                color: "#777",
                fontFamily: "var(--font-sans)",
              }}
            >
              {study.client}
            </span>
          </motion.div>
        </div>
      </section>

      {/* ── CHALLENGE + SOLUTION ──────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--off-white)",
          padding: "80px 60px",
        }}
        className="cs-challenge"
      >
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              maxWidth: "1100px",
            }}
            className="cs-challenge-grid"
          >
            {/* Challenge */}
            <div>
              <SectionLabel>The Challenge</SectionLabel>
              <p
                style={{
                  fontSize: "17px",
                  color: "var(--black)",
                  lineHeight: 1.8,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {study.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <SectionLabel>The Solution</SectionLabel>
              <p
                style={{
                  fontSize: "17px",
                  color: "var(--black)",
                  lineHeight: 1.8,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {study.solution}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── RESULTS ───────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--cream)",
          padding: "80px 60px",
        }}
        className="cs-results"
      >
        <Reveal>
          <div style={{ marginBottom: "56px" }}>
            <SectionLabel>Results</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 3.5vw, 54px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--black)",
                margin: 0,
              }}
            >
              The numbers.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
              background: "var(--gray-light)",
            }}
            className="cs-metrics-grid"
          >
            {study.results.map((result, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                style={{
                  background: "var(--cream)",
                  padding: "48px 40px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(44px, 5vw, 60px)",
                    fontWeight: 400,
                    color: "var(--gold)",
                    lineHeight: 1,
                    margin: "0 0 12px 0",
                  }}
                >
                  {result.after}
                </p>
                <p
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gray)",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 500,
                    margin: "0 0 8px 0",
                  }}
                >
                  {result.metric}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--gray-light)",
                    fontFamily: "var(--font-sans)",
                    margin: 0,
                    textDecoration: "line-through",
                  }}
                >
                  from {result.before}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--off-white)",
          padding: "60px 60px",
          borderTop: "1px solid var(--gray-light)",
          borderBottom: "1px solid var(--gray-light)",
        }}
        className="cs-stack"
      >
        <Reveal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                flexShrink: 0,
              }}
            >
              Tech Stack
            </span>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {study.techStack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── TESTIMONIAL ───────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--black)",
          padding: "100px 60px",
          textAlign: "center",
        }}
        className="cs-testimonial"
      >
        <Reveal>
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "96px",
                fontWeight: 400,
                color: "var(--gold)",
                lineHeight: 0.6,
                marginBottom: "32px",
                display: "block",
              }}
            >
              "
            </p>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 2.5vw, 24px)",
                fontStyle: "italic",
                fontWeight: 300,
                color: "var(--off-white)",
                lineHeight: 1.65,
                margin: "0 0 40px 0",
              }}
            >
              {study.testimonial}
            </p>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                margin: 0,
              }}
            >
              {study.author}
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────────── */}
      <FinalCTA />

      {/* ── RESPONSIVE STYLES ─────────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 900px) {
          .cs-hero {
            padding: 120px 28px 60px !important;
          }
          .cs-challenge {
            padding: 60px 28px !important;
          }
          .cs-challenge-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .cs-results {
            padding: 60px 28px !important;
          }
          .cs-metrics-grid {
            grid-template-columns: 1fr !important;
          }
          .cs-stack {
            padding: 48px 28px !important;
          }
          .cs-testimonial {
            padding: 80px 28px !important;
          }
        }
      `}</style>
    </>
  );
}
