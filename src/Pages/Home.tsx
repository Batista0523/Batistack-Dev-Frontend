import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Seo, { ORGANIZATION_SCHEMA, PROFESSIONAL_SERVICE_SCHEMA } from "../components/Seo";
import { Section, SectionHeading, GlowCard, Reveal, PrimaryLink, GhostLink, CTABanner } from "../components/ui";
import { CAPABILITIES } from "../data/agents";
import { INDUSTRIES } from "../data/industries";
import { fireConversionEvent } from "../ga";

export default function Home() {
  return (
    <main style={{ background: "var(--void)", paddingTop: "72px" }}>
      <Seo
        title="AI Agents for Your Business | Batistack — AI Infrastructure & Agent Services NYC"
        description="We install AI workforces in NYC businesses. Mac mini and Mac Studio powered AI agents working 24/7 — lead gen, invoicing, scheduling. Schedule a free assessment."
        path="/"
        jsonLd={[ORGANIZATION_SCHEMA, PROFESSIONAL_SERVICE_SCHEMA]}
      />
      <Hero />
      <StatsBar />
      <HardwareSection />
      <CapabilitiesSection />
      <IndustriesSection />
      <ProcessPreview />
      <LeadCapture />
      <CTABanner />
    </main>
  );
}

/* ════════════════ HERO ════════════════ */

const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 61) % 100}%`,
  top: `${(i * 37) % 100}%`,
  size: 2 + (i % 3),
  duration: 7 + (i % 5) * 2,
  delay: (i % 7) * 1.3,
  dx: `${((i % 5) - 2) * 30}px`,
  dy: `${-40 - (i % 4) * 25}px`,
}));

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 80% 60% at 70% 30%, rgba(0,174,239,0.07) 0%, transparent 60%), #0A0A0A",
      }}
    >
      {/* Circuit grid backdrop */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,174,239,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 90% 80% at 50% 40%, black 30%, transparent 75%)",
        }}
      />
      {/* Brand watermark */}
      <img
        src="/brand/batistack-mark.png"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          right: "-60px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "520px",
          height: "auto",
          opacity: 0.035,
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
      {/* Drifting particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            position: "absolute",
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "#00AEEF",
            opacity: 0,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
            ["--dx" as string]: p.dx,
            ["--dy" as string]: p.dy,
          }}
        />
      ))}

      <div
        className="section-container hero-grid"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "64px",
          alignItems: "center",
          width: "100%",
          padding: "120px 60px 100px",
        }}
      >
        {/* Left — copy */}
        <div>
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
              AI Workforce Solutions — NYC
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(38px, 6vw, 68px)",
                lineHeight: 1.06,
                color: "var(--bone)",
                margin: "28px 0 0",
                letterSpacing: "-0.015em",
              }}
            >
              We Build Your AI Workforce.
              <br />
              <span style={{ color: "#00AEEF" }}>You Grow Your Business.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "17px",
                color: "var(--mist)",
                lineHeight: 1.75,
                maxWidth: "520px",
                margin: "26px 0 0",
              }}
            >
              AI agents physically installed in your business on Mac mini or Mac
              Studio. Working 24/7. Lead generation, invoicing, scheduling — all
              automated. You control everything from your phone.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "40px" }}>
              <PrimaryLink to="/contact">Schedule Free Assessment</PrimaryLink>
              <GhostLink to="/how-it-works">See How It Works</GhostLink>
            </div>
          </Reveal>
        </div>

        {/* Right — Autopilot Station */}
        <Reveal delay={0.25}>
          <AutopilotStation />
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 64px 24px !important;
            gap: 64px !important;
          }
        }
      `}</style>
    </section>
  );
}

