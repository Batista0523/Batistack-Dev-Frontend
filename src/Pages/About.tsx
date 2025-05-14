import { useTrafficTracker } from "../hook/useTrafficTracker";
import images from "../images";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  useTrafficTracker("page_view", "/about");

  return (
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
                About <span style={{ color: "#0d6efd" }}>Batistack Development</span>
              </motion.h1>
              <motion.p
                className="fs-5 text-secondary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Batistack Development is a software company proudly based in New York City.
                We specialize in building modern, custom digital products — from websites to full-featured apps —
                designed to solve real problems for real people.
              </motion.p>
              <motion.p
                className="fs-5 text-secondary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Whether you're a solo entrepreneur, a growing startup, or an established business,
                we work closely with you to bring your ideas to life — using strategic thinking,
                the latest technologies, and a human-first approach.
              </motion.p>
            </Col>

            <Col md={6} className="d-flex justify-content-center align-items-center">
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

      <div style={{ backgroundColor: "#ffffff" }} className="py-5">
        <Container>
          <Row className="align-items-center">
            <Col
              md={5}
              className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
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
                Elisaul Batista — <span style={{ color: "#0d6efd" }}>Founder & CEO</span>
              </motion.h2>
              <motion.p
                className="text-secondary fs-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Elisaul Batista is a software engineer from New York City with a sharp technical mindset and years of experience building scalable web solutions.
                He leads with strategy, empathy, and a strong belief in empowering people through technology.
              </motion.p>
              <motion.p
                className="text-secondary fs-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Elisaul founded Batistack Development to help everyday people —
                from small business owners and entrepreneurs to established companies —
                bring their ideas to life using cutting-edge tools and a down-to-earth approach.
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
            <h2 className="fw-bold display-5">Batistack's <span style={{ color: "#0d6efd" }}>Mission</span> </h2>
            <p className="text-muted fs-5 mt-2">
              To simplify technology, amplify ideas, and build software that genuinely helps people move forward.
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
                <i className="bi bi-person-heart text-primary mb-3" style={{ fontSize: "2.5rem" }}></i>
                <h5 className="fw-bold">People First</h5>
                <p className="text-muted">
                  Our work starts with listening. We value your vision and translate it into digital experiences that feel personal and real.
                </p>
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
                <i className="bi bi-layers-fill text-success mb-3" style={{ fontSize: "2.5rem" }}></i>
                <h5 className="fw-bold">Built to Scale</h5>
                <p className="text-muted">
                  From your first user to your first thousand, we build solutions that grow with you — efficiently and cleanly.
                </p>
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
                <i className="bi bi-lightbulb text-warning mb-3" style={{ fontSize: "2.5rem" }}></i>
                <h5 className="fw-bold">Simple, Smart Solutions</h5>
                <p className="text-muted">
                  We remove the tech jargon and keep things simple — so you can focus on results, not buzzwords.
                </p>
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
            <h2 className="fw-bold display-5 mb-3">Let’s Build Something Great Together</h2>
            <p className="fs-5 mb-4">
              We’re ready when you are. Whether you're starting fresh or upgrading what you already have — Batistack is here to help.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/contact" className="btn btn-light btn-lg px-4 rounded-1">
                Contact Us
              </Link>
              <Link to="/services" className="btn btn-outline-light btn-lg px-4 rounded-1">
                Our Services
              </Link>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
}

export default About;
