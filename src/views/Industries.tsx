import Link from "next/link";
import { Section, Reveal, CTABanner } from "../components/ui";
import { INDUSTRIES } from "../data/industries";

export default function Industries() {
  return (
    <main style={{ background: "var(--void)", paddingTop: "72px" }}>
      <IndustriesHero />
      <IndustryGrid />
      <CTABanner
        title="Don't See Your Industry?"
        sub="If your business runs on calls, appointments, and invoices, the playbook still applies. Tell us what you do."
        cta="Talk to Us"
      />
    </main>
  );
}

/* ════════════════ HERO ════════════════ */

function IndustriesHero() {
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
        className="section-container ind-hero"
        style={{ padding: "96px 60px 72px", textAlign: "center" }}
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
            Eight Industries. One Playbook.
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
              letterSpacing: "-0.015em",
              margin: "26px auto 0",
              maxWidth: "820px",
            }}
          >
            AI Automation by Industry{" "}
            <span style={{ color: "#00AEEF" }}>in NYC</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "16.5px",
              color: "var(--mist)",
              lineHeight: 1.75,
              maxWidth: "620px",
              margin: "22px auto 0",
            }}
          >
            Every industry leaks revenue in its own way. We build purpose-built
            rosters of{" "}
            <Link href="/ai-agents" style={{ color: "#00AEEF", textDecoration: "none", fontWeight: 600 }}>
              AI agents
            </Link>{" "}
            for each one — installed on real hardware in your office, running
            24/7. Pick your industry to see{" "}
            <Link href="/how-it-works" style={{ color: "#00AEEF", textDecoration: "none", fontWeight: 600 }}>
              how it works
            </Link>{" "}
            for businesses like yours.
          </p>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .ind-hero { padding: 72px 24px 56px !important; }
        }
      `}</style>
    </section>
  );
}

/* ════════════════ INDUSTRY GRID ════════════════ */

function IndustryGrid() {
  return (
    <Section>
      <div
        className="ind-hub-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          alignItems: "stretch",
        }}
      >
        {INDUSTRIES.map((ind, i) => (
          <Reveal key={ind.slug} delay={0.06 * i} style={{ height: "100%" }}>
            <Link
              href={`/industries/${ind.slug}`}
              className="glow-card"
              data-cursor="cta"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                height: "100%",
                background: "#141414",
                border: "1px solid #1E1E1E",
                borderRadius: "12px",
                padding: "32px",
                textDecoration: "none",
                transition:
                  "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "22px",
                    color: "var(--bone)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {ind.name}
                </h2>
                <div style={{ textAlign: "right" }}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "22px",
                      color: "#00AEEF",
                      lineHeight: 1,
                    }}
                  >
                    {ind.stat.value}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      letterSpacing: "0.04em",
                      color: "var(--mist)",
                      marginTop: "4px",
                    }}
                  >
                    {ind.stat.label}
                  </span>
                </div>
              </div>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14.5px",
                  color: "var(--mist)",
                  lineHeight: 1.65,
                  margin: 0,
                  flexGrow: 1,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {ind.tagline}
              </p>

              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#00AEEF",
                }}
              >
                See the playbook →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <style>{`
        @media (max-width: 960px) {
          .ind-hub-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}
