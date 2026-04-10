import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { localBusinessSchema, generatePageMeta } from "../lib/seoSchema";
import { useTrafficTracker } from "../hook/useTrafficTracker";

type AuditGrade = "D+" | "C-" | "C" | "C+" | "B-" | "B" | "B+" | "A-" | "A";
type IssueSeverity = "critical" | "major" | "moderate";
type WinnerVerdict = "user" | "competitor" | "tie";

interface CriticalIssue {
  category:
    | "First Impression"
    | "Mobile Experience"
    | "Speed & Performance"
    | "SEO & Discoverability"
    | "Trust Signals"
    | "Call to Action"
    | "AI & Automation"
    | "Design Quality"
    | "Content Clarity";
  severity: IssueSeverity;
  headline: string;
  detail: string;
  impact: string;
}

interface CompetitorComparison {
  userScore: number;
  competitorScore: number;
  userStrengths: string[];
  competitorStrengths: string[];
  verdict: string;
}

interface CategoryComparison {
  category: string;
  userTakeaway: string;
  competitorTakeaway: string;
  winner: WinnerVerdict;
  businessImpact: string;
}

interface WebsiteAuditResult {
  overallGrade: AuditGrade;
  overallSummary: string;
  criticalIssues: CriticalIssue[];
  competitorComparison: CompetitorComparison | null;
  categoryComparisons?: CategoryComparison[];
  competitorActionPlan?: string[];
  winnerVerdict: WinnerVerdict | null;
  batistackPitch: string;
  quickWins: string[];
  estimatedScore: number;
}

type UrlErrors = {
  userWebsiteUrl?: string;
  competitorUrl?: string;
};

const loadingMessages = [
  "Scanning your website architecture...",
  "Analyzing design and user experience...",
  "Checking SEO fundamentals...",
  "Evaluating conversion potential...",
  "Generating your personalized audit...",
];

const isValidUrl = (value: string): boolean => /^https?:\/\/.+/i.test(value.trim());

const extractDomain = (url: string): string => {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return url;
  }
};

const getGradeColor = (grade: string) => {
  if (grade.startsWith("A") || grade.startsWith("B")) return "var(--gold)";
  if (grade.startsWith("C")) return "#e8a04a";
  return "#e05c5c";
};

const getSeverityColor = (severity: IssueSeverity) => {
  if (severity === "critical") return "#e05c5c";
  if (severity === "major") return "#e8a04a";
  return "#7f8a96";
};

const clampScore = (score: number) => Math.max(0, Math.min(100, Math.round(score || 0)));

const formatAuditForEmail = (
  audit: WebsiteAuditResult,
  websiteUrl: string,
  competitorWebsiteUrl: string
) => {
  const issueLines = audit.criticalIssues
    .slice(0, 6)
    .map(
      (issue, index) =>
        `${index + 1}. [${issue.severity.toUpperCase()}] ${issue.category}: ${issue.headline}
   Problem: ${issue.detail}
   Impact: ${issue.impact}`
    )
    .join("\n\n");

  const quickWinLines = audit.quickWins
    .slice(0, 3)
    .map((quickWin, index) => `${index + 1}. ${quickWin}`)
    .join("\n");

  const competitorBlock =
    competitorWebsiteUrl && audit.competitorComparison
      ? `

Competitor URL: ${competitorWebsiteUrl}
Winner: ${audit.winnerVerdict || "Not determined"}
User score: ${audit.competitorComparison.userScore}
Competitor score: ${audit.competitorComparison.competitorScore}
Verdict: ${audit.competitorComparison.verdict}

Competitor action plan:
${(audit.competitorActionPlan || []).slice(0, 4).map((action, index) => `${index + 1}. ${action}`).join("\n") || "No competitor action plan returned."}`
      : "";

  return `New website audit completed.

Website analyzed: ${websiteUrl}${competitorBlock}
Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })} EST

Overall grade: ${audit.overallGrade}
Estimated score: ${clampScore(audit.estimatedScore)}/100

Overall summary:
${audit.overallSummary}

Critical issues:
${issueLines || "No critical issues returned."}

Quick wins:
${quickWinLines || "No quick wins returned."}

Batistack follow-up angle:
${audit.batistackPitch}

This lead came from the Free Website Audit tool. Use the audit details above to prepare a more specific follow-up email.`;
};

