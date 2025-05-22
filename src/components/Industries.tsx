import { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
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
    video: "/images/restaurant.jpg",
    path: "/industries/restaurant",
  },
  {
    title: "Fitness Trainers",
    description:
      "Showcase your programs, offer bookings, and grow your client base with a stunning website.",
    video: "/images/fitness.jpg",
    path: "/industries/fitness",
  },
  {
    title: "Law Firms",
    description:
      "Professional websites that build trust and generate case leads for your law office.",
    image: "/images/law.jpg",
    path: "/industries/lawfirms",
  },
  {
    title: "Plumbing Services",
    description:
      "Let customers contact you easily and view your services and reviews in one place.",
    image: "/images/plumber.jpg",
    path: "/industries/plumber",
  },
  {
    title: "Beauty Salons",
    description:
      "Appointment scheduling, service galleries, and a beautiful layout for your salon.",
    image: "/images/salon.jpg",
    path: "/industries/salon",
  },
];

function Industries() {
  const [query, setQuery] = useState("");

  const filteredIndustries = industries.filter((industry) =>
    industry.title.toLowerCase().includes(query.toLowerCase())
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

      <div
        style={{
          backgroundColor: "#f8f9fa",
          paddingTop: "60px",
          minHeight: "100vh",
        }}
      >
        <Container className="py-5">
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="fw-bold display-5 text-dark">Is This for You?</h1>
            <p className="text-muted fs-5">
              We build custom websites and apps for all kinds of businesses.
              Choose yours and see what we can do.
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

          <Row className="g-4">
            {filteredIndustries.length > 0 ? (
              filteredIndustries.map((item, i) => (
                <Col md={6} lg={4} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={item.path}
                      className="text-decoration-none text-dark"
                      style={{ display: "block" }}
                    >
                      <Card className="industry-card shadow border-0 rounded-4 overflow-hidden h-100">
                        <div className="video-wrapper position-relative">
                          <video
                            src={item.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="industry-video"
                          />
                          <div className="video-overlay d-flex align-items-center justify-content-center">
                            <h5 className="video-title text-white fw-bold m-0 text-center">
                              {item.title}
                            </h5>
                          </div>
                        </div>

                        <Card.Body className="p-4 d-flex flex-column">
                          <Card.Text className="text-muted flex-grow-1">
                            {item.description}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </motion.div>
                </Col>
              ))
            ) : (
              <Col>
                <p className="text-center text-muted fs-5">
                  No business category matches your search.
                </p>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Industries;
