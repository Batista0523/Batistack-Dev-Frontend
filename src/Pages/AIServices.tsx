import { useTrafficTracker } from "../hook/useTrafficTracker";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "../components/Footer";
import AnimatedButton from "../components/Button";
import HeroSection from "../components/HeroSection";
function AiServices() {
  useTrafficTracker("page_view", "/ai-services");

  const aiCoreServices = [
    {
      title: "AI Chatbots",
      icon: "bi-chat-dots",
      desc: "Enhance customer experience with smart chatbots that answer questions, qualify leads, and operate 24/7 — trained with your business data.",
    },
    {
      title: "AI Voice Assistants",
      icon: "bi-telephone-inbound",
      desc: "Let your customers speak naturally with your business through phone calls answered by realistic AI voices powered by Vertex AI & Twilio.",
    },
    {
      title: "AI Scheduling Assistants",
      icon: "bi-calendar-check",
      desc: "Automate meeting bookings, reminders, and calendar sync using intelligent scheduling bots integrated with Google Calendar or CRMs.",
    },
    {
      title: "Custom AI Models",
      icon: "bi-diagram-3",
      desc: "Build tailored machine learning models with Google Vertex AI for predictions, personalization, and business logic automation.",
    },
    {
      title: "Document AI Automation",
      icon: "bi-file-earmark-text",
      desc: "Use AI to extract, classify, and process large volumes of documents with speed and accuracy — from invoices to legal contracts.",
    },
    {
      title: "Multilingual AI Interfaces",
      icon: "bi-translate",
      desc: "Break language barriers. Offer AI chat and voice services in English, Spanish, and more — automatically detected and translated.",
    },
    {
      title: "AI Lead Capture Forms",
      icon: "bi-ui-checks",
      desc: "Qualify and capture leads with interactive AI-driven forms and quizzes that adapt in real time to user input and behavior.",
    },
    {
      title: "AI Data Insights",
      icon: "bi-bar-chart-line",
      desc: "Get actionable insights from your business data using AI dashboards that summarize trends, predict outcomes, and flag anomalies.",
    },
    {
      title: "AI-Powered Email & Message Assistants",
      icon: "bi-envelope-open",
      desc: "Save time and respond faster with AI that drafts emails, replies to messages, and follows up intelligently using your tone and style.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AI Services | Batistack Development</title>
        <meta
          name="description"
          content="AI Chatbots, Voice Assistants, Scheduling Tools, and Custom Vertex AI Solutions. Let Batistack bring intelligent automation to your business."
        />
        <meta
          name="keywords"
          content="AI chatbot, AI voice, Vertex AI, Google AI tools, Batistack AI services, AI for business, smart automation"
        />
        <meta
          property="og:title"
          content="AI Services | Batistack Development"
        />
        <meta
          property="og:description"
          content="Explore Batistack’s professional AI offerings — from chat and voice to custom data-driven models and automation."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.batistack.com/ai-services"
        />
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
          fontFamily:
            "'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', sans-serif",
        }}
      >
        <HeroSection
          title="AI That Works For You"
          description="From intelligent chat to real-time voice automation, our AI tools help your business scale smarter — fast."
          buttonText="Book A Free Demo"
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
                Core <span className="text-primary">AI Services</span>
              </h2>
              <p className="fs-5 text-light mt-2">
                Power up your business with smart automation and real-time AI
                engagement.
              </p>
            </motion.div>
            <Row className="g-4">
              {aiCoreServices.map((service, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="h-100 p-4 rounded bg-black shadow text-center card-hover"
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
                Real Results, <span className="text-primary">Real Clients</span>
              </h2>
              <p className="fs-5 text-light mt-2">
                See how businesses like yours are using our AI to grow faster
                and work smarter.
              </p>
            </motion.div>
            <Row className="g-4">
              {[
                {
                  name: "Sarah M., E-commerce CEO",
                  quote:
                    "Batistack’s AI chatbot increased our sales conversion rate by 37%. We now engage 24/7 without hiring more staff.",
                },
                {
                  name: "Luis R., Contractor",
                  quote:
                    "The AI voice assistant books jobs while I’m working in the field. It’s like having a receptionist without the payroll.",
                },
                {
                  name: "Emily J., Law Office Manager",
                  quote:
                    "Document automation saved us hours weekly. Now, legal forms are processed in minutes — accurately.",
                },
              ].map((client, index) => (
                <Col md={4} key={index}>
                  <motion.div
                    className="h-100 p-4 rounded bg-dark text-light shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <p className="fst-italic mb-3">“{client.quote}”</p>
                    <h6 className="fw-bold text-primary">{client.name}</h6>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section className="py-5 bg-dark text-center text-light">
          <Container>
            <motion.h2
              className="fw-bold display-5 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to <span className="text-primary">Get Started?</span>
            </motion.h2>
            <motion.p
              className="fs-5 mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contact us for a free consultation and let’s discover how AI can
              transform your business today.
            </motion.p>
            <AnimatedButton text="Let's Talk " href="/contact" />
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

export default AiServices;
