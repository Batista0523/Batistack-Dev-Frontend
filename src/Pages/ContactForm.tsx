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

import { useTrafficTracker } from "../hook/useTrafficTracker";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import HeroSection from "../components/HeroSection";
import InviteVoiceAgent from "../components/InviteBtn";

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

      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          fontFamily:
            "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        }}
      >
        <HeroSection
          title="Let’s Talk About Your Vision"
          description="You're just one message away from transforming your online presence. Whether you need a landing page, a full-stack platform, or ongoing support — Batistack will help you build something remarkable."
        />

        <section className="py-5 bg-dark">
          <Container>
            <Row className="mb-5 align-items-stretch g-4">
              <Col md={6}>
                <motion.div
                  className="p-4 bg-black shadow rounded-4 h-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="fw-bold mb-4 text-primary">
                    Get a Free Consultation
                  </h4>
                  <p className="text-light mb-4">
                    Tell us a bit about your project — and we’ll guide you from
                    idea to execution.
                  </p>

                  {success && <Alert variant="success">{success}</Alert>}
                  {error && <Alert variant="danger">{error}</Alert>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light">Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light">Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light">Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="What do you need help with?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </Form.Group>

                    <Button
                      variant="outline-light"
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
                  className="p-4 bg-black shadow rounded-4 h-100 text-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4 className="fw-bold text-white mb-3">
                    Connect With Us Online
                  </h4>
                  <p className="text-light">
                    Join our growing community and stay ahead with insights,
                    updates, and case studies.
                  </p>
                  <Row className="mt-4 g-4">
                    {[
                      {
                        icon: "bi bi-instagram",
                        href: "https://www.instagram.com/bati.stack",
                        color: "#E1306C",
                        label: "Instagram",
                        desc: "Follow our work, team, and behind-the-scenes.",
                      },
                      {
                        icon: "bi bi-linkedin",
                        href: "https://www.linkedin.com/company/batistack",
                        color: "#0077B5",
                        label: "LinkedIn",
                        desc: "Stay professional with insights and news.",
                      },
                      {
                        icon: "bi bi-facebook",
                        href: "https://www.facebook.com/profile.php?id=61575947108161",
                        color: "#1877F2",
                        label: "Facebook",
                        desc: "Catch our latest updates and promos.",
                      },
                      {
                        icon: "bi bi-twitter-x",
                        href: "https://x.com/BatistackDev",
                        color: "#1DA1F2",
                        label: "X (Twitter)",
                        desc: "Quick tips, news, and thoughts.",
                      },
                    ].map((social, idx) => (
                      <Col xs={12} md={6} key={idx}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          <div className="d-flex flex-column align-items-center p-3 h-100 border rounded-3 bg-dark text-light">
                            <i
                              className={social.icon}
                              style={{
                                fontSize: "2.5rem",
                                color: social.color,
                              }}
                            ></i>
                            <span className="mt-2 fw-semibold">
                              {social.label}
                            </span>
                            <p className="small mb-0 text-center">
                              {social.desc}
                            </p>
                          </div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                </motion.div>
              </Col>
            </Row>

            <motion.div
              style={{ backgroundColor: "#ffffff", color: "#000000" }}
              className="py-5 mt-5 rounded-3 border border-dark"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Container className="text-center">
                <h2 className="fw-bold display-6 mb-3">
                  Let’s Build Something That Gets You Clients
                </h2>
                <p
                  className="fs-5 mx-auto text-secondary"
                  style={{ maxWidth: "720px" }}
                >
                  From small businesses to large-scale platforms, Batistack
                  helps you create websites that sell, impress, and last. Let’s
                  start now — not next month.
                </p>
                <InviteVoiceAgent variant="dark" />
              </Container>
            </motion.div>
          </Container>
        </section>
      </div>
    </>
  );
}

export default ContactForm;
