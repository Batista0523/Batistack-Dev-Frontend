import { useTrafficTracker } from "../hook/useTrafficTracker";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ─── Service data ─────────────────────────────────────────────────────────────

const services = [
  {
    number: "01",
    name: "Custom Web Design",
    description:
      "Your website is your best salesperson. We build fast, beautiful, conversion-focused sites in React — no templates, no page builders, no excuses.",
    features: [
      "Custom design from scratch",
      "React + TypeScript + Vite",
      "Mobile-first responsive",
      "SEO foundation",
      "Performance optimized",
      "14-day delivery",
    ],
    stack: ["React", "TypeScript", "Vite", "Framer Motion"],
    bg: "var(--void)" as const,
    boxBg: "var(--ash)" as const,
  },
  {
    number: "02",
    name: "Mobile Applications",
    description:
      "Native-quality mobile apps built in React Native. iOS and Android from a single codebase, with real performance and real polish.",
    features: [
      "iOS & Android (React Native)",
      "Expo for fast deployment",
      "Push notifications",
      "Offline-ready architecture",
      "App Store submission support",
    ],
    stack: ["React Native", "Expo", "TypeScript"],
    bg: "var(--ash)" as const,
    boxBg: "var(--void)" as const,
  },
  {
    number: "03",
    name: "AI Integration",
    description:
      "AI isn't a gimmick — it's infrastructure. We integrate Claude, GPT, and custom models directly into your website so it works harder than any team member.",
    features: [
      "AI chat assistant trained on your business",
      "Lead capture & qualification",
      "Workflow automation",
      "CRM integrations",
      "Real-time recommendations",
      "Analytics on AI interactions",
    ],
    stack: ["Claude API", "OpenAI", "Node.js", "Webhooks"],
    bg: "var(--void)" as const,
    boxBg: "var(--ash)" as const,
  },
  {
    number: "04",
    name: "Website Redesign",
    description:
      "Your current site is costing you customers. We audit it, rebuild it, and hand you something you're proud to send to prospects.",
    features: [
      "Full UX audit",
      "Performance analysis",
      "Complete visual rebuild",
      "Content migration",
      "SEO preservation",
      "Analytics setup",
    ],
    stack: ["Audit", "React", "Migration", "GA4"],
    bg: "var(--ash)" as const,
    boxBg: "var(--void)" as const,
  },
];

// ─── Service section ──────────────────────────────────────────────────────────

function ServiceSection({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section
      style={{
        background: service.bg,
        padding: "120px 0",
      }}
    >
      <div
        className="section-container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
      >
        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          style={{ order: isEven ? 0 : 1 }}
          className="service-left-col"
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "180px",
              lineHeight: 1,
              color: "var(--smoke)",
              marginBottom: "-20px",
            }}
          >
            {service.number}
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "52px",
              fontWeight: 300,
              color: "var(--bone)",
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            {service.name}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16px",
              color: "var(--mist)",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "480px",
            }}
          >
            {service.description}
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
              color: "var(--bone)",
              textDecoration: "none",
              border: "1px solid var(--smoke)",
              padding: "14px 32px",
              transition: "border-color 0.25s, color 0.25s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--gold)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--gold)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--smoke)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--bone)";
            }}
          >
            START THIS PROJECT →
          </Link>
        </motion.div>

        {/* Right column — What's Included box */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ order: isEven ? 1 : 0 }}
          className="service-right-col"
        >
          <div
            style={{
              border: "1px solid var(--smoke)",
              padding: "40px",
              background: service.boxBg,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "24px",
              }}
            >
              WHAT'S INCLUDED
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0" }}>
              {service.features.map((feature) => (
                <li
                  key={feature}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    color: "var(--bone)",
                    padding: "12px 0",
                    borderBottom: "1px solid var(--smoke)",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ color: "var(--gold-dim)", flexShrink: 0 }}>→</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Tech stack pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {service.stack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--mist)",
                    border: "1px solid var(--smoke)",
                    padding: "4px 12px",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Services() {
  useTrafficTracker("page_view", "/services");

  return (
    <>
      <Helmet>
        <title>Services | Batistack Development</title>
        <meta
          name="description"
          content="Custom web design, mobile apps, AI integration, and website redesigns. Batistack builds digital tools that grow your business."
        />
      </Helmet>

      <div style={{ background: "var(--void)", color: "var(--bone)", overflowX: "hidden" }}>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section style={{ background: "var(--void)", padding: "160px 0 120px" }}>
          <div className="section-container">
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
                SERVICES
              </p>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(80px, 14vw, 160px)",
                  lineHeight: 0.9,
                  color: "var(--bone)",
                  margin: 0,
                }}
              >
                WE BUILD
                <br />
                THINGS
                <br />
                <span style={{ color: "var(--gold)" }}>WORK.</span>
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "22px",
                  color: "var(--mist)",
                  maxWidth: "520px",
                  marginTop: "32px",
                  lineHeight: 1.5,
                }}
              >
                Four focused services. Zero fluff.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── SERVICE SECTIONS ─────────────────────────────────────────── */}
        {services.map((service, index) => (
          <ServiceSection key={service.number} service={service} index={index} />
        ))}

        {/* ── BOTTOM CTA ───────────────────────────────────────────────── */}
        <section style={{ background: "var(--gold)", padding: "80px 0" }}>
          <div className="section-container" style={{ textAlign: "center" }}>
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
                  color: "var(--void)",
                  lineHeight: 0.9,
                  marginBottom: "20px",
                }}
              >
                READY TO BUILD?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px",
                  color: "rgba(8,8,8,0.7)",
                  marginBottom: "40px",
                  lineHeight: 1.6,
                }}
              >
                Most projects ship in 14–21 days. Transparent pricing. No surprises.
              </p>
              <Link
                to="/contact"
                data-cursor="cta"
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  letterSpacing: "0.05em",
                  background: "var(--void)",
                  color: "var(--gold)",
                  padding: "20px 60px",
                  border: "none",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                SEE PRICING →
              </Link>
            </motion.div>
          </div>
        </section>

      </div>

      <style>{`
        .section-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 60px;
        }

        @media (max-width: 900px) {
          .section-container {
            padding: 0 32px;
          }
        }

        @media (max-width: 768px) {
          .section-container {
            padding: 0 24px;
          }

          .service-left-col,
          .service-right-col {
            order: unset !important;
          }

          .service-left-col + .service-right-col,
          .service-right-col + .service-left-col {
            margin-top: 0;
          }
        }

        @media (max-width: 768px) {
          section[style*="padding: 120px"] > .section-container,
          section[style*='padding: "120px 0"'] > .section-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>

      <style>{`
        @media (max-width: 768px) {
          .bs-services-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
