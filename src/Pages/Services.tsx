import { useTrafficTracker } from "../hook/useTrafficTracker";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import ServiceCard from "../components/ServiceCard";
import { useState } from "react";

// ─── Service detail data ───────────────────────────────────────────────────

const services = [
  {
    number: "01",
    name: "Custom Web Design",
    tags: ["React", "Next.js", "TypeScript", "Responsive"],
    description:
      "We design and build websites from scratch — no templates, no shortcuts. Each site is crafted to match your brand, communicate your value, and convert visitors into customers. Mobile-first, performance-optimized, and built to last.",
    features: [
      "Fully custom design — no templates",
      "Mobile-first, fully responsive",
      "Page speed & Core Web Vitals optimized",
      "SEO-ready structure from day one",
      "CMS integration available",
      "2-3 rounds of revisions included",
    ],
  },
  {
    number: "02",
    name: "AI Integration",
    tags: ["OpenAI", "Claude API", "Dialogflow", "Automation"],
    description:
      "We add intelligent AI features to your website that work around the clock. Whether it's a chatbot that qualifies leads, a voice agent that handles calls, or automated workflows that save your team hours — we build AI that actually works for your business.",
    features: [
      "AI chat assistant trained on your business",
      "Voice agent via Twilio + ElevenLabs",
      "Lead qualification & smart routing",
      "Automated email follow-ups",
      "CRM & calendar integration",
      "Ongoing AI training & updates",
    ],
  },
  {
    number: "03",
    name: "Landing Pages",
    tags: ["Conversion", "Performance", "A/B Testing", "SEO"],
    description:
      "Every dollar you spend on ads needs a page that converts. We build high-performance landing pages designed for one purpose: getting the lead, the sale, or the sign-up. Fast, focused, and built to maximize your ad ROI.",
    features: [
      "Single-purpose conversion design",
      "Sub-2s load time guaranteed",
      "A/B testing ready setup",
      "Heatmap & analytics integration",
      "Ad platform compliance (Google, Meta)",
      "7-day delivery available",
    ],
  },
  {
    number: "04",
    name: "Website Redesign",
    tags: ["Audit", "UX Redesign", "Migration", "Performance"],
    description:
      "Your existing site may be holding your business back. We audit, redesign, and rebuild your website with a focus on modern UX, speed, and conversion. You keep your content and brand voice — we give you a site that works like it should.",
    features: [
      "Full UX & performance audit",
      "Brand-aligned visual redesign",
      "Content migration included",
      "SEO preservation & improvement",
      "Zero downtime launch",
      "30-day post-launch support",
    ],
  },
];

// ─── ServiceDetail row component ──────────────────────────────────────────

