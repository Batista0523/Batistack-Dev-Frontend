import { useTrafficTracker } from "../hook/useTrafficTracker";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Helmet } from "react-helmet-async";

function Services() {
  useTrafficTracker("page_view", "/services");

  return (
    <>
      <div style={{ backgroundColor: "#f8f9fa", overflowX: "hidden" }}>
        <div className="py-5 text-center bg-white">
          <Container>
            <motion.h1
              className="display-4 fw-bold text-dark"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="lead text-muted mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We design and build powerful websites and web applications —
              tailored for your goals.
            </motion.p>
          </Container>
        </div>

        <div className="py-5" style={{ backgroundColor: "#e9ecef" }}>
          <Container>
            <Row className="g-5 text-center">
              {[
                {
                  icon: "bi-laptop",
                  color: "text-primary",
                  title: "Business Websites",
                  desc: "Professional websites that are responsive, clean, and ready to represent your brand online.",
                },
                {
                  icon: "bi-kanban-fill",
                  color: "text-danger",
                  title: "Custom Web Apps",
                  desc: "Need a custom tool? We build apps that help your business run smarter and smoother.",
                },
                {
                  icon: "bi-brush-fill",
                  color: "text-warning",
                  title: "UI/UX Design",
                  desc: "Clean, modern, and user-focused designs that feel natural and look amazing.",
                },
                {
                  icon: "bi-bar-chart-fill",
                  color: "text-success",
                  title: "Analytics & SEO",
                  desc: "We help you appear on Google and understand how users interact with your site.",
                },
                {
                  icon: "bi-shield-check",
                  color: "text-info",
                  title: "Security & Hosting",
                  desc: "From SSL to firewalls, your project is protected and deployed on fast, reliable servers.",
                },
                {
                  icon: "bi-phone",
                  color: "text-purple",
                  title: "Mobile Ready",
                  desc: "Every product we build works beautifully on phones, tablets, and desktops.",
                },
              ].map((service, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="px-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i
                      className={`bi ${service.icon} ${service.color} mb-3`}
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div className="py-5 bg-white">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5">Our Process is Simple</h2>
              <p className="text-muted fs-5 mt-2">
                We focus on clarity, communication, and delivering results that
                work for your business.
              </p>
            </motion.div>

            <Row className="g-4 text-center">
              {[
                {
                  step: "1",
                  title: "Think it",
                  desc: "Think about a website for your business or a custom web app that solves a real need. Imagine how it can make your work easier or reach more customers.",
                },
                {
                  step: "2",
                  title: "Code it",
                  desc: "Share your idea with us — we’ll design and build it using clean, modern code and beautiful interfaces tailored just for you.",
                },
                {
                  step: "3",
                  title: "Launch it",
                  desc: "We bring it to life with design and code, and we launch it only after your full approval. You're involved every step of the way.",
                },
              ].map((step, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="bg-light p-4 rounded shadow-sm h-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="rounded-circle mx-auto d-flex justify-content-center align-items-center mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        backgroundColor: "#0d6efd",
                        color: "#fff",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                      }}
                    >
                      {step.step}
                    </div>
                    <h5 className="fw-bold">{step.title}</h5>
                    <p className="text-muted">{step.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

        <div
          className="py-5"
          style={{ backgroundColor: "#0d6efd", color: "#fff" }}
        >
          <Container>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5 mb-3">
                Let’s Build Something Great Together
              </h2>
              <p className="fs-5 mb-4">
                Whether you need a business website or a complete application —
                we’re here to help.
              </p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link
                  to="/contact"
                  className="btn btn-light btn-lg px-4 rounded-1"
                >
                  Get a Free Quote
                </Link>
              </div>
            </motion.div>
          </Container>
        </div>
      </div>
      <Helmet>
        <title>Services | Batistack Development</title>
        <meta
          name="description"
          content="Explore our custom software services — from business websites to powerful web applications. Built fast, secure, and beautifully by Batistack Development."
        />
        <meta
          name="keywords"
          content="web development services, custom web apps, business websites, UI/UX design, SEO, Batistack Development, secure hosting"
        />
        <meta name="author" content="Batistack Development" />
        <meta property="og:title" content="Services | Batistack Development" />
        <meta
          property="og:description"
          content="We offer powerful digital solutions — custom websites, apps, and more. Let’s bring your idea to life."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.batistack.com/services" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Custom Website & Web App Development",
            provider: {
              "@type": "Organization",
              name: "Batistack Development",
              url: "https://www.batistack.com",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 40.7128,
                longitude: -74.006,
              },
              geoRadius: 10000,
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://www.batistack.com/contact",
            },
          })}
        </script>
      </Helmet>
    </>
  );
}

export default Services;