function AutopilotStation() {
  return (
    <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", padding: "40px 16px" }}>
      {/* Outer glow ring */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,174,239,0.13) 0%, rgba(0,174,239,0.04) 50%, transparent 72%)",
          animation: "pulseGlow 4s ease-in-out infinite",
        }}
      />

      {/* Main card */}
      <div
        style={{
          position: "relative",
          width: "360px",
          background: "linear-gradient(160deg, #141414 0%, #0e0e0e 100%)",
          border: "1px solid rgba(0,174,239,0.35)",
          borderRadius: "20px",
          padding: "40px 32px 36px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          boxShadow: "0 0 60px rgba(0,174,239,0.08), 0 24px 48px rgba(0,0,0,0.6)",
        }}
      >
        {/* Top accent line */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #00AEEF, transparent)",
            borderRadius: "1px",
          }}
        />

        {/* Logo lockup */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
          <img
            src="/brand/batistack-mark.png"
            alt=""
            style={{
              height: "72px",
              width: "auto",
              display: "block",
              filter: "drop-shadow(0 0 18px rgba(0,174,239,0.45))",
              animation: "pulseGlow 4s ease-in-out infinite",
            }}
          />
          <img
            src="/brand/batistack-wordmark.png"
            alt="Batistack"
            style={{ height: "18px", width: "auto", display: "block" }}
          />
          <p
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 600,
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#888888",
              margin: 0,
            }}
          >
            AI Infrastructure &amp; Agent Services
          </p>
        </div>

        {/* Divider */}
        <div style={{ width: "100%", height: "1px", background: "#1E1E1E" }} />

        {/* Live indicator row */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span className="status-dot" />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--silver)",
            }}
          >
            AI Workforce — Online
          </span>
        </div>

        {/* Agent count row */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            textAlign: "center",
          }}
        >
          {[
            { val: "7", label: "Agents" },
            { val: "24/7", label: "Runtime" },
            { val: "8d", label: "To Live" },
          ].map((s) => (
            <div
              key={s.label}
              style={{
                background: "#0A0A0A",
                border: "1px solid #1E1E1E",
                borderRadius: "8px",
                padding: "10px 6px",
              }}
            >
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "16px", color: "#00AEEF", margin: 0 }}>
                {s.val}
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--mist)", margin: "4px 0 0" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating stat chips */}
      <FloatChip text="24/7 Operation" style={{ top: "4%", left: "-4%", animationDelay: "0s" }} />
      <FloatChip text="Apple Silicon" style={{ top: "42%", right: "-8%", animationDelay: "1.4s" }} />
      <FloatChip text="NYC Installed" style={{ bottom: "4%", left: "2%", animationDelay: "2.6s" }} />
    </div>
  );
}

function FloatChip({ text, style }: { text: string; style: React.CSSProperties }) {
  return (
    <span
      style={{
        position: "absolute",
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "rgba(13,13,13,0.92)",
        border: "1px solid rgba(0,174,239,0.4)",
        borderRadius: "8px",
        padding: "9px 14px",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: "12px",
        letterSpacing: "0.05em",
        color: "var(--bone)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
        animation: "floatChip 5.5s ease-in-out infinite",
        ...style,
      }}
    >
      <span className="status-dot" />
      {text}
    </span>
  );
}

/* ════════════════ STATS BAR ════════════════ */

function StatsBar() {
  const stats = [
    { value: "Installed", label: "in NYC businesses" },
    { value: "Plug & Play", label: "live in days, not months" },
    { value: "Secure", label: "encrypted, local processing" },
  ];
  return (
    <section style={{ borderTop: "1px solid #1E1E1E", borderBottom: "1px solid #1E1E1E", background: "#0D0D0D" }}>
      <div
        className="section-container stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr repeat(3, 1fr)",
          gap: "32px",
          padding: "40px 60px",
          alignItems: "center",
        }}
      >
        <Reveal>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "20px",
              color: "var(--bone)",
              margin: 0,
              letterSpacing: "0.02em",
            }}
          >
            AI Employees. <span style={{ color: "#00AEEF" }}>Real Results.</span> 24/7.
          </p>
        </Reveal>
        {stats.map((s, i) => (
          <Reveal key={s.value} delay={0.1 * (i + 1)}>
            <div>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "18px", color: "#00AEEF", margin: 0 }}>
                {s.value}
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "var(--mist)", margin: "4px 0 0" }}>
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; padding: 32px 24px !important; }
        }
        @media (max-width: 540px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

/* ════════════════ HARDWARE ════════════════ */

function HardwareSection() {
  const tiers = [
    {
      name: "Mac mini",
      audience: "Small Business",
      desc: "The entry point to your AI workforce. Compact, silent, sits on a shelf — and runs lead gen, scheduling, and invoicing for your whole operation.",
      points: ["Up to 4 AI agents", "Whisper-quiet operation", "Fits anywhere in your office"],
      featured: false,
    },
    {
      name: "Mac Studio",
      audience: "Growing Operations",
      desc: "Serious compute for serious volume. Runs your full agent roster simultaneously — voice calls, campaigns, dispatch — without breaking a sweat.",
      points: ["Full 7-agent workforce", "Concurrent voice + email + billing", "Headroom to scale for years"],
      featured: true,
    },
    {
      name: "Custom Enterprise",
      audience: "Multi-Location",
      desc: "Multiple stations, custom integrations, and agents purpose-built for your workflows across every location you operate.",
      points: ["Multi-site deployments", "Custom agent development", "Dedicated support channel"],
      featured: false,
    },
  ];

  return (
    <Section>
      <SectionHeading
        label="The Hardware"
        title={<>Your AI Team. <em style={{ color: "#00AEEF", fontStyle: "normal" }}>Physically Installed.</em></>}
        sub="No cloud subscriptions you don't control. We install real Apple Silicon hardware in your business — your data, your machine, your workforce."
      />
      <Reveal>
        <div
          style={{
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid #1E1E1E",
            marginBottom: "40px",
            position: "relative",
          }}
        >
          <img
            src="/brand/stations.PNG"
            alt="Batistack AI station installed on site — Mac mini on shelf with blue LED"
            style={{ width: "100%", display: "block", height: "280px", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, rgba(10,10,10,0.72) 0%, transparent 55%)",
              display: "flex",
              alignItems: "center",
              padding: "0 40px",
            }}
          >
            <div>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#00AEEF", margin: "0 0 8px" }}>
                Real Installation
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(18px, 2.5vw, 26px)", color: "var(--bone)", margin: 0, lineHeight: 1.25 }}>
                Your hardware. Your office.<br />Your AI workforce.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <div
        className="cards-3"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", alignItems: "stretch" }}
      >
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={0.1 * i}>
            <GlowCard featured={t.featured}>
              {t.featured && (
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
                    padding: "5px 14px",
                    borderRadius: "100px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Most Popular
                </span>
              )}
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00AEEF", margin: 0 }}>
                {t.audience}
              </p>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "26px", color: "var(--bone)", margin: "10px 0 14px" }}>
                {t.name}
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--mist)", lineHeight: 1.7, margin: "0 0 22px" }}>
                {t.desc}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {t.points.map((p) => (
                  <li key={p} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "10px" }}>
                    <CheckIcon />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--silver)", lineHeight: 1.5 }}>{p}</span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) {
          .cards-3 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

