import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaChartBar,
  FaRocket,
} from "react-icons/fa";
import "../global.css";
import Footer from "./Footer";

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
          content="We build optimized websites for HVAC contractors, barbershops, electricians, ecommerce stores, law firms, restaurants, plumbers, salons, gyms, and real estate professionals."
        />
        <meta name="author" content="Batistack Development" />

        <meta
          name="keywords"
          content="hvac contractor website, heating and cooling web design, air conditioning website, HVAC lead generation"
        />
        <meta
          name="description"
          content="Get more HVAC leads with a fast, professional website that builds trust and shows off your services."
        />

        <meta
          name="keywords"
          content="barbershop website, online booking for barbers, barber portfolio, local barber site design"
        />
        <meta
          name="description"
          content="Attract more clients to your chair with a stylish barbershop site featuring booking, reviews, and location."
        />

        <meta
          name="keywords"
          content="electrician website, licensed electrician web design, contractor site for electricians, electrical repair website"
        />
        <meta
          name="description"
          content="Showcase your electrical services with a professional site that builds confidence and converts visitors into clients."
        />

        <meta
          name="keywords"
          content="ecommerce development, custom online store, Shopify alternatives, secure product website"
        />
        <meta
          name="description"
          content="Sell your products with a fast, modern, secure ecommerce website tailored for your brand."
        />

        <meta
          name="keywords"
          content="real estate website design, agent listing site, property website, realtor lead generation"
        />
        <meta
          name="description"
          content="Capture real estate leads and showcase your listings with a sleek, mobile-optimized website."
        />

        <meta
          name="keywords"
          content="restaurant website, online menu, food delivery website, reservation system"
        />
        <meta
          name="description"
          content="Give diners a taste of your brand with a beautiful website that shows your menu and handles reservations."
        />

        <meta
          name="keywords"
          content="plumber website design, plumbing contractor site, emergency plumber online, local plumber web design"
        />
        <meta
          name="description"
          content="Turn local searches into real jobs with a plumbing site that shows your skills and earns trust fast."
        />

        <meta
          name="keywords"
          content="gym website, personal trainer website, fitness booking platform, online fitness presence"
        />
        <meta
          name="description"
          content="Build your fitness brand online with a powerful site for bookings, programs, and class schedules."
        />

        <meta
          name="keywords"
          content="salon website, booking system for salon, beauty website design, hair and spa web design"
        />
        <meta
          name="description"
          content="Help clients book your beauty services with a polished, mobile-friendly website that reflects your brand."
        />

        <meta
          name="keywords"
          content="law firm website design, attorney website, legal services website, professional lawyer site"
        />
        <meta
          name="description"
          content="Make a strong first impression with a credible law firm website that builds client confidence and converts visitors."
        />

        <meta
          property="og:title"
          content="Industry Websites That Convert | Batistack Development"
        />
        <meta
          property="og:description"
          content="Explore custom websites for every business—from barbershops and HVAC to real estate and ecommerce. Designed to grow your brand and win clients."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.batistack.com/industries"
        />
        <meta
          property="og:image"
          content="https://www.batistack.com/images/industries-preview.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Websites by Industry | Batistack Development"
        />
        <meta
          name="twitter:description"
          content="From electricians to salons, Batistack builds tailored websites that generate trust, leads, and growth."
        />
        <meta
          name="twitter:image"
          content="https://www.batistack.com/images/industries-preview.jpg"
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
            <h1 className="fw-bold display-5 text-dark">
              Tailored Web Solutions
            </h1>
            <p className="text-muted fs-5">
              We specialize in building customized, high-performing websites for
              all kinds of businesses.
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

            <div
              className="overflow-hidden position-relative"
              style={{ minHeight: "400px" }}
            >
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
                    <Link
                      to={item.path}
                      className="text-decoration-none text-dark"
                    >
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
                          <Card.Text className="text-muted">
                            {item.description}
                          </Card.Text>
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
              disabled={
                currentIndex + cardsPerView >= filteredIndustries.length
              }
              className="position-absolute top-50 end-0 translate-middle-y z-3 border rounded-circle shadow"
            >
              <FaChevronRight size={24} />
            </Button>
          </div>

          <div className="text-center my-5">
            <h2 className="fw-bold">Every Industry Covered</h2>
            <p className="text-muted fs-5">
              Whether you're in real estate, food, fitness, or any other sector
              — we have a solution for you. Every site is tailored to your
              business, with modern design and smart functionality that drives
              results.
            </p>
          </div>

          <Row className="text-center my-5">
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow border-0 rounded-4">
                <Card.Body>
                  <FaSearch className="mb-3 text-primary" size={32} />
                  <h5 className="fw-bold mb-3">SEO & Visibility</h5>
                  <Card.Text className="text-muted">
                    Be the first to appear on Google when customers search. Our
                    sites are optimized for local SEO to help you get
                    discovered.
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
                    Understand your audience like never before. Track user
                    behavior and improve your site based on real data.
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
                    Every page is built to convert visitors into clients with
                    modern visuals, clear calls to action, and fast performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default Industries;
