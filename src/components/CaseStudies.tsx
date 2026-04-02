import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { caseStudies, type CaseStudy } from "../data/caseStudies";
import SectionLabel from "./SectionLabel";

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [hovered, setHovered] = useState(false);

  const isDark = study.color === "#0a0a0a";
  const bgColor = "var(--cream)";
  const textColor = "var(--black)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bgColor,
        padding: "48px 40px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        border: hovered ? "1px solid var(--gold)" : "1px solid transparent",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 16px 48px rgba(201,168,76,0.12)"
          : "0 2px 16px rgba(0,0,0,0.04)",
        cursor: "default",
        height: "100%",
        boxSizing: "border-box" as const,
        position: "relative" as const,
      }}
    >
      {/* Color accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: isDark ? "var(--gold)" : study.color === "#c9a84c" ? "var(--gold)" : "var(--gray-light)",
          transition: "opacity 0.3s ease",
          opacity: hovered ? 1 : 0.5,
        }}
      />

      {/* Category tag + timeline badge */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "28px",
        }}
      >
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase" as const,
            color: "var(--gold)",
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
          }}
        >
          {study.category}
        </span>
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            color: "var(--gray)",
            fontFamily: "var(--font-sans)",
            background: "var(--off-white)",
            padding: "5px 12px",
            border: "1px solid var(--gray-light)",
          }}
        >
          {study.timeline}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "28px",
          fontWeight: 400,
          lineHeight: 1.2,
          color: textColor,
          margin: "0 0 32px 0",
        }}
      >
        {study.title}
      </h3>

      {/* Results metrics */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "16px",
          marginBottom: "36px",
          paddingBottom: "36px",
          borderBottom: "1px solid var(--gray-light)",
        }}
        className="case-study-metrics"
      >
        {study.results.slice(0, 3).map((result, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3vw, 48px)",
                fontWeight: 400,
                color: "var(--gold)",
                lineHeight: 1,
                display: "block",
              }}
            >
              {result.after}
            </span>
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase" as const,
                color: "var(--gray)",
                fontFamily: "var(--font-sans)",
                lineHeight: 1.4,
              }}
            >
              {result.metric}
            </span>
            {result.before !== "Baseline" && result.before !== "N/A" && result.before !== "0" && (
              <span
                style={{
                  fontSize: "11px",
                  color: "var(--gray-light)",
                  fontFamily: "var(--font-sans)",
                  textDecoration: "line-through",
                }}
              >
                was {result.before}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Testimonial */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <blockquote
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "16px",
            fontStyle: "italic",
            color: "var(--gray)",
            lineHeight: 1.7,
            margin: "0 0 20px 0",
            paddingLeft: "16px",
            borderLeft: "2px solid var(--gold-light)",
          }}
        >
          "{study.testimonial}"
        </blockquote>

        {/* Author + tech stack */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap" as const,
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "12px",
              letterSpacing: "0.1em",
              color: textColor,
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
            }}
          >
            — {study.author}
          </span>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" as const }}>
            {study.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase" as const,
                  color: "var(--gray)",
                  background: "var(--off-white)",
                  padding: "4px 8px",
                  fontFamily: "var(--font-sans)",
                  border: "1px solid var(--gray-light)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        padding: "140px 60px",
        background: "var(--off-white)",
      }}
      className="case-studies-section"
    >
      <motion.div
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.8 }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "72px",
            flexWrap: "wrap",
            gap: "24px",
          }}
          className="case-studies-header"
        >
          <div>
            <SectionLabel>Results that speak</SectionLabel>
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
              Real work.{" "}
              <em>Real results.</em>
            </h2>
          </div>
          <p
            style={{
              fontSize: "15px",
              color: "var(--gray)",
              maxWidth: "340px",
              lineHeight: 1.7,
              fontFamily: "var(--font-sans)",
              margin: 0,
            }}
            className="case-studies-subtext"
          >
            Every number below is from an actual project — no vanity metrics, no made-up averages.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "2px",
            background: "var(--gray-light)",
            marginBottom: "72px",
          }}
          className="case-studies-grid"
        >
          {caseStudies.map((study, i) => (
            <div
              key={study.id}
              style={{ background: "var(--off-white)" }}
            >
              <CaseStudyCard study={study} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column" as const,
            alignItems: "center",
            gap: "20px",
            textAlign: "center" as const,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "22px",
              fontWeight: 300,
              color: "var(--gray)",
              margin: 0,
            }}
          >
            Your business could be next.
          </p>
          <Link to="/contact" className="btn-primary-bs">
            See how we can do this for you
          </Link>
        </div>
      </motion.div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .case-studies-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .case-studies-section {
            padding: 80px 28px !important;
          }
          .case-studies-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            margin-bottom: 48px !important;
          }
          .case-studies-subtext {
            max-width: 100% !important;
          }
          .case-studies-grid {
            grid-template-columns: 1fr !important;
          }
          .case-study-metrics {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .case-studies-section {
            padding: 60px 20px !important;
          }
          .case-study-metrics {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