/* ════════════════ CAPABILITIES ════════════════ */

const CAP_ICONS: Record<string, React.ReactNode> = {
  "Lead Generation": (
    <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m13.5 7.5 6-6m-15-9-6 6m18 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm-5.5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  ),
  "Voice Calls": (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  "Invoice Automation": (
    <path d="M7 3h10a1 1 0 0 1 1 1v17l-3-2-3 2-3-2-3 2V4a1 1 0 0 1 1-1Zm3 6h4m-4 4h4" />
  ),
  "Appointment Scheduling": (
    <path d="M8 2v4m8-4v4M4 8h16M5 4h14a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm4 9 2 2 4-4" />
  ),
  "Email Campaigns": (
    <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 1 8 6 8-6" />
  ),
  "Field Coordination": (
    <path d="m21.5 4.5-19 7.5 6.5 2.5L11.5 21l3-6.5 7-10Zm-12.5 10 12.5-10" />
  ),
};

function CapIcon({ name }: { name: string }) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00AEEF"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {CAP_ICONS[name]}
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0, marginTop: "3px" }}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

function CapabilitiesSection() {
  return (
    <Section bg="#0D0D0D">
      <SectionHeading
        label="The Workforce"
        title="What Your AI Agents Do"
        sub="Each agent owns one job and does it relentlessly. Together, they run the operations side of your business."
      />
      <div
        className="cards-3"
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}
      >
        {CAPABILITIES.map((c, i) => (
          <Reveal key={c.title} delay={0.08 * i}>
            <GlowCard accentBorder>
              <CapIcon name={c.title} />
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "18px", color: "var(--bone)", margin: "16px 0 8px" }}>
                {c.title}
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--mist)", lineHeight: 1.65, margin: 0 }}>
                {c.text}
              </p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <GhostLink to="/ai-agents">Meet All 7 Agents</GhostLink>
        </div>
      </Reveal>
    </Section>
  );
}

/* ════════════════ INDUSTRIES ════════════════ */

function IndustriesSection() {
  return (
    <Section>
      <SectionHeading
        label="Who It's For"
        title="Built for NYC Service Businesses"
        sub="If your business runs on calls, appointments, and invoices, an AI workforce pays for itself."
      />
      <div
        className="ind-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}
      >
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.slug} delay={0.06 * i}>
            <Link
              to={`/industries/${ind.slug}`}
              className="glow-card"
              data-cursor="cta"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "20px",
                background: "#141414",
                border: "1px solid #1E1E1E",
                borderRadius: "12px",
                padding: "24px",
                textDecoration: "none",
                minHeight: "130px",
                transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px", color: "var(--bone)", lineHeight: 1.3 }}>
                {ind.name}
              </span>
              <span style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase", color: "#00AEEF" }}>
                Explore →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) {
          .ind-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .ind-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

/* ════════════════ PROCESS PREVIEW ════════════════ */

function ProcessPreview() {
  const steps = [
    { n: "01", title: "Free Assessment", text: "We map where your business loses time and money — calls, follow-ups, paperwork." },
    { n: "02", title: "Physical Installation", text: "We configure your agents and install the hardware on site, in your office." },
    { n: "03", title: "You're Operational", text: "Your workforce goes live. You approve and command everything from Telegram." },
  ];
  return (
    <Section bg="#0D0D0D">
      <SectionHeading
        label="The Process"
        title="From Contract to Operational in Days"
        sub="No six-month software projects. We install, train, and hand you the controls."
      />
      <div className="cards-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={0.1 * i}>
            <div style={{ position: "relative", padding: "0 8px" }}>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "64px",
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(0,174,239,0.5)",
                  lineHeight: 1,
                }}
              >
                {s.n}
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "var(--bone)", margin: "16px 0 10px" }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--mist)", lineHeight: 1.7, margin: 0 }}>
                {s.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <GhostLink to="/how-it-works">See the Full 8-Step Process</GhostLink>
        </div>
      </Reveal>
    </Section>
  );
}

