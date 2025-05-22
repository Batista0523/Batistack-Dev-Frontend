import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function UnderConstruction() {
  return (
    <>
      <Helmet>
        <title>Page Under Construction | Batistack Development</title>
        <meta
          name="description"
          content="This page is currently under construction. Check back soon for exciting updates!"
        />
      </Helmet>

      <div
        style={{
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col md={8}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="display-4 fw-bold mb-3 text-primary">
                  🚧 This Page is Under Construction
                </h1>
                <p className="fs-5 text-muted mb-4">
                  We’re working hard to bring you something amazing. Check back soon or explore the rest of our site in the meantime.
                </p>
                <Link to="/">
                  <Button variant="outline-primary" size="lg" className="rounded-pill">
                    Back to Home
                  </Button>
                </Link>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default UnderConstruction;
