import { useState } from "react";
import { Link } from "react-router-dom";
import Seo, { faqSchema } from "../components/Seo";
import { Section, SectionHeading, Reveal, CTABanner, GhostLink } from "../components/ui";

/* ════════════════ DATA ════════════════ */

const STEPS = [
  {
    n: "01",
    day: "Day 0",
    title: "Assessment",
    text: "A free 30-minute call where we map exactly where your business loses time and money — missed calls, slow invoicing, follow-ups that never happen.",
  },
  {
    n: "02",
    day: "Day 1–2",
    title: "Proposal",
    text: "You receive the exact agents, hardware, and plan in plain English. No jargon, no padding — just what gets installed and what it does for you.",
  },
  {
    n: "03",
    day: "Day 3",
    title: "Agreement",
    text: "A simple contract you can read in one sitting. No enterprise procurement circus, no months of legal back-and-forth.",
  },
  {
    n: "04",
    day: "Day 4–6",
    title: "Hardware Prep",
    text: "We configure your Mac mini or Mac Studio and train your agents on your actual workflows — your services, your pricing, your tone.",
  },
  {
    n: "05",
    day: "Day 7",
    title: "Physical Installation",
    text: "We come to your business and install the station on site. Real hardware, in your office, owned by you.",
  },
  {
    n: "06",
    day: "Day 7",
    title: "Training",
    text: "You learn Telegram control in under an hour. If you can text an employee, you can command your AI workforce.",
  },
  {
    n: "07",
    day: "Day 8",
    title: "Go Live",
    text: "Your agents start working. We watch closely the first week to tune performance and make sure every task lands.",
  },
  {
    n: "08",
    day: "Always",
    title: "Ongoing Support",
    text: "Monitoring, updates, and new agents as you grow. Your workforce keeps getting better long after installation day.",
  },
];

const FAQS = [
  {
    q: "Do I need technical knowledge to use my AI workforce?",
    a: "No. You control everything through Telegram messages on your phone — like texting an employee. We handle all the technical setup, monitoring, and updates.",
  },
  {
    q: "What happens if my internet goes out?",
    a: "Your agents queue their work and catch up the moment the connection returns. Critical alerts reach you via cellular Telegram, and nothing is lost.",
  },
  {
    q: "Can I add more agents later?",
    a: "Yes. Your station is built with headroom. Most clients start with three or four agents and add more once they see the first month's results.",
  },
  {
    q: "Is my business data secure?",
    a: "Your data is processed locally on hardware that lives in your office — not on shared cloud servers. Communications are encrypted, and you own the machine.",
  },
  {
    q: "Who is this for?",
    a: "NYC service businesses that run on calls, appointments, and invoices: HVAC, plumbing, electrical, real estate, gyms, legal, cleaning, and insurance.",
  },
  {
    q: "What if I want to cancel?",
    a: "The hardware is yours. There are no long-term contracts holding you hostage — ongoing support is month to month, and you can step away anytime.",
  },
];

/* ════════════════ PAGE ════════════════ */

