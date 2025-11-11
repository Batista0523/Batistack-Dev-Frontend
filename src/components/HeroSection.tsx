import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import AnimatedButton from "./Button";
import images from "../images";

interface HeroSectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

function HeroSection({
  title,
  description,
  buttonText,
  buttonHref,
}: HeroSectionProps) {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <motion.img
              src={images.logo2}
              alt="Batistack Logo"
              className="rounded-circle border border-primary mx-auto shadow-lg"
                  style={{
                    width: 310,
                    height: 290,
                    overflow: "hidden",
                    background: "#fff",
                  }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </Col>
          <Col md={6} className="text-center text-md-start">
            <motion.h1
              className="fw-bold display-4 mb-3"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h1>
            <motion.p
              className="fs-5 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {description}
            </motion.p>
            {buttonText && buttonHref && !isContactPage && (
              <AnimatedButton text={buttonText} href={buttonHref} />
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
