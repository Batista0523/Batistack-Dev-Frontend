import { useTrafficTracker } from "../hook/useTrafficTracker";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import images from "../images";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Helmet } from "react-helmet-async";

import Footer from "../components/Footer";

function Services() {
  useTrafficTracker("page_view", "/services");

  return (
    <>
    
      <Helmet>
        <title>Website & AI Development Services | Batistack Development</title>
        <meta
          name="description"
          content="Custom websites, web apps, AI tools, branding, SEO, e-commerce, and content — all-in-one solutions to grow your business with Batistack Development."
        />
        <meta
          name="keywords"
          content="website development, custom web apps, AI chatbot tools, SEO services, branding, content creation, e-commerce websites, Batistack Development, NYC tech agency"
        />
        <meta name="author" content="Batistack Development" />
        <meta
          property="og:title"
          content="Website & AI Development Services | Batistack Development"
        />
        <meta
          property="og:description"
          content="Get a website that works for you. We build fast, secure, and intelligent solutions — from design to deployment, with AI tools, video content, and SEO."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.batistack.com/services" />
        <meta
          property="og:image"
          content="https://www.batistack.com/preview-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Website & AI Development Services | Batistack"
        />
        <meta
          name="twitter:description"
          content="Custom websites, AI automation, SEO, branding & more — everything your business needs online."
        />
        <meta
          name="twitter:image"
          content="https://www.batistack.com/preview-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Full-Service Web & AI Development",
            provider: {
              "@type": "Organization",
              name: "Batistack Development",
              url: "https://www.batistack.com",
              sameAs: [
                "https://www.linkedin.com/company/batistack",
                "https://www.instagram.com/batistack",
                "https://twitter.com/batistackdev",
              ],
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 40.7128,
                longitude: -74.006,
              },
              geoRadius: 10000,
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceUrl: "https://www.batistack.com/contact",
            },
            description:
              "Professional web development, branding, AI tools, SEO, and growth services tailored to startups, small businesses, and local brands.",
          })}
        </script>
      </Helmet>
      <div style={{ backgroundColor: "#f8f9fa", overflowX: "hidden" }}>
        <div className="py-5 text-center bg-white">
          <Container>
            <motion.h1
              className="display-4 fw-bold text-dark"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            Think It, Code It, Launch It.
            </motion.h1>
              
                <motion.img
                  src={images.logo}
                  alt="Batistack Logo"
                  className="img-fluid rounded-circle shadow-lg"
                  style={{
                    width: "320px",
                    height: "320px",
                    objectFit: "cover",
                    border: "6px solid #fff",
                  }}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
           
            <motion.p
              className="lead text-muted mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Websites. Web Apps. AI Agents. Visual Content. Digital Growth —
              All Built for You.
            </motion.p>
          </Container>
        </div>

        {/* Services Grid */}
        <div className="py-5" style={{ backgroundColor: "#e9ecef" }}>
          <Container>
            <motion.div
              className="text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5">Our Core Services</h2>
              <p className="text-muted fs-5 mt-2">
                Everything your business needs — all in one place. From launch
                to growth, we’ve got you.
              </p>
            </motion.div>

            <Row className="g-4">
              {[
                {
                  icon: "bi-laptop",
                  color: "text-primary",
                  title: "Business Websites",
                  desc: "Responsive, modern websites designed to position your brand online with confidence and professionalism.",
                  tag: "Popular",
                },
                {
                  icon: "bi-kanban-fill",
                  color: "text-danger",
                  title: "Custom Web Apps",
                  desc: "Streamline operations and solve complex problems with powerful tools tailored to your workflow and goals.",
                },
                {
                  icon: "bi-brush-fill",
                  color: "text-warning",
                  title: "UI/UX Design",
                  desc: "Intuitive layouts, engaging interfaces, and a design experience that keeps your users coming back.",
                },
                {
                  icon: "bi-bar-chart-fill",
                  color: "text-success",
                  title: "Analytics & SEO",
                  desc: "Dominate search results and discover what matters most to your visitors using SEO and real-time analytics.",
                },
                {
                  icon: "bi-shield-check",
                  color: "text-info",
                  title: "Security & Hosting",
                  desc: "SSL, firewalls, backups, and lightning-fast servers — everything your site needs to stay protected and online 24/7.",
                },
                {
                  icon: "bi-phone",
                  color: "text-purple",
                  title: "Mobile Ready",
                  desc: "From smartphones to tablets to desktops — your site will adapt perfectly to every screen size and device.",
                },
                {
                  icon: "bi-lightbulb",
                  color: "text-warning",
                  title: "Business Strategy & Consulting",
                  desc: "We help you map the digital side of your business and turn ideas into profitable solutions.",
                },
                {
                  icon: "bi-cart",
                  color: "text-success",
                  title: "E-Commerce Solutions",
                  desc: "Sell online with beautiful, secure, and optimized stores integrated with Stripe, PayPal, and more.",
                },
                {
                  icon: "bi-megaphone",
                  color: "text-danger",
                  title: "Marketing Automation",
                  desc: "Reach your audience through email, social media, and campaigns that convert — on autopilot.",
                },
              ].map((service, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="h-100 text-center shadow-sm border-0 px-2 py-3"
                      style={{ minHeight: "100%" }}
                    >
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                          <i
                            className={`bi ${service.icon} ${service.color} mb-3`}
                            style={{ fontSize: "2.5rem" }}
                          ></i>
                          <Card.Title className="fw-bold">
                            {service.title}{" "}
                            {service.tag && (
                              <Badge bg="primary" className="ms-1">
                                {service.tag}
                              </Badge>
                            )}
                          </Card.Title>
                          <Card.Text className="text-muted">
                            {service.desc}
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

      
        <div className="py-5 bg-white">
          <Container>
            <Row className="align-items-center g-5">
              <Col md={6}>
                <motion.div
                  className="bg-light p-4 rounded shadow-sm h-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="fw-bold mb-3">
                    <i className="bi bi-camera-video-fill text-primary me-2"></i>
                    Video & Photo Services
                    <Badge bg="dark" className="ms-2">
                      On-site Available
                    </Badge>
                  </h3>
                  <p className="text-muted fs-5">
                    Have your own media? Great — we’ll use it. Need custom
                    content? We visit your location and capture stunning visuals
                    for your brand. NYC, NJ, CT & Long Island only.
                  </p>
                </motion.div>
              </Col>

              <Col md={6}>
                <motion.div
                  className="bg-light p-4 rounded shadow-sm h-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="fw-bold mb-3">
                    <i className="bi bi-robot text-success me-2"></i>
                    AI Agent & Tool Creation
                    <Badge bg="success" className="ms-2">
                      AI-Enhanced
                    </Badge>
                  </h3>
                  <p className="text-muted fs-5">
                    Automate your customer service, scheduling, or lead gen with
                    smart AI tools built just for you. Voice assistants,
                    chatbots, and more.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
  
        <div className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5">More Ways We Help You Grow</h2>
              <p className="text-muted fs-5 mt-2">
                From branding to automation — we support your business in every
                step of the digital journey.
              </p>
            </motion.div>

            <Row className="g-4">
              {[
                {
                  icon: "bi-palette2",
                  color: "text-primary",
                  title: "Branding & Identity",
                  desc: "We craft unique visual identities that reflect your values and connect with your audience — from logos to full brand kits.",
                },
                {
                  icon: "bi-tools",
                  color: "text-warning",
                  title: "Ongoing Support",
                  desc: "Keep your platform running smoothly with monthly updates, backups, and priority support.",
                },
                {
                  icon: "bi-people",
                  color: "text-success",
                  title: "Lead Management & CRM",
                  desc: "Track leads, follow up faster, and boost conversions with custom tools or CRM integrations.",
                },
                {
                  icon: "bi-pencil-square",
                  color: "text-dark",
                  title: "Content & Copywriting",
                  desc: "We write persuasive, SEO-optimized content that turns traffic into customers — across websites, blogs, and ads.",
                },
                {
                  icon: "bi-mortarboard",
                  color: "text-purple",
                  title: "Training & Handoff",
                  desc: "We give you easy-to-follow guides and support so your team can manage the site with confidence.",
                },
                {
                  icon: "bi-bar-chart",
                  color: "text-info",
                  title: "Conversion Optimization",
                  desc: "We refine funnels, calls to action, and page structure to help turn more visitors into real customers.",
                },
              ].map((item, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-100 text-center shadow-sm border-0 px-3 py-4">
                      <Card.Body className="d-flex flex-column justify-content-between">
                        <div>
                          <i
                            className={`bi ${item.icon} ${item.color} mb-3`}
                            style={{ fontSize: "2.5rem" }}
                          ></i>
                          <Card.Title className="fw-bold">
                            {item.title}
                          </Card.Title>
                          <Card.Text className="text-muted">
                            {item.desc}
                          </Card.Text>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>

  
        <Footer/>
      </div>


     
    </>
  );
}

export default Services;
