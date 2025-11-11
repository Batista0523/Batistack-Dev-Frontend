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
import InviteVoiceAgent from "../components/InviteBtn";

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
          content="Need a website, AI assistant, or help with applications? Contact Batistack Development — your NYC-based web & automation partner."
        />
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
          description="You're just one message away from transforming your digital presence. Whether it's a website, AI solution, or government application help — Batistack is here to make it happen."
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
                    Tell Us What You Need
                  </h4>
                  <p className="text-light mb-4">
                    Select the service you’re interested in and describe your
                    goals — we’ll get back to you within 24 hours.
                  </p>

                  {success && <Alert variant="success">{success}</Alert>}
                  {error && <Alert variant="danger">{error}</Alert>}

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label className="text-light">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="text-light">Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="text-light">
                        Service Interested In
                      </Form.Label>
                      <Form.Select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a service...</option>
                        {servicesList.map((srv, i) => (
                          <option key={i} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    {formData.service === "Other" && (
                      <Form.Group className="mb-3">
                        <Form.Label className="text-light">
                          Describe Your Request
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={4}
                          placeholder="Tell us what you need help with..."
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    )}

                    {formData.service !== "Other" && (
                      <Form.Group className="mb-3">
                        <Form.Label className="text-light">Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          name="message"
                          rows={4}
                          placeholder="Share a few details about your project or goals..."
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    )}

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
                        "Send Message "
                      )}
                    </Button>
                    <motion.p
                      className="mt-4 mb-0 text-secondary small"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      style={{ lineHeight: "1.6", fontSize: "0.95rem" }}
                    >
                      At <strong>Batistack Development</strong>, we’re a New
                      York–based technology company helping businesses and
                      individuals build what really matters — from{" "}
                      <strong>custom websites</strong> and{" "}
                      <strong>AI-powered tools</strong> to
                      <strong>automated systems</strong> and{" "}
                      <strong>application support</strong> for programs like
                      SNAP, NYCHA, and DMV. Our mission is to make digital
                      growth simple, affordable, and stress-free — so you can
                      focus on your goals while we handle the tech.
                    </motion.p>
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
                    Join our community and follow Batistack for updates,
                    tutorials, and inspiration.
                  </p>

                  <Row className="mt-4 g-4 justify-content-center">
                    {[
                      {
                        icon: "bi bi-instagram",
                        href: "https://www.instagram.com/bati.stack",
                        color: "#E1306C",
                        label: "Instagram",
                        desc: "Follow our work, team, and projects.",
                      },
                      {
                        icon: "bi bi-linkedin",
                        href: "https://www.linkedin.com/company/batistack",
                        color: "#0077B5",
                        label: "LinkedIn",
                        desc: "Professional updates and industry news.",
                      },
                      {
                        icon: "bi bi-facebook",
                        href: "https://www.facebook.com/profile.php?id=61575947108161",
                        color: "#1877F2",
                        label: "Facebook",
                        desc: "Latest launches and client stories.",
                      },
                      {
                        icon: "bi bi-twitter-x",
                        href: "https://x.com/BatistackDev",
                        color: "#1DA1F2",
                        label: "X (Twitter)",
                        desc: "Tips, trends, and tech insights.",
                      },
                    ].map((social, idx) => (
                      <Col xs={12} md={12} key={idx}>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none d-block"
                          whileHover={{
                            scale: 1.05,
                            y: -5,
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                        >
                          <motion.div
                            className="d-flex flex-column align-items-center p-4 h-100 rounded-4 bg-dark text-light position-relative border border-secondary"
                            style={{
                              cursor: "pointer",
                              overflow: "hidden",
                            }}
                            whileHover={{
                              boxShadow: `0 0 20px ${social.color}55`,
                            }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <motion.div
                              className="position-absolute bottom-0 start-0 w-100"
                              style={{
                                height: "4px",
                                backgroundColor: social.color,
                                opacity: 0,
                              }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.4 }}
                            />

                            <i
                              className={social.icon}
                              style={{
                                fontSize: "2.5rem",
                                color: social.color,
                                marginBottom: "0.6rem",
                              }}
                            ></i>
                            <span className="fw-semibold fs-5 mb-1">
                              {social.label}
                            </span>
                            <p
                              className="small mb-0 text-center text-secondary"
                              style={{ lineHeight: "1.4" }}
                            >
                              {social.desc}
                            </p>
                          </motion.div>
                        </motion.a>
                      </Col>
                    ))}
                  </Row>
                </motion.div>
              </Col>
            </Row>

            <motion.div
              style={{ backgroundColor: "#fff", color: "#000" }}
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
                  From small businesses to full-stack platforms, Batistack helps
                  you create digital systems that grow your brand. Let’s start
                  today.
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
