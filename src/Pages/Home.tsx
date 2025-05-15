import { useTrafficTracker } from "../hook/useTrafficTracker";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Helmet } from "react-helmet-async";


function Home() {

  useTrafficTracker("page_view", "/");

  return (
    <>
      <Helmet>
        <title>Batistack Development | Custom Websites & Web Apps</title>
        <meta
          name="description"
          content="Batistack Development builds modern, secure websites and custom applications for businesses and startups. Let's bring your idea to life."
        />
        <meta
          name="keywords"
          content="website near me, web development near me,web development, custom web app, business website, react developer, full stack, Batistack, software agency,software company, tech solutions"
        />
        <meta name="author" content="Batistack Development" />
        <meta property="og:title" content="Batistack Development" />
        <meta
          property="og:description"
          content="Custom websites and apps built for your business. Scalable. Secure. Fast."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.batistack.com" />
        <meta property="og:image" content="https://www.batistack.com/og-image.jpg" />

      </Helmet>

      <div style={{ backgroundColor: "#f8f9fa", overflowX: "hidden" }}>
        <div className="w-100 py-5">
          <Container fluid>
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start px-5">
                <motion.h1
                  className="fw-bold text-dark display-4 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Think it. <br />
                  <span style={{ color: "#0d6efd" }}>Code it.</span> <br />
                  Launch it.
                </motion.h1>

                <motion.p
                  className="text-secondary fs-5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  We build high-impact websites and apps tailored to your
                  business — from idea to execution with speed, style, and
                  security.
                </motion.p>

                <motion.div
                  className="mt-4 d-flex gap-3 flex-wrap"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <Link
                    to="/services"
                    className="btn btn-primary btn-lg px-4 rounded-1"
                  >
                    Explore Services
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline-secondary btn-lg px-4 rounded-1"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </Col>

              {/* <Col
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
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
            </Col> */}
            </Row>
          </Container>
        </div>

        <div className="bg-white py-5">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-bold display-5">
                Why Choose <span style={{ color: "#0d6efd" }}>Batistack?</span>
              </h2>
              <p className="text-muted fs-5">
                We’re not just builders — we’re your strategic tech partner.
              </p>
            </motion.div>

            <Row className="g-4">
              {[
                {
                  icon: "bi-rocket",
                  color: "text-primary",
                  title: "Built for Growth",
                  desc: "We craft scalable solutions that grow with your business.",
                },
                {
                  icon: "bi-lock-fill",
                  color: "text-success",
                  title: "Security First",
                  desc: "We bake security into every layer of your application.",
                },
                {
                  icon: "bi-clock-history",
                  color: "text-warning",
                  title: "On-Time Delivery",
                  desc: "Our process is fast, clear, and aligned with your timeline.",
                },
              ].map((feature, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="text-center px-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
                  >
                    <i
                      className={`bi ${feature.icon} ${feature.color} mb-3`}
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p className="text-muted">{feature.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div className="py-5" style={{ backgroundColor: "#e9ecef" }}>
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="fw-bold display-5">How We Work</h2>
              <p className="text-muted fs-5">
                A simple, effective approach to building modern digital
                products.
              </p>
            </motion.div>

            <Row className="g-4 text-center">
              {[
                {
                  title: "Think it",
                  icon: "bi-lightbulb-fill",
                  desc: "We align with your vision, goals, and users — whether you need a landing page or an advanced dashboard.",
                },
                {
                  title: "Code it",
                  icon: "bi-code-slash",
                  desc: "We build fast, responsive, and scalable applications using the latest technologies.",
                },
                {
                  title: "Launch it",
                  icon: "bi-rocket-takeoff-fill",
                  desc: "We test, optimize, and deploy your solution with your full approval and support.",
                },
              ].map((step, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="bg-light p-4 rounded shadow-sm h-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                  >
                    <i
                      className={`bi ${step.icon} text-primary mb-3`}
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                    <h5 className="fw-bold">{step.title}</h5>
                    <p className="text-muted">{step.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div
          style={{ backgroundColor: "#0d6efd", color: "#fff" }}
          className="py-5"
        >
          <Container>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="fw-bold display-5 mb-3">
                Let’s Build Something Incredible
              </h2>
              <p className="fs-5 mb-4">
                Your vision deserves more than just code — it needs care,
                clarity, and cutting-edge tech.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link
                  to="/contact"
                  className="btn btn-light btn-lg px-4 rounded-1"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Home;
