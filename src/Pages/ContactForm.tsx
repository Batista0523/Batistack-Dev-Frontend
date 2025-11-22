import { useState } from "react";
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

function ContactForm() {
  useTrafficTracker("click", "/contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    source: "Website",
  });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_BASE_URL;

  const servicesList = [
    "Website Development",
    "AI Chat Assistant",
    "AI Voice Agent",
    "Automation & Dashboards",
    "SEO & Analytics",
    "Application Help (SNAP / NYCHA / DMV / Immigration)",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);

    try {
      await axios.post(`${url}/leads`, formData);
      setSuccess("✅ Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
        source: "Website",
      });
    } catch (err) {
      setError("❌ Failed to send your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Batistack Development</title>
      </Helmet>

      <div style={{ backgroundColor: "#000", color: "#fff" }}>
        <HeroSection
          title="Let’s Talk About Your Vision"
          description="You're one message away from transforming your digital presence. Websites, AI, automations — or help with applications like SNAP or NYCHA."
        />

        {/* MAIN SECTION */}
        <section
          style={{
            position: "relative",
            padding: "6rem 0",
            overflow: "hidden",
            background:
              "radial-gradient(circle at top, #0b1120 0%, #020617 55%, #000000 100%)",
          }}
        >
          {/* NEBULA ENERGY MESH */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 30% 20%, rgba(66,153,255,0.16), transparent 60%), radial-gradient(circle at 70% 80%, rgba(255,99,146,0.18), transparent 60%)",
              filter: "blur(60px)",
              opacity: 0.55,
              pointerEvents: "none",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* CONTENT */}
          <Container style={{ position: "relative", zIndex: 10 }}>
            <Row className="gy-5 align-items-start justify-content-center">

              {/* FORM CARD */}
              <Col md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    padding: 32,
                    borderRadius: 24,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                  }}
                >
                  <h4 className="fw-bold text-white mb-3">Tell Us What You Need</h4>
                  <p className="text-secondary mb-4">
                    Choose your service and share details — we’ll respond within 24 hours.
                  </p>

                  {success && <Alert variant="success">{success}</Alert>}
                  {error && <Alert variant="danger">{error}</Alert>}

                  <Form onSubmit={handleSubmit}>
                    {/* NAME */}
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="contact-input"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.18)",
                          color: "#fff",
                          backdropFilter: "blur(10px)",
                        }}
                      />
                    </Form.Group>

                    {/* EMAIL */}
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="contact-input"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.18)",
                          color: "#fff",
                          backdropFilter: "blur(10px)",
                        }}
                      />
                    </Form.Group>

                    {/* SERVICE */}
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light">Service</Form.Label>
                      <Form.Select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="contact-input"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.18)",
                          color: "#fff",
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <option value="">Select a service...</option>
                        {servicesList.map((srv, i) => (
                          <option key={i} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    {/* MESSAGE */}
                    <Form.Group className="mb-4">
                      <Form.Label className="text-light">Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={4}
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-input"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.18)",
                          color: "#fff",
                          backdropFilter: "blur(10px)",
                        }}
                      />
                    </Form.Group>

                    {/* SUBMIT BUTTON */}
                    <Button
                      variant="outline-light"
                      type="submit"
                      size="lg"
                      className="w-100 fw-semibold rounded-2"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <Spinner animation="border" size="sm" className="me-2" />
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>

                    {/* ANTI-SPAM */}
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      style={{
                        color: "#9ca3af",
                        fontSize: "0.82rem",
                        marginTop: "0.75rem",
                        textAlign: "center",
                        lineHeight: "1.55",
                      }}
                    >
                      ⚠️ Promotional messages and advertising offers are
                      automatically filtered. Only real client inquiries are reviewed.
                    </motion.p>
                  </Form>
                </motion.div>
              </Col>

              {/* SOCIAL SECTION */}
              <Col md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    padding: 32,
                    borderRadius: 24,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    backdropFilter: "blur(16px)",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
                    color: "#fff",
                  }}
                >
                  <h4 className="fw-bold mb-3">Connect With Us Online</h4>
                  <p className="text-secondary mb-4">
                    Follow Batistack for updates, tutorials, and inspiration.
                  </p>

                  <Row className="g-4">
                    {[
                      {
                        icon: "bi bi-instagram",
                        label: "Instagram",
                        href: "https://www.instagram.com/bati.stack",
                        color: "#E1306C",
                        desc: "Behind the scenes, projects & reels.",
                      },
                      {
                        icon: "bi bi-linkedin",
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/company/batistack",
                        color: "#0077B5",
                        desc: "Business news & professional updates.",
                      },
                      {
                        icon: "bi bi-facebook",
                        label: "Facebook",
                        href: "https://www.facebook.com/profile.php?id=61575947108161",
                        color: "#1877F2",
                        desc: "Latest launches and community posts.",
                      },
                      {
                        icon: "bi bi-twitter-x",
                        label: "X (Twitter)",
                        href: "https://x.com/BatistackDev",
                        color: "#1DA1F2",
                        desc: "Tech tips, AI insights & coding talk.",
                      },
                    ].map((s, idx) => (
                      <Col xs={12} key={idx}>
                        <motion.a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, y: -4 }}
                          style={{
                            textDecoration: "none",
                            display: "block",
                          }}
                        >
                          <div
                            style={{
                              padding: 20,
                              borderRadius: 20,
                              background: "rgba(0,0,0,0.4)",
                              border: "1px solid rgba(255,255,255,0.15)",
                              backdropFilter: "blur(14px)",
                              display: "flex",
                              gap: 16,
                              alignItems: "center",
                              boxShadow: "0 8px 22px rgba(0,0,0,0.3)",
                            }}
                          >
                            <i
                              className={s.icon}
                              style={{
                                fontSize: "2.5rem",
                                color: s.color,
                                minWidth: 55,
                                textAlign: "center",
                              }}
                            />
                            <div>
                              <h5 className="fw-bold m-0">{s.label}</h5>
                              <p
                                className="small m-0 text-secondary"
                                style={{ lineHeight: "1.45" }}
                              >
                                {s.desc}
                              </p>
                            </div>
                          </div>
                        </motion.a>
                      </Col>
                    ))}
                  </Row>
                </motion.div>
              </Col>

            </Row>
          </Container>
        </section>
      </div>

      {/* INPUT STYLING */}
      <style>{`
        .contact-input::placeholder {
          color: #a3a3a3 !important;
        }
        .contact-input {
          transition: 0.25s ease;
        }
        .contact-input:focus {
          border-color: rgba(132,202,255,0.65) !important;
          box-shadow: 0 0 18px rgba(66,152,255,0.45) !important;
          background: rgba(255,255,255,0.08) !important;
        }
        .contact-input:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(255,255,255,0.3);
        }
      `}</style>
    </>
  );
}

export default ContactForm;