export default function HowItWorks() {
  return (
    <main style={{ background: "var(--void)", paddingTop: "72px" }}>
      <Seo
        title="How AI Agent Installation Works — From Assessment to Live in Days | Batistack"
        description="Our 8-step process: free assessment, plain-English proposal, on-site Mac mini installation, Telegram training, and go-live in about 8 days. NYC businesses."
        path="/how-it-works"
        jsonLd={faqSchema(FAQS)}
      />
      <Hero />
      <TimelineSection />
      <InstallationShowcase />
      <FAQSection />
      <CTABanner title="See It Mapped to Your Business." />
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
        className="section-container hiw-hero"
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
            The Process
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
              maxWidth: "780px",
              letterSpacing: "-0.015em",
            }}
          >
            How AI Agent <span style={{ color: "#00AEEF" }}>Installation</span> Works
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
              margin: "20px auto 0",
            }}
          >
            From assessment to live in days — not months.
          </p>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .hiw-hero { padding: 72px 24px 64px !important; }
        }
      `}</style>
    </section>
  );
}

/* ════════════════ TIMELINE ════════════════ */

function TimelineSection() {
  return (
    <Section>
      <SectionHeading
        label="Eight Steps"
        title={
          <>
            From First Call to <em style={{ color: "#00AEEF", fontStyle: "normal" }}>Fully Operational</em>
          </>
        }
        sub="No six-month software projects. We assess, install, train, and hand you the controls — then we stay close while your workforce ramps up."
      />
      <div className="hiw-timeline" style={{ position: "relative", maxWidth: "760px", margin: "0 auto" }}>
        {/* Glowing connector line */}
        <div
          aria-hidden
          className="hiw-line"
          style={{
            position: "absolute",
            left: "27px",
            top: "8px",
            bottom: "8px",
            width: "2px",
            background:
              "linear-gradient(180deg, rgba(0,174,239,0.9) 0%, rgba(0,174,239,0.35) 60%, rgba(0,174,239,0.08) 100%)",
            boxShadow: "0 0 12px rgba(0,174,239,0.55)",
            borderRadius: "2px",
          }}
        />
        <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {STEPS.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={0.06 * i}>
                <div
                  className="hiw-step"
                  style={{
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    gap: "26px",
                    paddingBottom: i === STEPS.length - 1 ? 0 : "52px",
                  }}
                >
                  {/* Number node */}
                  <div
                    className="hiw-node"
                    aria-hidden
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      border: "1.5px solid rgba(0,174,239,0.7)",
                      background: "#0A0A0A",
                      boxShadow: "0 0 18px rgba(0,174,239,0.25), inset 0 0 12px rgba(0,174,239,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "17px",
                      color: "#00AEEF",
                      position: "relative",
                      zIndex: 1,
                      flexShrink: 0,
                    }}
                  >
                    {s.n}
                  </div>

                  {/* Content card */}
                  <div
                    className="glow-card"
                    style={{
                      background: "#141414",
                      border: "1px solid #1E1E1E",
                      borderRadius: "12px",
                      padding: "24px 28px",
                      transition: "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        flexWrap: "wrap",
                        marginBottom: "10px",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: "20px",
                          color: "var(--bone)",
                          margin: 0,
                        }}
                      >
                        {s.title}
                      </h3>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontWeight: 700,
                          fontSize: "11px",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#00AEEF",
                          border: "1px solid rgba(0,174,239,0.45)",
                          background: "rgba(0,174,239,0.07)",
                          borderRadius: "100px",
                          padding: "4px 12px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {s.day}
                      </span>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "14.5px",
                        color: "var(--mist)",
                        lineHeight: 1.7,
                        margin: 0,
                      }}
                    >
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <Reveal delay={0.2}>
        <div style={{ textAlign: "center", marginTop: "56px" }}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "15px",
              color: "var(--mist)",
              margin: "0 0 22px",
              lineHeight: 1.7,
            }}
          >
            Want to see exactly which{" "}
            <Link to="/ai-agents" style={{ color: "#00AEEF", textDecoration: "none", fontWeight: 600 }}>
              AI agents
            </Link>{" "}
            and{" "}
            <Link to="/services" style={{ color: "#00AEEF", textDecoration: "none", fontWeight: 600 }}>
              services
            </Link>{" "}
            get installed at each step?
          </p>
          <GhostLink to="/contact">Start With a Free Assessment</GhostLink>
        </div>
      </Reveal>

      <style>{`
        @media (max-width: 540px) {
          .hiw-line { left: 21px !important; }
          .hiw-step { grid-template-columns: 44px 1fr !important; gap: 16px !important; padding-bottom: 36px !important; }
          .hiw-node { width: 44px !important; height: 44px !important; font-size: 14px !important; }
        }
      `}</style>
    </Section>
  );
}

/* ════════════════ INSTALLATION SHOWCASE ════════════════ */

function InstallationShowcase() {
  return (
    <Section bg="#0D0D0D" style={{ padding: "72px 0" }}>
      <Reveal>
        <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#00AEEF", textAlign: "center", margin: "0 0 14px" }}>
          Real Installations
        </p>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(24px, 3.5vw, 36px)", color: "var(--bone)", textAlign: "center", margin: "0 0 40px", letterSpacing: "-0.01em" }}>
          This Is What Gets Installed in Your Business
        </h2>
      </Reveal>
      <div
        className="showcase-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <Reveal delay={0.1}>
          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid #1E1E1E", position: "relative" }}>
            <img
              src="/brand/stations.PNG"
              alt="Mac mini AI station installed on shelf in NYC business"
              style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover", objectPosition: "center" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(10,10,10,0.88))", padding: "40px 24px 20px" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "13px", color: "var(--bone)", margin: 0 }}>
                Mac mini — on-site install
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--mist)", margin: "4px 0 0" }}>
                Sits on a shelf. Runs 24/7. You never touch it.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div style={{ borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(0,174,239,0.25)", position: "relative", boxShadow: "0 0 40px rgba(0,174,239,0.08)" }}>
            <img
              src="/brand/moreReal.png"
              alt="Batistack Autopilot station — the complete AI workforce setup"
              style={{ width: "100%", display: "block", aspectRatio: "4/3", objectFit: "cover", objectPosition: "center" }}
            />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(10,10,10,0.88))", padding: "40px 24px 20px" }}>
              <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "13px", color: "var(--bone)", margin: 0 }}>
                Batistack Autopilot setup
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "var(--mist)", margin: "4px 0 0" }}>
                Your complete AI workforce, ready on Day 8.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .showcase-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

/* ════════════════ FAQ ════════════════ */

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section bg="#0D0D0D">
      <SectionHeading
        label="Questions"
        title="Everything Owners Ask Us"
        sub="Straight answers, no fine print. If your question isn't here, ask us directly on a free call."
      />
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={0.05 * i}>
              <div
                style={{
                  background: "#141414",
                  border: isOpen ? "1px solid rgba(0,174,239,0.45)" : "1px solid #1E1E1E",
                  borderRadius: "12px",
                  marginBottom: "14px",
                  overflow: "hidden",
                  transition: "border-color 0.25s ease",
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-cursor="cta"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "18px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "22px 26px",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "16.5px",
                      color: isOpen ? "var(--bone)" : "var(--silver)",
                      lineHeight: 1.4,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {f.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00AEEF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.35s ease",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "14.5px",
                        color: "var(--mist)",
                        lineHeight: 1.75,
                        margin: 0,
                        padding: "0 26px 24px",
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
