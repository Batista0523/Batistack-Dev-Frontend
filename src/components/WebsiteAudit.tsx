import { useState, useRef } from "react";
import axios from "axios";
import {
  Container,
  Form,
  Button,
  Spinner,
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

function WebsiteAudit() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [scores, setScores] = useState<any>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const url1 = import.meta.env.VITE_BASE_URL;

  const handleAnalyze = async () => {
    setLoading(true);
    setError("");
    setRecommendation("");
    setScores(null);
    try {
      const res = await axios.post(`${url1}/pagespeed`, { domain: url });
      const { recommendations, scores } = res.data;
      console.log(scores,'score here')
      setScores(scores);
      setRecommendation(recommendations);

      setTimeout(() => {
        if (resultRef.current) {
          resultRef.current.scrollIntoView({ behavior: "smooth" });
        }
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
        <Card className="border-0 shadow-sm h-100">
          <Card.Body>
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
          </Card.Body>
        </Card>
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

      <Container
        className="py-5"
        style={{
          fontFamily:
            "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        }}
      >
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <h1 className="fw-bold mb-3">
              {" "}
              AI Website<span style={{ color: "#0d6efd" }}> Analyzer</span>{" "}
            </h1>
            <p className="lead text-muted">
              Instantly audit your website’s speed, SEO, accessibility, and best
              practices. Let Batistack AI reveal what’s slowing you down — and
              how to fix it.
            </p>
          </Col>
        </Row>

        {loading && (
          <div className="text-center my-4">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3 fw-bold text-muted">
              Please wait while we analyze your website. This may take up to
              30–60 seconds depending on your website. Please do not reload or
              leave the page.
            </p>
            <p className="text-secondary">
              Our AI and Google Lighthouse are working together to generate
              precise, personalized insights for your domain.
            </p>
            <p className="text-secondary">
              You’ll receive scores for Performance, Accessibility, SEO, and
              Best Practices — followed by expert recommendations.
            </p>
            <p className="text-secondary">
              We appreciate your patience — your results will appear below
              shortly.
            </p>
          </div>
        )}

        {!loading && (
          <Row className="justify-content-center mt-4">
            <Col md={10} lg={8}>
              <Form>
                <Form.Group controlId="formUrl" className="mb-3">
                  <Form.Label>Enter Your Website URL</Form.Label>
                  <Form.Control
                    type="url"
                    placeholder="https://yourdomain.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                  />
                  <Form.Text className="text-muted">
                    We use Google Lighthouse + AI to generate insights.
                  </Form.Text>
                </Form.Group>
                <Button
                  className="w-100 fw-bold"
                  variant="dark"
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

              {scores && (
                <div ref={resultRef} className="mt-5">
                  <h3 className="mb-4 text-center">Your Audit Scores</h3>
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
                <Card className="mt-5 p-3 shadow-sm">
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
                          } else if (
                            lowerLine.includes("accessibility score")
                          ) {
                            score = scores?.Accessibility || 0;
                          } else if (lowerLine.includes("seo score")) {
                            score = scores?.SEO || 0;
                          } else if (
                            lowerLine.includes("best practices score")
                          ) {
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
            </Col>
          </Row>
        )}
      </Container>

      <div
        style={{ backgroundColor: "#0d6efd", color: "#fff", marginTop: "4rem" }}
        className="pt-5"
      >
        <Footer />
      </div>
    </>
  );
}

export default WebsiteAudit;
