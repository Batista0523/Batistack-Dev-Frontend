import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { Section, SectionHeading, GlowCard, Reveal, CTABanner, GhostLink } from "../components/ui";

/* ════════════════ DATA ════════════════ */

const VALUES = [
  {
    title: "Physical Installation",
    text: "Real hardware in your office. You own the machine, the data never leaves your building.",
    icon: (
      <path d="M4 7h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Zm3 13h10M12 17v3M7 11h6m-6 3h3" />
    ),
  },
  {
    title: "Business First",
    text: "We speak revenue and saved hours, not tech jargon. Every agent must pay for itself.",
    icon: (
      <path d="M3 20h18M5 20V10m4.5 10V6m4.5 14v-8m4.5 8V4M5 10l4.5-4L14 9l5-5" />
    ),
  },
  {
    title: "Always On",
    text: "Your workforce doesn't sleep, call in sick, or quit. 24/7, every day of the year.",
    icon: (
      <path d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
    ),
  },
];

const STATS = [
  { value: "2023", label: "Founded in New York City" },
  { value: "24/7", label: "Your agents never clock out" },
  { value: "100%", label: "You own the hardware and data" },
];

/* ════════════════ PAGE ════════════════ */

export default function About() {
  return (
    <main style={{ background: "var(--void)", paddingTop: "72px" }}>
      <Seo
        title="About Batistack — NYC AI Agency Since 2023"
        description="Founded in NYC in 2023, Batistack installs complete AI workforces that small businesses own — real hardware, real agents, leveling the field with big corporations."
        path="/about"
      />
      <Hero />
      <StorySection />
      <ValuesSection />
      <CTABanner title="Meet the Future of Your Business." />
    </main>
  );
}

/* ════════════════ HERO ════════════════ */

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,174,239,0.08) 0%, transparent 60%), #0A0A0A",
        borderBottom: "1px solid #1E1E1E",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,174,239,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 70%)",
        }}
      />
      <div
        className="section-container about-hero"
        style={{ position: "relative", textAlign: "center", padding: "96px 60px 88px" }}
      >
        <Reveal>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid rgba(0,174,239,0.4)",
              borderRadius: "100px",
              padding: "8px 18px",
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--silver)",
              background: "rgba(0,174,239,0.05)",
            }}
          >
            <span className="status-dot" />
            Batistack Development Corp — NYC
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(34px, 5.5vw, 60px)",
              lineHeight: 1.08,
              color: "var(--bone)",
              margin: "26px auto 0",
              maxWidth: "820px",
              letterSpacing: "-0.015em",
            }}
          >
            We Install <span style={{ color: "#00AEEF" }}>AI Workforces</span> in NYC Businesses.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              color: "var(--mist)",
              lineHeight: 1.75,
              maxWidth: "560px",
              margin: "20px auto 0",
            }}
          >
            Instead of hiring another employee, install an AI workforce — real
            hardware, real agents, working for you around the clock.
          </p>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .about-hero { padding: 72px 24px 64px !important; }
        }
      `}</style>
    </section>
  );
}

/* ════════════════ STORY ════════════════ */

function StorySection() {
  return (
    <Section>
      <div
        className="about-story-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
      >
        {/* Narrative */}
        <Reveal>
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#00AEEF",
                marginBottom: "14px",
              }}
            >
              Our Story
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(28px, 4vw, 42px)",
                lineHeight: 1.15,
                color: "var(--bone)",
                margin: "0 0 24px",
                letterSpacing: "-0.01em",
              }}
            >
              Built to Level the Field.
            </h2>
            <p style={storyP}>
              Batistack was founded in New York City in 2023 with one
              conviction: the businesses that built this city deserve the same
              weapons the giants use. Large corporations deploy AI to
              outcompete small businesses every single day — answering faster,
              following up relentlessly, never missing a lead.
            </p>
            <p style={storyP}>
              We exist to put that power on the other side of the counter. We
              don't sell software subscriptions that rent you a feature and
              hold your data hostage. We install complete{" "}
              <Link to="/ai-agents" style={inlineLink}>
                AI workforces
              </Link>{" "}
              — agents that generate leads, send invoices, book appointments,
              answer calls, and coordinate your field crews — on hardware that
              lives in your office and belongs to you.
            </p>
            <p style={{ ...storyP, marginBottom: 0 }}>
              The result: a small business that operates like a large one,
              without the payroll. You command everything from Telegram, and{" "}
              <Link to="/how-it-works" style={inlineLink}>
                you're live in days
              </Link>
              , not months.
            </p>
          </div>
        </Reveal>

        {/* Visual — quote + stat stack */}
        <Reveal delay={0.15}>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <blockquote
              style={{
                margin: 0,
                background:
                  "linear-gradient(160deg, rgba(0,174,239,0.08) 0%, #141414 50%)",
                border: "1px solid rgba(0,174,239,0.45)",
                borderLeft: "3px solid #00AEEF",
                borderRadius: "12px",
                padding: "28px 30px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "19px",
                  lineHeight: 1.5,
                  color: "var(--bone)",
                  margin: 0,
                }}
              >
                "Instead of hiring another employee, install an AI workforce."
              </p>
              <footer
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#00AEEF",
                  marginTop: "16px",
                }}
              >
                The Batistack Principle
              </footer>
            </blockquote>

            {STATS.map((s) => (
              <div
                key={s.value}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "18px",
                  background: "#141414",
                  border: "1px solid #1E1E1E",
                  borderRadius: "12px",
                  padding: "20px 26px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "26px",
                    color: "#00AEEF",
                    minWidth: "78px",
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "var(--mist)",
                    lineHeight: 1.5,
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </Section>
  );
}

const storyP: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: "15.5px",
  color: "var(--mist)",
  lineHeight: 1.8,
  margin: "0 0 18px",
};

const inlineLink: React.CSSProperties = {
  color: "#00AEEF",
  textDecoration: "none",
  fontWeight: 600,
};

/* ════════════════ VALUES ════════════════ */

function ValuesSection() {
  return (
    <Section bg="#0D0D0D">
      <SectionHeading
        label="What We Stand For"
        title={
          <>
            Three Things We <em style={{ color: "#00AEEF", fontStyle: "normal" }}>Never Compromise</em>
          </>
        }
        sub="Every installation, every agent, every client relationship is built on the same three commitments."
      />
      <div
        className="about-values-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", alignItems: "stretch" }}
      >
        {VALUES.map((v, i) => (
          <Reveal key={v.title} delay={0.1 * i}>
            <GlowCard accentBorder>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00AEEF"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {v.icon}
              </svg>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "var(--bone)",
                  margin: "18px 0 10px",
                }}
              >
                {v.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14.5px",
                  color: "var(--mist)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {v.text}
              </p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <GhostLink to="/contact">Talk to Us</GhostLink>
        </div>
      </Reveal>
      <style>{`
        @media (max-width: 960px) {
          .about-values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}
