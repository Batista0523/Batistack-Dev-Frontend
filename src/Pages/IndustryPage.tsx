import { Link, Navigate, useParams } from "react-router-dom";
import Seo, { serviceSchema, breadcrumbSchema } from "../components/Seo";
import {
  Section,
  SectionHeading,
  GlowCard,
  Reveal,
  PrimaryLink,
  GhostLink,
  CTABanner,
} from "../components/ui";
import { INDUSTRIES, getIndustry } from "../data/industries";
import type { Industry } from "../data/industries";

export default function IndustryPage() {
  const { slug } = useParams<{ slug: string }>();
  const ind = getIndustry(slug ?? "");

  if (!ind) {
    return <Navigate to="/industries" replace />;
  }

  const path = `/industries/${ind.slug}`;
  const description =
    `AI agents for ${ind.name} businesses in NYC. ${ind.tagline}`.slice(0, 155);

  return (
    <main style={{ background: "var(--void)", paddingTop: "72px" }}>
      <Seo
        title={`AI Automation for ${ind.name} in NYC | Batistack`}
        description={description}
        path={path}
        jsonLd={[
          serviceSchema(`AI Automation for ${ind.name}`, description, path),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: ind.name, path },
          ]),
        ]}
      />
      <Breadcrumbs name={ind.name} />
      <IndustryHero ind={ind} />
      <ProblemSection ind={ind} />
      <SolutionSection ind={ind} />
      <AgentRoster ind={ind} />
      <AlsoServing current={ind} />
      <CTABanner title={`Put an AI Workforce in Your ${ind.shortName} Business.`} />
    </main>
  );
}

/* ════════════════ BREADCRUMBS ════════════════ */

function Breadcrumbs({ name }: { name: string }) {
  const crumbStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: "12.5px",
    color: "var(--mist)",
    textDecoration: "none",
    transition: "color 0.2s ease",
  };
  return (
    <nav
      aria-label="Breadcrumb"
      style={{ borderBottom: "1px solid #1E1E1E", background: "#0D0D0D" }}
    >
      <div
        className="section-container crumb-row"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          padding: "16px 60px",
        }}
      >
        <Link to="/" className="crumb-link" style={crumbStyle}>
          Home
        </Link>
        <CrumbSep />
        <Link to="/industries" className="crumb-link" style={crumbStyle}>
          Industries
        </Link>
        <CrumbSep />
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12.5px",
            color: "var(--silver)",
          }}
        >
          {name}
        </span>
      </div>
      <style>{`
        .crumb-link:hover { color: #00AEEF !important; }
        @media (max-width: 960px) {
          .crumb-row { padding: 14px 24px !important; }
        }
      `}</style>
    </nav>
  );
}

function CrumbSep() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00AEEF"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

/* ════════════════ HERO ════════════════ */

function IndustryHero({ ind }: { ind: Industry }) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 70% 60% at 30% 0%, rgba(0,174,239,0.08) 0%, transparent 60%), #0A0A0A",
        borderBottom: "1px solid #1E1E1E",
      }}
    >
      <div
        className="section-container ind-page-hero"
        style={{ padding: "88px 60px 80px", maxWidth: "100%" }}
      >
        <Reveal>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "#00AEEF",
              margin: 0,
            }}
          >
            {ind.shortName}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(32px, 5.5vw, 58px)",
              lineHeight: 1.08,
              color: "var(--bone)",
              letterSpacing: "-0.015em",
              margin: "18px 0 0",
              maxWidth: "780px",
            }}
          >
            AI Automation for {ind.name}{" "}
            <span style={{ color: "#00AEEF" }}>in NYC</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 500,
              fontSize: "clamp(18px, 2.6vw, 24px)",
              lineHeight: 1.45,
              color: "var(--silver)",
              maxWidth: "640px",
              margin: "26px 0 0",
              borderLeft: "3px solid #00AEEF",
              paddingLeft: "20px",
            }}
          >
            {ind.tagline}
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div style={{ marginTop: "40px" }}>
            <PrimaryLink to="/contact">Schedule Free Assessment</PrimaryLink>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .ind-page-hero { padding: 64px 24px 56px !important; }
        }
      `}</style>
    </section>
  );
}

/* ════════════════ THE PROBLEM ════════════════ */

function AlertIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00AEEF"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      style={{ flexShrink: 0, marginTop: "2px" }}
    >
      <path d="M10.3 3.9 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
      <path d="M12 9v4m0 4h.01" />
    </svg>
  );
}

function ProblemSection({ ind }: { ind: Industry }) {
  return (
    <Section>
      <div
        className="problem-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "56px",
          alignItems: "start",
        }}
      >
        <div>
          <SectionHeading
            label="The Problem"
            title="Where the Money Leaks"
            align="left"
          />
          <Reveal delay={0.1}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                color: "var(--mist)",
                lineHeight: 1.8,
                margin: "-24px 0 0",
                maxWidth: "560px",
              }}
            >
              {ind.pain}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {ind.painPoints.map((p) => (
              <li
                key={p}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  background: "#141414",
                  border: "1px solid #1E1E1E",
                  borderRadius: "10px",
                  padding: "18px 20px",
                  marginBottom: "12px",
                }}
              >
                <AlertIcon />
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14.5px",
                    color: "var(--silver)",
                    lineHeight: 1.55,
                  }}
                >
                  {p}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .problem-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </Section>
  );
}

/* ════════════════ THE SOLUTION ════════════════ */

function SolutionSection({ ind }: { ind: Industry }) {
  return (
    <Section bg="#0D0D0D">
      <div
        className="solution-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "56px",
          alignItems: "center",
        }}
      >
        <div>
          <SectionHeading
            label="The Solution"
            title="How Batistack Solves It"
            align="left"
          />
          <Reveal delay={0.1}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                color: "var(--mist)",
                lineHeight: 1.8,
                margin: "-24px 0 0",
                maxWidth: "560px",
              }}
            >
              {ind.solution}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div
            style={{
              textAlign: "center",
              background:
                "radial-gradient(ellipse at 50% 110%, rgba(0,174,239,0.14) 0%, #141414 65%)",
              border: "1px solid rgba(0,174,239,0.35)",
              borderRadius: "16px",
              padding: "clamp(40px, 5vw, 64px) 24px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(56px, 8vw, 88px)",
                lineHeight: 1,
                color: "#00AEEF",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              {ind.stat.value}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--silver)",
                margin: "16px 0 0",
              }}
            >
              {ind.stat.label}
            </p>
          </div>
        </Reveal>
      </div>
      <style>{`
        @media (max-width: 960px) {
          .solution-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </Section>
  );
}