const getApiBaseUrl = (): string => {
  const configuredBaseUrl = import.meta.env.VITE_BASE_URL?.replace(/\/$/, "");
  const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);

  if (configuredBaseUrl) {
    try {
      const configuredUrl = new URL(configuredBaseUrl);
      const pointsToFrontendDevServer =
        isLocalhost &&
        ["localhost", "127.0.0.1"].includes(configuredUrl.hostname) &&
        configuredUrl.port === "3000";

      return pointsToFrontendDevServer ? "http://localhost:9090" : configuredBaseUrl;
    } catch {
      return configuredBaseUrl;
    }
  }

  if (isLocalhost) {
    return "http://localhost:9090";
  }

  return "";
};

const apiPath = (baseUrl: string, path: string) => `${baseUrl}${path}`;

function WebsiteAudit() {
  useTrafficTracker("page_view", "/speedPage");

  const [userWebsiteUrl, setUserWebsiteUrl] = useState("");
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [urlErrors, setUrlErrors] = useState<UrlErrors>({});
  const [analysisError, setAnalysisError] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const [result, setResult] = useState<WebsiteAuditResult | null>(null);
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [submittedCompetitorUrl, setSubmittedCompetitorUrl] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [competitorFocused, setCompetitorFocused] = useState(false);
  const [counterScore, setCounterScore] = useState(0);
  const resultRef = useRef<HTMLDivElement>(null);

  const apiBaseUrl = getApiBaseUrl();
  const cleanUserWebsiteUrl = userWebsiteUrl.trim();
  const cleanCompetitorUrl = competitorUrl.trim();
  const hasCompetitor = Boolean(cleanCompetitorUrl);
  const submittedDomain = submittedUrl ? extractDomain(submittedUrl) : "";
  const submittedCompetitorDomain = submittedCompetitorUrl ? extractDomain(submittedCompetitorUrl) : "";
  const comparisonDetails = result?.categoryComparisons || [];
  const competitorActionPlan = result?.competitorActionPlan || [];
  const hasDetailedComparison = comparisonDetails.length > 0 || competitorActionPlan.length > 0;

  useEffect(() => {
    if (!loading) return;

    const interval = window.setInterval(() => {
      setStatusIndex((current) => (current + 1) % loadingMessages.length);
    }, 2000);

    return () => window.clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    if (!result) {
      setCounterScore(0);
      return;
    }

    const targetScore = clampScore(result.estimatedScore);
    const duration = 1100;
    const steps = Math.max(targetScore, 1);
    const stepDuration = Math.max(duration / steps, 12);
    let current = 0;

    const interval = window.setInterval(() => {
      current += 1;
      setCounterScore(Math.min(current, targetScore));
      if (current >= targetScore) window.clearInterval(interval);
    }, stepDuration);

    return () => window.clearInterval(interval);
  }, [result]);

  const validateUrls = (): boolean => {
    const nextErrors: UrlErrors = {};

    if (!cleanUserWebsiteUrl) {
      nextErrors.userWebsiteUrl = "Please enter your website URL.";
    } else if (!isValidUrl(cleanUserWebsiteUrl)) {
      nextErrors.userWebsiteUrl = "Website URL must start with http:// or https://.";
    }

    if (cleanCompetitorUrl && !isValidUrl(cleanCompetitorUrl)) {
      nextErrors.competitorUrl = "Competitor URL must start with http:// or https://.";
    }

    if (cleanCompetitorUrl && cleanUserWebsiteUrl === cleanCompetitorUrl) {
      nextErrors.competitorUrl = "Please enter a different competitor URL.";
    }

    setUrlErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const sendAuditLead = async (
    websiteUrl: string,
    competitorWebsiteUrl: string,
    audit: WebsiteAuditResult
  ) => {
    try {
      await axios.post(apiPath(apiBaseUrl, "/leads"), {
        name: "Website Audit Tool",
        email: `audit@${extractDomain(websiteUrl)}`,
        phone: "",
        service: "Website Audit",
        budget: "",
        source: "website_audit_tool",
        websiteUrl,
        competitorUrl: competitorWebsiteUrl || undefined,
        auditResult: audit,
        message: formatAuditForEmail(audit, websiteUrl, competitorWebsiteUrl),
      });
    } catch {
      // Lead notification is intentionally silent and must never block the audit.
    }
  };

  const handleAnalyze = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading || !validateUrls()) return;

    setLoading(true);
    setStatusIndex(0);
    setResult(null);
    setAnalysisError("");
    setSubmittedUrl(cleanUserWebsiteUrl);
    setSubmittedCompetitorUrl(cleanCompetitorUrl);

    try {
      const response = await axios.post<WebsiteAuditResult>(apiPath(apiBaseUrl, "/pagespeed/audit"), {
        websiteUrl: cleanUserWebsiteUrl,
        competitorUrl: cleanCompetitorUrl || undefined,
      });

      setResult(response.data);
      void sendAuditLead(cleanUserWebsiteUrl, cleanCompetitorUrl, response.data);
      window.setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 250);
    } catch (error) {
      const fallbackMessage = "Analysis temporarily unavailable. Please try again in a moment.";
      const message = axios.isAxiosError(error) ? error.response?.data?.error || fallbackMessage : fallbackMessage;
      setAnalysisError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        {(() => {
          const meta = generatePageMeta(
            "Free Website AI Audit | Batistack",
            "Get a free AI-powered website audit. Find conversion gaps, SEO issues, trust problems, and growth opportunities instantly.",
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
        .bs-audit-input::placeholder { color: var(--mist); opacity: 1; }
        .bs-audit-input:focus { outline: none; border-color: var(--gold) !important; }

        @keyframes bsAuditShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes bsAuditPulse {
          0%, 100% { opacity: 0.45; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes bsAuditSpin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .bs-audit-container {
            padding: 0 24px !important;
          }

          .bs-audit-form-grid,
          .bs-audit-top-grid,
          .bs-audit-issues-grid,
          .bs-audit-compare-grid,
          .bs-audit-quick-grid {
            grid-template-columns: 1fr !important;
          }

          .bs-audit-card {
            padding: 28px 22px !important;
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
        <section style={{ paddingBottom: "80px" }}>
          <div className="bs-audit-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
                  fontSize: "clamp(58px, 10vw, 122px)",
                  lineHeight: 0.9,
                  color: "var(--bone)",
                  margin: "0 0 24px",
                  maxWidth: "980px",
                }}
              >
                IS YOUR WEBSITE
                <br />
                COSTING YOU CLIENTS?
              </h1>

              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(17px, 2vw, 22px)",
                  color: "var(--mist)",
                  marginBottom: "54px",
                  lineHeight: 1.6,
                  maxWidth: "760px",
                }}
              >
                Most business websites silently lose 60-80% of visitors before they even read a
                line of text. Find out exactly what's wrong with yours — and what it's costing you.
              </p>

              <form onSubmit={handleAnalyze} style={{ maxWidth: "860px" }}>
                <div
                  className="bs-audit-form-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "20px",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    <label
                      htmlFor="audit-url"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--mist)",
                        marginBottom: "10px",
                      }}
                    >
                      Your website URL
                    </label>
                    <input
                      id="audit-url"
                      type="url"
                      placeholder="https://yourbusiness.com"
                      value={userWebsiteUrl}
                      onChange={(event) => {
                        setUserWebsiteUrl(event.target.value);
                        setUrlErrors((current) => ({ ...current, userWebsiteUrl: undefined }));
                        if (analysisError) setAnalysisError("");
                      }}
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
                    {urlErrors.userWebsiteUrl && (
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#e05c5c", marginTop: "8px" }}>
                        {urlErrors.userWebsiteUrl}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="audit-competitor-url"
                      style={{
                        display: "block",
                        fontFamily: "var(--font-sans)",
                        fontSize: "10px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--mist)",
                        marginBottom: "10px",
                      }}
                    >
                      Competitor URL (optional) — we'll tell you who wins
                    </label>
                    <input
                      id="audit-competitor-url"
                      type="url"
                      placeholder="https://theirwebsite.com — we'll settle who's better"
                      value={competitorUrl}
                      onChange={(event) => {
                        setCompetitorUrl(event.target.value);
                        setUrlErrors((current) => ({ ...current, competitorUrl: undefined }));
                        if (analysisError) setAnalysisError("");
                      }}
                      className="bs-audit-input"
                      onFocus={() => setCompetitorFocused(true)}
                      onBlur={() => setCompetitorFocused(false)}
                      style={{
                        width: "100%",
                        background: "var(--ash)",
                        border: `1px solid ${competitorFocused ? "var(--gold)" : "var(--smoke)"}`,
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
                    {urlErrors.competitorUrl && (
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "12px", color: "#e05c5c", marginTop: "8px" }}>
                        {urlErrors.competitorUrl}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  data-cursor="cta"
                  disabled={loading}
                  style={{
                    display: "block",
                    width: "100%",
                    marginTop: "20px",
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    letterSpacing: "0.05em",
                    background: "var(--gold)",
                    color: "var(--void)",
                    padding: "20px",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.8 : 1,
                    transition: "opacity 0.2s",
                  }}
                >
                  {loading ? "ANALYZING..." : hasCompetitor ? "WHO WINS? →" : "ANALYZE MY WEBSITE →"}
                </button>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontStyle: "italic",
                    fontSize: "12px",
                    color: "var(--gold)",
                    marginTop: "12px",
                  }}
                >
                  Free. No signup. Results in under 30 seconds.
                </p>
              </form>
            </motion.div>
          </div>
        </section>

        {submittedUrl && (
          <section ref={resultRef} style={{ paddingBottom: loading || result || analysisError ? "44px" : "100px" }}>
            <div className="bs-audit-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>
              <div
                className="bs-audit-top-grid"
                style={{
                  display: "grid",
                  gridTemplateColumns: result ? "minmax(0, 3fr) minmax(280px, 2fr)" : "minmax(0, 760px)",
                  gap: "28px",
                  alignItems: "stretch",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="bs-audit-card"
                  style={{
                    position: "relative",
                    background: "var(--ash)",
                    border: "1px solid var(--smoke)",
                    borderLeft: "4px solid var(--gold)",
                    padding: "32px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        width: "9px",
                        height: "9px",
                        borderRadius: "50%",
                        background: "var(--gold)",
                        animation: "bsAuditPulse 1.2s ease-in-out infinite",
                        display: "inline-block",
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
                      {loading ? "Analyzing your website..." : "Website analyzed"}
                    </p>
                  </div>

                  <div
                    style={{
                      position: "relative",
                      minHeight: "220px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid var(--smoke)",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      padding: "24px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "10px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          margin: "0 0 18px",
                        }}
                      >
                        Audit Target
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(34px, 5vw, 56px)",
                          lineHeight: 0.95,
                          color: "var(--bone)",
                          margin: 0,
                          overflowWrap: "anywhere",
                        }}
                      >
                        {submittedDomain}
                      </p>
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        lineHeight: 1.6,
                        color: "var(--mist)",
                        margin: "28px 0 0",
                      }}
                    >
                      Live domain selected. The analysis focuses on performance, clarity, trust, and conversion signals.
                    </p>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(28px, 4vw, 42px)",
                      color: "var(--bone)",
                      margin: "20px 0 0",
                      lineHeight: 1,
                    }}
                  >
                    {submittedDomain}
                  </p>
                </motion.div>

                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.1 }}
                    className="bs-audit-card"
                    style={{
                      background: "var(--ash)",
                      border: "1px solid var(--smoke)",
                      padding: "36px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--mist)",
                        margin: "0 0 16px",
                      }}
                    >
                      Overall Grade
                    </p>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(96px, 12vw, 154px)",
                        color: getGradeColor(result.overallGrade),
                        lineHeight: 0.85,
                      }}
                    >
                      {result.overallGrade}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "16px",
                        color: "var(--bone)",
                        margin: "20px 0 0",
                      }}
                    >
                      Overall Score: {counterScore}/100
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </section>
        )}

        {loading && (
          <section style={{ paddingBottom: "90px" }}>
            <div className="bs-audit-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>
              <div
                style={{
                  background: "rgba(15, 15, 15, 0.82)",
                  border: "1px solid var(--smoke)",
                  padding: "52px 28px",
                  textAlign: "center",
                }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: "58px",
                    height: "58px",
                    border: "1px solid rgba(201, 168, 76, 0.25)",
                    borderTopColor: "var(--gold)",
                    borderRadius: "50%",
                    margin: "0 auto 24px",
                    animation: "bsAuditSpin 1s linear infinite",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(36px, 5vw, 70px)",
                    color: "var(--gold)",
                    margin: "0 0 12px",
                    lineHeight: 1,
                  }}
                >
                  BUILDING YOUR AUDIT
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--mist)", margin: 0 }}>
                  {loadingMessages[statusIndex]}
                </p>
              </div>
            </div>
          </section>
        )}

        {analysisError && (
          <section style={{ paddingBottom: "100px" }}>
            <div className="bs-audit-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="bs-audit-card"
                style={{
                  background: "var(--ash)",
                  border: "1px solid var(--smoke)",
                  borderTop: "2px solid #e05c5c",
                  padding: "34px",
                }}
              >
                <p style={{ fontFamily: "var(--font-sans)", color: "#e05c5c", fontSize: "15px", margin: 0 }}>
                  {analysisError}
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {result && (
          <>
            <section style={{ paddingBottom: "38px" }}>
              <div className="bs-audit-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="bs-audit-card"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.055), rgba(255,255,255,0.025))",
                    border: "1px solid var(--smoke)",
                    borderLeft: "3px solid var(--gold)",
                    padding: "34px 38px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      margin: "0 0 20px",
                      fontWeight: 700,
                    }}
                  >
                    Overall Summary
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                      fontSize: "clamp(16px, 1.35vw, 19px)",
                      lineHeight: 1.75,
                      color: "rgba(245, 241, 232, 0.86)",
                      margin: 0,
                      maxWidth: "860px",
                      fontWeight: 400,
                      letterSpacing: 0,
                    }}
                  >
                    {result.overallSummary}
                  </p>
                </motion.div>
              </div>
            </section>

            <section style={{ paddingBottom: "54px" }}>
              <div className="bs-audit-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>
                <div
                  className="bs-audit-issues-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "22px",
                  }}
                >
                  {result.criticalIssues.map((issue, index) => (
                    <motion.div
                      key={`${issue.category}-${issue.headline}`}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="bs-audit-card"
                      style={{
                        position: "relative",
                        background: "var(--ash)",
                        border: "1px solid var(--smoke)",
                        padding: "34px",
                        minHeight: "280px",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          top: "22px",
                          right: "22px",
                          fontFamily: "var(--font-sans)",
                          fontSize: "9px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: getSeverityColor(issue.severity),
                          border: `1px solid ${getSeverityColor(issue.severity)}`,
                          padding: "6px 8px",
                        }}
                      >
                        {issue.severity}
                      </span>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "10px",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "var(--gold)",
                          margin: "0 120px 16px 0",
                        }}
                      >
                        {issue.category}
                      </p>
                      <h3
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "24px",
                          color: "var(--bone)",
                          margin: "0 0 16px",
                          lineHeight: 1.2,
                        }}
                      >
                        {issue.headline}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "14px",
                          lineHeight: 1.7,
                          color: "var(--mist)",
                          margin: "0 0 24px",
                        }}
                      >
                        {issue.detail}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "13px",
                          lineHeight: 1.6,
                          color: "var(--bone)",
                          margin: 0,
                          borderTop: "1px solid var(--smoke)",
                          paddingTop: "18px",
                        }}
                      >
                        <span aria-hidden="true" style={{ color: "var(--gold)", marginRight: "8px" }}>
                          ⚠
                        </span>
                        {issue.impact}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {submittedCompetitorUrl && result.competitorComparison && (
              <section style={{ paddingBottom: "54px" }}>
                <div className="bs-audit-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="bs-audit-card"
                    style={{
                      background: "var(--ash)",
                      border: "1px solid var(--smoke)",
                      padding: "40px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        margin: "0 0 24px",
                      }}
                    >
                      Competitor Comparison
                    </p>

                    <div
                      className="bs-audit-compare-grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "28px",
                        marginBottom: "30px",
                      }}
                    >
                      {[
                        {
                          label: "Your Site",
                          domain: submittedDomain,
                          score: clampScore(result.competitorComparison.userScore),
                          color: "var(--gold)",
                          strengths: result.competitorComparison.userStrengths,
                        },
                        {
                          label: "Their Site",
                          domain: submittedCompetitorDomain,
                          score: clampScore(result.competitorComparison.competitorScore),
                          color: "var(--mist)",
                          strengths: result.competitorComparison.competitorStrengths,
                        },
                      ].map((site, index) => (
                        <div key={site.label}>
                          <p
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "10px",
                              letterSpacing: "0.18em",
                              textTransform: "uppercase",
                              color: "var(--mist)",
                              margin: "0 0 8px",
                            }}
                          >
                            {site.label}
                          </p>
                          <p
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: "34px",
                              color: "var(--bone)",
                              margin: "0 0 18px",
                              lineHeight: 1,
                            }}
                          >
                            {site.domain}
                          </p>
                          <div style={{ height: "10px", background: "var(--smoke)", overflow: "hidden", marginBottom: "12px" }}>
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${site.score}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.15 + index * 0.12 }}
                              style={{ height: "100%", background: site.color }}
                            />
                          </div>
                          <p style={{ fontFamily: "var(--font-sans)", color: site.color, margin: "0 0 16px", fontSize: "14px" }}>
                            {site.score}/100
                          </p>
                          {site.strengths.slice(0, 3).map((strength) => (
                            <p
                              key={strength}
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "13px",
                                lineHeight: 1.6,
                                color: "var(--mist)",
                                margin: "8px 0 0",
                              }}
                            >
                              <span style={{ color: site.color, marginRight: "8px" }}>&gt;</span>
                              {strength}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>

                    <div
                      style={{
                        borderTop: "1px solid var(--smoke)",
                        paddingTop: "24px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "clamp(30px, 4vw, 52px)",
                          color: "var(--gold)",
                          margin: "0 0 14px",
                          lineHeight: 1,
                        }}
                      >
                        🏆{" "}
                        {result.winnerVerdict === "user"
                          ? "You're winning!"
                          : result.winnerVerdict === "tie"
                            ? "It's a tie this round"
                            : `${submittedCompetitorDomain} wins this round`}
                      </p>
                      <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", lineHeight: 1.7, color: "var(--mist)", margin: 0 }}>
                        {result.competitorComparison.verdict} But a Batistack redesign puts you back on top.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </section>
            )}

            {submittedCompetitorUrl && hasDetailedComparison && (
              <section style={{ paddingBottom: "54px" }}>
                <div className="bs-audit-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="bs-audit-card"
                    style={{
                      background: "var(--ash)",
                      border: "1px solid var(--smoke)",
                      padding: "40px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--gold)",
                        margin: "0 0 14px",
                      }}
                    >
                      Why This Matchup Matters
                    </p>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(38px, 6vw, 76px)",
                        lineHeight: 0.95,
                        color: "var(--bone)",
                        margin: "0 0 34px",
                      }}
                    >
                      {submittedDomain} VS {submittedCompetitorDomain}
                    </h2>

                    <div
                      className="bs-audit-compare-grid"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                        gap: "18px",
                        marginBottom: "34px",
                      }}
                    >
                      {comparisonDetails.slice(0, 5).map((comparison) => (
                        <div
                          key={comparison.category}
                          style={{
                            border: "1px solid var(--smoke)",
                            padding: "24px",
                            minHeight: "300px",
                          }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", gap: "14px", marginBottom: "18px" }}>
                            <p
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "10px",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                color: "var(--gold)",
                                margin: 0,
                              }}
                            >
                              {comparison.category}
                            </p>
                            <span
                              style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "9px",
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: comparison.winner === "user" ? "var(--gold)" : "#e8a04a",
                                border: `1px solid ${comparison.winner === "user" ? "var(--gold)" : "#e8a04a"}`,
                                padding: "5px 7px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {comparison.winner === "user"
                                ? "You lead"
                                : comparison.winner === "tie"
                                  ? "Tie"
                                  : "Competitor leads"}
                            </span>
                          </div>

                          <p
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "13px",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--mist)",
                              margin: "0 0 8px",
                            }}
                          >
                            {submittedDomain}
                          </p>
                          <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", lineHeight: 1.65, color: "var(--bone)", margin: "0 0 18px" }}>
                            {comparison.userTakeaway}
                          </p>

                          <p
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "13px",
                              letterSpacing: "0.12em",
                              textTransform: "uppercase",
                              color: "var(--mist)",
                              margin: "0 0 8px",
                            }}
                          >
                            {submittedCompetitorDomain}
                          </p>
                          <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", lineHeight: 1.65, color: "var(--bone)", margin: "0 0 18px" }}>
                            {comparison.competitorTakeaway}
                          </p>

                          <p
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: "13px",
                              lineHeight: 1.6,
                              color: "var(--mist)",
                              borderTop: "1px solid var(--smoke)",
                              paddingTop: "16px",
                              margin: 0,
                            }}
                          >
                            {comparison.businessImpact}
                          </p>
                        </div>
                      ))}
                    </div>

                    {competitorActionPlan.length > 0 && (
                      <div style={{ borderTop: "1px solid var(--smoke)", paddingTop: "28px" }}>
                        <p
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "11px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "var(--gold)",
                            margin: "0 0 20px",
                          }}
                        >
                          How To Beat Them
                        </p>
                        <div
                          className="bs-audit-quick-grid"
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                            gap: "16px",
                          }}
                        >
                          {competitorActionPlan.slice(0, 4).map((action, index) => (
                            <div
                              key={action}
                              style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid var(--smoke)",
                                padding: "22px",
                              }}
                            >
                              <p
                                style={{
                                  fontFamily: "var(--font-display)",
                                  fontSize: "34px",
                                  color: "var(--gold)",
                                  lineHeight: 1,
                                  margin: "0 0 14px",
                                }}
                              >
                                {String(index + 1).padStart(2, "0")}
                              </p>
                              <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", lineHeight: 1.65, color: "var(--bone)", margin: 0 }}>
                                {action}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </section>
            )}

            <section style={{ paddingBottom: "54px" }}>
              <div className="bs-audit-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className="bs-audit-card"
                  style={{
                    background: "var(--gold)",
                    color: "var(--void)",
                    padding: "46px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      margin: "0 0 16px",
                    }}
                  >
                    Your Next Step
                  </p>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(46px, 7vw, 92px)",
                      lineHeight: 0.9,
                      margin: "0 0 24px",
                    }}
                  >
                    DON'T LET YOUR WEBSITE COST YOU CLIENTS.
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "17px",
                      lineHeight: 1.65,
                      maxWidth: "820px",
                      margin: "0 0 32px",
                    }}
                  >
                    {result.batistackPitch}
                  </p>
                  <Link
                    to="/contact"
                    data-cursor="cta"
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-display)",
                      fontSize: "18px",
                      letterSpacing: "0.08em",
                      background: "var(--void)",
                      color: "var(--bone)",
                      padding: "16px 28px",
                      textDecoration: "none",
                    }}
                  >
                    GET A FREE CONSULTATION →
                  </Link>
                </motion.div>
              </div>
            </section>

            <section style={{ paddingBottom: "120px" }}>
              <div className="bs-audit-container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 60px" }}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    margin: "0 0 24px",
                  }}
                >
                  Quick Wins
                </p>
                <div
                  className="bs-audit-quick-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "20px",
                  }}
                >
                  {result.quickWins.slice(0, 3).map((quickWin, index) => (
                    <motion.div
                      key={quickWin}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="bs-audit-card"
                      style={{
                        background: "var(--ash)",
                        border: "1px solid var(--smoke)",
                        padding: "30px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "44px",
                          color: "var(--gold)",
                          lineHeight: 1,
                          marginBottom: "18px",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "15px",
                          lineHeight: 1.7,
                          color: "var(--bone)",
                          margin: 0,
                        }}
                      >
                        {quickWin}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default WebsiteAudit;
