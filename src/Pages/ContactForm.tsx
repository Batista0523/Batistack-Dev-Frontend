// src/components/ContactForm.tsx
import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Alert, Container } from "react-bootstrap";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [source, setSource] = useState("Website");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
const url = import.meta.env.VITE_BASE_URL
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

      setSuccess("Your message has been sent successfully.");
      setName("");
      setEmail("");
      setMessage("");
      setSource("Website");
    } catch (err) {
      setError("Failed to send your message. Please try again later.");
      console.error("Error creating lead:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-4">
      <h3>Contact Us</h3>
      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Submit"}
        </Button>
      </Form>
    </Container>
  );
}

export default ContactForm;
