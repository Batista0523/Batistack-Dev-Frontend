import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";

const testimonials = [
  {
    quote:
      "Batista rebuilt our entire site in under 3 weeks. The AI chatbot alone brought in 12 qualified leads in the first month. Best investment we made.",
    name: "Marcus T.",
    role: "Restaurant Owner, NYC",
  },
  {
    quote:
      "We were embarrassed to show our old website to clients. The new one is stunning and actually converts. Revenue went up within 60 days.",
    name: "Lisa R.",
    role: "Consultant, Brooklyn",
  },
  {
    quote:
      "The lead qualification bot they built saves our team 15+ hours a week. It screens every inquiry before we even see it. Absolute game changer.",
    name: "David W.",
    role: "Agency Founder, Manhattan",
  },
];

const trustBadges = [
  "AI Chatbots That Work 24/7",
  "2–3 Week Avg. Delivery",
  "NYC Based & Available",
  "Money-Back Guarantee",
];

function StarRating() {
  return (
    <div style={{ marginBottom: "20px", letterSpacing: "2px" }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{
            color: "var(--gold)",
            fontSize: "16px",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  delay,
}: {
  quote: string;
  name: string;
  role: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      style={{
        background: "var(--off-white)",
        padding: "40px",
        boxShadow: "0 4px 32px rgba(0,0,0,0.07)",
      }}
    >
      <StarRating />
      <p
        style={{
          fontSize: "16px",
          fontStyle: "italic",
          color: "var(--gray)",
          lineHeight: 1.75,
          margin: "0 0 28px 0",
        }}
      >
        "{quote}"
      </p>
      <div>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14px",
            fontWeight: 700,
            color: "var(--black)",
            margin: "0 0 4px 0",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontSize: "12px",
            color: "var(--gold)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            margin: 0,
            fontFamily: "var(--font-sans)",
          }}
        >
          {role}
        </p>
      </div>
    </motion.div>
  );
}

export default function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const badgesRef = useRef(null);
  const badgesInView = useInView(badgesRef, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        background: "var(--cream)",
        padding: "140px 60px",
      }}
      className="social-proof-section"
    >
      {/* Header */}
      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: "64px" }}
      >
        <SectionLabel>Trusted by builders</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(34px, 4vw, 54px)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--black)",
            margin: 0,
          }}
        >
          Don't take our <em>word for it</em>
        </h2>
      </motion.div>

      {/* Testimonial grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "24px",
          marginBottom: "72px",
        }}
        className="testimonial-grid"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={i}
            quote={t.quote}
            name={t.name}
            role={t.role}
            delay={0.2 + i * 0.15}
          />
        ))}
      </div>

      {/* Trust badges */}
      <motion.div
        ref={badgesRef}
        animate={badgesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "0",
        }}
        className="trust-badges"
      >
        {trustBadges.map((badge, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gray)",
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
              }}
            >
              {badge}
            </span>
            {i < trustBadges.length - 1 && (
              <span
                style={{
                  color: "var(--gold)",
                  fontSize: "14px",
                  marginRight: "16px",
                }}
              >
                ·
              </span>
            )}
          </span>
        ))}
      </motion.div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .social-proof-section {
            padding: 80px 28px !important;
          }
          .testimonial-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .trust-badges {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
          }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
