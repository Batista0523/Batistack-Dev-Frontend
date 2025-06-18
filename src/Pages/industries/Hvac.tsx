import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "../../global.css";

function Hvac() {
  return (
    <div>
      <Helmet>
        <title>Custom HVAC Contractor Websites | Batistack Development</title>
        <meta
          name="description"
          content="Professional HVAC websites designed to convert. Book more jobs, build trust, and dominate your local market with Batistack Development."
        />
        <meta
          name="keywords"
          content="HVAC website, HVAC contractor website, heating and cooling website, HVAC web design, local HVAC SEO, HVAC lead generation, custom HVAC website, HVAC digital marketing, air conditioning site, HVAC appointment booking, responsive HVAC site"
        />
        <meta name="author" content="Batistack Development" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.batistack.com/industries/hvac"
        />

        <meta
          property="og:title"
          content="Custom HVAC Contractor Websites | Batistack Development"
        />
        <meta
          property="og:description"
          content="Get more HVAC leads and look professional with a custom-built site by Batistack. Optimized for SEO, speed, and trust."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.batistack.com/industries/hvac"
        />
        <meta
          property="og:image"
          content="https://www.batistack.com/images/hvac-preview.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom HVAC Websites That Convert | Batistack"
        />
        <meta
          name="twitter:description"
          content="Modern HVAC websites built for contractors ready to grow. Get a free demo today."
        />
        <meta
          name="twitter:image"
          content="https://www.batistack.com/images/hvac-preview.jpg"
        />
      </Helmet>

      <Container className="py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">
            Everything an HVAC Business Needs
          </h1>
          <p className="fs-5 text-muted">
            Designed for contractors who care about quality. From lead
            generation to showcasing your work, we build websites that work hard
            like you do.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Get a Free Demo
          </Button>
        </div>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img
              src="/hvacHero.jpg"
              alt="Cooling System"
              className="img-fluid rounded-4 shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold text-info">
              Cooling Section: Built to Keep You Cool
            </h3>
            <p className="text-secondary">
              Many HVAC sites are outdated and lack clear messaging. We create
              clean, modern designs that load fast, communicate trust, and
              convert new clients.
            </p>
            <ul className="text-secondary">
              <li>Mobile-friendly and fast loading</li>
              <li>Book appointments directly from your site</li>
              <li>Highlight seasonal specials and services</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center flex-md-row-reverse mb-5">
          <Col md={6}>
            <img
              src="/heat.jpg"
              alt="Heating System"
              className="img-fluid rounded-4 shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold text-danger">
              Heating Section: Fire Up Your Business
            </h3>
            <p className="text-secondary">
              Turn up the heat on your competition with a site that showcases
              your past work, builds instant trust, and drives real calls.
            </p>
            <ul className="text-secondary">
              <li>Testimonials and before-after photos</li>
              <li>Google Reviews embedded</li>
              <li>Instant call buttons and online scheduling</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img
              src="/hvacStruggle.jpg"
              alt="HVAC Challenges"
              className="img-fluid rounded-4 shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold text-primary">
              Daily Contractor Struggles? We Solve Them.
            </h3>
            <p className="text-secondary">
              HVAC owners deal with outdated contact forms, low visibility, and
              generic design. At Batistack, we understand this and go beyond the
              basics:
            </p>
            <ul className="text-secondary">
              <li>Online quoting tools & automated responses</li>
              <li>Localized SEO to dominate your service area</li>
              <li>Project portfolios to build instant trust</li>
              <li>Professional emails that match your domain</li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center my-5">
          <Col>
            <h2 className="fw-bold">What Makes Our HVAC Sites Better?</h2>
            <p className="fs-5 text-muted">
              • We design for conversions, not just looks.
              <br />
              • Our websites speak directly to homeowners & commercial clients.
              <br />• Integrated tools help you grow without more work.
            </p>
            <Button variant="danger" size="lg" href="/contact">
              Build My HVAC Website
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hvac;
