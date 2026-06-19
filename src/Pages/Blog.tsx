import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "../data/blogPosts";
import { generatePageMeta, localBusinessSchema, generateBlogIndexSchema } from "../lib/seoSchema";
import { useTrafficTracker } from "../hook/useTrafficTracker";
import { Reveal, GlowCard } from "../components/ui";

export default function Blog() {
  useTrafficTracker("page_view", "/blog");

  const meta = generatePageMeta(
    "AI & Automation Blog for NYC Businesses | Batistack",
    "Insights on AI agents, automation, and growing your NYC business with technology that works 24/7.",
    "/blog"
  );
  const blogSchema = generateBlogIndexSchema(blogPosts);

  return (
    <>
      <Helmet>
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
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </Helmet>

      <main style={{ background: "var(--void)", paddingTop: "72px" }}>

        {/* ── Hero ── */}
        <section
          style={{
            position: "relative",
            overflow: "hidden",
            background:
              "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(0,174,239,0.07) 0%, transparent 60%), #0A0A0A",
            borderBottom: "1px solid #1E1E1E",
            padding: "80px 0 72px",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(0,174,239,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,174,239,0.03) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 90% at 50% 0%, black 20%, transparent 75%)",
            }}
          />
          <div
            className="section-container"
            style={{ position: "relative", textAlign: "center" }}
          >
            <Reveal>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  border: "1px solid rgba(0,174,239,0.4)",
                  borderRadius: "100px",
                  padding: "7px 16px",
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
                Intelligence Report — NYC
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(34px, 5vw, 58px)",
                  lineHeight: 1.08,
                  color: "var(--bone)",
                  margin: "24px auto 0",
                  maxWidth: "720px",
                  letterSpacing: "-0.015em",
                }}
              >
                AI, Automation &{" "}
                <span style={{ color: "#00AEEF" }}>Business Growth</span>
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
                Practical insights on AI agents, automation, and growing your
                NYC business with technology that works 24/7.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Post grid ── */}
        <section style={{ padding: "80px 0 120px" }}>
          <div className="section-container">
            <div
              className="blog-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "24px",
                alignItems: "start",
              }}
            >
              {blogPosts.map((post, i) => (
                <Reveal key={post.slug} delay={0.07 * (i % 3)}>
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{ textDecoration: "none", display: "block", height: "100%" }}
                  >
                    <GlowCard
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        cursor: "pointer",
                      }}
                    >
                      {/* Category pill */}
                      <div style={{ marginBottom: "18px" }}>
                        <span
                          style={{
                            display: "inline-block",
                            fontFamily: "var(--font-sans)",
                            fontWeight: 700,
                            fontSize: "10px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#00AEEF",
                            border: "1px solid rgba(0,174,239,0.3)",
                            borderRadius: "100px",
                            padding: "4px 12px",
                          }}
                        >
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 800,
                          fontSize: "clamp(18px, 1.6vw, 22px)",
                          lineHeight: 1.25,
                          color: "var(--bone)",
                          margin: "0 0 14px",
                        }}
                      >
                        {post.title}
                      </h2>

                      {/* Description */}
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "14px",
                          color: "var(--mist)",
                          lineHeight: 1.75,
                          margin: "0 0 24px",
                          flex: 1,
                        }}
                      >
                        {post.description}
                      </p>

                      {/* Footer row */}
                      <div
                        style={{
                          borderTop: "1px solid #1E1E1E",
                          paddingTop: "16px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "12px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "11px",
                            color: "var(--mist)",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {post.readTime} ·{" "}
                          {new Date(post.date + "T12:00:00").toLocaleDateString(
                            "en-US",
                            { month: "short", year: "numeric" }
                          )}
                        </span>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "6px",
                            fontFamily: "var(--font-sans)",
                            fontWeight: 700,
                            fontSize: "11px",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#00AEEF",
                            flexShrink: 0,
                          }}
                        >
                          Read
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden
                          >
                            <path d="M5 12h14m-7-7 7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </GlowCard>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        @media (max-width: 960px) {
          .blog-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
