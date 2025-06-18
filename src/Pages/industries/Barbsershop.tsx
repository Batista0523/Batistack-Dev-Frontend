import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "../../global.css";

function Barbershop() {
  return (
    <div className="barbershop-page">
      <Helmet>
        <title>Barbershop Website Design | Batistack Development</title>
        <meta
          name="description"
          content="Modern, stylish websites for barbershops that attract more clients, showcase your work, and let customers book online. Built by Batistack Development."
        />
        <meta
          name="keywords"
          content="barbershop website, barber booking site, online appointments for barbers, barber portfolio, barber SEO, hair stylist website, barber web design, local barber site"
        />
        <meta name="author" content="Batistack Development" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.batistack.com/industries/barbershop"
        />

        <meta
          property="og:title"
          content="Barbershop Websites with Style | Batistack Development"
        />
        <meta
          property="og:description"
          content="Custom websites for barbers ready to grow. Let clients book online, showcase your skills, and stand out in your local area."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.batistack.com/industries/barbershop"
        />
        <meta
          property="og:image"
          content="https://www.batistack.com/images/barbershop-preview.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Modern Barbershop Websites | Batistack"
        />
        <meta
          name="twitter:description"
          content="Websites made for barbers to show off their skills, get more bookings, and boost their online presence."
        />
        <meta
          name="twitter:image"
          content="https://www.batistack.com/images/barbershop-preview.jpg"
        />
      </Helmet>

      <Container className="py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark">Websites That Make You Look Sharp</h1>
          <p className="fs-5 text-muted">
            From fades to full bookings — we help barbers stand out online with premium web design.
          </p>
          <Button variant="dark" size="lg" href="/contact">
            Book a Free Demo
          </Button>
        </div>

        <Row className="align-items-center section">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/barbershoptHero.jpg"
              alt="Barbershop digital experience"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "380px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold text-dark">Craft Meets Conversion</h3>
            <p className="text-secondary">
              Your haircut speaks volumes — so should your website. We bring clean visuals, effective structure, and modern tools to give you an online edge.
            </p>
            <ul className="text-secondary">
              <li>Easy navigation tailored to mobile users</li>
              <li>Designs that reflect your shop’s personality</li>
              <li>Trust-building testimonials and integrations</li>
              <li>Pages optimized for high conversion</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center flex-md-row-reverse section">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/barberFix.jpg"
              alt="Digital scheduling for barbers"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold text-primary">Seamless Scheduling, Less Stress</h3>
            <p className="text-secondary">
              From last-minute cancellations to missed appointments — we streamline it all with smart automation.
            </p>
            <ul className="text-secondary">
              <li>Real-time availability with auto-sync</li>
              <li>Automated text/email reminders</li>
              <li>Deposit & rescheduling system built-in</li>
              <li>One-click booking interface</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center section">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/barberFeat.jpg"
              alt="Barbershop loyalty features"
              className="img-fluid rounded-4 shadow"
              style={{ maxHeight: "380px", objectFit: "cover" }}
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold text-dark">Features That Keep Clients Coming Back</h3>
            <p className="text-secondary">
              It’s not just about booking once — it’s about building a loyal base. We help you nurture that bond.
            </p>
            <ul className="text-secondary">
              <li>Personalized client dashboards</li>
              <li>Service history tracking and rebooking</li>
              <li>Exclusive style previews and product promos</li>
              <li>Smart forms for custom requests</li>
            </ul>
          </Col>
        </Row>

        <div className="text-center final-cta mt-5">
          <h2 className="fw-bold">Put Your Business in the Spotlight</h2>
          <p className="fs-5">
            Whether you're a solo barber or managing a full team, we’ll help you own your online presence.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Let’s Talk Today
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Barbershop;
