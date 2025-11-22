import { useState, useRef } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
  Alert,
  ProgressBar,
} from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { BsSpeedometer2 } from "react-icons/bs";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useTrafficTracker } from "../hook/useTrafficTracker";

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

 
  const getScore = (scoresObj: any, label: string): number => {
    if (!scoresObj) return 0;

 
    const direct = scoresObj[label];
    if (typeof direct === "number") return direct;
    if (typeof direct === "string") {
      const num = parseInt(direct, 10);
      if (!isNaN(num)) return num;
    }


    if (label === "Best Practices") {
      const altKeys = [
        "BestPractices",
      ];

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

  const getProgressVariant = (score: number) => {
    if (score >= 90) return "success";
    if (score >= 70) return "warning";
    return "danger";
  };

  const getIconByScore = (score: number) => {
    if (score >= 90) return <FaCheckCircle className="me-2 text-success" />;
    if (score >= 70)
      return <FaExclamationTriangle className="me-2 text-warning" />;
    return <FaTimesCircle className="me-2 text-danger" />;
  };

  const renderProgressCard = (label: string, Icon: any) => {
    const numeric = getScore(scores, label);

    return (
      <Col md={6} className="mb-4">
        <motion.div
          className="h-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            padding: 22,
            borderRadius: 22,
            background: "rgba(15,23,42,0.68)",
            border: "1px solid rgba(148,163,184,0.45)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 22px 60px rgba(0,0,0,0.9)",
          }}
        >
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="fw-bold d-flex align-items-center gap-2 fs-5">
              <Icon /> {label}
            </div>

            <span
              className={`fw-bold fs-6 ${
                numeric >= 90
                  ? "text-success"
                  : numeric >= 70
                  ? "text-warning"
                  : "text-danger"
              }`}
            >
              {numeric}%
            </span>
          </div>

          <ProgressBar
            now={numeric}
            variant={getProgressVariant(numeric)}
            animated
            striped
            style={{
              height: "1.35rem",
              borderRadius: "999px",
              overflow: "hidden",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(148,163,184,0.35)",
              boxShadow: "inset 0 0 22px rgba(255,255,255,0.15)",
            }}
          />
        </motion.div>
      </Col>
    );
  };

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

      <div
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top, #020617 0, #020617 45%, #000 100%)",
          color: "#f9fafb",
        }}
      >
        {/* HERO / SCAN SECTION */}
        <section
          style={{
            position: "relative",
            padding: "7rem 0 4.5rem",
            overflow: "hidden",
          }}
        >
          {/* Glow background */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 15%, rgba(56,189,248,0.2), transparent 65%), radial-gradient(circle at 80% 85%, rgba(52,211,153,0.2), transparent 65%)",
              filter: "blur(70px)",
              opacity: 0.7,
              pointerEvents: "none",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Falling light lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: 2,
                height: 120 + Math.random() * 120,
                background:
                  "linear-gradient(to bottom, rgba(148,163,184,0.3), transparent)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.5,
              }}
              animate={{
                y: [20, -40, 20],
                opacity: [0.1, 0.7, 0.2],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}

          <Container style={{ position: "relative", zIndex: 10 }}>
            <Row className="align-items-center gy-5">
              {/* LEFT: copy + form */}
              <Col md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <p
                    style={{
                      fontSize: "0.85rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#38bdf8",
                      marginBottom: 12,
                    }}
                  >
                    AI Website Diagnostic
                  </p>

                  <h1
                    className="fw-bold mb-3"
                    style={{
                      fontSize: "clamp(2.3rem, 4vw, 3.4rem)",
                      lineHeight: 1.15,
                    }}
                  >
                    Scan your website like a{" "}
                    <span
                      style={{
                        background:
                          "linear-gradient(120deg,#e5e7eb 0%,#f9fafb 40%,#38bdf8 100%)",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                      }}
                    >
                      performance lab
                    </span>
                    .
                  </h1>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      color: "#cbd5e1",
                      maxWidth: 520,
                      lineHeight: 1.8,
                    }}
                  >
                    Run a full audit of your site’s speed, SEO, accessibility,
                    and best practices — powered by Google Lighthouse and
                    Batistack AI. No more guessing what’s wrong or where to
                    start.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{ marginTop: 28 }}
                >
                  <Form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!loading && url) handleAnalyze();
                    }}
                  >
                    <Form.Group controlId="formUrl" className="mb-3">
                      <Form.Label
                        style={{
                          fontSize: "0.9rem",
                          color: "#e5e7eb",
                          marginBottom: 8,
                        }}
                      >
                        Enter your website URL
                      </Form.Label>

                      <div className="d-flex flex-column flex-md-row gap-2">
                        <Form.Control
                          className="input-white-placeholder"
                          type="url"
                          placeholder="https://yourdomain.com"
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          required
                          style={{
                            background: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "999px",
                            border: "1px solid rgba(148,163,184,0.35)",
                            color: "#ffffff",
                            padding: "0.85rem 1.2rem",
                            backdropFilter: "blur(14px)",
                            WebkitBackdropFilter: "blur(14px)",
                            boxShadow:
                              "0 0 0 1px rgba(255,255,255,0.07), inset 0 0 12px rgba(255,255,255,0.12)",
                            fontSize: "1rem",
                            transition: "all .25s ease",
                          }}
                          onFocus={(e) => {
                            e.target.style.border =
                              "1px solid rgba(56,189,248,0.75)";
                            e.target.style.boxShadow =
                              "0 0 16px rgba(56,189,248,0.35), inset 0 0 16px rgba(255,255,255,0.18)";
                          }}
                          onBlur={(e) => {
                            e.target.style.border =
                              "1px solid rgba(148,163,184,0.35)";
                            e.target.style.boxShadow =
                              "0 0 0 1px rgba(255,255,255,0.07), inset 0 0 12px rgba(255,255,255,0.12)";
                          }}
                        />

                        <Button
                          type="submit"
                          disabled={loading || !url.startsWith("http")}
                          style={{
                            whiteSpace: "nowrap",
                            borderRadius: 999,
                            padding: "0.7rem 1.5rem",
                            border: "1px solid rgba(248,250,252,0.85)",
                            background:
                              "linear-gradient(135deg, rgba(248,250,252,0.22), rgba(148,163,184,0.28))",
                            color: "#f9fafb",
                            fontWeight: 600,
                            letterSpacing: "0.03em",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          {loading ? "Analyzing..." : "Run Audit"}
                        </Button>
                      </div>

                      <Form.Text
                        style={{ color: "#9ca3af", fontSize: "0.8rem" }}
                      >
                        We use Google Lighthouse + AI to generate insights.
                      </Form.Text>
                    </Form.Group>
                  </Form>

                  {error && (
                    <Alert
                      variant="danger"
                      className="mt-3"
                      style={{
                        background: "rgba(127,29,29,0.9)",
                        borderColor: "rgba(248,113,113,0.6)",
                        color: "#fee2e2",
                      }}
                    >
                      {error}
                    </Alert>
                  )}

                  <p
                    style={{
                      marginTop: 12,
                      fontSize: "0.78rem",
                      color: "#9ca3af",
                      maxWidth: 460,
                    }}
                  >
                    Promotional emails and cold pitches are filtered out
                    automatically — this tool is for real website owners looking
                    to improve their site.
                  </p>
                </motion.div>
              </Col>

              {/* RIGHT: radar / live widget */}
              <Col md={6} className="mt-4 mt-md-0">
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                  style={{
                    position: "relative",
                    padding: 26,
                    borderRadius: 28,
                    background: "rgba(15,23,42,0.96)",
                    border: "1px solid rgba(148,163,184,0.75)",
                    boxShadow: "0 26px 70px rgba(0,0,0,0.95)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at 30% 0%, rgba(56,189,248,0.18), transparent 55%), radial-gradient(circle at 80% 100%, rgba(22,163,74,0.22), transparent 55%)",
                      opacity: 0.9,
                      pointerEvents: "none",
                    }}
                  />

                  <div style={{ position: "relative", zIndex: 5 }}>
                    <div
                      className="d-flex align-items-center justify-content-between mb-3"
                      style={{ color: "#e5e7eb" }}
                    >
                      <div style={{ fontSize: "0.85rem", opacity: 0.8 }}>
                        Scan Mode
                      </div>

                      <div
                        style={{
                          fontSize: "0.8rem",
                          padding: "4px 10px",
                          borderRadius: 999,
                          background: "rgba(15,23,42,0.85)",
                          border: "1px solid rgba(148,163,184,0.8)",
                        }}
                      >
                        Live · AI Assisted
                      </div>
                    </div>

                    <div
                      style={{
                        position: "relative",
                        margin: "1rem auto 0",
                        width: 230,
                        height: 230,
                        borderRadius: "50%",
                        border: "1px solid rgba(148,163,184,0.7)",
                        background:
                          "radial-gradient(circle, rgba(15,23,42,0.9), rgba(15,23,42,0.98))",
                        boxShadow:
                          "0 0 0 1px rgba(15,23,42,1), 0 0 45px rgba(56,189,248,0.25)",
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        style={{
                          position: "absolute",
                          inset: "12%",
                          borderRadius: "50%",
                          border: "1px dashed rgba(148,163,184,0.6)",
                        }}
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 18,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <motion.div
                        style={{
                          position: "absolute",
                          inset: "25%",
                          borderRadius: "50%",
                          border: "1px solid rgba(56,189,248,0.35)",
                          boxShadow: "0 0 20px rgba(56,189,248,0.3)",
                        }}
                        animate={{ rotate: [360, 0] }}
                        transition={{
                          duration: 22,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <motion.div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "conic-gradient(from 0deg, rgba(56,189,248,0.2), transparent 40%, rgba(34,197,94,0.25), transparent 80%, rgba(56,189,248,0.2))",
                          mixBlendMode: "screen",
                        }}
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 14,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <motion.div
                        style={{
                          position: "absolute",
                          top: "5%",
                          left: "50%",
                          width: "2px",
                          height: "90%",
                          background:
                            "linear-gradient(to bottom, rgba(248,250,252,0.85), transparent)",
                        }}
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <div
                        style={{
                          position: "absolute",
                          inset: "35%",
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle, rgba(15,23,42,0.9), rgba(15,23,42,1))",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#e5e7eb",
                          fontSize: "0.9rem",
                          textAlign: "center",
                          padding: "0 10px",
                        }}
                      >
                        {loading ? "Scanning..." : "Ready to analyze"}
                      </div>
                    </div>

                    <div
                      className="mt-4"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: 10,
                        fontSize: "0.75rem",
                        color: "#e5e7eb",
                      }}
                    >
                      {[
                        "Performance",
                        "Accessibility",
                        "SEO",
                        "Best Practices",
                      ].map((label) => (
                        <div
                          key={label}
                          style={{
                            padding: "8px 10px",
                            borderRadius: 999,
                            background: "rgba(15,23,42,0.9)",
                            border: "1px solid rgba(148,163,184,0.7)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 8,
                          }}
                        >
                          <span
                            style={{
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              fontSize: "0.68rem",
                              color: "#9ca3af",
                            }}
                          >
                            {label}
                          </span>

                          <span
                            style={{
                              fontVariantNumeric: "tabular-nums",
                              fontWeight: 600,
                            }}
                          >
                            {scores ? `${getScore(scores, label)}%` : "--"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* LOADING BAR */}
        <section className="pb-5">
          <Container>
            {loading && (
              <div className="text-center my-4">
                <div
                  className="progress mx-auto"
                  style={{
                    height: "20px",
                    width: "80%",
                    borderRadius: "999px",
                    overflow: "hidden",
                    backgroundColor: "#020617",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.85)",
                  }}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{
                      width: `${progress}%`,
                      background:
                        "linear-gradient(90deg,#38bdf8,#22c55e,#38bdf8)",
                      transition: "width 0.5s ease",
                    }}
                  ></div>
                </div>

                <p
                  className="mt-4 fw-bold"
                  style={{ color: "#e5e7eb", fontSize: "0.95rem" }}
                >
                  Running full Lighthouse + AI audit…
                </p>
                <p style={{ color: "#9ca3af", fontSize: "0.9rem" }}>
                  You’ll receive Performance, Accessibility, SEO, and Best
                  Practices scores — plus personalized AI insights.
                </p>
              </div>
            )}

            {/* SCORES */}
            {!loading && scores && (
              <div ref={resultRef} className="mt-5">
                <h3 className="mb-4 text-center" style={{ color: "#f9fafb" }}>
                  Your Audit Scores
                </h3>

                <Row>
                  {renderProgressCard("Performance", BsSpeedometer2)}
                  {renderProgressCard("Accessibility", BsSpeedometer2)}
                  {renderProgressCard("SEO", BsSpeedometer2)}
                  {renderProgressCard("Best Practices", BsSpeedometer2)}
                </Row>
              </div>
            )}

            {/* AI RECOMMENDATIONS */}
            {recommendation && (
              <Card
                className="mt-5 border-0"
                style={{
                  background: "rgba(15,23,42,0.68)",
                  borderRadius: 26,
                  border: "1px solid rgba(148,163,184,0.45)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow: "0 26px 70px rgba(0,0,0,0.9)",
                  color: "#e5e7eb",
                }}
              >
                <Card.Body>
                  <h4
                    className="fw-bold mb-4"
                    style={{
                      color: "#38bdf8",
                      fontSize: "1.25rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    AI Recommendations
                  </h4>

                  <ul
                    className="ps-3"
                    style={{ fontSize: "1rem", lineHeight: "1.7" }}
                  >
                    {recommendation.split("\n").map((line, idx) => {
                      const lower = line.toLowerCase().trim();
                      if (!lower) return null;

                      let score: number | null = null;

                      if (lower.includes("performance")) {
                        score = scores ? getScore(scores, "Performance") : null;
                      } else if (lower.includes("accessibility")) {
                        score = scores
                          ? getScore(scores, "Accessibility")
                          : null;
                      } else if (lower.includes("seo")) {
                        score = scores ? getScore(scores, "SEO") : null;
                      } else if (lower.includes("best")) {
                        score = scores
                          ? getScore(scores, "Best Practices")
                          : null;
                      }

                      const hideIcon = lower.includes("batistack");

                      return (
                        <motion.li
                          key={idx}
                          className="mb-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                          }}
                        >
                          {!hideIcon && score !== null && getIconByScore(score)}
                          <span>{line}</span>
                        </motion.li>
                      );
                    })}
                  </ul>
                </Card.Body>
              </Card>
            )}

            {/* BOTTOM INFO CARDS */}
            <section className="mt-5">
              <Row className="gy-4">
                <Col md={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    style={{
                      padding: 24,
                      borderRadius: 22,
                      background: "rgba(15,23,42,0.68)",
                      border: "1px solid rgba(148,163,184,0.7)",
                      backdropFilter: "blur(14px)",
                      boxShadow: "0 18px 50px rgba(0,0,0,0.85)",
                      color: "#e5e7eb",
                    }}
                  >
                    <h4 style={{ color: "#38bdf8", marginBottom: 10 }}>
                      Why analyze your website?
                    </h4>

                    <ul
                      style={{
                        marginTop: 10,
                        paddingLeft: 18,
                        fontSize: "0.98rem",
                        lineHeight: 1.7,
                        color: "#cbd5e1",
                      }}
                    >
                      <li>Improve load speed and user experience.</li>
                      <li>Fix SEO issues that block traffic.</li>
                      <li>Make your site accessible to more users.</li>
                      <li>Build trust with modern best practices.</li>
                    </ul>
                  </motion.div>
                </Col>

                <Col md={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                    style={{
                      padding: 24,
                      borderRadius: 22,
                      background: "rgba(15,23,42,0.68)",
                      border: "1px solid rgba(148,163,184,0.7)",
                      backdropFilter: "blur(14px)",
                      boxShadow: "0 18px 50px rgba(0,0,0,0.85)",
                      color: "#e5e7eb",
                    }}
                  >
                    <h4 style={{ color: "#38bdf8", marginBottom: 10 }}>
                      How Batistack can help next
                    </h4>

                    <ul
                      style={{
                        marginTop: 10,
                        paddingLeft: 18,
                        fontSize: "0.98rem",
                        lineHeight: 1.7,
                        color: "#cbd5e1",
                      }}
                    >
                      <li>Custom optimization & redesign.</li>
                      <li>AI chat + voice assistants for more leads.</li>
                      <li>Analytics dashboards to track growth.</li>
                      <li>Ongoing support and maintenance.</li>
                    </ul>
                  </motion.div>
                </Col>
              </Row>
            </section>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default WebsiteAudit;