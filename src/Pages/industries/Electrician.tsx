import { Container, Row, Col, Button } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import "../../global.css";

function Electrician() {
  return (
    <div>
      <Helmet>
        <title>Electrician Contractor Websites | Batistack Development</title>
        <meta
          name="description"
          content="Professional electrician websites that convert visitors into clients. Get found locally and showcase your services with Batistack Development."
        />
        <meta
          name="keywords"
          content="electrician website, electrical contractor site, local electrician SEO, electrician portfolio website, web design for electricians, electrician business online, responsive electrician website, commercial electrical site"
        />
        <meta name="author" content="Batistack Development" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.batistack.com/industries/electrician"
        />

        <meta
          property="og:title"
          content="Electrician Websites Built to Convert | Batistack Development"
        />
        <meta
          property="og:description"
          content="Get more electrical clients with a custom website built to showcase your work and boost local search visibility."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.batistack.com/industries/electrician"
        />
        <meta
          property="og:image"
          content="https://www.batistack.com/images/electrician-preview.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Custom Electrician Websites | Batistack Development"
        />
        <meta
          name="twitter:description"
          content="Batistack creates custom, high-performance websites for electricians. Build trust, attract clients, and grow online."
        />
        <meta
          name="twitter:image"
          content="https://www.batistack.com/images/electrician-preview.jpg"
        />
      </Helmet>

      <Container className="py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-warning">
            Websites for Electricians That Work Hard
          </h1>
          <p className="fs-5 text-muted">
            Show off your electrical work, gain trust fast, and get more calls —
            without lifting a wire.
          </p>
          <Button variant="warning" size="lg" href="/contact">
            Schedule a Free Demo
          </Button>
        </div>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img
              src="/electrician.jpg"
              alt="Electrician at work"
              className="img-fluid rounded-4 shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold text-warning">
              Shockingly Effective Web Presence
            </h3>
            <p className="text-secondary">
              Most electrician sites are outdated or DIY. We give you a pro
              solution with:
            </p>
            <ul className="text-secondary">
              <li>Click-to-call and online estimate forms</li>
              <li>Photo galleries of past jobs</li>
              <li>Google Reviews integration</li>
              <li>Fast, mobile-friendly design</li>
            </ul>
          </Col>
        </Row>

        <Row className="align-items-center flex-md-row-reverse mb-5">
          <Col md={6}>
            <img
              src="/electricianProblem.jpg"
              alt="Electrical issues graphic"
              className="img-fluid rounded-4 shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold text-dark">
              Built to Solve Contractor Challenges
            </h3>
            <p className="text-secondary">
              No time for marketing? That’s where we come in:
            </p>
            <ul className="text-secondary">
              <li>Local SEO to dominate your zip code</li>
              <li>24/7 forms that deliver leads while you’re on the job</li>
              <li>Professional layout that builds trust</li>
              <li>Custom integrations for scheduling & quoting</li>
            </ul>
          </Col>
        </Row>
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <img
              src="/electricianFeat.jpg"
              alt="Electrician website features"
              className="img-fluid rounded-4 shadow"
            />
          </Col>
          <Col md={6}>
            <h3 className="fw-bold text-warning">
              Features That Power Your Business
            </h3>
            <p className="text-secondary">
              Our sites go beyond looks — they’re built to help you work
              smarter, grow faster, and close more jobs.
            </p>
            <ul className="text-secondary">
              <li>Automated response emails for quotes</li>
              <li>Custom service pages for each offering</li>
              <li>Clear call-to-actions that increase inquiries</li>
              <li>Project showcase to win trust instantly</li>
            </ul>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <h2 className="fw-bold">Let’s Wire Up Your Online Presence</h2>
          <p className="fs-5 text-muted">
            Batistack is the toolbelt your electrician business needs online.
          </p>
          <Button variant="dark" size="lg" href="/contact">
            Start My Website Today
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Electrician;
