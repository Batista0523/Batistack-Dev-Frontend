import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import InviteVoiceAgent from "./InviteBtn";
import images from "../images";

function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      icon: "bi-instagram",
      href: "https://www.instagram.com/bati.stack",
      name: "Instagram",
    },
    {
      icon: "bi-linkedin",
      href: "https://www.linkedin.com/company/batistack/?viewAsMember=true",
      name: "LinkedIn",
    },
    {
      icon: "bi-facebook",
      href: "https://www.facebook.com/profile.php?id=61575947108161",
      name: "Facebook",
    },
    {
      icon: "bi-twitter",
      href: "https://x.com/BatistackDev",
      name: "Twitter",
    },
  ];

  const handleHover = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.currentTarget.classList.add("bg-black", "text-white", "border-black");
  };

  const handleLeave = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.currentTarget.classList.remove("bg-black", "text-white", "border-black");
  };

  return (
    <>
      <Helmet>
        <meta name="footer" content="Batistack Development Footer Section" />
      </Helmet>

      <footer
        className="text-dark pt-5 pb-4 border-top border-dark"
        style={{
          backgroundColor: "#ffffff",
          fontFamily:
            "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        }}
      >
        <Container>
          <Row className="gy-5 justify-content-between">
            <Col md={4} className="text-center text-md-start">
              <div className="mb-3 d-flex flex-column align-items-center align-items-md-start">
                <div
                  style={{
                    width: "220px",
                    height: "220px",
                    overflow: "hidden",
                    borderRadius: "50%",
                    border: "4px solid #000",
                    marginBottom: "0.75rem",
                  }}
                >
                  <img
                    src={images.logo2}
                    alt="Batistack Logo"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h6 className="fw-bold mb-1">Batistack Development</h6>
                <p className="small text-muted mb-0">
                  NYC Web & AI Solutions — Custom. Fast. Smart.
                </p>
              </div>

              <p className="small">
                We build digital experiences that help your business grow —
                fast, secure, and made to perform.
              </p>
              <p className="small mb-1">
                <strong>Info:</strong>{" "}
                <a href="mailto:info@batistack.com" className="text-dark">
                  info@batistack.com
                </a>
                <br />
                <strong>Support:</strong>{" "}
                <a href="mailto:support@batistack.com" className="text-dark">
                  support@batistack.com
                </a>
              </p>
              <p className="small mb-0">
                <strong>Phone:</strong> +1 (929) 733-1600
              </p>
            </Col>

            <Col md={4} className="text-center text-md-start">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled d-flex flex-column gap-2">
                {[
                  { to: "/contact", label: "Contact" },
                  { to: "/services", label: "Services" },
                  { to: "/speedPage", label: "Web Audit" },
                  { to: "/policy", label: "Privacy Policy" },
                ].map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.to}
                      className="btn btn-outline-dark btn-sm rounded-pill px-3 py-1"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>

            <Col md={4} className="text-center text-md-start">
              <h6 className="fw-bold mb-3">Follow Us</h6>
              <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm rounded-pill d-inline-flex align-items-center gap-2 px-3 py-1"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                  >
                    <i
                      className={`bi ${social.icon}`}
                      style={{ fontSize: "1.2rem" }}
                    ></i>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </Col>
          </Row>

          <hr className="border-dark mt-5" />
          <Row>
            <Col>
              <InviteVoiceAgent variant="dark" />
            </Col>
          </Row>

          <div className="text-center small mt-4">
            &copy; {year} Batistack Development. All rights reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
