import { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTrafficTracker } from "../hook/useTrafficTracker";
import ServiceCard from "../components/ServiceCard";
import PricingCard from "../components/PricingCard";
import SectionLabel from "../components/SectionLabel";

const marqueeItems = [
  "Custom Web Design",
  "AI Integration",
  "React & Next.js",
  "AI Chatbots",
  "Landing Pages",
  "Business Websites",
  "Automation",
  "NYC Based",
];

const aiFeatures = [
  {
    icon: "💬",
    name: "AI Chat Assistant",
    desc: "A trained chatbot that knows your business, answers customer questions, and captures leads automatically.",
  },
  {
    icon: "📋",
    name: "Smart Lead Qualification",
    desc: "AI filters and scores inquiries so you focus on the best prospects — not every contact form.",
  },
  {
    icon: "⚡",
    name: "Workflow Automation",
    desc: "Automated follow-ups, appointment booking, and CRM integration — all connected to your site.",
  },
  {
    icon: "📊",
    name: "Content & SEO Tools",
    desc: "AI-assisted content updates and SEO recommendations that keep your site ranking and converting.",
  },
];

function AIFeatureRow({ icon, name, desc }: { icon: string; name: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderTop: "1px solid #222",
        padding: "32px 0",
        display: "flex",
        gap: "20px",
        alignItems: "flex-start",
        paddingLeft: hovered ? "8px" : "0",
        transition: "padding-left 0.3s ease",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid #333",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            fontWeight: 400,
            color: "var(--off-white)",
            marginBottom: "8px",
            margin: "0 0 8px 0",
          }}
        >
          {name}
        </p>
        <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.75, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

function ProcessStep({
  num,
  title,
  desc,
  isLast,
}: {
  num: string;
  title: string;
  desc: string;
  isLast: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "48px 40px",
        borderRight: isLast ? "none" : "1px solid var(--gray-light)",
        background: hovered ? "var(--cream)" : "transparent",
        transition: "background 0.3s ease",
        cursor: "default",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "72px",
          fontWeight: 300,
          color: hovered ? "var(--gold-light)" : "var(--cream)",
          lineHeight: 1,
          marginBottom: "24px",
          transition: "color 0.3s ease",
        }}
      >
        {num}
      </div>
      <p
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "20px",
          fontWeight: 400,
          marginBottom: "12px",
          color: "var(--black)",
          margin: "0 0 12px 0",
        }}
      >
        {title}
      </p>
      <p style={{ fontSize: "14px", color: "var(--gray)", lineHeight: 1.75, margin: 0 }}>{desc}</p>
    </div>
  );
}

