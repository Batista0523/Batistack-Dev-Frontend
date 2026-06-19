import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getPostBySlug } from "../data/blogPosts";
import { generatePageMeta, generateArticleSchema } from "../lib/seoSchema";
import { useTrafficTracker } from "../hook/useTrafficTracker";
import { Reveal } from "../components/ui";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useTrafficTracker("page_view", `/blog/${slug ?? ""}`);

  if (!post) {
    return (
      <main
        style={{
          background: "var(--void)",
          color: "var(--bone)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          paddingTop: "72px",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "28px",
            color: "var(--mist)",
          }}
        >
          Post not found.
        </p>
        <Link
          to="/blog"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#00AEEF",
            textDecoration: "none",
          }}
        >
          ← Back to Blog
        </Link>
      </main>
    );
  }

  const meta = generatePageMeta(post.metaTitle, post.description, `/blog/${post.slug}`);
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    date: post.date,
    slug: post.slug,
  });

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
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <main style={{ background: "var(--void)", color: "var(--bone)", minHeight: "100vh", paddingTop: "72px" }}>

        {/* ── Post header ── */}
        <section
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,174,239,0.06) 0%, transparent 55%), #0A0A0A",
            borderBottom: "1px solid #1E1E1E",
            padding: "64px 0 56px",
          }}
        >
          <div className="blog-post-container">
            <Reveal>
              {/* Back link */}
              <Link
                to="/blog"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--mist)",
                  textDecoration: "none",
                  marginBottom: "40px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00AEEF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--mist)")}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="M19 12H5m7-7-7 7 7 7" />
                </svg>
                All Articles
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              {/* Category + read time */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "22px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#00AEEF",
                    border: "1px solid rgba(0,174,239,0.35)",
                    borderRadius: "100px",
                    padding: "4px 12px",
                  }}
                >
                  {post.category}
                </span>
                <span style={{ color: "#1E1E1E", fontSize: "12px" }}>·</span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "var(--mist)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {post.readTime}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              {/* Title */}
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 4.5vw, 52px)",
                  lineHeight: 1.1,
                  color: "var(--bone)",
                  margin: "0 0 28px",
                  letterSpacing: "-0.015em",
                  maxWidth: "820px",
                }}
              >
                {post.title}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              {/* Meta row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "var(--mist)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span style={{ color: "#1E1E1E" }}>·</span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "var(--mist)",
                    letterSpacing: "0.04em",
                  }}
                >
                  Batistack Development Corp
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Blue accent line */}
        <div
          style={{
            height: "2px",
            background:
              "linear-gradient(90deg, #00AEEF 0%, rgba(0,174,239,0.15) 60%, transparent 100%)",
            maxWidth: "760px",
            margin: "0 auto 0 max(60px, calc((100vw - 760px) / 2))",
          }}
        />

        {/* ── Post body ── */}
        <section style={{ padding: "56px 0 72px" }}>
          <div className="blog-post-container">
            <Reveal>
              {post.sections.map((section, i) => (
                <div key={section.heading ?? `section-${i}`} style={{ marginBottom: "40px" }}>
                  {section.heading && (
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: "clamp(20px, 2.2vw, 26px)",
                        color: "#00AEEF",
                        margin: "0 0 18px",
                        lineHeight: 1.25,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs.map((para) => (
                    <p
                      key={para.slice(0, 32)}
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "clamp(15px, 1.4vw, 17px)",
                        fontWeight: 400,
                        lineHeight: 1.85,
                        color: "var(--silver)",
                        margin: "0 0 22px",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── CTA box ── */}
        <section style={{ padding: "0 0 100px" }}>
          <div className="blog-post-container">
            <Reveal>
              <div
                style={{
                  background: "linear-gradient(160deg, rgba(0,174,239,0.08) 0%, #141414 45%)",
                  border: "1px solid rgba(0,174,239,0.4)",
                  borderRadius: "16px",
                  padding: "48px 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(0,174,239,0.12) 0%, transparent 70%)",
                    pointerEvents: "none",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#00AEEF",
                    margin: 0,
                  }}
                >
                  Free Assessment
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(22px, 3vw, 32px)",
                    color: "var(--bone)",
                    margin: 0,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                  }}
                >
                  See which parts of your business an{" "}
                  <span style={{ color: "#00AEEF" }}>AI workforce can run</span>
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "15px",
                    color: "var(--mist)",
                    lineHeight: 1.7,
                    margin: 0,
                    maxWidth: "480px",
                  }}
                >
                  We'll walk through your operation and identify exactly which tasks
                  AI agents can own — lead follow-up, answering calls, billing,
                  scheduling. No obligation. Just clarity.
                </p>
                <Link
                  to="/contact"
                  style={{
                    display: "inline-block",
                    alignSelf: "flex-start",
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#0A0A0A",
                    background: "#00AEEF",
                    padding: "14px 32px",
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Schedule Free Assessment
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <style>{`
        .blog-post-container {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 60px;
        }
        @media (max-width: 768px) {
          .blog-post-container { padding: 0 24px !important; }
        }
      `}</style>
    </>
  );
}
