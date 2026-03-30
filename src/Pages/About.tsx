import { useTrafficTracker } from "../hook/useTrafficTracker";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionLabel from "../components/SectionLabel";
import { useState } from "react";

// ─── Value card data ───────────────────────────────────────────────────────

const values = [
  {
    title: "Results First",
    body: "We don't ship pretty sites. We ship sites that rank, convert, and grow. Every design decision is justified by a business goal.",
  },
  {
    title: "Radical Transparency",
    body: "No hidden fees. No scope creep surprises. You know exactly what's being built, when, and why — from kickoff to launch.",
  },
  {
    title: "AI-Native Thinking",
    body: "AI isn't an add-on for us — it's part of every build. We think about automation, qualification, and intelligence from day one.",
  },
];

// ─── Value card component ─────────────────────────────────────────────────

function ValueCard({ title, body }: { title: string; body: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "48px 40px",
        background: hovered ? "var(--cream)" : "var(--off-white)",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
      }}
    >
      {/* Gold left accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "3px",
          height: hovered ? "100%" : "0%",
          background: "var(--gold)",
          transition: "height 0.4s ease",
        }}
      />
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "26px",
          fontWeight: 400,
          lineHeight: 1.2,
          marginBottom: "16px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "15px",
          color: "var(--gray)",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function About() {
  useTrafficTracker("page_view", "/about");

  return (
    <>
      <Helmet>
        <title>About | Batistack</title>
        <meta
          name="description"
          content="Learn about Batistack — a NYC-based web development studio building custom websites, AI integrations, and automation for growing businesses."
        />
      </Helmet>

      <div
        className="about-page"
        style={{
          background: "var(--off-white)",
          color: "var(--black)",
          overflowX: "hidden",
        }}
      >
        {/* ── HERO ────────────────────────────────────── */}
        <section className="about-hero" style={{ padding: "160px 60px 100px" }}>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Our Story</SectionLabel>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(42px, 8vw, 90px)",
                fontWeight: 300,
                lineHeight: 1.05,
                maxWidth: "760px",
                overflowWrap: "anywhere",
              }}
              dangerouslySetInnerHTML={{
                __html: "Built in New York.<br/><em>Driven by results.</em>",
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
              We are a boutique digital studio that builds websites, AI systems,
              and automation tools — crafted for businesses that are serious about
              growth.
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

        {/* ── STORY SECTION ───────────────────────────── */}
        <section
          className="about-story"
          style={{
            padding: "100px 60px",
            borderBottom: "1px solid var(--gray-light)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "100px",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Who We Are</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 300,
                lineHeight: 1.2,
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "A development studio<br/>that <em>thinks like</em><br/>a business partner.",
              }}
            />
          </motion.div>

          {/* Right */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Batistack was founded with one belief: that small businesses deserve
              the same powerful digital tools as major corporations. We build
              websites, AI systems, and automation that put independent businesses
              on equal footing.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Based in New York City, we work with entrepreneurs, service
              businesses, and startups across every industry — from HVAC and
              barbershops to real estate and e-commerce.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray)",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              Every project we take on is treated like our own business. We ask
              the hard questions, push back when needed, and deliver solutions
              that actually move the needle.
            </p>
          </motion.div>
        </section>

        {/* ── VALUES SECTION ──────────────────────────── */}
        <section
          className="about-values"
          style={{
            padding: "100px 60px",
            borderBottom: "1px solid var(--gray-light)",
          }}
        >
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionLabel>What We Believe</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 300,
                lineHeight: 1.15,
              }}
            >
              Our principles.
            </h2>
          </motion.div>

          <motion.div
            className="about-values-grid"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
              background: "var(--gray-light)",
              marginTop: "60px",
            }}
          >
            {values.map((v) => (
              <ValueCard key={v.title} title={v.title} body={v.body} />
            ))}
          </motion.div>
        </section>

        {/* ── FOUNDER SECTION ─────────────────────────── */}
        <section
          className="about-founder"
          style={{
            padding: "100px 60px",
            background: "var(--cream)",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Left — quote */}
          <motion.div
            className="about-founder-quote"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(52px, 8vw, 80px)",
                color: "var(--gold)",
                lineHeight: 0.6,
                display: "block",
                marginBottom: "8px",
              }}
            >
              "
            </span>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(34px, 5vw, 64px)",
                fontWeight: 300,
                lineHeight: 1.15,
                color: "var(--black)",
                margin: 0,
                maxWidth: "18ch",
                overflowWrap: "anywhere",
              }}
            >
              I started Batistack because I was tired of seeing small businesses
              with great products held back by terrible websites and zero digital
              strategy.
            </p>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(52px, 8vw, 80px)",
                color: "var(--gold)",
                lineHeight: 0.4,
                display: "block",
                textAlign: "right",
                marginTop: "8px",
              }}
            >
              "
            </span>
          </motion.div>

          {/* Right — founder details */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "13px",
                color: "var(--gold)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              The person behind the work
            </p>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "36px",
                fontWeight: 300,
                marginBottom: "8px",
              }}
            >
              Elisaul Batista
            </h3>
            <p
              style={{
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--gray)",
                marginBottom: "24px",
              }}
            >
              Founder &amp; Lead Developer
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "var(--gray)",
                lineHeight: 1.8,
                marginBottom: "28px",
              }}
            >
              Full-stack developer, AI builder, and founder based in New York
              City. Elisaul has spent years working with businesses of every size
              — learning what separates a digital presence that gets results from
              one that just sits there. Every project at Batistack is built with
              that same hard-won perspective.
            </p>
            <a
              href="mailto:elisaul@batistack.com"
              style={{
                fontSize: "13px",
                letterSpacing: "0.08em",
                color: "var(--gold)",
                textDecoration: "none",
                borderBottom: "1px solid var(--gold-light)",
                paddingBottom: "2px",
                transition: "color 0.25s",
              }}
            >
              elisaul@batistack.com
            </a>
          </motion.div>
        </section>

        {/* ── CTA ─────────────────────────────────────── */}
        <section
          className="about-cta"
          style={{
            padding: "100px 60px",
            background: "var(--black)",
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
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 300,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "40px",
              }}
              dangerouslySetInnerHTML={{
                __html:
                  "Let's build your<br/><em>digital future</em> together.",
              }}
            />
            <Link to="/contact" className="btn-primary-bs">
              Start a Conversation
            </Link>
          </motion.div>
        </section>

        <style>{`
          @media (max-width: 900px) {
            .about-hero,
            .about-story,
            .about-values,
            .about-founder,
            .about-cta {
              padding-left: 28px !important;
              padding-right: 28px !important;
            }

            .about-hero {
              padding-top: 132px !important;
              padding-bottom: 72px !important;
            }

            .about-story,
            .about-founder {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }

            .about-values-grid {
              grid-template-columns: 1fr !important;
              margin-top: 40px !important;
            }

            .about-founder-quote {
              order: 2;
            }
          }

          @media (max-width: 640px) {
            .about-hero,
            .about-story,
            .about-values,
            .about-founder,
            .about-cta {
              padding-left: 24px !important;
              padding-right: 24px !important;
            }

            .about-story,
            .about-values,
            .about-founder,
            .about-cta {
              padding-top: 72px !important;
              padding-bottom: 72px !important;
            }

            .about-founder-quote p {
              max-width: none !important;
            }
          }
        `}</style>
      </div>
    </>
  );
}
