import Link from "next/link";
import Image from "next/image";
import {
  Section,
  SectionHeading,
  GlowCard,
  Reveal,
  PrimaryLink,
  GhostLink,
  CTABanner,
} from "../components/ui";
import { AGENTS } from "../data/agents";

export default function AIAgents() {
  return (
    <main style={{ background: "var(--void)", paddingTop: "72px" }}>
      <Hero />
      <AgentRoster />
      <HardwareSection />
      <SecuritySection />
      <CTABanner />
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
            "linear-gradient(rgba(0,174,239,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 75%)",
        }}
      />
      <div
        className="section-container agents-hero"
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
            The Agent Roster — 7 Roles, One Workforce
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(36px, 5.5vw, 62px)",
              lineHeight: 1.08,
              color: "var(--bone)",
              margin: "28px auto 0",
              maxWidth: "820px",
              letterSpacing: "-0.015em",
            }}
          >
            Meet Your New AI <span style={{ color: "#00AEEF" }}>Workforce</span>
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
            Instead of hiring another employee, install seven. Each agent below
            runs 24/7 on Apple Silicon hardware inside your business — and you
            command all of them from Telegram on your phone.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "40px",
            }}
          >
            <PrimaryLink to="/contact">Schedule Free Assessment</PrimaryLink>
            <GhostLink to="/how-it-works">See How It Works</GhostLink>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .agents-hero { padding: 72px 24px 64px !important; }
        }
      `}</style>
    </section>
  );
}

/* ════════════════ AGENT ROSTER ════════════════ */

const AGENT_IMAGES: Record<string, string> = {
  "CEO Agent":       "/brand/brainsAgent.png",
  "Scout Agent":     "/brand/scoutAgents.PNG",
  "Voice Agent":     "/brand/voiceAgent.png",
  "Email Agent":     "/brand/emailAgents.PNG",
  "Billing Agent":   "/brand/billingAgent.png",
  "Scheduler Agent": "/brand/schedulerAgent.png",
  "Commander Agent": "/brand/comanderAgent.png",
};

function AgentRoster() {
  const ceo      = AGENTS[0];
  const rest     = AGENTS.slice(1);

  return (
    <Section>
      <SectionHeading
        label="The Roster"
        title={
          <>
            Seven Agents. <em style={{ color: "#00AEEF", fontStyle: "normal" }}>Zero Days Off.</em>
          </>
        }
        sub="Each agent owns one job and does it relentlessly. Below is a live look at what a working roster handles in a single day."
      />

      {/* ── CEO: featured full-width card ── */}
      <Reveal>
        <Link href={`/agents/${ceo.slug}`} style={{ textDecoration: "none", display: "block" }}>
          <GlowCard featured style={{ cursor: "pointer" }}>
            <div
              className="ceo-card-inner"
              style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: "40px", alignItems: "center" }}
            >
              {/* left: content */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "clamp(22px, 2.5vw, 30px)",
                      color: "var(--bone)",
                      margin: 0,
                    }}
                  >
                    {ceo.name}
                  </h3>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", flexShrink: 0 }}>
                    <span className="status-dot" />
                    <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#22c55e" }}>
                      Active
                    </span>
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00AEEF", margin: "0 0 16px" }}>
                  {ceo.role}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--mist)", lineHeight: 1.75, margin: "0 0 24px" }}>
                  {ceo.description}
                </p>
                <div style={{ background: "#0A0A0A", border: "1px solid #1E1E1E", borderLeft: "2px solid #00AEEF", borderRadius: "6px", padding: "14px 16px", marginBottom: "28px" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "10px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#00AEEF", margin: "0 0 6px" }}>Today</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "12.5px", letterSpacing: "0.03em", color: "var(--silver)", lineHeight: 1.65, margin: 0 }}>
                    <span style={{ color: "#00AEEF" }}>&gt;_</span> {ceo.today}
                  </p>
                </div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#00AEEF",
                  }}
                >
                  View Full Profile
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </span>
              </div>

              {/* right: image */}
              <div style={{ position: "relative", borderRadius: "10px", overflow: "hidden", border: "1px solid rgba(0,174,239,0.2)", background: "#0A0A0A" }}>
                <Image
                  src={AGENT_IMAGES[ceo.name]}
                  alt={`${ceo.name} visualization`}
                  width={640}
                  height={360}
                  priority
                  style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "contain" }}
                />
              </div>
            </div>
          </GlowCard>
        </Link>
      </Reveal>

      {/* ── Remaining 6: 3+3 grid ── */}
      <div
        className="roster-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          alignItems: "start",
          marginTop: "24px",
        }}
      >
        {rest.map((agent, i) => (
          <Reveal key={agent.name} delay={0.07 * i}>
            <Link href={`/agents/${agent.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
              <GlowCard style={{ display: "flex", flexDirection: "column", cursor: "pointer", height: "100%" }}>
                {AGENT_IMAGES[agent.name] && (
                  <div style={{ marginBottom: "18px", borderRadius: "8px", overflow: "hidden", border: "1px solid #1E1E1E" }}>
                    <img
                      src={AGENT_IMAGES[agent.name]}
                      alt={`${agent.name} visualization`}
                      style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }}
                    />
                  </div>
                )}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px", marginBottom: "10px" }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "20px", color: "var(--bone)", margin: 0 }}>
                    {agent.name}
                  </h3>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", flexShrink: 0 }}>
                    <span className="status-dot" />
                    <span style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#22c55e" }}>
                      Active
                    </span>
                  </span>
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#00AEEF", margin: "0 0 14px" }}>
                  {agent.role}
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--mist)", lineHeight: 1.7, margin: "0 0 20px", flexGrow: 1 }}>
                  {agent.description}
                </p>
                <div style={{ background: "#0A0A0A", border: "1px solid #1E1E1E", borderLeft: "2px solid #00AEEF", borderRadius: "6px", padding: "14px 16px", marginBottom: "20px" }}>
                  <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "10px", letterSpacing: "0.24em", textTransform: "uppercase", color: "#00AEEF", margin: "0 0 6px" }}>Today</p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "12.5px", letterSpacing: "0.03em", color: "var(--silver)", lineHeight: 1.65, margin: 0 }}>
                    <span style={{ color: "#00AEEF" }}>&gt;_</span> {agent.today}
                  </p>
                </div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "#00AEEF" }}>
                  View Profile
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14m-7-7 7 7-7 7" />
                  </svg>
                </span>
              </GlowCard>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <GhostLink to="/services">Explore All Services</GhostLink>
        </div>
      </Reveal>
      <style>{`
        @media (max-width: 960px) {
          .roster-grid { grid-template-columns: 1fr 1fr !important; }
          .ceo-card-inner { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 640px) {
          .roster-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

/* ════════════════ HARDWARE ════════════════ */

function ChipIcon() {
  return (
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
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
      <path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" />
    </svg>
  );
}

function HwCheckIcon() {
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

function HardwareSection() {
  const tiers = [
    {
      name: "Mac mini",
      audience: "Small Business",
      desc: "Compact, silent, and shelf-sized. The entry point that puts a real AI workforce inside your office without taking up more space than a book.",
      points: ["Up to 4 AI agents", "Whisper-quiet, sits on a shelf", "Perfect first installation"],
      featured: false,
    },
    {
      name: "Mac Studio",
      audience: "Growing Operations",
      desc: "Serious compute for serious volume. Runs the full 7-agent roster simultaneously — voice, email, and billing all at once, with years of headroom.",
      points: [
        "Full 7-agent roster",
        "Concurrent voice + email + billing",
        "Headroom to scale for years",
      ],
      featured: true,
    },
  ];

  return (
    <Section bg="#0D0D0D">
      <SectionHeading
        label="The Hardware"
        title={
          <>
            Powered by <em style={{ color: "#00AEEF", fontStyle: "normal" }}>Apple Silicon</em>
          </>
        }
        sub="Your agents don't live in someone else's cloud. They run on dedicated Apple hardware we physically install in your business — your data stays on your machine."
      />
      <Reveal>
        <div style={{ maxWidth: "560px", margin: "0 auto 44px", borderRadius: "16px", overflow: "hidden", border: "1px solid rgba(0,174,239,0.25)", boxShadow: "0 0 60px rgba(0,174,239,0.10)" }}>
          <img
            src="/brand/autopilot-station.png"
            alt="Batistack Autopilot station — Apple Silicon AI workforce hardware"
            style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "3/4" }}
          />
        </div>
      </Reveal>

      <div
        className="hw-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "24px",
          maxWidth: "880px",
          margin: "0 auto",
          alignItems: "stretch",
        }}
      >
        {tiers.map((t, i) => (
          <Reveal key={t.name} delay={0.1 * i} style={{ height: "100%" }}>
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
                  Full Roster
                </span>
              )}
              <ChipIcon />
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#00AEEF",
                  margin: "18px 0 0",
                }}
              >
                {t.audience}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "26px",
                  color: "var(--bone)",
                  margin: "10px 0 14px",
                }}
              >
                {t.name}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--mist)",
                  lineHeight: 1.7,
                  margin: "0 0 22px",
                }}
              >
                {t.desc}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {t.points.map((p) => (
                  <li
                    key={p}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                      marginBottom: "10px",
                    }}
                  >
                    <HwCheckIcon />
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13.5px",
                        color: "var(--silver)",
                        lineHeight: 1.5,
                      }}
                    >
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </GlowCard>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) {
          .hw-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

/* ════════════════ SECURITY ════════════════ */

const APPROVAL_LEVELS = [
  {
    level: "Green",
    color: "#22c55e",
    title: "Runs Automatically",
    text: "Routine actions — sending confirmations, logging calls, drafting follow-ups — execute on their own. No interruptions, no noise.",
    icon: <path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6l-8-3Zm-3.5 9 2.5 2.5 5-5" />,
  },
  {
    level: "Yellow",
    color: "#eab308",
    title: "You Approve from Telegram",
    text: "Sensitive actions — sending an invoice, committing to a schedule, replying to a key client — the agent proposes, you tap approve from your phone.",
    icon: <path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6l-8-3Zm0 5v4m0 3.5v.5" />,
  },
  {
    level: "Red",
    color: "#ef4444",
    title: "Never Without You",
    text: "Critical actions — payments, contracts, anything irreversible — are locked. They never happen without your explicit sign-off. Period.",
    icon: <path d="M12 3 4 6v6c0 4.5 3.2 7.8 8 9 4.8-1.2 8-4.5 8-9V6l-8-3ZM9.5 9.5l5 5m0-5-5 5" />,
  },
];

function SecuritySection() {
  return (
    <Section>
      <SectionHeading
        label="Control & Trust"
        title={
          <>
            Human-in-the-Loop <em style={{ color: "#00AEEF", fontStyle: "normal" }}>Security</em>
          </>
        }
        sub="Autonomy without anarchy. Every action your agents take is classified into one of three approval levels — so you stay in command without micromanaging."
      />
      <div
        className="sec-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {APPROVAL_LEVELS.map((l, i) => (
          <Reveal key={l.level} delay={0.1 * i} style={{ height: "100%" }}>
            <GlowCard style={{ borderLeft: `3px solid ${l.color}` }}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke={l.color}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                {l.icon}
              </svg>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: l.color,
                  margin: "18px 0 0",
                }}
              >
                {l.level} Level
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "var(--bone)",
                  margin: "10px 0 10px",
                }}
              >
                {l.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--mist)",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {l.text}
              </p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(18px, 2.5vw, 24px)",
            color: "var(--silver)",
            textAlign: "center",
            maxWidth: "640px",
            margin: "56px auto 0",
            lineHeight: 1.5,
          }}
        >
          Your agents propose. You approve.{" "}
          <span style={{ color: "#00AEEF" }}>Nothing critical happens without you.</span>
        </p>
      </Reveal>
      <style>{`
        @media (max-width: 960px) {
          .sec-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}
