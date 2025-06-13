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
          content="Learn about Batistack Development — a software company based in NYC that builds modern, user-first websites and apps for startups and businesses."
        />
        <meta
          name="keywords"
          content="about Batistack, software company NYC, web development team, full stack agency, Batistack Development"
        />
        <meta name="author" content="Batistack Development" />
        <meta property="og:title" content="About Batistack Development" />
        <meta
          property="og:description"
          content="We help entrepreneurs and businesses grow with smart digital products. Meet our team and vision."
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
              "https://www.batistack.com",
            ],
          })}
        </script>
      </Helmet>
      <div style={{ backgroundColor: "#f8f9fa", overflowX: "hidden" }}>
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
                  We’re a software company in New York City helping startups,
                  founders, and businesses go digital with clarity and
                  confidence. From stunning websites to custom web apps — we
                  make tech feel easy.
                </motion.p>
                <motion.p
                  className="fs-5 text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  We partner with you every step of the way — planning,
                  designing, and coding solutions that actually help you grow.
                </motion.p>
              </Col>

              <Col
                md={6}
                className="d-flex justify-content-center align-items-center"
              >
                <motion.img
                  src={images.logo}
                  alt="Batistack Logo"
                  className="img-fluid rounded-circle shadow-lg"
                  style={{
                    width: "320px",
                    height: "320px",
                    objectFit: "cover",
                    border: "6px solid #ffffff",
                    backgroundColor: "#ffffff",
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
                    border: "6px solid #ffffff",
                    backgroundColor: "#ffffff",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                />
              </Col>
              <Col md={7}>
                <motion.h2
                  className="fw-bold text-dark mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Elisaul Batista —{" "}
                  <span style={{ color: "#0d6efd" }}>Founder & CEO</span>
                </motion.h2>
                <motion.p
                  className="fs-5 text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Elisaul is a software engineer with a passion for solving
                  real-world problems through code. He brings strategic thinking
                  and hands-on experience to every project.
                </motion.p>
                <motion.p
                  className="fs-5 text-secondary"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  Under his leadership, Batistack helps people bring their ideas
                  to life — with modern tools, reliable tech, and great
                  communication.
                </motion.p>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Mission Section */}
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
                Our <span style={{ color: "#0d6efd" }}>Mission</span>
              </h2>
              <p className="text-muted fs-5 mt-2">
                Simplify digital transformation for everyday people, and create
                tech that actually helps businesses grow.
              </p>
            </motion.div>

            <Row className="g-4 text-center">
              {[
                {
                  icon: "bi-person-heart",
                  title: "People First",
                  desc: "We begin with listening — and design everything around what you truly need.",
                },
                {
                  icon: "bi-layers-fill",
                  title: "Built to Scale",
                  desc: "Start small or go big — we build with your growth in mind from day one.",
                },
                {
                  icon: "bi-lightbulb",
                  title: "No Fluff",
                  desc: "No jargon. No bloated code. Just simple, powerful solutions — done right.",
                },
              ].map((feature, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="px-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <i
                      className={`bi ${feature.icon} text-${
                        ["primary", "success", "warning"][i]
                      } mb-3`}
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

export default About;
