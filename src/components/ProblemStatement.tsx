import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "./SectionLabel";

const problems = [
  {
    icon: "🔍",
    title: "No one can find you",
    description:
      "A generic site buried on page 3 of Google might as well not exist. If your customers can't find you, they're finding your competitor instead.",
  },
  {
    icon: "⚡",
    title: "Visitors leave in seconds",
    description:
      "Outdated design kills trust instantly. A slow, cluttered website tells every visitor that you don't take your business seriously.",
  },
  {
    icon: "🔁",
    title: "You're doing it all manually",
    description:
      "Answering the same questions, qualifying leads by hand, following up one by one. Your time is worth more than that.",
  },
];

const stats = [
  { value: "5+", label: "Businesses Served" },
  { value: "2–3 wks", label: "Average Delivery" },
  { value: "100%", label: "Custom Built" },
];

function ProblemCard({
  icon,
  title,
  description,
  delay,
}: {
  icon: string;
  title: string;
  description: string;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "var(--gold)" : "#222"}`,
        padding: "40px 32px",
        transition: "border-color 0.3s ease",
        cursor: "default",
      }}
    >
      <div
        style={{
          fontSize: "32px",
          marginBottom: "24px",
          lineHeight: 1,
        }}
      >
        {icon}
      </div>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "22px",
          fontWeight: 400,
          color: "var(--off-white)",
          margin: "0 0 16px 0",
          lineHeight: 1.2,
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: "14px",
          color: "#777",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default function ProblemStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section
      style={{
        background: "var(--black)",
        padding: "140px 60px",
      }}
      className="problem-section"
    >
      {/* Header */}
      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: "64px" }}
      >
        <SectionLabel light>The problem</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(34px, 4vw, 58px)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--off-white)",
            margin: 0,
            maxWidth: "700px",
          }}
        >
          Your website is losing you money —{" "}
          <em>every single day</em>
        </h2>
      </motion.div>

      {/* Stats bar */}
      <motion.div
        ref={statsRef}
        animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          borderTop: "1px solid #222",
          borderBottom: "1px solid #222",
          marginBottom: "64px",
        }}
        className="problem-stats"
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              padding: "40px 32px",
              borderRight: i < stats.length - 1 ? "1px solid #222" : "none",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                color: "var(--gold)",
                margin: "0 0 8px 0",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </p>
            <p
              style={{
                fontSize: "11px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#555",
                margin: 0,
                fontFamily: "var(--font-sans)",
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Problem cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "2px",
          background: "#111",
        }}
        className="problem-cards"
      >
        {problems.map((p, i) => (
          <div key={i} style={{ background: "var(--black)" }}>
            <ProblemCard
              icon={p.icon}
              title={p.title}
              description={p.description}
              delay={0.2 + i * 0.15}
            />
          </div>
        ))}
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .problem-section {
            padding: 80px 28px !important;
          }
          .problem-stats {
            grid-template-columns: 1fr !important;
          }
          .problem-stats > div {
            border-right: none !important;
            border-bottom: 1px solid #222;
          }
          .problem-stats > div:last-child {
            border-bottom: none;
          }
          .problem-cards {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
