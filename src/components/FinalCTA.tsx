import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";

const trustItems = [
  "✓ 2-3 Week Delivery",
  "✓ Custom Built (No Templates)",
  "✓ Results or Money Back",
];

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        background: "var(--black)",
        padding: "140px 60px",
        textAlign: "center",
      }}
      className="final-cta-section"
    >
      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <SectionLabel light>Ready to start?</SectionLabel>

        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(48px, 6vw, 80px)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "var(--off-white)",
            margin: "0 0 32px 0",
          }}
        >
          Let's build something
          <br />
          that actually <em>works.</em>
        </h2>

        <p
          style={{
            fontSize: "16px",
            color: "#777",
            maxWidth: "480px",
            margin: "0 auto 56px",
            lineHeight: 1.75,
            fontFamily: "var(--font-sans)",
          }}
        >
          Most projects launch in 2–3 weeks. No templates. No bloat. Just a
          website that converts.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          <Link
            to="/contact"
            className="btn-primary-bs"
            style={{ background: "var(--gold)", color: "var(--black)" }}
          >
            Start a Project
          </Link>
          <Link
            to="/services"
            className="btn-ghost-bs"
            style={{ color: "var(--gray-light)" }}
          >
            See Our Work
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
          className="final-cta-trust"
        >
          {trustItems.map((item) => (
            <span
              key={item}
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                color: "#555",
                fontFamily: "var(--font-sans)",
                textTransform: "uppercase",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 600px) {
          .final-cta-section {
            padding: 80px 28px !important;
          }
          .final-cta-trust {
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
