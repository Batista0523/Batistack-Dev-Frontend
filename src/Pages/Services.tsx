import { useTrafficTracker } from "../hook/useTrafficTracker";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import AnimatedButton from "../components/Button";
import HeroSection from "../components/HeroSection";
import "bootstrap-icons/font/bootstrap-icons.css";

function Services() {
  useTrafficTracker("page_view", "/services");

  const serviceList = [
    {
      title: "Web Design & Development",
      icon: "bi-window-sidebar",
      desc: "Fast, modern, conversion-focused websites — built with React, TypeScript and premium UX.",
    },
    {
      title: "AI Chat Assistants",
      icon: "bi-chat-text",
      desc: "Train AI on your business so it answers questions, captures leads and supports clients 24/7.",
    },
    {
      title: "AI Voice Agents",
      icon: "bi-mic-fill",
      desc: "AI that answers phone calls, books appointments and handles clients just like a real assistant.",
    },
    {
      title: "Business Automation",
      icon: "bi-lightning-charge",
      desc: "Automate repetitive tasks, reminders, emails and workflows to save time and eliminate chaos.",
    },
    {
      title: "Custom Dashboards",
      icon: "bi-speedometer2",
      desc: "Real-time dashboards for analytics, KPIs, lead tracking, operations and team performance.",
    },
    {
      title: "SEO & Growth Systems",
      icon: "bi-graph-up-arrow",
      desc: "Rank higher, drive organic traffic, and turn your website into a real client-acquisition machine.",
    },
    {
      title: "Content & Copywriting",
      icon: "bi-pencil-square",
      desc: "Clear, confident and SEO-optimized content for websites, automations, funnels and emails.",
    },
    {
      title: "Multilingual Experiences",
      icon: "bi-translate",
      desc: "Websites and AI agents that speak English, Spanish and more — instantly and naturally.",
    },
    {
      title: "Custom Web Apps",
      icon: "bi-kanban",
      desc: "From portals to workflows — scalable, secure, fully custom applications built for your business.",
    },
  ];

  const transformationList = [
    "A website that sells for you — even when you're offline.",
    "AI answering calls, booking leads, and sending confirmations automatically.",
    "Dashboards showing leads, KPIs and real-time activity in one place.",
    "Emails, follow-ups and reminders handled automatically with your voice & tone.",
    "A fast multilingual experience where every client feels understood.",
    "Animations, video headers, smart CTAs and UX that convert more traffic.",
  ];

  return (
    <>
      <Helmet>
        <title>Web & AI Services | Batistack Development</title>
        <meta
          name="description"
          content="Premium websites, AI assistants, automations and dashboards built with clarity, performance and strategy. Explore Batistack's full service suite."
        />
        <meta
          name="keywords"
          content="web design, AI chatbots, AI voice agents, dashboards, automation, SEO, Batistack, NYC developer"
        />
        <meta property="og:title" content="Web & AI Services | Batistack" />
        <meta
          property="og:description"
          content="Explore Batistack’s premium digital services — websites, AI systems, dashboards and automation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://batistack.com/services" />
        <link rel="canonical" href="https://batistack.com/services" />
      </Helmet>

      <div
        style={{
          background:
            "radial-gradient(circle at top, #020617 0%, #020617 45%, #000 100%)",
          color: "#f8fafc",
          overflowX: "hidden",
          fontFamily:
            '-apple-system, system-ui, BlinkMacSystemFont, "Inter", sans-serif',
        }}
      >
        <HeroSection
          title="Think It. Code It. Launch It."
          description="Premium websites, AI systems and smart automations — built with clarity, speed and intention."
          buttonText="Start Your Project"
          buttonHref="/contact"
        />

        <section
          style={{
            padding: "5.5rem 0",
            borderTop: "1px solid rgba(148,163,184,0.35)",
            background: "rgba(15,23,42,0.96)",
          }}
        >
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="fw-bold mb-3"
                style={{ fontSize: "clamp(2.2rem, 3vw, 3rem)" }}
              >
                What We Deliver
              </h2>
              <p
                style={{
                  maxWidth: 720,
                  margin: "0 auto",
                  color: "#cbd5e1",
                  fontSize: "1.1rem",
                }}
              >
                Everything you need to run, automate, grow and scale your
                business online — without the stress.
              </p>
            </motion.div>

            <Row className="gy-4">
              {serviceList.map((item, i) => (
                <Col md={4} key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      padding: 26,
                      borderRadius: 24,
                      background: "rgba(2,6,23,0.85)",
                      border: "1px solid rgba(148,163,184,0.45)",
                      backdropFilter: "blur(18px)",
                      boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
                      height: "100%",
                    }}
                  >
                    <i
                      className={`bi ${item.icon}`}
                      style={{
                        fontSize: "2.8rem",
                        color: "#38bdf8",
                        display: "block",
                        marginBottom: 14,
                      }}
                    />
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <p style={{ color: "#e2e8f0", fontSize: "0.98rem" }}>
                      {item.desc}
                    </p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section
          style={{
            padding: "5.5rem 0",
            borderTop: "1px solid rgba(148,163,184,0.35)",
            background: "#020617",
          }}
        >
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                style={{
                  fontSize: "clamp(2.2rem, 3vw, 3rem)",
                  fontWeight: 700,
                }}
              >
                What If Your Business Had This?
              </h2>
              <p
                style={{
                  color: "#cbd5e1",
                  maxWidth: 700,
                  margin: "0 auto",
                  fontSize: "1.1rem",
                }}
              >
                Imagine your entire digital system working for you — automatically.
              </p>
            </motion.div>

            <Row className="g-4">
              {transformationList.map((item, i) => (
                <Col md={6} key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      padding: 22,
                      borderRadius: 20,
                      background: "rgba(15,23,42,0.88)",
                      border: "1px solid rgba(148,163,184,0.4)",
                      backdropFilter: "blur(14px)",
                      boxShadow: "0 18px 40px rgba(0,0,0,0.6)",
                    }}
                  >
                    <p style={{ fontSize: "1.05rem", margin: 0 }}>
                      {item}
                    </p>
                  </motion.div>
                </Col>
              ))}
            </Row>

            <motion.div
              className="text-center mt-5"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="fw-bold mb-4">
                It’s not a dream.{" "}
                <span style={{ color: "#38bdf8" }}>It’s Batistack.</span>
              </h3>
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
