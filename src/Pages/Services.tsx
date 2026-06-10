import { Link } from "react-router-dom";
import Seo, { serviceSchema } from "../components/Seo";
import {
  Section,
  SectionHeading,
  GlowCard,
  Reveal,
  PrimaryLink,
  GhostLink,
  CTABanner,
} from "../components/ui";

const SEO_DESCRIPTION =
  "Three ways Batistack moves your business forward: AI infrastructure & agents installed on Apple hardware, professional digital presence, and custom apps.";

export default function Services() {
  return (
    <main style={{ background: "var(--void)", paddingTop: "72px" }}>
      <Seo
        title="AI Infrastructure, Websites & Custom Apps | Batistack NYC"
        description={SEO_DESCRIPTION}
        path="/services"
        jsonLd={serviceSchema("AI Infrastructure & Agent Services", SEO_DESCRIPTION, "/services")}
      />
      <Hero />
      <ServiceTiers />
      <DecisionStrip />
      <CTABanner
        title="One Conversation. A Clear Plan."
        sub="Tell us what's slowing you down — we'll tell you exactly what to install."
      />
    </main>
  );
}

/* ════════════════ SHARED ════════════════ */

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00AEEF"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{ flexShrink: 0, marginTop: "3px" }}
    >
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {items.map((item) => (
        <li
          key={item}
          style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "11px" }}
        >
          <CheckIcon />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "13.5px",
              color: "var(--silver)",
              lineHeight: 1.55,
            }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
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
            "linear-gradient(rgba(0,174,239,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 75%)",
        }}
      />
      <div
        className="section-container services-hero"
        style={{
          position: "relative",
          textAlign: "center",
          padding: "96px 60px 88px",
        }}
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
            What We Build — NYC
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(34px, 5vw, 58px)",
              lineHeight: 1.1,
              color: "var(--bone)",
              margin: "28px auto 0",
              maxWidth: "860px",
              letterSpacing: "-0.015em",
            }}
          >
            <span style={{ color: "#00AEEF" }}>AI Infrastructure</span>, Websites
            &amp; Custom Applications
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "17px",
              color: "var(--mist)",
              lineHeight: 1.75,
              maxWidth: "620px",
              margin: "24px auto 0",
            }}
          >
            Three ways we move your business forward. One is the flagship: an AI
            workforce physically installed in your office, working 24/7. The
            other two make sure the rest of your operation keeps up.
          </p>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .services-hero { padding: 72px 24px 64px !important; }
        }
      `}</style>
    </section>
  );
}

/* ════════════════ SERVICE TIERS ════════════════ */

function ServerIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00AEEF"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01M11 7.5h2m-2 9h2" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00AEEF"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14.5 14.5 0 0 1 0 18 14.5 14.5 0 0 1 0-18Z" />
    </svg>
  );
}

function AppIcon() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00AEEF"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10.5 5h3m-3.5 14h4" />
      <path d="m13.5 9.5-3 3 3 3" opacity="0.9" />
    </svg>
  );
}

function ServiceTiers() {
  return (
    <Section>
      <SectionHeading
        label="The Services"
        title={
          <>
            Start With the <em style={{ color: "#00AEEF", fontStyle: "normal" }}>Workforce</em>.
            Build Around It.
          </>
        }
        sub="Most clients begin with an AI infrastructure install — then add digital presence and custom apps as their operation grows."
      />

      {/* ── Tier 1: AI Infrastructure & Agents — DOMINANT ── */}
      <Reveal>
        <GlowCard featured style={{ padding: "clamp(32px, 4vw, 48px)", marginBottom: "24px" }}>
          <span
            style={{
              position: "absolute",
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "#00AEEF",
              color: "#0A0A0A",
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "5px 16px",
              borderRadius: "100px",
              whiteSpace: "nowrap",
            }}
          >
            Primary Service
          </span>
          <div
            className="tier-featured-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div>
              <ServerIcon />
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#00AEEF",
                  margin: "20px 0 0",
                }}
              >
                The Flagship
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(26px, 3.2vw, 36px)",
                  color: "var(--bone)",
                  lineHeight: 1.15,
                  margin: "12px 0 16px",
                }}
              >
                AI Infrastructure &amp; Agents
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "var(--mist)",
                  lineHeight: 1.75,
                  margin: "0 0 28px",
                }}
              >
                Instead of hiring another employee, install an AI workforce. We
                physically deliver and configure Apple Silicon hardware in your
                business, deploy custom agents trained on your operation, and
                hand you the controls — all from Telegram on your phone.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <PrimaryLink to="/contact">Schedule Free Assessment</PrimaryLink>
                <GhostLink to="/ai-agents">Meet the 7 Agents</GhostLink>
              </div>
            </div>
            <div
              style={{
                background: "rgba(10,10,10,0.6)",
                border: "1px solid #1E1E1E",
                borderRadius: "12px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--silver)",
                  margin: "0 0 18px",
                }}
              >
                What's Included
              </p>
              <Checklist
                items={[
                  "Mac mini or Mac Studio hardware, installed on site",
                  "Custom AI agents built for your workflows",
                  "Telegram command center — approve from anywhere",
                  "24/7 monitoring and performance reporting",
                  "Ongoing updates as your business evolves",
                ]}
              />
            </div>
          </div>
        </GlowCard>
      </Reveal>

      {/* ── Tiers 2 & 3 ── */}
      <div
        className="tier-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        <Reveal delay={0.1} style={{ height: "100%" }}>
          <GlowCard style={{ display: "flex", flexDirection: "column" }}>
            <GlobeIcon />
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00AEEF",
                margin: "20px 0 0",
              }}
            >
              Be Found Everywhere
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "24px",
                color: "var(--bone)",
                margin: "10px 0 14px",
              }}
            >
              Digital Presence
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                color: "var(--mist)",
                lineHeight: 1.7,
                margin: "0 0 24px",
              }}
            >
              Your AI agents generate leads — your digital presence converts
              them. We build the storefront your business deserves across every
              channel customers actually check.
            </p>
            <div style={{ flexGrow: 1, marginBottom: "28px" }}>
              <Checklist
                items={[
                  "Professional website, designed and built",
                  "Google Business Profile, fully optimized",
                  "Social media profiles set up and branded",
                  "WhatsApp Business configured for customers",
                ]}
              />
            </div>
            <div>
              <GhostLink to="/contact">Get Started</GhostLink>
            </div>
          </GlowCard>
        </Reveal>

        <Reveal delay={0.2} style={{ height: "100%" }}>
          <GlowCard style={{ display: "flex", flexDirection: "column" }}>
            <AppIcon />
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#00AEEF",
                margin: "20px 0 0",
              }}
            >
              Built for Your Workflow
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "24px",
                color: "var(--bone)",
                margin: "10px 0 14px",
              }}
            >
              Custom Applications
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                color: "var(--mist)",
                lineHeight: 1.7,
                margin: "0 0 24px",
              }}
            >
              When off-the-shelf software doesn't fit, we build web and mobile
              applications around your exact operation — with AI agents embedded
              directly inside them.
            </p>
            <div style={{ flexGrow: 1, marginBottom: "28px" }}>
              <Checklist
                items={[
                  "Web and mobile apps, built from scratch",
                  "AI agents embedded in the product",
                  "Integrations with your existing tools",
                  "Designed, shipped, and maintained by us",
                ]}
              />
            </div>
            <div>
              <GhostLink to="/contact">Get Started</GhostLink>
            </div>
          </GlowCard>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .tier-featured-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .tier-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

/* ════════════════ DECISION STRIP ════════════════ */

function DecisionStrip() {
  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    fontSize: "13px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#00AEEF",
    textDecoration: "none",
    borderBottom: "1px solid rgba(0,174,239,0.5)",
    paddingBottom: "3px",
  };

  return (
    <Section bg="#0D0D0D" style={{ padding: "64px 0" }}>
      <Reveal>
        <div
          className="decision-strip"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "28px",
            flexWrap: "wrap",
            border: "1px solid #1E1E1E",
            borderRadius: "12px",
            background: "#141414",
            padding: "32px 40px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "22px",
                color: "var(--bone)",
                margin: 0,
              }}
            >
              Not sure which you need?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "14px",
                color: "var(--mist)",
                lineHeight: 1.6,
                margin: "8px 0 0",
                maxWidth: "520px",
              }}
            >
              See how an installation actually works, or meet the agents first
              and decide from there.
            </p>
          </div>
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap", alignItems: "center" }}>
            <Link to="/how-it-works" data-cursor="cta" style={linkStyle}>
              How It Works →
            </Link>
            <Link to="/ai-agents" data-cursor="cta" style={linkStyle}>
              Meet the Agents →
            </Link>
          </div>
        </div>
      </Reveal>
      <style>{`
        @media (max-width: 540px) {
          .decision-strip { padding: 28px 24px !important; }
        }
      `}</style>
    </Section>
  );
}
