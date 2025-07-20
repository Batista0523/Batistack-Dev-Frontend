import { useTrafficTracker } from "../hook/useTrafficTracker";
import images from "../images";
import { Container, Row, Col } from "react-bootstrap";

import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import AnimatedButton from "../components/Button";

function Home() {
  useTrafficTracker("page_view", "/");

  const Divider = () => (
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

  return (
    <>
      <Helmet>
        <title>
          Batistack Development | Expert Web Development & Digital Solutions
        </title>
        <meta
          name="description"
          content="Custom websites, full-stack web apps, and mobile-ready platforms built for businesses. We help you grow online with SEO-optimized solutions."
        />
        <meta
          name="keywords"
          content="web development, software agency, full stack developer, custom web applications, react websites, SEO optimization, Batistack Development"
        />
        <meta name="author" content="Batistack Development" />
        <meta
          property="og:title"
          content="Batistack Development | Digital Solutions"
        />
        <meta
          property="og:description"
          content="From idea to launch — custom websites, scalable web apps, and digital growth strategies tailored for your business."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://batistack.com/" />
        <meta
          property="og:image"
          content="https://batistack.com//og-image.jpg"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://batistack.com/" />
      </Helmet>

      <div
        style={{ backgroundColor: "#000", color: "#fff", overflowX: "hidden" }}
      >
        <section
          className="py-5 min-vh-100 d-flex align-items-center"
          style={{ backgroundColor: "#000" }}
        >
          <Container>
            <Row className="align-items-center flex-column-reverse flex-md-row">
              <Col
                md={6}
                className="text-center text-md-start px-5 mt-4 mt-md-0"
              >
                <motion.h1
                  className="fw-bold display-4 display-md-3 mb-4 text-white"
                  initial={{ opacity: 0, scale: 0.95, rotateX: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                >
                  Websites That Win
                  <br />
                  + Smart AI Tools
                  <br />
                  <span className="text-primary">
                    Tailored for Your Business
                  </span>
                </motion.h1>
                <motion.p
                  className="fs-5 text-light"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                  Whether you need a stunning website or powerful automation, we
                  help you save time, attract clients, and grow faster.
                </motion.p>
                <motion.div
                  className="mt-4 d-flex gap-3 flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                >
                  <AnimatedButton text="Let's Talk" href="/contact" />
                  <AnimatedButton text="Our Services" href="/services" />
                  <AnimatedButton
                    text="Free AI Website Audit"
                    href="/speedPage"
                  />
                </motion.div>
              </Col>
              <Col md={6} className="text-center px-5 mb-4 mb-md-0">
                <motion.img
                  src={images.logo}
                  alt="Batistack Logo"
                  className="img-fluid rounded-circle shadow-lg"
                  style={{
                    width: "100%",
                    maxWidth: "420px",
                    height: "auto",
                    objectFit: "cover",
                    border: "6px solid #ffffff",
                    backgroundColor: "#ffffff",
                  }}
                  initial={{ opacity: 0, scale: 0.85, rotateY: 15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </Col>
            </Row>
          </Container>
        </section>

        <Divider />
        <section className="py-5 bg-dark">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-bold display-5 text-white">
                Need More Than Just a Website?
              </h2>
              <p className="text-light fs-5">
                We also create smart tools powered by Artificial Intelligence —
                perfect for businesses that want to save time, automate tasks,
                or improve customer service.
              </p>
            </motion.div>
            <Row className="text-center g-4">
              <Col md={4}>
                <div className="p-4 bg-black border border-secondary rounded-4 h-100">
                  <i
                    className="bi bi-chat-dots text-primary mb-3"
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                  <h5 className="text-white fw-bold">AI Chat Assistants</h5>
                  <p className="text-light">
                    Let a smart assistant handle your messages 24/7, saving you
                    time and converting visitors into customers.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="p-4 bg-black border border-secondary rounded-4 h-100">
                  <i
                    className="bi bi-robot text-success mb-3"
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                  <h5 className="text-white fw-bold">Voice Agents</h5>
                  <p className="text-light">
                    We build voice assistants that answer calls, book
                    appointments, and respond like a real team member.
                  </p>
                </div>
              </Col>
              <Col md={4}>
                <div className="p-4 bg-black border border-secondary rounded-4 h-100">
                  <i
                    className="bi bi-bar-chart-line text-warning mb-3"
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                  <h5 className="text-white fw-bold">Smart Analytics</h5>
                  <p className="text-light">
                    See what’s working on your site and get simple insights to
                    grow your business faster.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="text-center mt-5">
            <AnimatedButton text="Explore AI Services" href="/aiServices" />
          </div>
        </section>
        <Divider />

        <section className="py-5 bg-black">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="fw-bold display-5 text-white">
                Why More Businesses{" "}
                <span className="text-primary">Choose Batistack</span>
              </h2>
              <p className="text-light fs-5">
                You're not just hiring developers — you're gaining a digital
                growth partner. From idea to execution, we focus on results that
                move your business forward.
              </p>
            </motion.div>
            <Row className="g-4">
              {[
                {
                  icon: "bi-rocket",
                  color: "text-primary",
                  title: "We Build to Scale",
                  desc: "Whether you're just starting or growing fast, our solutions grow with you — without needing a full rebuild later.",
                },
                {
                  icon: "bi-lock-fill",
                  color: "text-success",
                  title: "Secure by Design",
                  desc: "We treat your business like our own — with built-in protection that keeps your data and your clients safe.",
                },
                {
                  icon: "bi-clock-history",
                  color: "text-warning",
                  title: "We Respect Your Time",
                  desc: "Clear timelines. Fast delivery. No surprises. You always know what’s happening and when.",
                },
              ].map((feature, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="text-center px-4 py-5 bg-dark rounded-4 h-100 shadow-sm border border-secondary"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
                  >
                    <i
                      className={`bi ${feature.icon} ${feature.color} mb-3`}
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                    <h5 className="fw-bold text-white">{feature.title}</h5>
                    <p className="text-light">{feature.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

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
                A simple, effective approach to building modern digital
                products.
              </p>
            </motion.div>
            <Row className="g-4 text-center">
              {[
                {
                  title: "Think it",
                  icon: "bi-lightbulb-fill",
                  desc: "We align with your vision, goals, and users — whether you need a landing page or an advanced dashboard.",
                },
                {
                  title: "Code it",
                  icon: "bi-code-slash",
                  desc: "We build fast, responsive, and scalable applications using the latest technologies.",
                },
                {
                  title: "Launch it",
                  icon: "bi-rocket-takeoff-fill",
                  desc: "We test, optimize, and deploy your solution with your full approval and support.",
                },
              ].map((step, i) => (
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
        </section>

        <Divider />

        <section className="py-5 bg-black">
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="fw-bold display-5 text-white">What We Offer</h2>
              <p className="text-light fs-5">
                Here’s how we help you stand out and succeed — whether you need
                a website, digital strategy, or tools that save you time.
              </p>
            </motion.div>
            <Row className="g-4">
              {[
                {
                  icon: "bi-window",
                  title: "Modern Website Design",
                  desc: "We build clean, professional websites that look great on phones, tablets, and computers — and are easy to navigate.",
                },
                {
                  icon: "bi-cpu",
                  title: "Smart AI Tools",
                  desc: "From chat assistants to voice responders — we create custom AI tools that automate tasks, answer questions, and help your business run 24/7.",
                },
                {
                  icon: "bi-lightning-charge",
                  title: "Fast & Reliable Performance",
                  desc: "No one likes a slow website. We make sure your site loads quickly and works smoothly for every visitor.",
                },
                {
                  icon: "bi-phone",
                  title: "Mobile-Friendly Experience",
                  desc: "Most visitors use their phone — we make sure your site looks amazing and works perfectly on all screen sizes.",
                },
                {
                  icon: "bi-eye",
                  title: "Clear & Intuitive Layout",
                  desc: "We organize your content so people instantly understand what you offer — making it easier to turn visitors into clients.",
                },
                {
                  icon: "bi-graph-up-arrow",
                  title: "Grow Your Online Presence",
                  desc: "We help people find your business online through smart content, search optimization, and a strong digital footprint.",
                },
              ].map((item, i) => (
                <Col style={{ padding: "1rem" }} md={6} lg={4} key={i}>
                  <motion.div
                    className="bg-dark p-4 rounded-4 shadow-sm h-100 border border-secondary"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="text-center mb-3">
                      <i
                        className={`bi ${item.icon} text-primary`}
                        style={{ fontSize: "2.5rem" }}
                      ></i>
                    </div>
                    <h5 className="fw-bold text-white text-center mb-2">
                      {item.title}
                    </h5>
                    <p className="text-light text-center">{item.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
            <div className="text-center mt-5">
              <AnimatedButton text="Explore Our Services" href="/services" />
            </div>
          </Container>
        </section>

        <Divider />
        <div
          style={{ backgroundColor: "#0d6efd", color: "#fff" }}
          className="py-5"
        >
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