function ServiceDetail({
  service,
}: {
  service: (typeof services)[0];
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="services-detail-row"
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 32 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        borderBottom: "1px solid var(--gray-light)",
        padding: "80px 60px",
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        gap: "80px",
        alignItems: "start",
      }}
    >
      {/* LEFT */}
      <div>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "13px",
            color: "var(--gold)",
            letterSpacing: "0.1em",
            marginBottom: "16px",
          }}
        >
          {service.number}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(36px, 4vw, 52px)",
            fontWeight: 300,
            lineHeight: 1.15,
            marginBottom: "28px",
          }}
        >
          {service.name}
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {service.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "5px 12px",
                border: "1px solid var(--gray-light)",
                color: "var(--gray)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <p
          style={{
            fontSize: "16px",
            color: "var(--gray)",
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          {service.description}
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 48px 0",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {service.features.map((feature) => (
            <li
              key={feature}
              style={{
                fontSize: "14px",
                color: "var(--black)",
                display: "flex",
                alignItems: "baseline",
                gap: "12px",
              }}
            >
              <span
                style={{
                  color: "var(--gold)",
                  fontFamily: "var(--font-serif)",
                  fontSize: "16px",
                  flexShrink: 0,
                }}
              >
                —
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <Link
          to="/contact"
          className="btn-ghost-bs"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{ color: hovered ? "var(--black)" : "var(--gray)" }}
        >
          Start this project
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function Services() {
  useTrafficTracker("page_view", "/services");

  return (
    <>
      <Helmet>
        <title>Services | Batistack</title>
        <meta
          name="description"
          content="Custom web design, AI integration, landing pages, and website redesigns. Batistack builds digital tools that grow your business."
        />
      </Helmet>

      <div
        style={{
          background: "var(--off-white)",
          color: "var(--black)",
          overflowX: "hidden",
        }}
      >
        {/* ── HERO ────────────────────────────────────── */}
        <section
          className="services-page-hero"
          style={{
            paddingTop: "160px",
            padding: "160px 60px 100px",
            background: "var(--off-white)",
          }}
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionLabel>What We Build</SectionLabel>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(44px, 8vw, 90px)",
                fontWeight: 300,
                lineHeight: 1.05,
                maxWidth: "760px",
              }}
              dangerouslySetInnerHTML={{
                __html: "Services built<br/>for <em>real results</em>",
              }}
            />
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray)",
                maxWidth: "520px",
                marginTop: "24px",
                lineHeight: 1.7,
              }}
            >
              Every service we offer is designed to drive measurable growth for
              your business — from first visit to loyal customer.
            </p>
          </motion.div>

          {/* Decorative line */}
          <div
            style={{
              borderTop: "1px solid var(--gray-light)",
              marginTop: "60px",
            }}
          />
        </section>

        {/* ── SERVICE DETAIL SECTIONS ─────────────────── */}
        <div>
          {services.map((service) => (
            <ServiceDetail key={service.number} service={service} />
          ))}
        </div>

        {/* ── SERVICE OVERVIEW CARDS ──────────────────── */}
        <section
          style={{
            padding: "100px 60px",
            borderBottom: "1px solid var(--gray-light)",
          }}
          className="services-overview-section"
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ marginBottom: "60px" }}
          >
            <SectionLabel>At a Glance</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 300,
                lineHeight: 1.15,
              }}
            >
              Everything we offer.
            </h2>
          </motion.div>

          <div
            className="services-overview-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "2px",
              background: "var(--gray-light)",
            }}
          >
            {services.map((service) => (
              <ServiceCard
                key={service.number}
                number={service.number}
                title={service.name}
                description={service.description}
                tags={service.tags}
              />
            ))}
          </div>
        </section>

        {/* ── CTA BAND ────────────────────────────────── */}
        <section
          className="services-page-cta"
          style={{
            background: "var(--black)",
            padding: "100px 60px",
            textAlign: "center",
          }}
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 300,
                color: "#fff",
                lineHeight: 1.1,
              }}
              dangerouslySetInnerHTML={{
                __html: "Ready to build<br/>something <em>great?</em>",
              }}
            />
            <p
              style={{
                fontSize: "16px",
                color: "#777",
                marginTop: "20px",
                maxWidth: "480px",
                margin: "20px auto 0",
                lineHeight: 1.7,
              }}
            >
              Tell us about your project and we'll put together a plan that fits
              your goals, timeline, and budget.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
                marginTop: "48px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Link
                to="/contact"
                className="btn-primary-bs"
                style={{
                  background: "var(--off-white)",
                  color: "var(--black)",
                }}
              >
                Start a Project
              </Link>
              <Link
                to="/speedPage"
                className="btn-ghost-bs"
                style={{ color: "#fff" }}
              >
                Free Website Audit
              </Link>
            </div>
          </motion.div>
        </section>

        <style>{`
          @media (max-width: 900px) {
            .services-page-hero,
            .services-page-cta {
              padding-left: 28px !important;
              padding-right: 28px !important;
            }

            .services-detail-row {
              grid-template-columns: 1fr !important;
              gap: 36px !important;
              padding: 64px 28px !important;
            }
          }

          @media (max-width: 1100px) {
            .services-overview-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          @media (max-width: 768px) {
            .services-page-hero,
            .services-page-cta,
            .services-overview-section {
              padding: 80px 28px !important;
            }

            .services-overview-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}
