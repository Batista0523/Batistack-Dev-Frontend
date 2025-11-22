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
    <section
      style={{
        position: "relative",
        padding: "6rem 0 5rem",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, #0b1120 0%, #020617 60%, #000000 100%)",
        color: "#fff",
      }}
    >
     
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 30% 20%, rgba(66,153,255,0.18), transparent 60%), radial-gradient(circle at 70% 80%, rgba(255,99,146,0.18), transparent 60%)",
          filter: "blur(70px)",
          opacity: 0.6,
          pointerEvents: "none",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

     
      {Array.from({ length: 22 }).map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.45)",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: "blur(1.5px)",
          }}
          animate={{
            y: [0, -14, 0],
            opacity: [0.3, 0.85, 0.35],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 1.8,
          }}
        />
      ))}

      <Container style={{ position: "relative", zIndex: 10 }}>
        <Row className="align-items-center gy-5">
          
        
          <Col md={6} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                width: 280,
                height: 280,
                borderRadius: "999px",
                margin: "0 auto",
                overflow: "hidden",
                border: "2px solid rgba(255,255,255,0.35)",
                backdropFilter: "blur(14px)",
                boxShadow:
                  "0 0 45px rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.5)",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              <motion.img
                src={images.logo2}
                alt="Batistack Logo"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </Col>

          {/* TEXT CONTENT */}
          <Col md={6} className="text-center text-md-start">
            <motion.h1
              className="fw-bold mb-4"
              style={{
                fontSize: "clamp(2.4rem, 4vw, 3.3rem)",
                lineHeight: 1.2,
              }}
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="fs-5 mb-4"
              style={{
                maxWidth: 480,
                color: "#d1d5db",
                lineHeight: 1.6,
                margin: "0 auto 1.5rem",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {description}
            </motion.p>

            {/* BUTTON (not in contact page) */}
            {buttonText && buttonHref && !isContactPage && (
              <div>
                <AnimatedButton text={buttonText} href={buttonHref} />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
