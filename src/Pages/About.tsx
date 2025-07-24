import { useTrafficTracker } from "../hook/useTrafficTracker";
import images from "../images";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import AnimatedButton from "../components/Button";

function About() {
  useTrafficTracker("page_view", "/about");

  return (
    <>
      <Helmet>
        <title>About Us | Batistack Development</title>
        <meta
          name="description"
          content="Batistack Development builds premium web solutions with strategy, design, and code. Meet the team and our mission."
        />
        <meta
          name="keywords"
          content="Batistack, software development NYC, custom web apps, tech team, full stack agency, company culture"
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

      <div
        className="bg-black text-white"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <HeroSection
          title="Meet Batistack Development"
          description="Born in NYC. Built for builders. We help businesses grow with world-class websites and digital products — led by tech, design, and integrity."
          buttonText="Let’s Work Together"
          buttonHref="/contact"
        />

        <section className="py-5 border-top border-secondary bg-dark">
          <Container>
            <Row className="align-items-center gy-4">
              <Col md={6}>
                <motion.h2
                  className="fw-bold display-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Who <span className="text-primary">We Are</span>
                </motion.h2>
                <motion.p
                  className="fs-5 text-light mt-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Batistack Development is a close-knit team of engineers,
                  designers, and creators who believe in clean code, intentional
                  design, and real business impact. We're not just developers —
                  we're partners in your growth.
                </motion.p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 border-top border-secondary bg-black">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5">
                What We <span className="text-primary">Stand For</span>
              </h2>
              <p className="fs-5 text-light mt-3">
                These aren’t just words — they guide how we build, hire, and
                serve.
              </p>
            </motion.div>
            <Row className="text-center gy-4">
              {[
                {
                  icon: "bi-compass",
                  title: "Clarity",
                  desc: "We break down complex ideas into smart, scalable solutions.",
                },
                {
                  icon: "bi-hand-thumbs-up",
                  title: "Integrity",
                  desc: "We say what we mean. We build what we promise.",
                },
                {
                  icon: "bi-lightbulb",
                  title: "Innovation",
                  desc: "We use AI and modern tech to stay ahead — so you do too.",
                },
              ].map((item, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="px-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <i
                      className={`bi ${item.icon} text-primary mb-3`}
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-light">{item.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-dark border-top border-secondary">
          <Container>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5">
                Inside Our <span className="text-primary">Culture</span>
              </h2>
              <p className="fs-5 text-light mt-3">
                We’re remote-friendly, results-driven, and people-first. Whether
                working with a client or among our team, we lead with respect,
                curiosity, and commitment to excellence.
              </p>
            </motion.div>
          </Container>
        </section>

        <section className="py-5 border-top border-secondary bg-black">
          <Container>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5">
                Vision & <span className="text-primary">Philosophy</span>
              </h2>
              <p className="fs-5 text-light mt-3">
                We believe in honest software — tools that are fast, flexible,
                and human. We don’t just build what’s trendy — we build what
                works, lasts, and grows with your business.
              </p>
            </motion.div>
          </Container>
        </section>

        <section className="py-5 border-top border-secondary bg-dark">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5">
                Our Code of <span className="text-primary">Excellence</span>
              </h2>
              <p className="fs-5 text-light mt-3">
                Every line of code is written with care. Every project is
                treated like it’s our own.
              </p>
            </motion.div>
            <Row className="text-center gy-4">
              {[
                {
                  icon: "bi-shield-check",
                  title: "Secure by Design",
                  desc: "Fast, safe, and scalable from day one.",
                },
                {
                  icon: "bi-globe-americas",
                  title: "Modern Stack",
                  desc: "React, TypeScript, PostgreSQL — no legacy bloat.",
                },
                {
                  icon: "bi-stars",
                  title: "Refined Craft",
                  desc: "Pixel-perfect and performance-first at every step.",
                },
              ].map((item, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="px-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <i
                      className={`bi ${item.icon} text-primary mb-3`}
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-light">{item.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="py-5 border-top border-secondary bg-black text-light">
          <Container>
            <Row className="align-items-center gy-4">
              <Col md={5} className="text-center">
                <motion.img
                  src={images.ceopic}
                  alt="Elisaul Batista"
                  className="rounded-circle shadow"
                  style={{
                    width: "260px",
                    height: "260px",
                    objectFit: "cover",
                    border: "5px solid #fff",
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                />

                <div className="d-flex justify-content-center gap-4 mt-4">
                  <a
                    href="https://www.linkedin.com/in/elisaul-batista/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-light"
                    title="LinkedIn"
                  >
                    <i className="bi bi-linkedin fs-3 text-primary"></i>
                  </a>
                  <a
                    href="mailto:elisaul@batistack.com"
                    className="text-decoration-none text-light"
                    title="Email"
                  >
                    <i className="bi bi-envelope-fill fs-3 text-danger"></i>
                  </a>
                  <a
                    href="https://github.com/Batista0523"
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-light"
                    title="GitHub"
                  >
                    <i className="bi bi-github fs-3"></i>
                  </a>
                </div>
              </Col>

              <Col md={7}>
                <motion.h2
                  className="fw-bold d-flex align-items-center mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Elisaul Batista —{" "}
                  <span className="ms-2 text-primary">Founder & CEO</span>
                </motion.h2>
                <motion.p
                  className="fs-5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Elisaul leads Batistack with engineering precision and deep
                  business understanding. He helps clients turn ideas into
                  digital products that are smart, scalable, and impactful.
                </motion.p>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="py-5 border-top border-secondary bg-black text-center">
          <Container>
            <h3 className="fw-bold mb-3">
              We’re not just building websites — we’re building trust.
            </h3>
            <p className="fs-5">Let’s start something meaningful together.</p>
            <AnimatedButton text="Contact Batistack" href="/contact" />
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default About;
