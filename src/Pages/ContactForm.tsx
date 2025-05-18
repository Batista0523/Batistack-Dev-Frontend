import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  Button,
  Alert,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTrafficTracker } from "../hook/useTrafficTracker";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
function ContactForm() {
  useTrafficTracker("click", "/contact");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("Website");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_BASE_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);

    try {
      await axios.post(`${url}/leads`, {
        name,
        email,
        message,
        source,
      });

      setSuccess("✅ Your message has been sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setSource("Website");
    } catch (err) {
      setError("❌ Failed to send your message. Please try again later.");
      console.error("Error creating lead:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Batistack Development</title>
        <meta
          name="description"
          content="Have a project in mind or need a custom solution? Contact Batistack Development today for websites, apps, and support tailored to your business."
        />
        <meta
          name="keywords"
          content="contact web developer, website quote, hire web developer, software agency NYC, software company NYC"
        />
        <meta name="author" content="Batistack Development" />
        <meta property="og:title" content="Contact Batistack Development" />
        <meta
          property="og:description"
          content="Start your project with Batistack — experts in modern website and web app development."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.batistack.com/contact" />
      </Helmet>

      <div style={{ backgroundColor: "#f8f9fa", paddingTop: "60px" }}>
        <Container className="py-5">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="fw-bold display-5 text-dark">
              Let’s Talk About Your Vision
            </h1>
            <p className="text-muted fs-5 mt-2">
              Ready to grow your business online? Whether it’s a landing page or
              a full platform, we’re here to guide you through it — step by
              step.
            </p>
          </motion.div>

          <Row className="mb-5 align-items-stretch g-4">
            <Col md={6}>
              <motion.div
                className="p-4 bg-white shadow rounded-3 h-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h4 className="fw-bold mb-4 text-primary">
                  Get in Touch with Us
                </h4>

                {success && <Alert variant="success">{success}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="What can we build for you?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    size="lg"
                    className="w-100 rounded-1 fw-semibold"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner
                          animation="border"
                          size="sm"
                          className="me-2"
                        />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </Form>
              </motion.div>
            </Col>

            <Col md={6}>
  <motion.div
    className="p-4 bg-white shadow rounded-3 h-100 text-center"
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h4 className="fw-bold text-dark mb-3">Find Us on Social Media</h4>
    <p className="text-muted">
      Stay connected and see how we help businesses grow across the U.S.
    </p>
    <Row className="mt-4 g-4">
      {[
        {
          icon: "bi bi-instagram",
          href: "https://www.instagram.com/bati.stack",
          color: "#E1306C",
          label: "Behind the Scenes",
          desc: "See our latest work, team culture, and real client stories.",
        },
        {
          icon: "bi bi-linkedin",
          href: "https://www.linkedin.com/company/batistack",
          color: "#0077B5",
          label: "Professional Insights",
          desc: "Get industry tips and follow our journey as a growing tech company.",
        },
        {
          icon: "bi bi-facebook",
          href: "https://www.facebook.com/profile.php?id=61575947108161",
          color: "#1877F2",
          label: "Community Updates",
          desc: "Stay updated on promotions, events, and local business news.",
        },
        {
          icon: "bi bi-twitter-x",
          href: "https://x.com/BatistackDev",
          color: "#1DA1F2",
          label: "Quick Tips",
          desc: "Daily inspiration, dev tips, and business insights in 280 characters.",
        },
      ].map((social, idx) => (
        <Col xs={12} md={6} key={idx}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
            style={{ color: "#000" }}
          >
            <div className="d-flex flex-column align-items-center p-3 h-100 border rounded-3">
              <i
                className={social.icon}
                style={{ fontSize: "2.5rem", color: social.color }}
              ></i>
              <span className="mt-2 fw-semibold">{social.label}</span>
         
              <p className="text-secondary small mb-0">{social.desc}</p>
            </div>
          </a>
        </Col>
      ))}
    </Row>
  </motion.div>
</Col>

          </Row>

          <div
            style={{ backgroundColor: "#0d6efd", color: "#fff" }}
            className="py-5 mt-4 rounded-3"
          >
            <Container>
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="fw-bold display-6 mb-3">
                  Your Business Needs a Website — Today
                </h2>
                <p className="fs-5 mx-auto" style={{ maxWidth: "700px" }}>
                  The world is digital. Every day you wait, your competitors
                  gain ground. Don’t let opportunities slip by. Let Batistack
                  create the online presence your business deserves — built to
                  convert and built to grow.
                </p>
                <div className="d-flex justify-content-center mt-4">
                  <Link
                    to="/services"
                    className="btn btn-light btn-lg px-4 rounded-1 fw-semibold"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </motion.div>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ContactForm;
