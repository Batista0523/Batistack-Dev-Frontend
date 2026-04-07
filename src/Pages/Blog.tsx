import { useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { blogPosts } from "../data/blogPosts";
import { generatePageMeta, localBusinessSchema, generateBlogIndexSchema } from "../lib/seoSchema";
import { useTrafficTracker } from "../hook/useTrafficTracker";

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export default function Blog() {
  useTrafficTracker("page_view", "/blog");

  const meta = generatePageMeta(
    "Web Design & AI Blog for NYC Businesses | Batistack",
    "Tips, guides, and insights on web design, AI chatbots, and growing your NYC business online.",
    "/blog"
  );
  const blogSchema = generateBlogIndexSchema(blogPosts);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

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

      <div style={{ background: "var(--void)", color: "var(--bone)", minHeight: "100vh" }}>

        {/* ── Header ── */}
        <section style={{ paddingTop: "160px", paddingBottom: "80px" }}>
          <div className="section-container">
            <motion.div
              ref={headerRef}
              initial={{ opacity: 0, y: 32 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 500,
                  marginBottom: "20px",
                }}
              >
                Insights
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(40px, 6vw, 80px)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: "var(--bone)",
                  margin: "0 0 24px 0",
                }}
              >
                Built for NYC.<br />
                <em>Written for growth.</em>
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "16px",
                  color: "var(--mist)",
                  lineHeight: 1.7,
                  maxWidth: "520px",
                  margin: 0,
                }}
              >
                Web design, AI, and conversion strategy for NYC small businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gold divider */}
        <div style={{ height: "1px", background: "var(--smoke)", margin: "0 60px" }} />

        {/* ── Post grid ── */}
        <section style={{ padding: "80px 0 140px" }}>
          <div className="section-container">
            <div
              ref={gridRef}
              className="blog-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2px",
              }}
            >
              {blogPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 40 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                  style={{
                    borderLeft: "1px solid var(--smoke)",
                    padding: "40px 40px 48px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                  }}
                >
                  {/* Category + date */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "20px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "9px",
                        letterSpacing: "0.18em",
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
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(20px, 2vw, 26px)",
                      fontWeight: 300,
                      lineHeight: 1.25,
                      color: "var(--bone)",
                      margin: "0 0 16px 0",
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
                      lineHeight: 1.7,
                      margin: "0 0 32px 0",
                      flex: 1,
                    }}
                  >
                    {post.description}
                  </p>

                  {/* Read link */}
                  <Link
                    to={`/blog/${post.slug}`}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      transition: "gap 0.2s ease",
                    }}
                  >
                    Read article <span style={{ fontSize: "14px" }}>→</span>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 1100px) and (min-width: 901px) {
          .blog-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
