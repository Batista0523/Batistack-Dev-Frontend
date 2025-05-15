import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/dashboardPage");
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <>
    <Helmet>
      <title>Admin Login | Batistack Development</title>
      <meta
        name="description"
        content="Secure admin login for Batistack Development's internal dashboard. Access analytics, leads, and project data."
      />
      <meta
        name="keywords"
        content="admin login, batistack dashboard, secure login, client portal, website admin panel"
      />
      <meta name="author" content="Batistack Development" />
      <meta property="og:title" content="Batistack Admin Login" />
      <meta
        property="og:description"
        content="Login to Batistack Development’s admin dashboard to manage data and view performance."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.batistack.com/login" />
    </Helmet>
    
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <Row className="w-100" style={{ maxWidth: "420px" }}>
        <Col>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-4 shadow-sm border-0 rounded-4">
              <h3 className="mb-3 text-center fw-bold text-dark">
                Login to <span style={{ color: "#0d6efd" }}>Dashboard</span>
              </h3>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-3"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="rounded-3"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-100 rounded-3 fw-semibold"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </Form>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default LoginPage;
