// Keep existing imports
import { useTrafficTracker } from "../hook/useTrafficTracker";
import images from "../images";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

function About() {
  useTrafficTracker("page_view", "/about");

  return (
    <>
      <Helmet>
        <title>About Us | Batistack Development</title>
        <meta
          name="description"
          content="Premium web development with real strategy, design, and code."
        />
        <meta
          name="keywords"
          content="Batistack, software development NYC, custom web apps, full stack agency"
        />
        <meta name="author" content="Batistack Development" />
        <meta property="og:title" content="About Batistack Development" />
        <meta
          property="og:description"
          content="We help businesses launch premium websites and digital experiences that drive results."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.batistack.com/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Elisaul Batista",
            jobTitle: "Founder & CEO",
            worksFor: {
              "@type": "Organization",
              name: "Batistack Development",
            },
            sameAs: [
              "https://www.linkedin.com/in/elisaulbatista",
              "mailto:elisaul@batistack.com",
            ],
          })}
        </script>
      </Helmet>

      <div style={{ backgroundColor: "#f8f9fa", overflowX: "hidden", fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif" }}>
        <div className="w-100 py-5">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <motion.h1
                  className="fw-bold display-4 text-dark mb-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  Meet{" "}
                  <span style={{ color: "#0d6efd" }}>
                    Batistack Development
                  </span>
                </motion.h1>
                <motion.p
                  className="fs-5 text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  We craft modern web experiences and digital tools that give
                  your brand an edge. Based in NYC, we serve ambitious
                  entrepreneurs and companies ready to lead in their space.
                </motion.p>
              </Col>
              <Col md={6} className="d-flex justify-content-center">
                <motion.img
                  src={images.logo}
                  alt="Batistack Logo"
                  className="img-fluid rounded-circle shadow-lg"
                  style={{
                    width: "320px",
                    height: "320px",
                    objectFit: "cover",
                    border: "6px solid #fff",
                  }}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
              </Col>
            </Row>
          </Container>
        </div>

        <div className="bg-white py-5">
          <Container>
            <Row className="align-items-center">
              <Col
                md={5}
                className="d-flex justify-content-center mb-4 mb-md-0"
              >
                <motion.img
                  src={images.ceopic}
                  alt="Elisaul Batista"
                  className="img-fluid rounded-circle shadow"
                  style={{
                    width: "280px",
                    height: "280px",
                    objectFit: "cover",
                    border: "6px solid #fff",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                />
              </Col>
              <Col md={7}>
                <motion.h2
                  className="fw-bold text-dark mb-3 d-flex align-items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Elisaul Batista —{" "}
                  <span className="ms-2" style={{ color: "#0d6efd" }}>
                    Founder & CEO
                  </span>
                  <a
                    href="https://www.linkedin.com/in/elisaul-batista/"
                    target="_blank"
                    className="ms-3"
                  >
                    <i className="bi bi-linkedin text-primary fs-4"></i>
                  </a>
                  <a href="mailto:elisaul@batistack.com" className="ms-3">
                    <i className="bi bi-envelope-fill text-danger fs-4"></i>
                  </a>
                </motion.h2>
                <motion.p
                  className="fs-5 text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Elisaul leads Batistack with a rare blend of engineering
                  precision and business acumen. He helps turn complexity into
                  simplicity — guiding clients from idea to scalable digital
                  products.
                </motion.p>
              </Col>
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
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5">
                Our Code of <span style={{ color: "#0d6efd" }}>Excellence</span>
              </h2>
              <p className="text-muted fs-5 mt-2">
                From the first line of code to final delivery, we treat every
                project like it's our own startup.
              </p>
            </motion.div>
            <Row className="text-center">
              {[
                {
                  icon: "bi-shield-check",
                  title: "Secure by Design",
                  desc: "Your site will be fast, safe, and ready for scale from day one.",
                },
                {
                  icon: "bi-globe-americas",
                  title: "Modern Stack",
                  desc: "React, TypeScript, Express & PostgreSQL — built for today's web.",
                },
                {
                  icon: "bi-brush",
                  title: "Pixel Perfect",
                  desc: "Design and code come together to reflect your brand with style.",
                },
              ].map((item, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="px-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <i
                      className={`bi ${item.icon} text-$${["info", "primary", "dark"][i]} mb-3`}
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

        <div className="py-5 bg-white">
          <Container>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5">
                Vision & <span style={{ color: "#0d6efd" }}>Philosophy</span>
              </h2>
              <p className="fs-5 text-muted mt-3">
                We believe in honest software — the kind that respects your
                time, budget, and long-term success. We’re not here to just
                “build a website.” We’re here to build what moves your business
                forward.
              </p>
            </motion.div>
          </Container>
        </div>
        <div className="py-5 bg-light">
          <Container>
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5">
                Founder’s <span style={{ color: "#0d6efd" }}>Note</span>
              </h2>
              <p
                className="fs-5 text-muted mt-3"
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                I started Batistack because I saw too many businesses struggling
                with tech that felt overwhelming or just didn’t work for them.
                My goal was simple: make technology feel approachable —
                something that supports you, not something you have to fight
                with.
              </p>
              <p
                className="fs-5 text-muted mt-4"
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                If you're just getting started or already running a growing
                business, we're here to help you move forward with confidence.
                We take time to understand your goals, and we build with care,
                clarity, and a lot of heart. I genuinely want your business to
                succeed — and we’re ready to make it happen together.
              </p>
              <p className="fs-5 text-dark fw-bold mt-4 mb-0">
                — Elisaul Batista, Founder & CEO
              </p>
            </motion.div>
          </Container>
        </div>

        <div
          style={{ backgroundColor: "#0d6efd", color: "#fff" }}
          className="py-5"
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
