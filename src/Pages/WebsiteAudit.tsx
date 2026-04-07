import { useState, useRef } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { localBusinessSchema, generatePageMeta } from "../lib/seoSchema";
import { motion } from "framer-motion";
import { useTrafficTracker } from "../hook/useTrafficTracker";

// ─── Preserved logic helpers ──────────────────────────────────────────────────
// TEMPORARY MAINTENANCE FLAG:
// Keep the audit logic intact, but disable user-triggered audit actions in the UI for now.
const workAuditMaintenance = true;

function WebsiteAudit() {
  useTrafficTracker("page_view", "/speedPage");

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recommendation, setRecommendation] = useState<string[]>([]);
  const [scores, setScores] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);
  const url1 = import.meta.env.VITE_BASE_URL;
  const [inputFocused, setInputFocused] = useState(false);

  // ── Preserved exactly ──────────────────────────────────────────────────────
  const getScore = (scoresObj: any, label: string): number => {
    if (!scoresObj) return 0;

    const direct = scoresObj[label];
    if (typeof direct === "number") return direct;
    if (typeof direct === "string") {
      const num = parseInt(direct, 10);
      if (!isNaN(num)) return num;
    }

    if (label === "Best Practices") {
      const altKeys = ["BestPractices"];
      for (const key of altKeys) {
        const val = scoresObj[key];
        if (typeof val === "number") return val;
        if (typeof val === "string") {
          const num = parseInt(val, 10);
          if (!isNaN(num)) return num;
        }
      }
    }

    return 0;
  };

  const handleAnalyze = async () => {
    // Temporary maintenance guard so no API request can be triggered while disabled.
    if (workAuditMaintenance) return;

    setLoading(true);
    setError("");
    setRecommendation([]);
    setScores(null);
    setProgress(0);

    let progressValue = 0;
    const interval = window.setInterval(() => {
      progressValue += 1;
      if (progressValue <= 100) {
        setProgress(progressValue);
      } else {
        window.clearInterval(interval);
      }
    }, 600);

    try {
      const res = await axios.post(`${url1}/pagespeed`, { domain: url });
      const { recommendations, scores } = res.data;
      setScores(scores);
      // Handle both string and array responses
      if (Array.isArray(recommendations)) {
        setRecommendation(recommendations);
      } else if (typeof recommendations === "string") {
        setRecommendation(
          recommendations
            .split("\n")
            .map((l: string) => l.trim())
            .filter(Boolean)
        );
      }

      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      window.clearInterval(interval);
    }
  };
  // ── End preserved ──────────────────────────────────────────────────────────

  const scoreColor = (n: number) => {
    if (n >= 90) return "var(--gold)";
    if (n >= 50) return "#e8a04a";
    return "#e05c5c";
  };

  const scoreLabel = (n: number) => {
    if (n >= 90) return "EXCELLENT";
    if (n >= 50) return "NEEDS WORK";
    return "CRITICAL";
  };

  const scoreCategories = ["Performance", "Accessibility", "SEO", "Best Practices"];

  // Extract domain name for display
  const displayDomain = (() => {
    try {
      return new URL(url).hostname;
    } catch {
      return url;
    }
  })();

  return (
    <>
      <Helmet>
        {(() => {
          const meta = generatePageMeta(
            "Free Website Speed & AI Audit | Batistack",
            "Test your website speed and get a free AI-powered audit. Find performance issues, SEO gaps, and conversion opportunities instantly.",
            "/speedPage"
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
            </>
          );
        })()}
      </Helmet>

      <style>{`
        .bs-audit-input::placeholder { color: var(--mist); }
        .bs-audit-input:focus { outline: none; border-color: var(--gold) !important; }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }

        @media (max-width: 768px) {
          .bs-audit-scores-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .bs-audit-container {
            padding: 0 24px !important;
          }
        }
      `}</style>

      <div
        style={{
          background: "var(--void)",
          color: "var(--bone)",
          minHeight: "100vh",
          paddingTop: "120px",
        }}
      >
        {/* ── HERO / INPUT ──────────────────────────────────────────────── */}
        <section style={{ paddingBottom: "80px" }}>
          <div className="bs-audit-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
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
                FREE TOOL
              </p>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(60px, 10vw, 120px)",
                  lineHeight: 0.9,
                  color: "var(--bone)",
                  margin: "0 0 24px",
                }}
              >
                FREE WEBSITE
                <br />
                AUDIT.
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "20px",
                  color: "var(--mist)",
                  marginBottom: "60px",
                  lineHeight: 1.5,
                }}
              >
                See exactly why you're losing customers to competitors.
              </p>

              {/* Input form */}
              <div style={{ maxWidth: "640px" }}>
                {workAuditMaintenance ? (
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "16px",
                      color: "var(--mist)",
                      marginTop: "8px",
                      border: "1px solid var(--smoke)",
                      background: "var(--ash)",
                      padding: "18px 20px",
                    }}
                  >
                    This feature is currently under maintenance. Please check back soon.
                  </p>
                ) : (
                  <>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (!loading && url) handleAnalyze();
                      }}
                    >
                      <input
                        type="url"
                        placeholder="yourdomain.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        className="bs-audit-input"
                        onFocus={() => setInputFocused(true)}
                        onBlur={() => setInputFocused(false)}
                        style={{
                          width: "100%",
                          background: "var(--ash)",
                          border: `1px solid ${inputFocused ? "var(--gold)" : "var(--smoke)"}`,
                          padding: "20px 24px",
                          fontFamily: "var(--font-sans)",
                          fontSize: "16px",
                          color: "var(--bone)",
                          borderRadius: 0,
                          outline: "none",
                          transition: "border-color 0.2s",
                          boxSizing: "border-box",
                          display: "block",
                        }}
                      />

                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          display: "block",
                          width: "100%",
                          marginTop: "12px",
                          fontFamily: "var(--font-display)",
                          fontSize: "20px",
                          letterSpacing: "0.05em",
                          background: "var(--gold)",
                          color: "var(--void)",
                          padding: "18px",
                          border: "none",
                          cursor: loading ? "not-allowed" : "pointer",
                          opacity: loading ? 0.8 : 1,
                          transition: "opacity 0.2s",
                        }}
                      >
                        {loading ? "ANALYZING..." : "ANALYZE MY SITE →"}
                      </button>
                    </form>

                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "12px",
                        color: "var(--mist)",
                        marginTop: "12px",
                      }}
                    >
                      Takes 15–30 seconds. No signup required.
                    </p>

                    {error && (
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "13px",
                          color: "#e05c5c",
                          marginTop: "12px",
                        }}
                      >
                        {error}
                      </p>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── LOADING STATE ─────────────────────────────────────────────── */}
        {!workAuditMaintenance && loading && (
          <section style={{ paddingBottom: "80px" }}>
            <div
              className="bs-audit-container"
              style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px", textAlign: "center" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(40px, 6vw, 80px)",
                  color: "var(--gold)",
                  marginBottom: "16px",
                  lineHeight: 1,
                }}
              >
                ANALYZING...
              </p>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  color: "var(--mist)",
                  marginBottom: "32px",
                }}
              >
                Running Lighthouse audit via Google PageSpeed API...
              </p>
              {/* Shimmer bar */}
              <div
                style={{
                  width: "300px",
                  height: "2px",
                  background: "var(--smoke)",
                  margin: "0 auto",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "60px",
                    height: "100%",
                    background: "var(--gold)",
                    animation: "shimmer 1.5s ease-in-out infinite",
                  }}
                />
              </div>
              {/* Progress bar */}
              <div
                style={{
                  width: "300px",
                  height: "2px",
                  background: "var(--smoke)",
                  margin: "12px auto 0",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: "var(--gold)",
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
            </div>
          </section>
        )}

        {/* ── SCORE CARDS ───────────────────────────────────────────────── */}
        {!workAuditMaintenance && !loading && scores && (
          <section ref={resultRef} style={{ paddingBottom: "80px" }}>
            <div
              className="bs-audit-container"
              style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "32px",
                }}
              >
                AUDIT RESULTS FOR {displayDomain}
              </p>

              <div
                className="bs-audit-scores-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "1px",
                  background: "var(--smoke)",
                }}
              >
                {scoreCategories.map((label) => {
                  const n = getScore(scores, label);
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5 }}
                      style={{
                        background: "var(--ash)",
                        padding: "40px 32px",
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "10px",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "var(--mist)",
                          marginBottom: "16px",
                        }}
                      >
                        {label}
                      </p>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "80px",
                          lineHeight: 1,
                          color: scoreColor(n),
                          marginBottom: "12px",
                        }}
                      >
                        {n}
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "11px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: scoreColor(n),
                          margin: 0,
                        }}
                      >
                        {scoreLabel(n)}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── AI RECOMMENDATIONS ────────────────────────────────────────── */}
        {!workAuditMaintenance && recommendation.length > 0 && (
          <section style={{ paddingBottom: "120px" }}>
            <div
              className="bs-audit-container"
              style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}
            >
              <div
                style={{
                  background: "var(--ash)",
                  border: "1px solid var(--smoke)",
                  padding: "40px",
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "32px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--gold)",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      margin: 0,
                    }}
                  >
                    AI RECOMMENDATIONS
                  </p>
                </div>

                {/* Recommendation lines */}
                {recommendation.map((line, idx) => (
                  <div
                    key={idx}
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "14px",
                      color: "var(--bone)",
                      padding: "16px 0",
                      borderBottom: idx < recommendation.length - 1 ? "1px solid var(--smoke)" : "none",
                      lineHeight: 1.6,
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <span style={{ color: "var(--gold-dim)", flexShrink: 0 }}>&gt;</span>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}

export default WebsiteAudit;
