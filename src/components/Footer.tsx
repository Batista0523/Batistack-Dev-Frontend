import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

  return (
    <>
      <Helmet>
        <meta name="footer" content="Batistack Development Footer Section" />
      </Helmet>

      <footer
        className="text-white pt-5 pb-4"
        style={{
          backgroundColor: "#0d6efd",
          fontFamily:
            "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        }}
      >
        <Container>
          <Row className="gy-4">
            <Col md={4}>
              <h5 className="fw-bold">Batistack Development</h5>
              <p className="small">
                We build digital experiences that help your business grow — fast,
                secure, and made to perform.
              </p>
              <p className="small mb-1">
                <strong>Info:</strong>{" "}
                <a href="mailto:info@batistack.com" className="text-white">
                  info@batistack.com
                </a>
                <br />
                <strong>Support:</strong>{" "}
                <a href="mailto:support@batistack.com" className="text-white">
                  support@batistack.com
                </a>
              </p>
              <p className="small mb-0">
                <strong>Phone:</strong> +1 (929) 733-1600
              </p>
            </Col>

            <Col md={4}>
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <Link to="/services" className="btn btn-outline-light btn-sm rounded-pill px-3 py-1">
                    Services
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/industries" className="btn btn-outline-light btn-sm rounded-pill px-3 py-1">
                    Industries
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/contact" className="btn btn-outline-light btn-sm rounded-pill px-3 py-1">
                    Contact
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/policy" className="btn btn-outline-light btn-sm rounded-pill px-3 py-1">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </Col>

            <Col md={4}>
              <h6 className="fw-bold mb-3">Follow Us</h6>
              <div className="d-flex flex-column gap-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm rounded-pill d-inline-flex align-items-center gap-2 px-3 py-1"
                  >
                    <i className={`bi ${social.icon}`} style={{ fontSize: "1.2rem" }}></i>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </Col>
          </Row>

          <hr className="border-light mt-4" />
          <div className="text-center small">
            &copy; {year} Batistack Development. All rights reserved.
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
