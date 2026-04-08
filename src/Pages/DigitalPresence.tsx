import { useTrafficTracker } from "../hook/useTrafficTracker";
import { localBusinessSchema, generatePageMeta } from "../lib/seoSchema";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ─── Platform data ─────────────────────────────────────────────────────────────

const platforms = [
  {
    number: "01",
    name: "Google Business Profile",
    tagline: "Own your local search presence.",
    description:
      "Your Google Business Profile is the first thing customers see when they search for you. We set it up right, optimize every field, and keep it active — so you rank higher and convert more searchers into real customers.",
    features: [
      "Complete profile setup & verification",
      "SEO-optimized business description",
      "Category & attribute strategy",
      "Photo & media curation",
      "Review response templates",
      "Weekly posts & updates",
      "Local SEO integration",
      "Q&A management",
    ],
    tools: ["Google Maps", "Local SEO", "GMB Insights", "Google Analytics"],
    icon: "G",
    iconColor: "#4285F4",
    bg: "var(--void)" as const,
    boxBg: "var(--ash)" as const,
  },
  {
    number: "02",
    name: "Instagram",
    tagline: "Turn followers into customers.",
    description:
      "Instagram is a visual sales engine. We craft a branded presence that stops the scroll — building trust, showcasing your work, and turning profile visits into inquiries.",
    features: [
      "Profile optimization & bio strategy",
      "Branded visual identity system",
      "Content calendar & strategy",
      "Hashtag research & targeting",
      "Story & Reel templates",
      "Bio link optimization",
      "Highlights structure",
      "Engagement growth tactics",
    ],
    tools: ["Instagram", "Meta Business Suite", "Canva", "Analytics"],
    icon: "IG",
    iconColor: "#E1306C",
    bg: "var(--ash)" as const,
    boxBg: "var(--void)" as const,
  },
  {
    number: "03",
    name: "LinkedIn",
    tagline: "Build authority. Generate B2B leads.",
    description:
      "LinkedIn is the boardroom of the internet. We position your business and team as credible experts — so the right decision-makers find you, trust you, and reach out first.",
    features: [
      "Company page setup & optimization",
      "Executive profile enhancement",
      "Thought leadership content plan",
      "Industry keyword positioning",
      "Connection & follower strategy",
      "Lead generation funnel",
      "Analytics & reporting setup",
      "B2B outreach framework",
    ],
    tools: ["LinkedIn", "Sales Navigator", "Content Scheduling", "B2B Analytics"],
    icon: "in",
    iconColor: "#0077B5",
    bg: "var(--void)" as const,
    boxBg: "var(--ash)" as const,
  },
  {
    number: "04",
    name: "X  (Twitter)",
    tagline: "Join the conversation. Build influence.",
    description:
      "X moves fast — and so do opportunities. We build a consistent, on-brand presence that keeps you relevant, grows your audience, and puts you in front of the people who matter.",
    features: [
      "Profile branding & optimization",
      "Voice & tone guidelines",
      "Content strategy & calendar",
      "Thread & long-form strategy",
      "Trend monitoring setup",
      "Audience building tactics",
      "Hashtag & timing strategy",
      "Engagement cadence",
    ],
    tools: ["X / Twitter", "Analytics", "Scheduling Tools", "Social Listening"],
    icon: "X",
    iconColor: "#E7E7E7",
    bg: "var(--ash)" as const,
    boxBg: "var(--void)" as const,
  },
  {
    number: "05",
    name: "Facebook",
    tagline: "Reach your community where they live.",
    description:
      "Facebook still drives real results for local and service businesses. We build and optimize your page, structure your content, and set the foundation for paid and organic reach.",
    features: [
      "Business page setup & optimization",
      "Cover & profile visual design",
      "Content strategy & posting plan",
      "Community management framework",
      "Reviews & messaging setup",
      "Facebook Ads foundation",
      "Custom audience targeting",
      "Meta Business Suite integration",
    ],
    tools: ["Facebook", "Meta Business Suite", "Meta Ads", "Audience Insights"],
    icon: "f",
    iconColor: "#1877F2",
    bg: "var(--void)" as const,
    boxBg: "var(--ash)" as const,
  },
];

// ─── Platform section ──────────────────────────────────────────────────────────

