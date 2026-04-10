import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { getPostBySlug } from "../data/blogPosts";
import { generatePageMeta, generateArticleSchema } from "../lib/seoSchema";
import { useTrafficTracker } from "../hook/useTrafficTracker";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useTrafficTracker("page_view", `/blog/${slug ?? ""}`);

  if (!post) {
    return (
      <div
        style={{
          background: "var(--void)",
          color: "var(--bone)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "24px",
          paddingTop: "80px",
        }}
      >
        <p style={{ fontFamily: "var(--font-serif)", fontSize: "28px", fontStyle: "italic" }}>
          Post not found.
        </p>
        <Link
          to="/blog"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--gold)",
            textDecoration: "none",
          }}
        >
          ← Back to Blog
        </Link>
      </div>
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

      <div style={{ background: "var(--void)", color: "var(--bone)", minHeight: "100vh" }}>

        {/* ── Post header ── */}
        <section style={{ paddingTop: "160px", paddingBottom: "60px" }}>
          <div className="blog-post-container">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE }}
            >
              {/* Back link */}
              <Link
                to="/blog"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--mist)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "48px",
                  transition: "color 0.2s ease",
                }}
              >
                ← All articles
              </Link>

              {/* Category + read time */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 600,
                  }}
                >
                  {post.category}
                </span>
                <span style={{ color: "var(--smoke)", fontSize: "10px" }}>·</span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "10px",
                    color: "var(--mist)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(32px, 5vw, 64px)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "var(--bone)",
                  margin: "0 0 32px 0",
                  maxWidth: "820px",
                }}
              >
                {post.title}
              </h1>

              {/* Date */}
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  color: "var(--mist)",
                  letterSpacing: "0.08em",
                  margin: 0,
                }}
              >
                {new Date(post.date + "T12:00:00").toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                {" · "}by Batista, Batistack
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gold divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, var(--gold) 0%, transparent 60%)",
            maxWidth: "760px",
            margin: "0 auto 0 max(60px, calc((100vw - 760px) / 2))",
          }}
        />

        {/* ── Post body ── */}
        <section style={{ padding: "60px 0 80px" }}>
          <div className="blog-post-container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            >
              {post.sections.map((section, i) => (
                <div key={section.heading ?? `section-${i}`} style={{ marginBottom: "40px" }}>
                  {section.heading && (
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(20px, 2.5vw, 28px)",
                        fontWeight: 400,
                        color: "var(--gold)",
                        margin: "0 0 20px 0",
                        lineHeight: 1.25,
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
                        fontSize: "clamp(16px, 1.5vw, 18px)",
                        fontWeight: 400,
                        lineHeight: 1.85,
                        color: "var(--bone)",
                        margin: "0 0 24px 0",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA box ── */}
        <section style={{ padding: "0 0 120px" }}>
          <div className="blog-post-container">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              style={{
                border: "1px solid var(--gold)",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  margin: 0,
                  fontWeight: 600,
                }}
              >
                Free offer
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(24px, 3vw, 36px)",
                  fontWeight: 300,
                  color: "var(--bone)",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Get a free AI-powered audit of your <em>website</em>
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "15px",
                  color: "var(--mist)",
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: "480px",
                }}
              >
                Batista will personally review your site and send you a full report covering speed,
                SEO gaps, and conversion opportunities — within 24 hours. No sales call required.
              </p>
              <Link
                to="/speedPage"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--void)",
                  background: "var(--gold)",
                  padding: "14px 32px",
                  textDecoration: "none",
                  display: "inline-block",
                  alignSelf: "flex-start",
                  transition: "opacity 0.2s ease",
                }}
              >
                Get My Free Audit
              </Link>
            </motion.div>
          </div>
        </section>
      </div>

      <style>{`
        .blog-post-container {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 60px;
        }
        @media (max-width: 768px) {
          .blog-post-container {
            padding: 0 24px !important;
          }
        }
      `}</style>
    </>
  );
}
