import { useTrafficTracker } from "../hook/useTrafficTracker";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../components/Footer";
import AnimatedButton from "../components/Button";
import HeroSection from "../components/HeroSection";

function Services() {
  useTrafficTracker("page_view", "/services");

  const combinedServices = [
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
      title: "AI Chatbots",
      icon: "bi-chat-dots",
      desc: "Smart chatbots trained on your business data — qualifying leads, answering FAQs, and operating 24/7.",
    },
    {
      title: "AI Voice Assistants",
      icon: "bi-telephone-inbound",
      desc: "Realistic AI phone agents for inbound calls, powered by Vertex AI & Twilio.",
    },
    {
      title: "AI Scheduling Assistants",
      icon: "bi-calendar-check",
      desc: "Automate bookings, confirmations, and reminders using calendar-integrated AI bots.",
    },
    {
      title: "SEO & Analytics",
      icon: "bi-bar-chart-line",
      desc: "Rank higher and understand your users with real-time SEO and performance tracking.",
    },
    {
      title: "Content & Copy",
      icon: "bi-pencil-square",
      desc: "Clear, confident, and SEO-friendly content written for web, emails, and automation.",
    },
    {
      title: "Multilingual Interfaces",
      icon: "bi-translate",
      desc: "Build sites and bots that engage users in English, Spanish, and more — instantly.",
    },
    {
      title: "Custom Dashboards",
      icon: "bi-speedometer2",
      desc: "Track KPIs, leads, and workflows with real-time admin dashboards built just for you.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Web & AI Services | Batistack Development</title>
        <meta
          name="description"
          content="Custom websites, AI tools, dashboards, content, and automation. Everything your business needs — built by Batistack."
        />
        <meta
          name="keywords"
          content="website development, AI chatbot, voice assistant, SEO, custom dashboards, Batistack services, NYC tech agency"
        />
        <meta property="og:title" content="Web & AI Services | Batistack" />
        <meta
          property="og:description"
          content="Explore our most powerful digital services — from web design and SEO to custom AI tools and automation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.batistack.com/services" />
        <meta
          property="og:image"
          content="https://www.batistack.com/preview-image.jpg"
        />
      </Helmet>

      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          overflowX: "hidden",
          fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        }}
      >
        <HeroSection
          title="Think It. Code It. Launch It."
          description="Websites. AI Agents. Dashboards. Automation. All built for your business."
          buttonText="Contact Us"
          buttonHref="/contact"
        />

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
                What We <span className="text-primary">Deliver</span>
              </h2>
              <p className="fs-5 text-light mt-2">
                From first impression to final automation — here’s what Batistack can do for you.
              </p>
            </motion.div>
            <Row className="g-4">
              {combinedServices.map((service, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="h-100 p-4 rounded bg-black shadow text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
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
                What If Your Business Had <span className="text-primary">This</span>?
              </h2>
              <p className="fs-5">
                Imagine your daily operations fully optimized — no stress, no chaos. Just results.
              </p>
            </motion.div>
            <Row className="g-4 text-start">
              {[
                "A website that speaks for you 24/7 — even while you sleep.",
                "AI answering calls, booking clients, and capturing leads in real time.",
                "Dashboards showing all your KPIs, jobs, and client activity — live.",
                "Messages and emails sent automatically — with your tone, your voice.",
                "Multilingual interfaces so no client ever feels left out.",
                "Video headers, smart CTAs, and optimized flows that convert more."
              ].map((item, i) => (
                <Col md={6} key={i}>
                  <motion.div
                    className="p-3 bg-dark rounded shadow-sm mb-3 h-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="fs-5 mb-0">{item}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
            <motion.div
              className="text-center mt-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="fw-bold mb-4">
                It’s not a dream. <span className="text-primary">It’s Batistack.</span>
              </h4>
              <AnimatedButton text="Let’s Build It" href="/contact" />
            </motion.div>
          </Container>
        </section>


        <Footer />
      </div>
    </>
  );
}

export default Services;