export default function Home() {
  useTrafficTracker("page_view", "/");
  const apiBaseUrl = import.meta.env.VITE_BASE_URL;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    source: "Website",
  });
  const [formState, setFormState] = useState<{
    loading: boolean;
    success: string;
    error: string;
  }>({
    loading: false,
    success: "",
    error: "",
  });

  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const aiRef = useRef(null);
  const pricingRef = useRef(null);
  const contactRef = useRef(null);

  const servicesInView = useInView(servicesRef, { once: true, margin: "-80px" });
  const processInView = useInView(processRef, { once: true, margin: "-80px" });
  const aiInView = useInView(aiRef, { once: true, margin: "-80px" });
  const pricingInView = useInView(pricingRef, { once: true, margin: "-80px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-80px" });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHomeLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ loading: true, success: "", error: "" });

    try {
      await axios.post(`${apiBaseUrl}/leads`, formData);
      setFormState({
        loading: false,
        success: "Message sent successfully.",
        error: "",
      });
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
        source: "Website",
      });
    } catch {
      setFormState({
        loading: false,
        success: "",
        error: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Batistack — Web Design & AI Integration NYC</title>
        <meta
          name="description"
          content="Batistack builds custom websites and AI integrations for businesses in NYC. Chat assistants, automation, SEO, and analytics."
        />
      </Helmet>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          padding: "120px 60px 0",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
        className="hero-section"
      >
        {/* Hero Left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "28px",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              margin: "0 0 28px 0",
            }}
          >
            New York City · Web Design &amp; AI Integration
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(42px, 8vw, 90px)",
              fontWeight: 400,
              lineHeight: 1.05,
              color: "var(--black)",
              margin: 0,
            }}
          >
            Websites that
            <br />
            <em>work harder</em>
            <br />
            with AI built in
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{
              fontSize: "16px",
              color: "var(--gray)",
              maxWidth: "420px",
              marginTop: "28px",
              lineHeight: 1.7,
              fontFamily: "var(--font-sans)",
            }}
          >
            We design and build custom websites for businesses ready to grow — then integrate AI
            tools that automate, convert, and impress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            style={{ display: "flex", gap: "16px", marginTop: "48px", flexWrap: "wrap" }}
          >
            <Link to="/contact" className="btn-primary-bs">
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Hero Right */}
        <div
          className="hero-right"
          style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            style={{
              background: "var(--cream)",
              aspectRatio: "3/4",
              maxWidth: "480px",
              width: "100%",
              position: "relative",
              padding: "28px",
              boxSizing: "border-box",
            }}
          >
            {/* Browser bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "24px",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#ff5f57",
                }}
              />
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#ffbd2e",
                }}
              />
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#28c840",
                }}
              />
              <div
                style={{
                  flex: 1,
                  height: "8px",
                  background: "var(--gray-light)",
                  marginLeft: "12px",
                  borderRadius: "4px",
                }}
              />
            </div>

            {/* Mock content */}
            <div
              style={{
                width: "60%",
                height: "4px",
                background: "var(--gold)",
                marginBottom: "16px",
              }}
            />
            <div
              style={{
                width: "85%",
                height: "8px",
                background: "var(--gray-light)",
                borderRadius: "2px",
                marginBottom: "10px",
              }}
            />
            <div
              style={{
                width: "70%",
                height: "8px",
                background: "var(--gray-light)",
                borderRadius: "2px",
                marginBottom: "28px",
              }}
            />

            {/* 2x2 card grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--off-white)",
                    borderRadius: "2px",
                    padding: "20px 16px",
                    minHeight: "80px",
                  }}
                >
                  <div
                    style={{
                      width: "50%",
                      height: "6px",
                      background: "var(--gray-light)",
                      borderRadius: "2px",
                      marginBottom: "8px",
                    }}
                  />
                  <div
                    style={{
                      width: "80%",
                      height: "5px",
                      background: "var(--cream)",
                      borderRadius: "2px",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              style={{
                position: "absolute",
                left: "-32px",
                bottom: "60px",
                background: "var(--black)",
                color: "var(--off-white)",
                padding: "20px 24px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "48px",
                  fontWeight: 400,
                  color: "var(--gold)",
                  display: "block",
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                AI
              </span>
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--gray-light)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                Powered Builds
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "60px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <motion.div
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "40px",
              background: "var(--gold)",
              transformOrigin: "top",
            }}
          />
          <span
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--gray)",
              fontFamily: "var(--font-sans)",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ── MARQUEE TICKER ──────────────────────────────────────────────── */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <section
        ref={servicesRef}
        style={{ padding: "140px 60px" }}
        className="services-section"
      >
        <motion.div
          animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="services-inner"
        >
          {/* Services left */}
          <div style={{ position: "sticky", top: "120px" }}>
            <SectionLabel>What we do</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 3.5vw, 54px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--black)",
                margin: 0,
              }}
            >
              Built to <em>convert.</em>
              <br />
              Designed to last.
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--gray)",
                lineHeight: 1.75,
                marginTop: "24px",
                maxWidth: "340px",
              }}
            >
              Every project we take on is built with purpose — designed to reflect your brand and
              engineered to perform.
            </p>
          </div>

          {/* Services right — 2x2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2px",
              background: "var(--gray-light)",
            }}
            className="services-grid"
          >
            <ServiceCard
              number="01"
              title="Custom Web Design"
              description="Hand-crafted, pixel-perfect websites that reflect your brand and convert visitors into customers."
              tags={["React", "Next.js", "Responsive"]}
            />
            <ServiceCard
              number="02"
              title="AI Integration"
              description="Smart chatbots, automated workflows, and AI-powered features that work while you sleep."
              tags={["Claude API", "OpenAI", "Automations"]}
            />
            <ServiceCard
              number="03"
              title="Landing Pages"
              description="High-converting landing pages built for speed, clarity, and maximum ROI on your ad spend."
              tags={["Performance", "SEO", "A/B Ready"]}
            />
            <ServiceCard
              number="04"
              title="Website Redesign"
              description="Transform your outdated site into a modern, professional presence that matches your ambition."
              tags={["Audit", "UX Design", "Migration"]}
            />
          </div>
        </motion.div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section
        ref={processRef}
        style={{ padding: "0 60px 140px" }}
        className="process-section"
      >
        <motion.div
          animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.8 }}
        >
          {/* Process header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "60px",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <SectionLabel>How we work</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(36px, 3.5vw, 54px)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "var(--black)",
                  margin: 0,
                }}
              >
                A clear process.
                <br />
                <em>Zero surprises.</em>
              </h2>
            </div>
            <Link to="/contact" className="btn-ghost-bs">
              Start today
            </Link>
          </div>

          {/* Steps */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              border: "1px solid var(--gray-light)",
            }}
            className="process-grid"
          >
            <ProcessStep
              num="01"
              title="Discovery"
              desc="We learn about your business, goals, and audience to build a strategy that actually works."
              isLast={false}
            />
            <ProcessStep
              num="02"
              title="Design"
              desc="We craft a bespoke visual identity and layout that fits your brand and converts your visitors."
              isLast={false}
            />
            <ProcessStep
              num="03"
              title="Build"
              desc="We develop your site using modern React-based technologies, optimised for speed and scale."
              isLast={false}
            />
            <ProcessStep
              num="04"
              title="Launch"
              desc="We deploy, test, and hand over a production-ready site — with support when you need it."
              isLast={true}
            />
          </div>
        </motion.div>
      </section>

      {/* ── WHY AI ──────────────────────────────────────────────────────── */}
      <section
        ref={aiRef}
        style={{
          background: "var(--black)",
          color: "var(--off-white)",
          padding: "140px 60px",
        }}
        className="ai-section"
      >
        <motion.div
          animate={aiInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "100px",
            alignItems: "center",
          }}
          className="ai-inner"
        >
          {/* AI Left */}
          <div>
            <SectionLabel light>Why AI?</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 3.5vw, 54px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--off-white)",
                margin: "0 0 28px 0",
              }}
            >
              Your website
              <br />
              should <em>work</em>
              <br />
              for you 24/7
            </h2>
            <p style={{ fontSize: "16px", color: "#777", lineHeight: 1.75, maxWidth: "400px", margin: 0 }}>
              Modern AI tools integrated directly into your website can answer questions, qualify
              leads, and automate follow-ups — while you focus on running your business.
            </p>
          </div>

          {/* AI Right — feature rows */}
          <div>
            {aiFeatures.map((f) => (
              <AIFeatureRow key={f.name} icon={f.icon} name={f.name} desc={f.desc} />
            ))}
            <div style={{ borderTop: "1px solid #222" }} />
          </div>
        </motion.div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────── */}
      <section
        ref={pricingRef}
        style={{ padding: "140px 60px" }}
        className="pricing-section"
      >
        <motion.div
          animate={pricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pricing header centered */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <SectionLabel>Transparent pricing</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 3.5vw, 54px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--black)",
                margin: 0,
              }}
            >
              Simple packages.
              <br />
              <em>Real results.</em>
            </h2>
          </div>

          {/* Pricing grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "2px",
              background: "var(--gray-light)",
            }}
            className="pricing-grid"
          >
            <PricingCard
              tier="Starter"
              price="1,200"
              period="one-time payment"
              features={[
                "Custom 5-page website",
                "Mobile responsive design",
                "Contact form + basic SEO",
                "2 rounds of revisions",
                "14-day delivery",
              ]}
            />
            <PricingCard
              tier="Growth"
              price="2,800"
              period="one-time payment"
              featured={true}
              badgeText="Most Popular"
              features={[
                "Custom website (up to 10 pages)",
                "AI chatbot integration",
                "Lead capture automation",
                "Performance optimization",
                "3 rounds of revisions",
                "21-day delivery",
              ]}
            />
            <PricingCard
              tier="Enterprise"
              price="Custom"
              period="tailored to your project"
              ctaLabel="Let's Talk"
              features={[
                "Full custom web platform",
                "Advanced AI integrations",
                "API connections & automations",
                "Priority support & maintenance",
                "Ongoing retainer available",
              ]}
            />
          </div>
        </motion.div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────── */}
      <section
        ref={contactRef}
        style={{ padding: "0 60px 140px" }}
        className="contact-section"
      >
        <motion.div
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          initial={{ opacity: 0, y: 32 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "100px",
            alignItems: "start",
          }}
          className="contact-inner"
        >
          {/* Contact Left */}
          <div>
            <SectionLabel>Let's work together</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 3.5vw, 54px)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--black)",
                margin: 0,
              }}
            >
              Ready to build
              <br />
              something <em>great?</em>
            </h2>
          </div>

          {/* Contact Right */}
          <div>
            {formState.success && (
              <p style={{ color: "#2d7a47", fontSize: "14px", marginBottom: "20px" }}>
                {formState.success}
              </p>
            )}
            {formState.error && (
              <p style={{ color: "#b93333", fontSize: "14px", marginBottom: "20px" }}>
                {formState.error}
              </p>
            )}
            <form onSubmit={handleHomeLeadSubmit}>
              <div style={{ marginBottom: "28px" }}>
                <label className="home-contact-label">Name</label>
                <input
                  className="home-contact-input"
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div style={{ marginBottom: "28px" }}>
                <label className="home-contact-label">Email</label>
                <input
                  className="home-contact-input"
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div style={{ marginBottom: "28px" }}>
                <label className="home-contact-label">Service Interested In</label>
                <select
                  className="home-contact-input"
                  name="service"
                  value={formData.service}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">Select a service...</option>
                  <option>Custom Web Design</option>
                  <option>AI Integration</option>
                  <option>Landing Pages</option>
                  <option>Website Redesign</option>
                  <option>Full Package (Growth)</option>
                </select>
              </div>
              <div style={{ marginBottom: "28px" }}>
                <label className="home-contact-label">Tell us about your project</label>
                <textarea
                  className="home-contact-input home-contact-textarea"
                  name="message"
                  placeholder="Describe your business and what you're looking to build..."
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <button type="submit" className="btn-primary-bs" disabled={formState.loading}>
                {formState.loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* ── RESPONSIVE STYLES ───────────────────────────────────────────── */}
      <style>{`
        @media (max-width: 900px) {
          .hero-section {
            grid-template-columns: 1fr !important;
            padding: 120px 28px 60px !important;
          }
          .hero-right {
            display: none !important;
          }
          .services-section {
            padding: 80px 28px !important;
          }
          .services-inner {
            grid-template-columns: 1fr !important;
          }
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .process-section {
            padding: 0 28px 80px !important;
          }
          .process-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .ai-section {
            padding: 80px 28px !important;
          }
          .ai-inner {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .pricing-section {
            padding: 80px 28px !important;
          }
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-section {
            padding: 0 28px 80px !important;
          }
          .contact-inner {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          .home-contact-input {
            font-size: 15px !important;
          }
        }
        .home-contact-label {
          display: block;
          margin-bottom: 10px;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gray);
        }
        .home-contact-input {
          width: 100%;
          padding: 14px 0;
          border: none;
          border-bottom: 1.5px solid var(--gray-light);
          background: transparent;
          color: var(--black);
          font-family: var(--font-sans);
          outline: none;
          transition: border-color 0.3s ease;
          -webkit-appearance: none;
        }
        .home-contact-input:focus {
          border-bottom-color: var(--gold);
        }
        .home-contact-input::placeholder {
          color: var(--gray-light);
        }
        .home-contact-textarea {
          resize: none;
          min-height: 100px;
        }
      `}</style>
    </>
  );
}
