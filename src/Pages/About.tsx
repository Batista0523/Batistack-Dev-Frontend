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
          content="Meet Batistack Development — a NYC-based full-stack agency crafting premium web apps and digital experiences that help businesses grow."
        />
        <meta
          name="keywords"
          content="Batistack, NYC software agency, React developers, web app design, custom software, digital transformation"
        />
        <meta name="author" content="Batistack Development" />
        <meta property="og:title" content="About Batistack Development" />
        <meta
          property="og:description"
          content="We build websites and digital products that transform how businesses grow online."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.batistack.com/about" />
      </Helmet>

      <div className="bg-black text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* HERO */}
        <HeroSection
          title="Meet Batistack Development"
          description="Born in NYC. Built for builders. We craft websites and digital products that move business forward — powered by technology, design, and integrity."
          buttonText="Let’s Work Together"
          buttonHref="/contact"
        />

        {/* WHO WE ARE */}
        <section className="py-5 bg-dark border-top border-secondary">
          <Container>
            <Row className="align-items-center gy-5">
              <Col md={6}>
                <motion.h2
                  className="fw-bold display-5 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Who <span className="text-primary">We Are</span>
                </motion.h2>
                <motion.p
                  className="fs-5 text-light"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Batistack Development is a team of engineers, designers, and innovators united by one goal — to turn ideas into clean, scalable, and visually striking digital experiences. We don’t just code — we collaborate, strategize, and elevate.
                </motion.p>
              </Col>
              <Col md={6} className="text-center">
                {/* <motion.img
                  src={images.aboutTeam}
                  alt="Batistack Team"
                  className="img-fluid rounded-4 shadow-lg border border-secondary"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                /> */}
              </Col>
            </Row>
          </Container>
        </section>

        {/* VALUES */}
        <section className="py-5 bg-black border-top border-secondary">
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
                These values shape every line of code, every design, and every client partnership.
              </p>
            </motion.div>

            <Row className="gy-4 text-center">
              {[
                {
                  icon: "bi-lightbulb",
                  title: "Innovation",
                  desc: "We push boundaries with modern tech and AI-driven ideas.",
                },
                {
                  icon: "bi-hand-thumbs-up",
                  title: "Integrity",
                  desc: "We deliver what we promise — transparently and on time.",
                },
                {
                  icon: "bi-compass",
                  title: "Clarity",
                  desc: "We simplify complexity into smart, scalable systems.",
                },
              ].map((item, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="p-4 rounded-4 bg-dark border border-secondary shadow-sm h-100"
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
                    <p className="text-light mb-0">{item.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* CULTURE */}
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
              <p className="fs-5 text-light mt-3 mx-auto" style={{ maxWidth: "800px" }}>
                Remote-friendly. Growth-minded. Human-first. We foster creativity, curiosity, and accountability — empowering every teammate and client to succeed together.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* CODE EXCELLENCE */}
        <section className="py-5 bg-black border-top border-secondary">
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
                Every line of code represents craftsmanship, precision, and trust.
              </p>
            </motion.div>

            <Row className="gy-4 text-center">
              {[
                {
                  icon: "bi-shield-check",
                  title: "Secure by Design",
                  desc: "Fast, safe, and reliable — from prototype to production.",
                },
                {
                  icon: "bi-globe-americas",
                  title: "Modern Stack",
                  desc: "React, TypeScript, and PostgreSQL — built for the future.",
                },
                {
                  icon: "bi-stars",
                  title: "Refined Craft",
                  desc: "Every detail matters — from performance to polish.",
                },
              ].map((item, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="p-4 bg-dark rounded-4 border border-secondary h-100 shadow-sm"
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
                    <p className="text-light mb-0">{item.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

     
        <section className="py-5 bg-dark border-top border-secondary text-light">
          <Container>
            <Row className="align-items-center gy-5">
              <Col md={5} className="text-center">
                <motion.img
                  src={images.ceopic}
                  alt="Elisaul Batista"
                  className="rounded-circle shadow-lg"
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
                  Elisaul leads Batistack with a blend of engineering precision and business strategy. His mission: help entrepreneurs and brands bring bold ideas to life through powerful, scalable, and meaningful technology.
                </motion.p>
              </Col>
            </Row>
          </Container>
        </section>

      
        <section className="py-5 bg-black text-center border-top border-secondary">
          <Container>
            <motion.h3
              className="fw-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              We don’t just build websites — we build relationships.
            </motion.h3>
            <motion.p
              className="fs-5 text-light mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to elevate your online presence? Let’s start something impactful together.
            </motion.p>
            <AnimatedButton text="Contact Batistack" href="/contact" />
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default About;
