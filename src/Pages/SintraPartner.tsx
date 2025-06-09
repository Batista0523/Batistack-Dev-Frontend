import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

function SintraAIPartnerPage() {
  return (
    <>
      <Helmet>
        <title>Partnered with Sintra AI | Batistack Development</title>
        <meta
          name="description"
          content="Batistack Development partners with Sintra AI to offer powerful business automation. Learn how this alliance can boost your business growth."
        />
        <meta name="keywords" content="Sintra AI, business automation, Batistack, AI integration, Sintra partner" />
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
              We’re proud partners of Sintra AI, a cutting-edge platform designed to revolutionize how you manage and grow your business through intelligent automation and actionable insights.
            </p>
          </motion.div>

          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <Card className="shadow-sm border-0 rounded-4 overflow-hidden">
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    src="https://www.youtube.com/embed/JTrRXYkK79g"
                    title="Sintra AI Overview"
                    frameBorder="0"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                  ></iframe>
                </div>
                <Card.Body className="text-center">
                  <h5 className="fw-bold mt-3">
                    Sintra <span style={{ color: "#0d6efd" }}>Overview</span>
                  </h5>
                  <p className="text-muted">
                    This short video introduces the power of Sintra AI and how it can automate business growth.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={6}>
              <Card className="p-4 border-0 shadow-sm h-100">
                <h4 className="fw-bold mb-3">
                  Why <span style={{ color: "#0d6efd" }}>Sintra AI</span>?
                </h4>
                <ul className="text-muted ps-3">
                  <li>Automates daily tasks like email, marketing, and scheduling.</li>
                  <li>Provides growth analytics and opportunity alerts.</li>
                  <li>Increases revenue through intelligent client engagement.</li>
                  <li>Offers real-time recommendations to improve productivity.</li>
                </ul>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-4 border-0 shadow-sm h-100">
                <h4 className="fw-bold mb-3">
                  Our <span style={{ color: "#0d6efd" }}>Role</span> as Your Guide
                </h4>
                <p className="text-muted">
                  At <strong>Batistack Development</strong>, we don’t just hand you tools—we show you how to maximize them.
                  We’ll integrate Sintra into your system and teach you how to leverage it to automate your digital presence,
                  manage client interactions, and increase your profits.
                </p>
                <p className="text-muted">
                  Our experts are available for support, onboarding, and ongoing training to ensure your business gets the
                  most value from this powerful AI partner.
                </p>
              </Card>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col lg={6} className="mx-auto text-center">
              <h4 className="fw-bold mb-3">
                Try <span style={{ color: "#0d6efd" }}>Sintra AI</span> Today
              </h4>
              <div className="d-flex justify-content-center mb-4">
                <iframe
                  id="iframe_434"
                  src="//a.impactradius-go.com/gen-ad-code/6247168/2160396/27038/"
                  width="300"
                  height="500"
                  scrolling="no"
                  frameBorder="0"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 5px 25px rgba(0, 0, 0, 0.2)",
                  }}
                ></iframe>
              </div>
              <Button
                href="https://sintra.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
              >
                Click Here to Explore Sintra.ai
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SintraAIPartnerPage;