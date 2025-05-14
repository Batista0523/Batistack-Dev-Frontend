// src/Pages/Home.tsx
import { useTrafficTracker } from "../hook/useTrafficTracker";
import images from "../images";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";

function Home() {
  useTrafficTracker("page_view", "/");

  return (
    <div style={{ backgroundColor: "#f8f9fa", overflowX: "hidden" }}>
    
      <div className="w-100 py-5">
        <Container fluid>
          <Row className="align-items-center">
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "400px" }}
            >
              <motion.img
                src={images.logo}
                alt="Batistack Logo"
                className="img-fluid rounded-circle shadow-lg"
                style={{
                  width: "380px",
                  height: "380px",
                  objectFit: "cover",
                  border: "6px solid #ffffff",
                  backgroundColor: "#ffffff",
                }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </Col>

            <Col md={6} className="text-center text-md-start px-5">
              <motion.h1
                className="fw-bold text-dark display-4 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Think it. <br />
                <span style={{ color: "#0d6efd" }}>Code it.</span> <br />
                Launch it.
              </motion.h1>

              <motion.h3
                className="fw-bold text-dark display-6 mb-3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Need a Digital Presence? <br />
                Facing a Tech Challenge?
              </motion.h3>

              <motion.p
                className="text-secondary fs-5 mt-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                At <strong>Batistack Development</strong>, we turn your ideas
                into powerful websites and custom applications. Whether it's a
                small business, a personal idea, or a complex platform — we build
                it for you.
              </motion.p>

              <motion.div
                className="mt-4 d-flex gap-3 flex-wrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link to="/services" className="btn btn-primary btn-lg px-4 rounded-1">
                  Explore Services
                </Link>
                <Link to="/contact" className="btn btn-outline-secondary btn-lg px-4 rounded-1">
                  Contact Us
                </Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Why Batistack Section */}
      <div className="bg-white py-5">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold display-5">Why Choose <span style={{ color: "#0d6efd" }}>Batistack?</span></h2>
            <p className="text-muted fs-5 mt-2">
              We're more than developers — we're your digital partners.
            </p>
          </motion.div>

          <Row className="g-4">
            {[
              {
                icon: "bi-lightning-charge-fill",
                color: "text-primary",
                title: "Fast & Reliable",
                desc: "Websites and apps that load quickly and work smoothly."
              },
              {
                icon: "bi-shield-lock-fill",
                color: "text-success",
                title: "Secure by Design",
                desc: "Your project is protected from the ground up."
              },
              {
                icon: "bi-gear-wide-connected",
                color: "text-warning",
                title: "Tailored Solutions",
                desc: "We don’t use templates. Everything is built for your needs."
              },
            ].map((feature, i) => (
              <Col md={4} key={i}>
                <motion.div
                  className="text-center px-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
                  viewport={{ once: true }}
                >
                  <i className={`bi ${feature.icon} ${feature.color} mb-3`} style={{ fontSize: "2.5rem" }}></i>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p className="text-muted">{feature.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* What We Build Section */}
      <div className="py-5" style={{ backgroundColor: "#e9ecef" }}>
        <Container>
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold display-5">What Can We Help You Build?</h2>
            <p className="text-muted fs-5 mt-2">
              From small ideas to big business systems — we’re your team.
            </p>
          </motion.div>

          <Row className="g-4 text-center">
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="px-4"
              >
                <i className="bi bi-laptop text-info mb-3" style={{ fontSize: "2.5rem" }}></i>
                <h5 className="fw-bold">Business Websites</h5>
                <p className="text-muted">We design sleek and mobile-ready websites for your brand.</p>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="px-4"
              >
                <i className="bi bi-diagram-3-fill text-danger mb-3" style={{ fontSize: "2.5rem" }}></i>
                <h5 className="fw-bold">Custom Apps</h5>
                <p className="text-muted">From simple tools to complete platforms — built for your workflow.</p>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="px-4"
              >
                <i className="bi bi-brush text-purple mb-3" style={{ fontSize: "2.5rem", color: "#6f42c1" }}></i>
                <h5 className="fw-bold">Modern UI/UX</h5>
                <p className="text-muted">Clean design, easy navigation, and user-first interfaces.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

    
      <div style={{ backgroundColor: "#0d6efd", color: "#fff" }} className="py-5">
        <Container>
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold display-5 mb-3">Ready to Bring Your Idea to Life?</h2>
            <p className="fs-5 mb-4">
              Whether it's a simple site or a full platform — let's build it together.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/contact" className="btn btn-light btn-lg px-4 rounded-1">
                Let's Talk
              </Link>
              <Link to="/services" className="btn btn-outline-light btn-lg px-4 rounded-1">
                View Services
              </Link>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
