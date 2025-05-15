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
          content="contact web developer, website quote, hire web developer, software agency NYC, software company NYC, Batistack contact , contact form"
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
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
          paddingTop: "60px",
        }}
      >
        <Container className="py-5">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="fw-bold display-5">Let’s Get In Touch</h1>
            <p className="text-muted fs-5 mt-2">
              Got a question or ready to start a project? We’re here to help!
            </p>
          </motion.div>

          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <motion.div
                className="p-4 bg-white shadow rounded-3"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {success && <Alert variant="success">{success}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-semibold">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Tell us what you need help with..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      className="rounded-1"
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
                  </div>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactForm;
