import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import images from "../images";

function Footer() {
  const year = new Date().getFullYear();

  const socialFloating = [
    {
      icon: "bi-linkedin",
      href: "https://www.linkedin.com/company/batistack/",
      pos: { top: "8%", left: "8%" },
      delay: 0.2,
    },
    {
      icon: "bi-instagram",
      href: "https://www.instagram.com/bati.stack",
      pos: { top: "8%", left: "50%" },
      delay: 0.4,
    },
    {
      icon: "bi-twitter",
      href: "https://x.com/BatistackDev",
      pos: { bottom: "14%", left: "20%", transform: "translateX(-50%)" },
      delay: 0.6,
    },
    {
      icon: "bi-facebook",
      href: "https://www.facebook.com/profile.php?id=61575947108161",
      pos: { top: "60%", left: "60%" },
      delay: 0.8,
    },
  ];

  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, #0b1120 0%, #020617 55%, #000000 100%)",
        color: "#e5e7eb",
        paddingTop: "5rem",
        paddingBottom: "6rem",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* BACKGROUND WAVES */}
      <motion.div
        style={{
          position: "absolute",
          top: "-40%",
          left: "-20%",
          width: "180%",
          height: "160%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
          filter: "blur(90px)",
          opacity: 0.35,
          pointerEvents: "none",
        }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {Array.from({ length: 25 }).map((_, i) => {
        const top = Math.random() * 90 + "%";
        const left = Math.random() * 100 + "%";

        return (
          <div key={i}>
            {/* NODE */}
            <motion.div
              style={{
                position: "absolute",
                width: 4,
                height: 4,
                borderRadius: "999px",
                background: "rgba(255,255,255,0.75)",
                top,
                left,
                filter: "blur(1px)",
              }}
              animate={{ opacity: [0.2, 0.9, 0.2] }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* CONNECTION LINE */}
            <motion.div
              style={{
                position: "absolute",
                width: "80px",
                height: "1px",
                top,
                left,
                transformOrigin: "left center",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.45) 50%, rgba(255,255,255,0.0) 100%)",
              }}
              animate={{
                rotate: [0, Math.random() * 90, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        );
      })}

      <div className="floating-social-desktop">
        {socialFloating.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-card-desktop"
            style={{
              position: "absolute",
              padding: "12px 16px",
              borderRadius: "16px",
              background: "rgba(15,23,42,0.96)",
              border: "1px solid rgba(148,163,184,0.5)",
              backdropFilter: "blur(16px)",
              fontSize: "1.1rem",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              zIndex: 50,
              pointerEvents: "auto",
              ...s.pos,
            }}
            animate={{ y: [-6, 4, -6] }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.delay,
            }}
          >
            <i className={`bi ${s.icon}`} style={{ fontSize: "1.35rem" }} />
            <span className="desktop-follow-text">Follow</span>
          </motion.a>
        ))}
      </div>

      <div className="floating-social-mobile">
        {socialFloating.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-social-icon"
            animate={{ y: [-4, 2, -4] }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <i className={`bi ${s.icon}`} />
          </motion.a>
        ))}
      </div>

      <Container style={{ position: "relative", zIndex: 10 }}>
        <Row className="gy-5 justify-content-between align-items-start">
          <Col md={5} className="text-center text-md-start">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                padding: 24,
                borderRadius: 24,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.25)",
                backdropFilter: "blur(18px)",
                boxShadow:
                  "0 8px 32px rgba(0,0,0,0.45), inset 0 0 18px rgba(255,255,255,0.14)",
              }}
            >
              <div
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: "999px",
                  overflow: "hidden",
                  margin: "0 auto 1rem",
                  border: "2px solid rgba(255,255,255,0.45)",
                  boxShadow: "0 0 45px rgba(255,255,255,0.12)",
                }}
              >
                <img
                  src={images.logo2}
                  alt="Batistack Logo"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h5 className="fw-bold mb-1">Batistack Development</h5>
              <p
                className="small"
                style={{ color: "#cbd5e1", lineHeight: "1.5" }}
              >
                NYC Web · AI · Applications Premium digital engineering for
                businesses that demand excellence.
              </p>
            </motion.div>

            <p className="small mt-3" style={{ color: "#94a3b8" }}>
              info@batistack.com
              <br />
              support@batistack.com
              <br />
              +1 (929) 733-1600
            </p>
          </Col>

          <Col md={5} className="text-center text-md-start">
            <motion.h6
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="fw-bold text-white mb-3"
            >
              Start a Project
            </motion.h6>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                padding: 24,
                borderRadius: 22,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  width: 90,
                  height: 90,
                  borderRadius: "999px",
                  overflow: "hidden",
                  border: "2px solid rgba(255,255,255,0.4)",
                  boxShadow: "0 0 35px rgba(255,255,255,0.18)",
                }}
                animate={{ y: [-6, 6, -6] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={images.logo2}
                  alt="avatar"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </motion.div>

              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "0.95rem",
                  lineHeight: "1.55",
                  marginBottom: "1.2rem",
                }}
              >
                Let’s design a system — website, AI or workflow — that pushes
                your business to the next level.
              </p>

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                style={{
                  display: "inline-block",
                  padding: "12px 22px",
                  borderRadius: "999px",
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.06))",
                  border: "1px solid rgba(255,255,255,0.22)",
                  backdropFilter: "blur(10px)",
                  color: "#e5e7eb",
                  textDecoration: "none",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                Book a Free Consultation →
              </motion.a>
            </motion.div>
          </Col>
        </Row>

        <div
          className="text-center small mt-5"
          style={{ color: "#94a3b8", marginTop: "3rem" }}
        >
          © {year} Batistack Development — All Rights Reserved.
        </div>
      </Container>

      <style>{`
        /* DESKTOP & TABLET */
        @media (min-width: 769px) {
          .floating-social-desktop { display: block; }
          .floating-social-mobile { display: none !important; }
          .desktop-follow-text {
            font-size: 0.78rem;
            color: #e5e7eb;
            letter-spacing: 0.03em;
            opacity: 0.9;
            font-weight: 500;
          }
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .floating-social-desktop { display: none !important; }

          .floating-social-mobile {
            display: flex !important;
            justify-content: center;
            gap: 18px;
            position: absolute;
            top: 14px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 99999;
            padding: 10px 0;
            pointer-events: auto !important;
          }

          .mobile-social-icon {
            width: 46px;
            height: 46px;
            border-radius: 999px;
            background: rgba(255,255,255,0.12);
            border: 1px solid rgba(255,255,255,0.28);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.45rem;
            color: #fff;
            backdrop-filter: blur(10px);
            pointer-events: auto !important;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
