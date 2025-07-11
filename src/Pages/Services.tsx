
import { useTrafficTracker } from "../hook/useTrafficTracker";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import images from "../images";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

function Services() {
  useTrafficTracker("page_view", "/services");

  const coreServices = [
    {
      title: "Web Design",
      icon: "bi-layout-text-window-reverse",
      desc: "Visually stunning and user-focused websites crafted to convert visitors into clients.",
    },
    {
      title: "Custom Apps",
      icon: "bi-kanban",
      desc: "Streamline your operations with tailor-made applications for your specific business needs.",
    },
    {
      title: "AI Integration",
      icon: "bi-cpu",
      desc: "Add intelligent automation to your site with custom AI tools and assistants.",
    },
    {
      title: "SEO & Analytics",
      icon: "bi-bar-chart-line",
      desc: "Rank higher and understand your users with real-time SEO and performance tracking.",
    },
    {
      title: "Hosting & Security",
      icon: "bi-shield-lock",
      desc: "Stay protected and online 24/7 with secure hosting, firewalls, and backups.",
    },
    {
      title: "E-Commerce",
      icon: "bi-bag-check",
      desc: "Launch a beautiful, optimized store to sell your products online with ease.",
    },
    {
      title: "Content & Copy",
      icon: "bi-pencil-square",
      desc: "We write content that communicates clearly, sells confidently, and ranks with SEO.",
    },
    {
      title: "Branding",
      icon: "bi-palette",
      desc: "Develop a memorable and professional brand identity that reflects your mission.",
    },
    {
      title: "CRM Tools",
      icon: "bi-person-badge",
      desc: "Manage leads, track interactions, and grow relationships with CRM integration.",
    },
  ];

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

      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          overflowX: "hidden",
          fontFamily:
            "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        }}
      >
        <section className="py-5">
  <Container>
    <motion.div
      className="d-flex justify-content-center mb-4"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img
        src={images.logo}
        alt="Batistack Logo"
        className="img-fluid rounded-circle shadow"
        style={{
          width: "200px",
          height: "200px",
          objectFit: "cover",
          border: "6px solid #fff",
        }}
      />
    </motion.div>

    <motion.h1
      className="fw-bold display-4 text-center mb-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Think It. Code It. Launch It.
    </motion.h1>

    <motion.p
      className="fs-5 text-light text-center mb-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      Websites. Web Apps. AI Agents. Visual Content. Digital Growth — All Built for You.
    </motion.p>
  </Container>
</section>


        <section className="py-5 bg-dark">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5 text-white">
                Our Core <span className="text-primary">Services</span>
              </h2>
              <p className="fs-5 text-light mt-2">
                Custom-built solutions to launch, grow, and scale your digital
                presence.
              </p>
            </motion.div>
            <Row className="g-4">
              {coreServices.map((service, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="h-100 p-4 rounded bg-black shadow text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i
                      className={`bi ${service.icon} text-primary mb-3`}
                      style={{ fontSize: "2rem" }}
                    ></i>
                    <h5 className="fw-bold text-white mb-2">{service.title}</h5>
                    <p className="text-light">{service.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-black">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5 text-white">
                Specialized <span className="text-primary">Solutions</span>
              </h2>
              <p className="fs-5 text-light">
                From custom dashboards to media content and AI automation — our
                tools are designed to boost performance and growth.
              </p>
            </motion.div>
            <Row className="g-4">
              {[
                {
                  title: "AI Agents & Chatbots",
                  desc: "Automate customer support, lead capture, and scheduling with intelligent AI-driven voice and chat tools.",
                  icon: "bi-robot",
                },
                {
                  title: "On-Site Media",
                  desc: "Professional video and photo services shot at your location to enhance your website and brand image.",
                  icon: "bi-camera-video",
                },
                {
                  title: "Conversion Funnels",
                  desc: "Strategic landing pages, lead magnets, and CTAs optimized to turn visitors into customers.",
                  icon: "bi-graph-up-arrow",
                },
                {
                  title: "Lead Generation Tools",
                  desc: "Custom forms, quizzes, and integrations that help you collect, qualify, and convert more leads.",
                  icon: "bi-person-lines-fill",
                },
                {
                  title: "Custom Dashboards",
                  desc: "Monitor KPIs, website stats, and business performance with real-time, personalized admin dashboards.",
                  icon: "bi-speedometer2",
                },
                {
                  title: "Multilingual Interfaces",
                  desc: "Expand your reach with fully localized user interfaces for global customers, built right into your app or site.",
                  icon: "bi-translate",
                },
              ].map((service, i) => (
                <Col md={6} key={i}>
                  <motion.div
                    className="p-4 bg-dark rounded shadow-sm h-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="fw-bold text-white">
                      <i className={`bi ${service.icon} text-primary me-2`}></i>
                      {service.title}
                    </h4>
                    <p className="fs-5 text-light">{service.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-dark">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold display-5 text-white">
                Why <span className="text-primary">Batistack</span>?
              </h2>
              <p className="fs-5 text-light">
                Because we care. Our work is driven by passion, not just pixels.
              </p>
            </motion.div>
            <Row className="g-4">
              {[
                "Expert Full-Stack Developers",
                "Real SEO & Performance Focus",
                "Scalable and Secure Infrastructure",
                "Design That Converts",
                "Video, Photo, and Content Support",
                "Built to Grow With You",
              ].map((value, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="bg-black p-4 rounded shadow-sm h-100 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h5 className="fw-bold text-white mb-2">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      {value}
                    </h5>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <div
          className="py-5"
          style={{ backgroundColor: "#0d6efd", color: "#fff" }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Services;