/* ════════════════ AGENT ROSTER ════════════════ */

function AgentRoster({ ind }: { ind: Industry }) {
  return (
    <Section>
      <SectionHeading
        label="The Workforce"
        title={`Your Agent Roster for ${ind.shortName}`}
        sub="Each agent owns one job and runs it 24/7 from the hardware in your office. You command everything from Telegram."
      />
      <div
        className="roster-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          alignItems: "stretch",
        }}
      >
        {ind.keyAgents.map((agent, i) => (
          <Reveal key={agent.name} delay={0.08 * i} style={{ height: "100%" }}>
            <GlowCard accentBorder>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                  marginBottom: "12px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "19px",
                    color: "var(--bone)",
                    margin: 0,
                  }}
                >
                  {agent.name}
                </h3>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#00AEEF",
                    border: "1px solid rgba(0,174,239,0.35)",
                    borderRadius: "100px",
                    padding: "5px 12px",
                  }}
                >
                  <span className="status-dot" />
                  Active
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14.5px",
                  color: "var(--mist)",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {agent.why}
              </p>
            </GlowCard>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <div style={{ textAlign: "center", marginTop: "44px" }}>
          <GhostLink to="/ai-agents">Meet the Full Agent Lineup</GhostLink>
        </div>
      </Reveal>
      <style>{`
        @media (max-width: 960px) {
          .roster-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

/* ════════════════ ALSO SERVING ════════════════ */

function AlsoServing({ current }: { current: Industry }) {
  const idx = INDUSTRIES.findIndex((i) => i.slug === current.slug);
  const siblings = [1, 2, 3].map(
    (offset) => INDUSTRIES[(idx + offset) % INDUSTRIES.length]
  );

  return (
    <Section bg="#0D0D0D" style={{ padding: "72px 0" }}>
      <Reveal>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "11px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#00AEEF",
            textAlign: "center",
            margin: "0 0 28px",
          }}
        >
          Also Serving
        </p>
      </Reveal>
      <div
        className="sibling-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {siblings.map((sib, i) => (
          <Reveal key={sib.slug} delay={0.08 * i} style={{ height: "100%" }}>
            <Link
              to={`/industries/${sib.slug}`}
              className="glow-card"
              data-cursor="cta"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "18px",
                height: "100%",
                background: "#141414",
                border: "1px solid #1E1E1E",
                borderRadius: "12px",
                padding: "24px",
                textDecoration: "none",
                transition:
                  "border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "17px",
                  color: "var(--bone)",
                  lineHeight: 1.3,
                }}
              >
                {sib.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#00AEEF",
                }}
              >
                Explore →
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.25}>
        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <Link
            to="/industries"
            data-cursor="cta"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--silver)",
              textDecoration: "none",
              borderBottom: "1px solid #1E1E1E",
              paddingBottom: "3px",
            }}
          >
            View All Industries
          </Link>
        </div>
      </Reveal>
      <style>{`
        @media (max-width: 960px) {
          .sibling-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}
