import { useTrafficTracker } from "../hook/useTrafficTracker";
import images from "../images";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import AnimatedButton from "../components/Button";

function About() {
  useTrafficTracker("page_view", "/about");

  return (
    <>
      <Helmet>
        <title>
          About Batistack Development | NYC Web, AI & Applications Studio
        </title>
        <meta
          name="description"
          content="Batistack Development is an NYC-based web, AI, and automation studio that designs and builds high-performance websites, AI agents, and application workflows for real businesses."
        />
        <meta
          name="keywords"
          content="Batistack Development, about Batistack, NYC web studio, web development agency, AI automation NYC, React agency, TypeScript developer, custom software studio"
        />
        <meta name="author" content="Batistack Development" />
        <meta
          property="og:title"
          content="About Batistack Development | NYC Web, AI & Automation Studio"
        />
        <meta
          property="og:description"
          content="Learn who is behind Batistack Development, how we build, and why businesses across New York trust us with their websites, AI systems, and application workflows."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://batistack.com/about" />
        <meta
          property="og:image"
          content="https://batistack.com/assets/og-image.jpg"
        />
        <link rel="canonical" href="https://batistack.com/about" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Batistack Development",
            "url": "https://batistack.com",
            "logo": "https://batistack.com/assets/og-image.jpg",
            "sameAs": [
              "https://www.linkedin.com/company/batistack/",
              "https://x.com/BatistackDev",
              "https://www.instagram.com/bati.stack"
            ],
            "description": "Batistack Development is an NYC-based studio focused on high-performance websites, AI agents, and digital systems for businesses and professionals.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "addressCountry": "US"
            }
          }
        `}
        </script>
      </Helmet>

      <div
        style={{
          background:
            "radial-gradient(circle at top, #020617 0, #020617 45%, #000 100%)",
          color: "#f9fafb",
          fontFamily:
            '-apple-system, system-ui, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
        }}
      >
        <section
          style={{
            position: "relative",
            padding: "7rem 0 6rem",
            overflow: "hidden",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 25% 20%, rgba(56,189,248,0.18), transparent 70%), radial-gradient(circle at 75% 80%, rgba(248,113,113,0.2), transparent 70%)",
              filter: "blur(72px)",
              opacity: 0.6,
              pointerEvents: "none",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          />

          {Array.from({ length: 26 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "rgba(148,163,184,0.6)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(1.2px)",
              }}
              animate={{
                y: [0, -18, 0],
                opacity: [0.25, 0.85, 0.35],
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          <Container style={{ position: "relative", zIndex: 10 }}>
            <Row className="align-items-center text-center text-md-start gy-5">
              <Col md={5} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    width: 260,
                    height: 260,
                    margin: "0 auto",
                    borderRadius: "999px",
                    overflow: "hidden",
                    border: "2px solid rgba(255,255,255,0.35)",
                    boxShadow:
                      "0 0 45px rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.5)",
                    backdropFilter: "blur(14px)",
                    background: "rgba(15,23,42,0.8)",
                  }}
                >
                  <motion.img
                    src={images.logo2}
                    alt="Batistack Development"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                    animate={{ y: [-8, 8, -8] }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </Col>

              <Col md={7}>
                <motion.h1
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "clamp(2.3rem, 4vw, 3.6rem)",
                    lineHeight: 1.15,
                    maxWidth: 640,
                  }}
                  initial={{ opacity: 0, y: -25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Meet{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(120deg,#e5e7eb 0%,#f9fafb 40%,#38bdf8 100%)",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Batistack Development
                  </span>
                </motion.h1>

                <motion.p
                  className="mb-4"
                  style={{
                    maxWidth: 640,
                    fontSize: "1.1rem",
                    color: "#cbd5e1",
                    lineHeight: 1.8,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Batistack is a New York–based web, AI, and automation studio.
                  We design and build high-performance websites, AI agents, and
                  application workflows that feel premium, load fast, and are
                  engineered to convert visitors into real opportunities.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                >
                  <AnimatedButton text="Let’s Work Together" href="/contact" />
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          style={{
            padding: "5rem 0",
            borderTop: "1px solid rgba(148,163,184,0.35)",
            background: "rgba(15,23,42,0.96)",
          }}
        >
          <Container>
            <Row className="align-items-center gy-5">
              <Col md={6}>
                <motion.h2
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "clamp(2rem, 3.2vw, 2.8rem)",
                    lineHeight: 1.2,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Who We Are
                </motion.h2>
                <motion.p
                  style={{
                    fontSize: "1.05rem",
                    color: "#e5e7eb",
                    lineHeight: 1.8,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Batistack Development is built for entrepreneurs, operators,
                  and teams who take their digital presence seriously. From
                  Brooklyn to The Hamptons, we help businesses launch websites,
                  systems, and AI tools that are clear, modern, and built to
                  last.
                </motion.p>
                <motion.p
                  style={{
                    fontSize: "1.02rem",
                    color: "#cbd5e1",
                    lineHeight: 1.8,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Instead of generic templates or one-size-fits-all solutions,
                  we approach every project like a product: strategy first,
                  clean engineering second, and ongoing support as you grow.
                </motion.p>
              </Col>
              <Col md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  style={{
                    padding: 26,
                    borderRadius: 26,
                    background:
                      "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,64,175,0.85))",
                    border: "1px solid rgba(148,163,184,0.6)",
                    boxShadow: "0 22px 60px rgba(15,23,42,0.95)",
                  }}
                >
                  <Row className="g-3">
                    {[
                      {
                        label: "Tech Stack Expertise",
                        value: "React · TS · Node · PG",
                      },
                      {
                        label: "Industries Served",
                        value: "HVAC · Small Biz · Creators",
                      },
                      {
                        label: "Core Strengths",
                        value: "Web · AI · Automation",
                      },
                      { label: "Based In", value: "New York" },
                    ].map((stat) => (
                      <Col xs={6} key={stat.label}>
                        <div
                          style={{
                            padding: 14,
                            borderRadius: 18,
                            background: "rgba(15,23,42,0.9)",
                            border: "1px solid rgba(148,163,184,0.8)",
                            height: "100%",
                          }}
                        >
                          <div
                            style={{
                              fontSize: "1.2rem",
                              fontWeight: 700,
                              color: "#e5e7eb",
                            }}
                          >
                            {stat.value}
                          </div>
                          <div
                            style={{
                              fontSize: "0.78rem",
                              color: "#9ca3af",
                              textTransform: "uppercase",
                              letterSpacing: "0.08em",
                              marginTop: 4,
                            }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          style={{
            padding: "5rem 0",
            borderTop: "1px solid rgba(148,163,184,0.35)",
            background: "#020617",
          }}
        >
          <Container>
            <motion.div
              className="text-center mb-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2
                className="fw-bold mb-3"
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.6rem)",
                }}
              >
                What We Stand For
              </h2>
              <p
                style={{
                  maxWidth: 680,
                  margin: "0 auto",
                  fontSize: "1.05rem",
                  color: "#cbd5e1",
                }}
              >
                These principles shape how we design, code, and communicate with
                every client and every project.
              </p>
            </motion.div>

            <Row className="gy-4">
              {[
                {
                  icon: "bi-lightbulb",
                  title: "Innovation With Purpose",
                  desc: "We use modern tools, AI, and automation only when they truly improve clarity, speed, or results.",
                },
                {
                  icon: "bi-hand-thumbs-up",
                  title: "Integrity In Delivery",
                  desc: "Clear expectations, realistic timelines, and honest communication from first call to final launch.",
                },
                {
                  icon: "bi-compass",
                  title: "Clarity Over Complexity",
                  desc: "We turn messy ideas and processes into simple, understandable systems for you and your team.",
                },
              ].map((item, i) => (
                <Col md={4} key={item.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    style={{
                      padding: 24,
                      borderRadius: 22,
                      background: "rgba(15,23,42,0.96)",
                      border: "1px solid rgba(148,163,184,0.7)",
                      boxShadow: "0 20px 55px rgba(0,0,0,0.8)",
                      height: "100%",
                    }}
                  >
                    <i
                      className={`bi ${item.icon}`}
                      style={{
                        fontSize: "2.5rem",
                        color: "#38bdf8",
                        marginBottom: 12,
                      }}
                    />
                    <h5 className="fw-bold mb-2">{item.title}</h5>
                    <p
                      style={{
                        color: "#e5e7eb",
                        fontSize: "0.98rem",
                        lineHeight: 1.7,
                      }}
                    >
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
            padding: "5rem 0",
            borderTop: "1px solid rgba(148,163,184,0.35)",
            background: "rgba(15,23,42,1)",
          }}
        >
          <Container>
  <motion.div
    className="text-center mb-5"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2
      className="fw-bold mb-3"
      style={{
        fontSize: "clamp(2rem, 3vw, 2.6rem)",
      }}
    >
      Our Code Of Excellence
    </h2>
    <p
      style={{
        maxWidth: 680,
        margin: "0 auto",
        fontSize: "1.05rem",
        color: "#cbd5e1",
      }}
    >
      From database design to microcopy on a button, we obsess over
      details that most people will never see – but will always feel.
    </p>
  </motion.div>

  <Row className="gy-4">
    {[
      {
        icon: "bi-shield-check",
        title: "Secure & Stable",
        desc: "Clean architectures, tested flows, and best practices around auth, validation, and deployments.",
      },
      {
        icon: "bi-globe-americas",
        title: "Modern Stack",
        desc: "React, Next.js, TypeScript, Node, and PostgreSQL — the same tools trusted by top startups.",
      },
      {
        icon: "bi-stars",
        title: "Polish & Performance",
        desc: "Animations, responsiveness, and UX tuned so your brand feels premium on every device.",
      },
    ].map((item, i) => (
      <Col md={4} key={item.title}>
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          viewport={{ once: true }}
          style={{
            padding: 24,
            borderRadius: 22,
            background: "rgba(2,6,23,0.96)",
            border: "1px solid rgba(148,163,184,0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 20px 55px rgba(0,0,0,0.85)",
            height: "100%",
          }}
        >
          <i
            className={`bi ${item.icon}`}
            style={{
              fontSize: "2.6rem",
              color: "#38bdf8",
              marginBottom: 14,
              filter: "drop-shadow(0 0 6px rgba(56,189,248,0.45))",
            }}
          />
          <h5 className="fw-bold mb-2">{item.title}</h5>
          <p
            style={{
              color: "#e5e7eb",
              fontSize: "0.98rem",
              lineHeight: 1.7,
            }}
          >
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
            padding: "5rem 0",
            borderTop: "1px solid rgba(148,163,184,0.35)",
            background: "#020617",
          }}
        >
          <Container>
            <Row className="align-items-center gy-5">
              <Col md={5} className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={images.ceopic}
                    alt="Elisaul Batista, Founder and CEO of Batistack Development"
                    style={{
                      width: 260,
                      height: 260,
                      borderRadius: "999px",
                      objectFit: "cover",
                      border: "4px solid #f9fafb",
                      boxShadow: "0 20px 55px rgba(0,0,0,0.85)",
                    }}
                  />
                </motion.div>
                <div className="d-flex justify-content-center gap-4 mt-4">
                  {[
                    {
                      href: "https://www.linkedin.com/in/elisaul-batista/",
                      color: "#38bdf8",
                      icon: "bi-linkedin",
                    },
                    {
                      href: "mailto:elisaul@batistack.com",
                      color: "#f97373",
                      icon: "bi-envelope-fill",
                    },
                    {
                      href: "https://github.com/Batista0523",
                      color: "#e5e7eb",
                      icon: "bi-github",
                    },
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        width: 58,
                        height: 58,
                        borderRadius: "999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.7rem",
                        color: item.color,
                        background: "rgba(255,255,255,0.10)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        boxShadow:
                          "0 8px 20px rgba(0,0,0,0.35), inset 0 0 18px rgba(255,255,255,0.12)",
                        transition: "0.25s ease",
                      }}
                      whileHover={{
                        scale: 1.07,
                        y: -4,
                        boxShadow:
                          "0 12px 26px rgba(0,0,0,0.45), inset 0 0 22px rgba(255,255,255,0.18)",
                      }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <i className={`bi ${item.icon}`} />
                    </motion.a>
                  ))}
                </div>
              </Col>
              <Col md={7}>
                <motion.h2
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "clamp(1.9rem, 2.8vw, 2.4rem)",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Elisaul Batista
                  <span style={{ color: "#38bdf8" }}> — Founder & CEO</span>
                </motion.h2>
                <motion.p
                  style={{
                    fontSize: "1.05rem",
                    color: "#e5e7eb",
                    lineHeight: 1.8,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Elisaul leads Batistack with a vision rooted in design,
                  engineering, and people. His mission is to turn ideas into
                  digital experiences that feel clean, intuitive, and genuinely
                  useful—systems that make life easier, not more complicated.
                </motion.p>

                <motion.p
                  style={{
                    fontSize: "1.02rem",
                    color: "#cbd5e1",
                    lineHeight: 1.8,
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  He collaborates with founders, creators, and businesses across
                  different industries, helping them turn ideas into real
                  products and workflows that bring clarity, momentum, and
                  long-term growth.
                </motion.p>
              </Col>
            </Row>
          </Container>
        </section>

        <section
          style={{
            padding: "5rem 0 4rem",
            borderTop: "1px solid rgba(148,163,184,0.4)",
            background: "rgba(15,23,42,1)",
          }}
        >
          <Container className="text-center">
            <motion.h3
              className="fw-bold mb-3"
              style={{
                fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              We don’t just build websites — we build long-term partnerships.
            </motion.h3>
            <motion.p
              style={{
                maxWidth: 680,
                margin: "0 auto 2rem",
                fontSize: "1.05rem",
                color: "#cbd5e1",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              If you’re ready to treat your digital presence like a real asset —
              not just a checkbox — Batistack is ready to build with you.
            </motion.p>
            <AnimatedButton text="Contact Batistack" href="/contact" />
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default About;
