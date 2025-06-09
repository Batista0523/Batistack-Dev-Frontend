import { useState, useEffect,  } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaSearch, FaChartBar, FaRocket } from "react-icons/fa";
import "../global.css";

const industries = [
  {
    title: "HVAC Contractor",
    description:
      "Boost your HVAC business with a site that builds trust, handles leads, and showcases your work.",
    video: "/hvacVid.mp4",
    path: "/industries/hvac",
  },
  {
    title: "Barbershops",
    description:
      "Bring more clients to your chair with online bookings, reviews, and a modern design.",
    video: "/barbershopVid.mp4",
    path: "/industries/barbershop",
  },
  {
    title: "Electrician Contractors",
    description:
      "Let customers find and trust your services through a professional online presence.",
    video: "/electricianVid.mp4",
    path: "/industries/electrician",
  },
  {
    title: "E-Commerce Brands",
    description:
      "Sell your products online with a fast, secure, and custom e-commerce store.",
    video: "/ecommerce.mp4",
    path: "/industries/ecommerce",
  },
  {
    title: "Real Estate Agents",
    description:
      "Attract buyers and sellers with listings, forms, and local SEO built for your market.",
    video: "/realestateagent.mp4",
    path: "/industries/real-estate",
  },
  {
    title: "Restaurants & Cafés",
    description:
      "Online menus, reservations, reviews, and branding — everything your food business needs.",
    video: "/images/restaurant.mp4",
    path: "/industries/restaurant",
  },
];

function Industries() {
  const [query, setQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) setCardsPerView(1);
      else if (window.innerWidth < 992) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const filteredIndustries = industries.filter((industry) =>
    industry.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleNext = () => {
    if (currentIndex + cardsPerView < filteredIndustries.length) {
      setCurrentIndex(currentIndex + cardsPerView);
    }
  };

  const handlePrev = () => {
    if (currentIndex - cardsPerView >= 0) {
      setCurrentIndex(currentIndex - cardsPerView);
    }
  };

  const visibleCards = filteredIndustries.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <>
      <Helmet>
        <title>Web Solutions by Industry | Batistack Development</title>
        <meta
          name="description"
          content="We build optimized websites for businesses across all industries."
        />
      </Helmet>

      <div style={{ backgroundColor: "#f8f9fa", paddingTop: "60px" }}>
        <Container className="py-5">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="fw-bold display-5 text-dark">Tailored Web Solutions</h1>
            <p className="text-muted fs-5">
              We specialize in building customized, high-performing websites for all kinds of businesses.
            </p>
          </motion.div>

          <Row className="mb-4 justify-content-center">
            <Col md={8}>
              <Form.Control
                type="text"
                placeholder="Search your business type..."
                className="p-3 shadow-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Col>
          </Row>

          <div className="position-relative mb-5">
  <Button
    variant="light"
    onClick={handlePrev}
    disabled={currentIndex === 0}
    className="position-absolute top-50 start-0 translate-middle-y z-3 border rounded-circle shadow"
  >
    <FaChevronLeft size={24} />
  </Button>

  <div className="overflow-hidden position-relative" style={{ minHeight: "400px" }}>
    <motion.div
      key={currentIndex} // force re-render on index change for animation
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="d-flex w-100"
      style={{ gap: "24px" }}
    >
      {visibleCards.map((item, i) => (
        <div
          key={i}
          className="flex-shrink-0"
          style={{
            width: `${100 / cardsPerView}%`,
            boxSizing: "border-box",
            transition: "transform 0.5s ease-in-out",
          }}
        >
          <Link to={item.path} className="text-decoration-none text-dark">
            <Card className="shadow border-0 rounded-4 overflow-hidden h-100">
              <div className="position-relative">
                {item.video.endsWith(".mp4") ? (
                  <video
                    src={item.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="w-100 rounded-top"
                  />
                ) : (
                  <img
                    src={item.video}
                    alt={item.title}
                    className="w-100 rounded-top"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                )}
              </div>
              <Card.Body>
                <h5 className="fw-bold mb-2">{item.title}</h5>
                <Card.Text className="text-muted">{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </div>
      ))}
    </motion.div>
  </div>

  <Button
    variant="light"
    onClick={handleNext}
    disabled={currentIndex + cardsPerView >= filteredIndustries.length}
    className="position-absolute top-50 end-0 translate-middle-y z-3 border rounded-circle shadow"
  >
    <FaChevronRight size={24} />
  </Button>
</div>


          <div className="text-center my-5">
            <h2 className="fw-bold">Every Industry Covered</h2>
            <p className="text-muted fs-5">
              Whether you're in real estate, food, fitness, or any other sector — we have a solution for you.
              Every site is tailored to your business, with modern design and smart functionality that drives results.
            </p>
          </div>

          <Row className="text-center my-5">
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow border-0 rounded-4">
                <Card.Body>
                  <FaSearch className="mb-3 text-primary" size={32} />
                  <h5 className="fw-bold mb-3">SEO & Visibility</h5>
                  <Card.Text className="text-muted">
                    Be the first to appear on Google when customers search. Our sites are optimized for local SEO to help you get discovered.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow border-0 rounded-4">
                <Card.Body>
                  <FaChartBar className="mb-3 text-primary" size={32} />
                  <h5 className="fw-bold mb-3">Analytics & Insights</h5>
                  <Card.Text className="text-muted">
                    Understand your audience like never before. Track user behavior and improve your site based on real data.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow border-0 rounded-4">
                <Card.Body>
                  <FaRocket className="mb-3 text-primary" size={32} />
                  <h5 className="fw-bold mb-3">Conversion-Focused Design</h5>
                  <Card.Text className="text-muted">
                    Every page is built to convert visitors into clients with modern visuals, clear calls to action, and fast performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <div className="bg-primary text-white py-5 mt-5 w-100">
          <motion.div
            className="text-center px-3 px-md-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold display-5 mb-3">
              Let’s Build Something Great Together
            </h2>
            <p className="fs-5 mb-4">
              Whether you're starting fresh or scaling fast — Batistack is your team.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link
                to="/contact"
                className="btn btn-light btn-lg px-4 rounded-1"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Industries;
