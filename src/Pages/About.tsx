import { useTrafficTracker } from "../hook/useTrafficTracker";
import images from "../images";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";

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

      <div
        className="bg-black text-white"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <HeroSection
          title="Meet Batistack Developement"
          description="We craft modern web experiences and digital tools that give your brand an edge. Based in NYC, we serve ambitious entrepreneurs and companies ready to lead in their space."
          buttonText="Contact Us"
          buttonHref="/contact"
        />

        {/* Founder Section */}
        <section className="py-5 bg-dark border-top border-secondary">
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
                  <a
                    href="https://www.linkedin.com/in/elisaul-batista/"
                    target="_blank"
                    rel="noreferrer"
                    className="ms-3"
                  >
                    <i className="bi bi-linkedin text-primary fs-4"></i>
                  </a>
                  <a href="mailto:elisaul@batistack.com" className="ms-3">
                    <i className="bi bi-envelope-fill text-danger fs-4"></i>
                  </a>
                </motion.h2>
                <motion.p
                  className="fs-5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
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
        </section>

        {/* Code of Excellence Section */}
        <section className="py-5 border-top border-secondary">
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
                From the first line of code to final delivery, we treat every
                project like it's our own startup.
              </p>
            </motion.div>
            <Row className="text-center gy-4">
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

        {/* Vision Section */}
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
                Vision & <span className="text-primary">Philosophy</span>
              </h2>
              <p className="fs-5 text-light mt-3">
                We believe in honest software — the kind that respects your
                time, budget, and long-term success. We’re not here to just
                “build a website.” We’re here to build what moves your business
                forward.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Founder Note */}
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
                Founder’s <span className="text-primary">Note</span>
              </h2>
              <div className="mx-auto mt-3" style={{ maxWidth: "800px" }}>
                <p className="fs-5 text-light">
                  I started Batistack because I saw too many businesses
                  struggling with tech that felt overwhelming or just didn’t
                  work for them. My goal was simple: make technology feel
                  approachable — something that supports you, not something you
                  have to fight with.
                </p>
                <p className="fs-5 text-light mt-4">
                  If you're just getting started or already running a growing
                  business, we're here to help you move forward with confidence.
                  We take time to understand your goals, and we build with care,
                  clarity, and a lot of heart. I genuinely want your business to
                  succeed — and we’re ready to make it happen together.
                </p>
                <p className="fs-5 text-light fw-bold mt-4 mb-0">
                  — Elisaul Batista, Founder & CEO
                </p>
              </div>
            </motion.div>
          </Container>
        </section>

        {/* Footer */}
        <div
          style={{ backgroundColor: "#0d6efd", color: "#fff" }}
          className="py-5 mt-5"
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
