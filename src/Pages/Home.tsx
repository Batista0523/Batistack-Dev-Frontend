import { useTrafficTracker } from "../hook/useTrafficTracker";
import images from "../images";
import { Container, Row, Col } from "react-bootstrap";
import FeatureSection from "../components/FeatureSection";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import AnimatedButton from "../components/Button";
import InviteVoiceAgent from "../components/InviteBtn";

function Home() {
  useTrafficTracker("page_view", "/");

  const coreFeatures = [
    {
      icon: "bi-rocket",
      title: "We Build to Scale",
      desc: "Every site we build adapts as you grow — with smart structure, clean code, and lasting results.",
      color: "text-primary",
    },
    {
      icon: "bi-lock-fill",
      title: "Security First",
      desc: "Your users and data stay safe — we use advanced protection and best practices from day one.",
      color: "text-success",
    },
    {
      icon: "bi-lightning-charge-fill",
      title: "Fast Delivery",
      desc: "You get live results quickly — our agile process speeds up launch without cutting corners.",
      color: "text-warning",
    },
  ];

  const extraValues = [
    {
      title: "No Templates. Ever.",
      desc: "We build from scratch — no themes, no shortcuts. You get code that’s unique and made for you.",
      icon: "bi-code-slash",
    },
    {
      title: "Zero Copy-Paste Work",
      desc: "We don’t reuse from others — we create sites that make your brand the one worth copying.",
      icon: "bi-layout-text-window-reverse",
    },
    {
      title: "Outcome-Driven Design",
      desc: "We don’t just design to look pretty — we craft every element to convert and generate growth.",
      icon: "bi-bullseye",
    },
    {
      title: "We Act Like Partners",
      desc: "We treat your goals like ours — with real feedback, honest advice, and shared success.",
      icon: "bi-people-fill",
    },
    {
      title: "Future-Ready Tech",
      desc: "We use modern tools and best-in-class code so your site stays fast, stable, and scalable.",
      icon: "bi-terminal-fill",
    },
    {
      title: "Transparent Process",
      desc: "You’ll know what’s next — with clear steps, fair pricing, and updates every step of the way.",
      icon: "bi-eye-fill",
    },
  ];

  const aiCoreFeatures = [
    {
      icon: "bi-chat-dots",
      title: "AI Chat Assistants",
      desc: "Smart bots trained on your brand — answering questions, building trust, and collecting leads.",
      color: "text-primary",
    },
    {
      icon: "bi-robot",
      title: "Voice Agents",
      desc: "AI handles calls, books appointments, and gives answers — just like a real human would.",
      color: "text-success",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Analytics Automation",
      desc: "Track visitor actions, spot trends, and get insights — all powered and explained by AI.",
      color: "text-warning",
    },
  ];

  const aiExtraFeatures = [
    {
      title: "Custom Trained AI",
      desc: "We fine-tune your AI to talk like you — using your tone, answers, and business logic.",
      icon: "bi-cpu-fill",
    },
    {
      title: "Multilingual Ready",
      desc: "Serve clients in English, Spanish, or both — your AI speaks their language fluently.",
      icon: "bi-translate",
    },
    {
      title: "Learns With Use",
      desc: "Each interaction improves your AI — getting smarter, sharper, and more helpful daily.",
      icon: "bi-lightbulb-fill",
    },
    {
      title: "Omnichannel Integration",
      desc: "Use your AI on site, phone, CRM, or chat — one brain that works across every channel.",
      icon: "bi-plug-fill",
    },
    {
      title: "24/7 Efficiency",
      desc: "Let AI cover nights, weekends, and holidays — never miss a message or lead again.",
      icon: "bi-clock-history",
    },
    {
      title: "Security-First AI",
      desc: "We protect your data with secure code, encrypted flows, and privacy-first methods.",
      icon: "bi-shield-lock-fill",
    },
  ];

  const workSteps = [
    {
      title: "Strategize",
      icon: "bi-lightbulb",
      desc: "We learn your goals, map your audience, and build a smart strategy with clear direction.",
    },
    {
      title: "Design & Build",
      icon: "bi-layout-text-window",
      desc: "We move from wireframes to clean code — with stunning design and bulletproof logic.",
    },
    {
      title: "Launch & Grow",
      icon: "bi-rocket-takeoff",
      desc: "We deploy, test, and refine — tracking results and improving with every interaction.",
    },
  ];

  function Divider() {
    return (
      <div className="w-100 d-flex justify-content-center">
        <div
          style={{
            height: "3px",
            width: "80px",
            background: "#0d6efd",
            borderRadius: "10px",
            margin: "3rem 0",
          }}
        ></div>
      </div>
    );
  }
  return (
    <>
      <Helmet>
        <title>
          Batistack Development | NYC Web Design & AI Solutions for Local
          Businesses
        </title>
        <meta
          name="description"
          content="Custom-coded websites and AI-powered tools for businesses in Downtown Brooklyn, Manhattan, Queens, and The Hamptons. Batistack builds scalable, high-performance digital systems — from idea to launch."
        />
        <meta
          name="keywords"
          content="web development NYC, Brooklyn web design, Manhattan software development, Queens web developers, Hamptons website design, custom websites, AI chatbots, AI tools, scalable web apps, frontend development, backend APIs, SEO optimization, Batistack Development"
        />
        <meta
          property="og:title"
          content="Batistack Development | Web & AI Built in NYC"
        />
        <meta
          property="og:description"
          content="Premium web development and AI automation built in New York City — serving Brooklyn, Manhattan, Queens, and The Hamptons. Get custom code that performs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://batistack.com/" />
        <meta
          property="og:image"
          content="https://batistack.com/assets/og-image.jpg"
        />
        <link rel="canonical" href="https://batistack.com/" />
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Batistack Development",
        "image": "https://batistack.com/assets/og-image.jpg",
        "url": "https://batistack.com",
        "telephone": "+1-929-733-1600",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "postalCode": "11201",
          "addressCountry": "US"
        },
        "areaServed": [
          "Downtown Brooklyn",
          "Manhattan",
          "Queens",
          "The Hamptons",
          "Brooklyn",
          "City"
        ],
        "sameAs": [
          "https://www.linkedin.com/in/elisaul-batista/"
        ],
        "description": "Batistack is a web development and AI solutions company based in NYC. We help local businesses in Brooklyn, Manhattan, Queens, and the Hamptons grow with scalable custom websites and smart automation tools."
      }
    `}
        </script>
      </Helmet>

      <div
        style={{ backgroundColor: "#000", color: "#fff", overflowX: "hidden" }}
      >
        <section className="py-5 min-vh-100 d-flex align-items-center bg-black">
          <Container>
            <Row className="align-items-center g-5 flex-column-reverse flex-lg-row">
              <Col lg={6} className="text-center text-lg-start">
                <motion.h1 className="fw-bold display-4 text-white mb-3">
                  One Team. One Codebase.{" "}
                  <span className="text-primary">Endless Help.</span>
                </motion.h1>
                <motion.p className="fs-5 text-light mb-4">
                  We code websites, deploy AI voice bots, and help New Yorkers
                  fill out the hardest applications.
                </motion.p>
                <motion.div className="d-flex gap-3 flex-wrap">
                  <AnimatedButton text="Contact Us" href="/contact" />
                  <AnimatedButton text="See AI Services" href="/services" />
                  <AnimatedButton text="Apply for Help" href="/applications" />
                </motion.div>
              </Col>
              <Col lg={6} className="text-center">
                <div
                  className="rounded-circle border border-primary mx-auto shadow-lg"
                  style={{
                    width: 340,
                    height: 340,
                    overflow: "hidden",
                    background: "#fff",
                  }}
                >
                  <img
                    src={images.logo2}
                    alt="Batistack Logo"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="mt-4">
                  <InviteVoiceAgent />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Divider />

        <FeatureSection
          sectionClass="py-5 bg-dark"
          title="Why More Businesses Choose"
          subtitle="You're not just hiring developers — you're gaining a dedicated technology partner."
          features={coreFeatures}
          extraValues={extraValues}
        />

        <Divider />
        <FeatureSection
          sectionClass="py-5 bg-black"
          title="Our AI Solutions Work Smarter, Not Harder"
          subtitle="We build AI tools that feel human, operate 24/7, and help your business scale faster."
          features={aiCoreFeatures}
          extraValues={aiExtraFeatures}
        />
        <div className="text-center mt-5">
          <AnimatedButton text="Explore AI Services" href="/services" />
        </div>
        <Divider />

        <section className="py-5 bg-dark">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="fw-bold display-5 text-white">How We Work</h2>
              <p className="text-light fs-5">
                Our 3-phase approach balances strategy, speed, and scalability —
                so your project succeeds from day one.
              </p>
            </motion.div>
            <Row className="g-4 text-center">
              {workSteps.map((step, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="p-4 rounded-4 bg-black border border-secondary h-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                  >
                    <i
                      className={`bi ${step.icon} text-primary mb-3`}
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                    <h5 className="fw-bold text-white">{step.title}</h5>
                    <p className="text-light">{step.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>

          <div className="text-center mt-5">
            <AnimatedButton text="Contact us" href="/contact" />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Home;
