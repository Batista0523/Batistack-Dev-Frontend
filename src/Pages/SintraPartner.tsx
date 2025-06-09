import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function SintraAIPartnerPage() {
  return (
    <>
      <Helmet>
        <title>Sintra AI Partner | Batistack Development</title>
        <meta
          name="description"
          content="Batistack Development partners with Sintra AI to help automate and scale your business with intelligent assistants, marketing, and operations tools."
        />
        <meta
          name="keywords"
          content="Sintra AI, Batistack Development, AI business tools, automation, digital assistant, smart marketing, CRM integration"
        />
        <meta name="author" content="Batistack Development" />
        <meta property="og:title" content="Sintra AI Partner | Batistack Development" />
        <meta
          property="og:description"
          content="Leverage AI-powered tools with Sintra and Batistack to automate marketing, client engagement, and operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.batistack.com/partners/sintra" />
        <meta property="og:image" content="https://www.batistack.com/images/sintra-partner.jpg" />
      </Helmet>

      <div style={{ backgroundColor: "#f8f9fa", paddingTop: "60px", minHeight: "100vh" }}>
        <Container className="py-5">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="fw-bold display-5 text-dark">
              Sintra <span style={{ color: "#0d6efd" }}>AI Partnership</span>
            </h1>
            <p className="fs-5 text-muted mx-auto" style={{ maxWidth: "800px" }}>
              We’re proud to partner with Sintra AI — a platform that uses smart automation and AI to help businesses grow faster, connect with more clients, and save time.
            </p>
          </motion.div>

          <Row className="mb-5">
            <Col md={6}>
              <Card className="p-4 border-0 shadow-sm h-100">
                <h4 className="fw-bold mb-3">
                  Why <span style={{ color: "#0d6efd" }}>Sintra AI</span>?
                </h4>
                <ul className="text-muted ps-3">
                  <li>Automate your client follow-ups, emails, posts, and more.</li>
                  <li>Use AI to discover growth opportunities in real time.</li>
                  <li>Centralize customer communications and lead tracking.</li>
                  <li>Outperform your competition with smart business tools.</li>
                </ul>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-4 border-0 shadow-sm h-100">
                <h4 className="fw-bold mb-3">
                  How <span style={{ color: "#0d6efd" }}>Batistack</span> Helps You
                </h4>
                <p className="text-muted">
                  As your integration partner, <strong>Batistack Development</strong> ensures you get the most out of Sintra AI. We’ll set everything up, connect your systems, and train your team to use the tools effectively.
                </p>
                <p className="text-muted">
                  From onboarding to ongoing support, we guide you at every step.
                </p>
              </Card>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={12}>
              <Card className="p-4 border-0 shadow-sm">
                <h4 className="fw-bold mb-3">
                  Who Is <span style={{ color: "#0d6efd" }}>Sintra AI</span> For?
                </h4>
                <p className="text-muted">
                  Sintra is perfect for entrepreneurs, local businesses, service providers, coaches, and agencies who want to:
                </p>
                <ul className="text-muted ps-3">
                  <li>Grow their online presence without extra staff.</li>
                  <li>Automate repetitive marketing and communication tasks.</li>
                  <li>Use AI to uncover trends and opportunities.</li>
                  <li>Scale operations with a smart, integrated platform.</li>
                </ul>
              </Card>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={12} className="text-center">
              <h4 className="fw-bold mb-3">
                Ready to Explore <span style={{ color: "#0d6efd" }}>Sintra AI</span>?
              </h4>
              <p className="text-muted mb-4">
                Use our official partner link to try Sintra and get started with smarter automation today.
              </p>
              <Button
                href="https://sintra.ai/?ref=ELISA"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
              >
                Start with Sintra AI (via Batistack)
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SintraAIPartnerPage;
