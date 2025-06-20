import { useTrafficTracker } from "../hook/useTrafficTracker";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Helmet } from "react-helmet-async";

import Footer from "../components/Footer";
function Home() {
  useTrafficTracker("page_view", "/");

  return (
    <>
      <Helmet>
        <title>
          Batistack Development | Expert Web Development & Digital Solutions
        </title>
        <meta
          name="description"
          content="Custom websites, full-stack web apps, and mobile-ready platforms built for businesses. We help you grow online with SEO-optimized solutions."
        />
        <meta
          name="keywords"
          content="web development, software agency, full stack developer, custom web applications, react websites, SEO optimization, Batistack Development"
        />
        <meta name="author" content="Batistack Development" />
        <meta
          property="og:title"
          content="Batistack Development | Digital Solutions"
        />
        <meta
          property="og:description"
          content="From idea to launch — custom websites, scalable web apps, and digital growth strategies tailored for your business."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.batistack.com" />
        <meta
          property="og:image"
          content="https://www.batistack.com/og-image.jpg"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.batistack.com" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Batistack Development",
            "url": "https://www.batistack.com",
            "logo": "https://www.batistack.com/og-image.jpg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-929-733-1600",
              "contactType": "Customer Service",
              "areaServed": "US",
              "availableLanguage": ["English", "Spanish"]
            },
            "sameAs": [
              "https://www.instagram.com/bati.stack",
              "https://www.linkedin.com/company/batistack",
              "https://www.facebook.com/profile.php?id=61575947108161",
              "https://x.com/BatistackDev"
            ],
            "description": "Batistack Development builds websites and custom web apps for businesses across the United States — fast, secure, and scalable solutions tailored for your goals."
          }
        `}
        </script>
      </Helmet>
      <div style={{ backgroundColor: "#f8f9fa", overflowX: "hidden" }}>
        <div className="w-100 py-5">
          <Container fluid>
            <Row className="align-items-center flex-column-reverse flex-md-row">
              <Col
                md={6}
                className="text-center text-md-start px-5 mt-4 mt-md-0"
              >
                <motion.h1
                  className="fw-bold text-dark display-4 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Custom Websites.
                  <br />
                  Scalable Apps.
                  <br />
                  <span style={{ color: "#0d6efd" }}>Results That Matter.</span>
                </motion.h1>

                <motion.p
                  className="text-secondary fs-5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Batistack Development helps your business grow with beautiful,
                  secure, and SEO-optimized digital experiences. Websites,
                  dashboards, landing pages — done right.
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
                    View Our Services
                  </Link>
                  <Link
                    to="/contact"
                    className="btn btn-outline-secondary btn-lg px-4 rounded-1"
                  >
                    Let's Talk
                  </Link>
                </motion.div>
              </Col>

              <Col md={6} className="text-center px-5 mb-4 mb-md-0">
                <motion.img
                  src="/homeImage.jpg"
                  alt="Web development illustration"
                  className="img-fluid"
                  style={{ maxWidth: "100%", height: "auto" }}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </Col>
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
        <div className="bg-white py-5">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="fw-bold display-5">What We Offer</h2>
              <p className="text-muted fs-5 mt-2">
                Our services are designed to help you grow, connect, and stand
                out in your industry.
              </p>
            </motion.div>

            <Row className="g-4">
              {[
                {
                  icon: "bi-globe",
                  title: "Web Development",
                  desc: "Build high-performance websites that streamline operations and turn visitors into customers.",
                },
                {
                  icon: "bi-phone",
                  title: "Mobile Development",
                  desc: "Launch mobile apps that keep you connected with clients, anytime and anywhere.",
                },
                {
                  icon: "bi-window",
                  title: "Front-End Development",
                  desc: "Capture attention with sleek and modern interfaces built for engagement.",
                },
                {
                  icon: "bi-link",
                  title: "API Development",
                  desc: "Enable smooth data integration across systems with secure and scalable APIs.",
                },
                {
                  icon: "bi-easel",
                  title: "UI/UX Design",
                  desc: "Deliver intuitive and elegant user experiences that keep customers coming back.",
                },
                {
                  icon: "bi-graph-up-arrow",
                  title: "Digital Marketing",
                  desc: "Boost your online presence with smart SEO strategies and digital outreach campaigns.",
                },
              ].map((item, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="text-center p-4 bg-light rounded shadow-sm h-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <i
                      className={`bi ${item.icon} text-primary mb-3`}
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted">{item.desc}</p>
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
       <Footer/>
        </div>
      </div>

  
    </>
  );
}

export default Home;