function PlatformSection({
  platform,
  index,
}: {
  platform: (typeof platforms)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section
      style={{
        background: platform.bg,
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
          className="platform-left-col"
        >
          {/* Platform number + icon */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "16px",
              marginBottom: "-10px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "180px",
                lineHeight: 1,
                color: "var(--smoke)",
              }}
            >
              {platform.number}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "40px",
                lineHeight: 1,
                color: platform.iconColor,
                marginBottom: "28px",
                opacity: 0.85,
              }}
            >
              {platform.icon}
            </div>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 3.5vw, 52px)",
              fontWeight: 300,
              color: "var(--bone)",
              lineHeight: 1.1,
              marginBottom: "12px",
            }}
          >
            {platform.name}
          </h2>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "18px",
              color: platform.iconColor,
              marginBottom: "20px",
              opacity: 0.9,
            }}
          >
            {platform.tagline}
          </p>

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
            {platform.description}
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
            GET STARTED →
          </Link>
        </motion.div>

        {/* Right column — What's included box */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ order: isEven ? 1 : 0 }}
          className="platform-right-col"
        >
          <div
            style={{
              border: "1px solid var(--smoke)",
              padding: "40px",
              background: platform.boxBg,
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
              {platform.features.map((feature) => (
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

            {/* Tool pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {platform.tools.map((tool) => (
                <span
                  key={tool}
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
                  {tool}
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

const digitalPresenceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Digital Presence Management",
  provider: {
    "@type": "LocalBusiness",
    name: "Batistack",
    url: "https://batistack.com",
  },
  areaServed: {
    "@type": "City",
    name: "New York City",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Presence Services",
    itemListElement: platforms.map((p) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: p.name,
        description: p.description,
      },
    })),
  },
};

export default function DigitalPresence() {
  useTrafficTracker("page_view", "/digital-presence");

  return (
    <>
      <Helmet>
        {(() => {
          const meta = generatePageMeta(
            "Digital Presence Services NYC | Google, Instagram, LinkedIn & More | Batistack",
            "Complete digital presence management for NYC businesses — Google Business Profile, Instagram, LinkedIn, X, and Facebook. Show up everywhere that matters.",
            "/digital-presence"
          );
          return (
            <>
              <title>{meta.title}</title>
              <meta name="description" content={meta.description} />
              <link rel="canonical" href={meta.canonical} />
              <meta property="og:title" content={meta.ogTitle} />
              <meta property="og:description" content={meta.ogDescription} />
              <meta property="og:url" content={meta.canonical} />
              <meta property="og:image" content={meta.ogImage} />
              <meta property="og:image:width" content="1200" />
              <meta property="og:image:height" content="630" />
              <meta property="og:type" content="website" />
              <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
              <script type="application/ld+json">{JSON.stringify(digitalPresenceSchema)}</script>
            </>
          );
        })()}
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
                DIGITAL PRESENCE
              </p>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(72px, 12vw, 148px)",
                  lineHeight: 0.9,
                  color: "var(--bone)",
                  margin: 0,
                }}
              >
                SHOW UP
                <br />
                EVERY
                <br />
                <span style={{ color: "var(--gold)" }}>WHERE.</span>
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "22px",
                  color: "var(--mist)",
                  maxWidth: "560px",
                  marginTop: "32px",
                  lineHeight: 1.5,
                }}
              >
                From Google search to social feeds — we build and manage the complete digital footprint your business deserves.
              </p>
            </motion.div>

            {/* Platform icons row */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                display: "flex",
                gap: "32px",
                marginTop: "64px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {platforms.map((p) => (
                <div
                  key={p.number}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--mist)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "16px",
                      color: p.iconColor,
                    }}
                  >
                    {p.icon}
                  </span>
                  {p.name}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── INTRO STRIP ──────────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--ash)",
            borderTop: "1px solid var(--smoke)",
            borderBottom: "1px solid var(--smoke)",
            padding: "60px 0",
          }}
        >
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "40px",
              }}
              className="intro-stats-grid"
            >
              {[
                { stat: "5", label: "Platforms Managed" },
                { stat: "100%", label: "Done-For-You Setup" },
                { stat: "1", label: "Unified Strategy" },
              ].map(({ stat, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(48px, 6vw, 80px)",
                      color: "var(--gold)",
                      lineHeight: 1,
                      marginBottom: "8px",
                    }}
                  >
                    {stat}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--mist)",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── PLATFORM SECTIONS ────────────────────────────────────────── */}
        {platforms.map((platform, index) => (
          <PlatformSection key={platform.number} platform={platform} index={index} />
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
                  fontSize: "clamp(52px, 8vw, 80px)",
                  color: "var(--void)",
                  lineHeight: 0.9,
                  marginBottom: "20px",
                }}
              >
                READY TO DOMINATE
                <br />
                YOUR MARKET?
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px",
                  color: "rgba(8,8,8,0.7)",
                  marginBottom: "40px",
                  lineHeight: 1.6,
                  maxWidth: "480px",
                  margin: "0 auto 40px",
                }}
              >
                We handle every platform so you can focus on running your business. One team. Complete coverage.
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
                START TODAY →
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

          .platform-left-col,
          .platform-right-col {
            order: unset !important;
          }

          .intro-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }

        @media (max-width: 768px) {
          section[style*="padding: 120px"] > .section-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </>
  );
}
