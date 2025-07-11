import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import images from "../images";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
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

      <div
        style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}
      >
        <Container className="py-5">
          <motion.div
            className="d-flex justify-content-center mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={images.logo}
              alt="Batistack Logo"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "160px",
                height: "160px",
                objectFit: "cover",
                border: "4px solid #0d6efd",
              }}
            />
          </motion.div>

          <Row className="justify-content-center">
            <Col md={6} lg={5}>
              <motion.div
                className="p-4 bg-dark rounded-3 shadow"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="fw-bold text-center text-white mb-4">
                  Login to <span className="text-primary">Dashboard</span>
                </h3>

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="rounded-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-light">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="rounded-2"
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 rounded-2 fw-semibold"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </Form>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default LoginPage;
