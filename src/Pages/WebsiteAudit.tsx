import { useState, useRef } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useTrafficTracker } from "../hook/useTrafficTracker";

// ─── Design tokens ────────────────────────────────────────────────────────────
const t = {
  black: "#0a0a0a",
  offWhite: "#f5f3ef",
  cream: "#ede9e1",
  gold: "#c9a84c",
  goldLight: "#e8d5a3",
  gray: "#6b6b6b",
  grayLight: "#d4d0c8",
  fontSerif: "'Cormorant Garamond', Georgia, serif",
  fontSans: "'DM Sans', sans-serif",
};

// ─── URL input with gold underline focus ──────────────────────────────────────
function GoldUrlInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type="url"
      placeholder="https://yourdomain.com"
      value={value}
      onChange={onChange}
      required
      className="bs-audit-placeholder"
      style={{
        width: "100%",
        padding: "14px 0",
        border: "none",
        borderBottom: `1.5px solid ${focused ? t.gold : t.grayLight}`,
        background: "transparent",
        fontFamily: t.fontSans,
        fontSize: 15,
        color: t.black,
        outline: "none",
        transition: "border-color 0.3s",
        display: "block",
        boxSizing: "border-box",
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
function WebsiteAudit() {
  useTrafficTracker("page_view", "/speedPage");

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [scores, setScores] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);
  const url1 = import.meta.env.VITE_BASE_URL;

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
    setLoading(true);
    setError("");
    setRecommendation("");
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
      setRecommendation(recommendations);

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

  const getIconByScore = (score: number) => {
    if (score >= 90) return <FaCheckCircle style={{ color: "#2d7a47", marginRight: 8 }} />;
    if (score >= 70) return <FaExclamationTriangle style={{ color: "#b87333", marginRight: 8 }} />;
    return <FaTimesCircle style={{ color: "#b93333", marginRight: 8 }} />;
  };
  // ── End preserved ──────────────────────────────────────────────────────────

  const scoreRating = (n: number) => {
    if (n >= 90) return "Excellent";
    if (n >= 70) return "Needs Work";
    return "Poor";
  };

  const scoreCategories = ["Performance", "Accessibility", "SEO", "Best Practices"];

  return (
    <>
      <Helmet>
        <title>AI Website Audit & Speed Test | Batistack</title>
        <meta
          name="description"
          content="Run an AI-powered audit of your website's performance, SEO, accessibility, and best practices. Get instant scores and clear recommendations from Batistack."
        />
        <meta
          name="keywords"
          content="website speed test, AI website audit, lighthouse report, SEO audit, accessibility audit, performance optimization, Batistack website analyzer"
        />
        <meta property="og:title" content="AI Website Analyzer | Batistack" />
        <meta
          property="og:description"
          content="Instantly scan your website for speed, SEO, accessibility, and best practices — powered by Google Lighthouse and AI."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://batistack.com/speedPage" />
        <meta
          property="og:image"
          content="https://batistack.com/assets/og-website-audit.jpg"
        />
        <link rel="canonical" href="https://batistack.com/speedPage" />
      </Helmet>

      <style>{`
        .bs-audit-placeholder::placeholder { color: ${t.grayLight}; }
        @media (max-width: 768px) {
          .bs-audit-hero { padding: 120px 28px 60px !important; }
          .bs-audit-scores { grid-template-columns: 1fr !important; }
          .bs-audit-info { grid-template-columns: 1fr !important; padding: 0 28px 80px !important; }
        }
      `}</style>

      <div style={{ background: t.offWhite, color: t.black }}>

        {/* ── SECTION 1: HERO / INPUT ──────────────────────────────────────── */}
        <section
          className="bs-audit-hero"
          style={{ padding: "160px 60px 80px", background: t.offWhite }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Section label */}
              <p
                style={{
                  fontFamily: t.fontSans,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: t.gold,
                  marginBottom: 24,
                }}
              >
                Free Website Audit
              </p>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: t.fontSerif,
                  fontSize: "clamp(48px, 5vw, 80px)",
                  fontWeight: 300,
                  lineHeight: 1.05,
                  color: t.black,
                  margin: "0 0 24px",
                }}
              >
                See how your
                <br />
                website <em>really</em>
                <br />
                performs.
              </h1>

              {/* Subtext */}
              <p
                style={{
                  fontFamily: t.fontSans,
                  fontSize: 16,
                  color: t.gray,
                  maxWidth: 520,
                  lineHeight: 1.8,
                  margin: "0 0 48px",
                }}
              >
                Run a full audit powered by Google Lighthouse + Batistack AI.
                Get scores for Performance, Accessibility, SEO, and Best
                Practices — plus AI-generated recommendations.
              </p>

              {/* URL input area */}
              <div style={{ maxWidth: 600 }}>
                <label
                  style={{
                    display: "block",
                    fontFamily: t.fontSans,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: t.gold,
                    marginBottom: 10,
                  }}
                >
                  Enter your website URL
                </label>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!loading && url) handleAnalyze();
                  }}
                >
                  <GoldUrlInput
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />

                  <button
                    type="submit"
                    disabled={loading || !url.startsWith("http")}
                    style={{
                      marginTop: 20,
                      width: "100%",
                      padding: "18px 0",
                      background:
                        loading || !url.startsWith("http") ? t.gray : t.black,
                      color: "#ffffff",
                      border: "none",
                      fontFamily: t.fontSans,
                      fontSize: 12,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      cursor:
                        loading || !url.startsWith("http")
                          ? "not-allowed"
                          : "pointer",
                      transition: "background 0.3s",
                    }}
                  >
                    {loading ? "Analyzing..." : "Run Audit \u2192"}
                  </button>
                </form>

                {error && (
                  <p
                    style={{
                      fontFamily: t.fontSans,
                      fontSize: 13,
                      color: "#b93333",
                      marginTop: 12,
                    }}
                  >
                    {error}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── SECTION 2: LOADING BAR ──────────────────────────────────────── */}
        {loading && (
          <section style={{ padding: "0 60px 40px" }}>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              <div
                style={{
                  height: 2,
                  background: t.grayLight,
                  overflow: "hidden",
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: t.gold,
                    transition: "width 0.5s ease",
                  }}
                />
              </div>
              <p
                style={{
                  fontFamily: t.fontSans,
                  fontSize: 14,
                  color: t.gray,
                  textAlign: "center",
                }}
              >
                Running full audit…
              </p>
            </div>
          </section>
        )}

        {/* ── SECTION 3: RESULTS ──────────────────────────────────────────── */}
        {!loading && scores && (
          <section
            ref={resultRef}
            style={{ padding: "0 60px 80px" }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <h2
                style={{
                  fontFamily: t.fontSerif,
                  fontSize: "clamp(32px, 3vw, 48px)",
                  fontWeight: 300,
                  color: t.black,
                  marginBottom: 48,
                }}
              >
                Your Audit Results
              </h2>

              <div
                className="bs-audit-scores"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 24,
                }}
              >
                {scoreCategories.map((label) => {
                  const numeric = getScore(scores, label);
                  return (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      style={{
                        padding: 40,
                        background: t.cream,
                        border: `1px solid ${t.grayLight}`,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: t.fontSans,
                          fontSize: 10,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: t.gold,
                          margin: "0 0 12px",
                        }}
                      >
                        {label}
                      </p>

                      <p
                        style={{
                          fontFamily: t.fontSerif,
                          fontSize: 64,
                          fontWeight: 300,
                          color: t.gold,
                          margin: "0 0 16px",
                          lineHeight: 1,
                        }}
                      >
                        {numeric}
                      </p>

                      {/* thin progress bar */}
                      <div
                        style={{
                          height: 2,
                          background: t.grayLight,
                          marginBottom: 12,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${numeric}%`,
                            background: t.gold,
                          }}
                        />
                      </div>

                      <p
                        style={{
                          fontFamily: t.fontSans,
                          fontSize: 13,
                          color: t.gray,
                          margin: 0,
                        }}
                      >
                        {scoreRating(numeric)}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── SECTION 4: AI RECOMMENDATIONS ───────────────────────────────── */}
        {recommendation && (
          <section
            style={{
              padding: "0 60px 80px",
              borderTop: `1px solid ${t.grayLight}`,
              paddingTop: 60,
              marginTop: 0,
            }}
          >
            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
              <p
                style={{
                  fontFamily: t.fontSans,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: t.gold,
                  marginBottom: 12,
                }}
              >
                AI Analysis
              </p>

              <h2
                style={{
                  fontFamily: t.fontSerif,
                  fontSize: "clamp(28px, 3vw, 44px)",
                  fontWeight: 300,
                  color: t.black,
                  marginBottom: 40,
                }}
              >
                Recommendations
              </h2>

              {recommendation.split("\n").map((line, idx) => {
                if (!line.trim()) return null;

                // Determine score icon (preserved logic)
                const lower = line.toLowerCase().trim();
                let score: number | null = null;
                if (lower.includes("performance")) {
                  score = scores ? getScore(scores, "Performance") : null;
                } else if (lower.includes("accessibility")) {
                  score = scores ? getScore(scores, "Accessibility") : null;
                } else if (lower.includes("seo")) {
                  score = scores ? getScore(scores, "SEO") : null;
                } else if (lower.includes("best")) {
                  score = scores ? getScore(scores, "Best Practices") : null;
                }
                const hideIcon = lower.includes("batistack");

                return (
                  <p
                    key={idx}
                    style={{
                      fontFamily: t.fontSans,
                      fontSize: 14,
                      color: t.gray,
                      lineHeight: 1.8,
                      borderLeft: `2px solid ${t.goldLight}`,
                      paddingLeft: 16,
                      marginBottom: 12,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {!hideIcon && score !== null && getIconByScore(score)}
                    {line}
                  </p>
                );
              })}
            </div>
          </section>
        )}

        {/* ── SECTION 5: INFO CARDS ────────────────────────────────────────── */}
        <section
          className="bs-audit-info"
          style={{ padding: "0 60px 120px" }}
        >
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
              }}
            >
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  padding: "48px 40px",
                  background: t.cream,
                  borderLeft: `3px solid ${t.gold}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: t.fontSerif,
                    fontSize: 24,
                    fontWeight: 400,
                    color: t.black,
                    marginBottom: 24,
                  }}
                >
                  Why audit your website?
                </h3>
                <ul
                  style={{
                    paddingLeft: 18,
                    margin: 0,
                    fontFamily: t.fontSans,
                    fontSize: 14,
                    color: t.gray,
                    lineHeight: 1.8,
                  }}
                >
                  <li>Improve load speed and user experience.</li>
                  <li>Fix SEO issues that block traffic.</li>
                  <li>Make your site accessible to more users.</li>
                  <li>Build trust with modern best practices.</li>
                </ul>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{
                  padding: "48px 40px",
                  background: t.cream,
                  borderLeft: `3px solid ${t.gold}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: t.fontSerif,
                    fontSize: 24,
                    fontWeight: 400,
                    color: t.black,
                    marginBottom: 24,
                  }}
                >
                  How Batistack can help
                </h3>
                <ul
                  style={{
                    paddingLeft: 18,
                    margin: 0,
                    fontFamily: t.fontSans,
                    fontSize: 14,
                    color: t.gray,
                    lineHeight: 1.8,
                  }}
                >
                  <li>Custom optimization & redesign.</li>
                  <li>AI chat + voice assistants for more leads.</li>
                  <li>Analytics dashboards to track growth.</li>
                  <li>Ongoing support and maintenance.</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default WebsiteAudit;