/* ════════════════ LEAD CAPTURE (EmailJS — functionality preserved) ════════════════ */

type FormState = "idle" | "sending" | "success" | "error";

function LeadCapture() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", service: "", budget: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    fireConversionEvent();
    setFormState("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: fields.name,
          from_email: fields.email,
          service: fields.service || "AI Workforce Assessment",
          budget: fields.budget || "Not specified",
          message: fields.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0A0A0A",
    border: "1px solid #1E1E1E",
    borderRadius: "8px",
    padding: "14px 16px",
    fontFamily: "var(--font-sans)",
    fontSize: "15px",
    color: "var(--bone)",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <Section>
      <div
        className="lead-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
          background: "#141414",
          border: "1px solid #1E1E1E",
          borderRadius: "16px",
          padding: "clamp(32px, 5vw, 64px)",
        }}
      >
        <Reveal>
          <div>
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid #1E1E1E",
                background: "#0D0D0D",
                aspectRatio: "4/3",
                marginBottom: "28px",
              }}
            >
              <img
                src="/brand/autopilot-closeup.png"
                alt="Batistack Autopilot AI station"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#00AEEF", marginBottom: "14px" }}>
              Free Assessment
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 40px)", color: "var(--bone)", lineHeight: 1.15, margin: 0 }}>
              Find Out What an AI Workforce Would Do for Your Business.
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0" }}>
              {[
                "30-minute call, zero obligation",
                "We map your biggest time drains",
                "You get a concrete automation plan",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <CheckIcon />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "14.5px", color: "var(--silver)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {formState === "success" ? (
            <div style={{ textAlign: "center", padding: "32px 0" }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <path d="m8 12 3 3 5-6" />
              </svg>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "var(--bone)", margin: "18px 0 8px" }}>
                Message received.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--mist)" }}>
                We'll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Form header */}
              <div style={{ marginBottom: "10px" }}>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#00AEEF",
                  margin: "0 0 12px",
                }}>
                  Reply within 24 hours
                </p>
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  color: "var(--bone)",
                  lineHeight: 1.2,
                  margin: "0 0 10px",
                  letterSpacing: "-0.01em",
                }}>
                  Start the conversation.
                </h3>
                <p style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--mist)",
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  No pitch. Just a clear map of what an AI workforce would take off your plate.
                </p>
              </div>
              <label htmlFor="lead-name" style={{ display: "none" }}>Name</label>
              <input id="lead-name" name="name" required placeholder="Your name" value={fields.name} onChange={handleChange} style={inputStyle} />
              <label htmlFor="lead-email" style={{ display: "none" }}>Email</label>
              <input id="lead-email" name="email" type="email" required placeholder="Work email" value={fields.email} onChange={handleChange} style={inputStyle} />
              <label htmlFor="lead-message" style={{ display: "none" }}>Message</label>
              <textarea
                id="lead-message"
                name="message"
                required
                placeholder="What's eating your time? (missed calls, invoicing, follow-ups…)"
                rows={3}
                value={fields.message}
                onChange={handleChange}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <button
                type="submit"
                disabled={formState === "sending"}
                data-cursor="cta"
                className="ui-btn-primary"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#0A0A0A",
                  background: "#00AEEF",
                  border: "none",
                  borderRadius: "6px",
                  padding: "15px 34px",
                  cursor: "pointer",
                  opacity: formState === "sending" ? 0.7 : 1,
                  transition: "background 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                {formState === "sending" ? "Sending…" : "Get My Free Assessment"}
              </button>
              {formState === "error" && (
                <p role="alert" style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "#f87171", margin: 0 }}>
                  Failed to send your message. Please try again later.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .lead-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        .lead-grid input:focus, .lead-grid textarea:focus {
          border-color: #00AEEF !important;
        }
      `}</style>
    </Section>
  );
}
