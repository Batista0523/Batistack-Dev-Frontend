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
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";

function WebsiteAudit() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [scores, setScores] = useState<any>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const url1 = import.meta.env.VITE_BASE_URL;
  const [progress, setProgress] = useState(0);

  const handleAnalyze = async () => {
    setLoading(true);
    setProgress(0);
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += 1;
      if (progressValue <= 100) {
        setProgress(progressValue);
      } else {
        clearInterval(interval);
      }
    }, 600);
    setError("");
    setRecommendation("");
    setScores(null);
    try {
      const res = await axios.post(`${url1}/pagespeed`, { domain: url });
      const { recommendations, scores } = res.data;
      setScores(scores);
      setRecommendation(recommendations);
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
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

  const renderProgressCard = (
    label: string,
    value: string | number,
    Icon: any
  ) => {
    const numeric = value === "N/A" ? 0 : parseInt(value as string);
    return (
      <Col md={6} className="mb-4">
        <motion.div
          className="bg-dark text-white rounded-4 p-4 h-100 shadow-sm border border-secondary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
            style={{ height: "1.5rem", borderRadius: "10px" }}
          />
        </motion.div>
      </Col>
    );
  };

  return (
    <>
      <Helmet>
        <title>Website Analyzer | Batistack</title>
        <meta
          name="description"
          content="Run an AI-powered audit of your website's performance, SEO, accessibility, and best practices. Instantly get actionable insights."
        />
      </Helmet>

      <div style={{ backgroundColor: "#000", color: "#fff" }}>
        <HeroSection
          title="AI Website Analyzer"
          description=" Instantly audit your website’s speed, SEO, accessibility, and best practices. Let Batistack AI reveal what’s slowing you down — and how to fix it."
          buttonHref="/contact"
          buttonText="Let's Fix It"
        />

        <section className="pb-5">
          <Container>
            {!loading && (
              <Row className="justify-content-center mt-4">
                <Col md={10} lg={8}>
                  <Form>
                    <Form.Group controlId="formUrl" className="mb-3">
                      <Form.Label className="text-white">
                        Enter Your Website URL
                      </Form.Label>
                      <Form.Control
                        type="url"
                        placeholder="https://yourdomain.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                      />
                      <Form.Text className="text-white">
                        We use Google Lighthouse + AI to generate insights.
                      </Form.Text>
                    </Form.Group>
                    <Button
                      className="w-100 fw-bold rounded-pill btn-lg"
                      variant="outline-light"
                      onClick={handleAnalyze}
                      disabled={loading || !url.startsWith("http")}
                    >
                      Run Audit
                    </Button>
                  </Form>

                  {error && (
                    <Alert variant="danger" className="mt-3 text-center">
                      {error}
                    </Alert>
                  )}
                </Col>
              </Row>
            )}

            {loading && (
              <div className="text-center my-4">
                <div
                  className="progress mx-auto"
                  style={{
                    height: "20px",
                    width: "80%",
                    borderRadius: "10px",
                    overflow: "hidden",
                    backgroundColor: "#1e1e1e",
                  }}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: "#0d6efd",
                      transition: "width 0.5s ease",
                    }}
                  ></div>
                </div>

                <p className="mt-4 fw-bold" style={{ color: "#cdd1d6" }}>
                  Please wait while we analyze your website. This may take up to
                  30–60 seconds depending on your domain. Avoid refreshing or
                  navigating away.
                </p>
                <p style={{ color: "#bfc4ca" }}>
                  Our AI and Google Lighthouse are processing your data to
                  generate personalized recommendations.
                </p>
                <p style={{ color: "#bfc4ca" }}>
                  You’ll receive scores for Performance, Accessibility, SEO, and
                  Best Practices — followed by expert recommendations.
                </p>
                <p style={{ color: "#bfc4ca" }}>
                  We appreciate your patience — your results will appear below
                  shortly.
                </p>
              </div>
            )}

            {!loading && scores && (
              <div ref={resultRef} className="mt-5">
                <h3 className="mb-4 text-white text-center">
                  Your Audit Scores
                </h3>
                <Row>
                  {renderProgressCard(
                    "Performance",
                    scores.Performance,
                    BsSpeedometer2
                  )}
                  {renderProgressCard(
                    "Accessibility",
                    scores.Accessibility,
                    BsSpeedometer2
                  )}
                  {renderProgressCard("SEO", scores.SEO, BsSpeedometer2)}
                  {renderProgressCard(
                    "Best Practices",
                    scores.BestPractices,
                    BsSpeedometer2
                  )}
                </Row>
              </div>
            )}

            {recommendation && (
              <Card className="mt-5 p-3 shadow-sm bg-dark text-light border border-secondary">
                <Card.Body>
                  <h4 className="fw-bold mb-3 text-primary">
                    AI Recommendations
                  </h4>
                  {recommendation.includes("\n") ? (
                    <ul className="ps-3">
                      {recommendation.split("\n").map((line, idx) => {
                        const lowerLine = line.toLowerCase().trim();
                        let score: number | null = null;

                        if (lowerLine.includes("performance score")) {
                          score = scores?.Performance || 0;
                        } else if (lowerLine.includes("accessibility score")) {
                          score = scores?.Accessibility || 0;
                        } else if (lowerLine.includes("seo score")) {
                          score = scores?.SEO || 0;
                        } else if (lowerLine.includes("best practices score")) {
                          score = scores?.BestPractices || 0;
                        }

                        const hideIcon = lowerLine.includes("batistack");

                        return lowerLine !== "" ? (
                          <li key={idx} className="mb-2">
                            {!hideIcon &&
                              score !== null &&
                              getIconByScore(score)}
                            {line}
                          </li>
                        ) : null;
                      })}
                    </ul>
                  ) : (
                    <pre style={{ whiteSpace: "pre-wrap" }}>
                      {recommendation}
                    </pre>
                  )}
                </Card.Body>
              </Card>
            )}

            <section className="mt-5">
              <Row>
                <Col md={6}>
                  <motion.div
                    className="p-4 bg-dark text-light rounded shadow h-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h4 className="text-primary">Why Analyze Your Website?</h4>
                    <ul className="mt-3">
                      <li>Improve load speed and boost Google ranking</li>
                      <li>Optimize accessibility for all users</li>
                      <li>Fix SEO issues that hurt visibility</li>
                      <li>Gain trust with best-practice standards</li>
                    </ul>
                  </motion.div>
                </Col>
                <Col md={6}>
                  <motion.div
                    className="p-4 bg-dark text-light rounded shadow h-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h4 className="text-primary">How Batistack Can Help</h4>
                    <ul className="mt-3">
                      <li>Custom web optimization and redesign</li>
                      <li>AI-driven lead generation integrations</li>
                      <li>Advanced analytics dashboards</li>
                      <li>Ongoing support and maintenance</li>
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
