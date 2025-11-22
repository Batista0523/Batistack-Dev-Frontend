import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import AnimatedButton from "../components/Button";
import Footer from "../components/Footer";
import { useTrafficTracker } from "../hook/useTrafficTracker";
import "bootstrap-icons/font/bootstrap-icons.css";

function ApplicationsCenter() {
  useTrafficTracker("page_view", "/applications");

  const services = [
    {
      icon: "bi-basket",
      title: "SNAP & Cash Assistance",
      desc: "Get help applying or renewing SNAP (Food Stamps), Cash Assistance, or One-Shot Deal. We make sure your documents are complete and error-free so your case moves quickly.",
    },
    {
      icon: "bi-house-door",
      title: "NYCHA & Section 8 Housing",
      desc: "We guide you through NYCHA and Section 8 applications or renewals — handling forms, updates, and recertifications accurately to help avoid delays or rejections.",
    },
    {
      icon: "bi-car-front",
      title: "DMV Forms & Vehicle Permits",
      desc: "Avoid DMV stress. We prepare your car registration, title transfer, and license renewal forms so your visit is faster and more organized.",
    },
    {
      icon: "bi-passport",
      title: "Passport & ID Applications",
      desc: "From new passports to state ID renewals, we help you fill out and organize every document correctly — saving you time and reducing rejections.",
    },
    {
      icon: "bi-globe-americas",
      title: "Immigration & USCIS Forms",
      desc: "We simplify forms like I-130, I-864, N-400, and I-765 with translation and prep support. We do not provide legal advice or representation.",
    },
    {
      icon: "bi-translate",
      title: "Certified Translations",
      desc: "Professional English ↔ Spanish translations for USCIS, schools, and embassies. Certified, accurate, and prepared to be accepted the first time.",
    },
    {
      icon: "bi-heart-pulse",
      title: "Medicaid, Medicare & Health Coverage",
      desc: "We help you apply or renew Medicaid, Medicare, and health insurance programs — keeping your benefits active and up to date.",
    },
    {
      icon: "bi-person-vcard",
      title: "Employment & Background Forms",
      desc: "Job applications, onboarding packets, or employment verification forms — prepared clearly, quickly, and confidentially.",
    },
    {
      icon: "bi-cash-stack",
      title: "Unemployment & Tax Credit Programs",
      desc: "We assist with Unemployment Insurance, EITC, and Child Tax Credit forms to help you claim the financial support you qualify for.",
    },
  ];

  const faqs = [
    {
      q: "Do you provide legal advice or representation?",
      a: "No. We are not attorneys and do not provide legal advice or representation. We only assist with completing and organizing applications based on your information and official instructions.",
    },
    {
      q: "Is my information kept private?",
      a: "Yes. Your documents are handled confidentially and stored securely. We do not sell or share your personal information.",
    },
    {
      q: "What types of applications do you handle?",
      a: "We help with most NYC-related paperwork — SNAP, NYCHA, Section 8, DMV, Passport, Medicaid, Immigration, Unemployment, and more. If it’s an application or form, we can likely help.",
    },
    {
      q: "Do you offer bilingual support?",
      a: "Yes. We assist in both English and Spanish so you can feel comfortable and understood at every step.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          NYC Application Help Center | SNAP, NYCHA, DMV, Immigration & More | Batistack
        </title>
        <meta
          name="description"
          content="We help New Yorkers complete SNAP, NYCHA, DMV, immigration, passport, Medicaid, and other applications. Fast, confidential, bilingual support. No legal advice, document assistance only."
        />
        <meta
          name="keywords"
          content="SNAP application help NYC, NYCHA recertification, Section 8 renewal, DMV registration form NYC, driver license application, passport renewal help NYC, USCIS form assistance, immigration document help, Medicaid application NYC, Batistack Application Center"
        />
        <meta property="og:title" content="Application Help NYC | Batistack Application Center" />
        <meta
          property="og:description"
          content="Get guided help completing NYC applications — SNAP, NYCHA, DMV, immigration, passport, Medicaid, and more — with bilingual and confidential support."
        />
        <meta property="og:url" content="https://batistack.com/applications" />
        <meta
          property="og:image"
          content="https://batistack.com/assets/og-application-center.jpg"
        />
        <link rel="canonical" href="https://batistack.com/applications" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Batistack Application Center",
              "image": "https://batistack.com/assets/og-application-center.jpg",
              "url": "https://batistack.com/applications",
              "telephone": "+1-929-733-1600",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Brooklyn",
                "addressRegion": "NY",
                "postalCode": "11201",
                "addressCountry": "US"
              },
              "description": "We help New Yorkers complete applications like SNAP, NYCHA, DMV, immigration, passport, Medicaid, unemployment, and more. Fast and affordable. No legal advice provided.",
              "areaServed": ["Brooklyn", "Manhattan", "Queens", "Bronx", "Staten Island"],
              "serviceType": [
                "SNAP Application Help",
                "NYCHA Recertification",
                "Section 8 Renewal",
                "DMV Registration Forms",
                "Driver License Application",
                "Passport Application Help",
                "Immigration Document Assistance",
                "USCIS Form I-130 Support",
                "Medicaid and Medicare Applications",
                "Unemployment Application Help",
                "One-Shot Deal Application Help",
                "Document Translation Services",
                "Housing Lottery Assistance",
                "School Financial Aid Forms",
                "Tax Credit & Child Benefit Applications"
              ]
            }
          `}
        </script>
      </Helmet>

      <div
        style={{
          background:
            "radial-gradient(circle at top, #020617 0, #020617 45%, #000 100%)",
          color: "#f9fafb",
          overflowX: "hidden",
          fontFamily:
            '-apple-system, system-ui, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
        }}
      >
        <HeroSection
          title="Helping New Yorkers With Every Application"
          description="From SNAP and NYCHA to DMV, Immigration, Passport and health coverage — we help you complete the paperwork correctly, with clear, bilingual support."
          buttonText="Get Help Now"
          buttonHref="/contact"
        />

        <section
          style={{
            position: "relative",
            padding: "2.5rem 0 1rem",
          }}
        >
          <Container style={{ position: "relative", zIndex: 5 }}>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{
                maxWidth: 780,
                margin: "0 auto",
                padding: "14px 18px",
                borderRadius: 18,
                background: "rgba(15,23,42,0.9)",
                border: "1px solid rgba(148,163,184,0.55)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 18px 45px rgba(0,0,0,0.75)",
                fontSize: "0.9rem",
                color: "#e5e7eb",
              }}
            >
              <em>
                We are not attorneys and do not provide legal advice or legal
                representation. Batistack assists applicants by helping prepare,
                organize, and submit their documents according to official
                program instructions.
              </em>
            </motion.div>
          </Container>
        </section>

        <section
          style={{
            position: "relative",
            padding: "4.5rem 0 4rem",
            borderTop: "1px solid rgba(148,163,184,0.35)",
            background: "rgba(15,23,42,0.98)",
          }}
        >
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 10%, rgba(56,189,248,0.16), transparent 60%), radial-gradient(circle at 80% 80%, rgba(248,113,113,0.18), transparent 65%)",
              filter: "blur(70px)",
              opacity: 0.65,
              pointerEvents: "none",
            }}
            animate={{
              opacity: [0.55, 0.85, 0.6],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: "absolute",
                width: 3,
                height: 3,
                borderRadius: "999px",
                background: "rgba(148,163,184,0.7)",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: "blur(1px)",
              }}
              animate={{
                y: [0, -16, 0],
                opacity: [0.3, 0.9, 0.4],
              }}
              transition={{
                duration: 7 + Math.random() * 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}

          <Container style={{ position: "relative", zIndex: 5 }}>
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
                  fontSize: "clamp(2.1rem, 3.4vw, 2.9rem)",
                }}
              >
                What We Can Help You With
              </h2>
              <p
                style={{
                  maxWidth: 720,
                  margin: "0 auto",
                  fontSize: "1.05rem",
                  color: "#cbd5e1",
                }}
              >
                We handle the most important government and personal applications
                so you can focus on your life, not the paperwork.
              </p>
            </motion.div>

            <Row className="gy-4">
              {services.map((s, i) => (
                <Col md={4} key={s.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    viewport={{ once: true }}
                    style={{
                      padding: 22,
                      borderRadius: 22,
                      background: "rgba(2,6,23,0.96)",
                      border: "1px solid rgba(148,163,184,0.7)",
                      boxShadow: "0 22px 55px rgba(0,0,0,0.85)",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: "999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background:
                          "radial-gradient(circle at 30% 0%, rgba(56,189,248,0.35), rgba(15,23,42,1))",
                        border: "1px solid rgba(148,163,184,0.8)",
                        marginBottom: 14,
                      }}
                    >
                      <i
                        className={`bi ${s.icon}`}
                        style={{ fontSize: "1.7rem", color: "#38bdf8" }}
                      />
                    </div>
                    <h5 className="fw-bold mb-2">{s.title}</h5>
                    <p
                      style={{
                        color: "#e5e7eb",
                        fontSize: "0.98rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {s.desc}
                    </p>
                  </motion.div>
                </Col>
              ))}
            </Row>

            <motion.div
              className="text-center mt-5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <AnimatedButton text="Start an Application" href="/contact" />
              <p
                style={{
                  maxWidth: 720,
                  margin: "1.2rem auto 0",
                  fontSize: "0.9rem",
                  color: "#94a3b8",
                  lineHeight: 1.6,
                }}
              >
                <em>
                  Final approval or eligibility decisions are made only by the
                  respective government or institutional agencies. Batistack
                  helps you prepare, organize, and submit your forms in line
                  with official guidelines.
                </em>
              </p>
            </motion.div>
          </Container>
        </section>

        <section
          style={{
            padding: "4.5rem 0",
            borderTop: "1px solid rgba(148,163,184,0.4)",
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
                  fontSize: "clamp(2rem, 3.2vw, 2.7rem)",
                }}
              >
                Why New Yorkers Trust Us With Their Paperwork
              </h2>
              <p
                style={{
                  maxWidth: 720,
                  margin: "0 auto",
                  fontSize: "1.05rem",
                  color: "#cbd5e1",
                }}
              >
                Our process is built to reduce stress, avoid mistakes, and give
                you confidence before you submit any application.
              </p>
            </motion.div>

            <Row className="gy-4">
              {[
                {
                  icon: "bi-lightning-charge-fill",
                  title: "Fast Turnaround",
                  desc: "Most applications are prepared within 24–48 hours, with digital copies you can keep and reuse.",
                },
                {
                  icon: "bi-people-fill",
                  title: "Bilingual Support",
                  desc: "We assist fully in English and Spanish, making sure everything is explained clearly.",
                },
                {
                  icon: "bi-shield-lock-fill",
                  title: "Confidential & Secure",
                  desc: "Your information is protected with strict privacy and secure handling at every step.",
                },
                {
                  icon: "bi-heart-fill",
                  title: "Human & Patient",
                  desc: "We take the time to listen, explain, and walk through forms at your pace — not rushed.",
                },
              ].map((c, i) => (
                <Col md={3} key={c.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    style={{
                      padding: 22,
                      borderRadius: 22,
                      background: "rgba(15,23,42,0.98)",
                      border: "1px solid rgba(148,163,184,0.7)",
                      boxShadow: "0 22px 55px rgba(0,0,0,0.85)",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: "999px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 14px",
                        background:
                          "radial-gradient(circle at 30% 0%, rgba(248,250,252,0.2), rgba(15,23,42,1))",
                        border: "1px solid rgba(148,163,184,0.8)",
                      }}
                    >
                      <i
                        className={`bi ${c.icon}`}
                        style={{ fontSize: "1.7rem", color: "#38bdf8" }}
                      />
                    </div>
                    <h5 className="fw-bold mb-2">{c.title}</h5>
                    <p
                      style={{
                        color: "#e5e7eb",
                        fontSize: "0.97rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {c.desc}
                    </p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        <section
          style={{
            padding: "4.5rem 0 4rem",
            borderTop: "1px solid rgba(148,163,184,0.4)",
            background: "rgba(15,23,42,0.98)",
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
                  fontSize: "clamp(2rem, 3.2vw, 2.7rem)",
                }}
              >
                Frequently Asked Questions
              </h2>
              <p
                style={{
                  maxWidth: 720,
                  margin: "0 auto",
                  fontSize: "1.02rem",
                  color: "#cbd5e1",
                }}
              >
                A quick guide to how our application help works and what you can expect.
              </p>
            </motion.div>

            <Row className="justify-content-center">
              <Col md={8}>
                {faqs.map((f, i) => (
                  <motion.div
                    key={f.q}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    style={{
                      marginBottom: 16,
                      padding: 18,
                      borderRadius: 18,
                      background: "rgba(2,6,23,0.96)",
                      border: "1px solid rgba(148,163,184,0.7)",
                      boxShadow: "0 18px 45px rgba(0,0,0,0.8)",
                    }}
                  >
                    <h5
                      style={{
                        color: "#38bdf8",
                        fontWeight: 700,
                        marginBottom: 6,
                        fontSize: "1.02rem",
                      }}
                    >
                      {f.q}
                    </h5>
                    <p
                      style={{
                        color: "#e5e7eb",
                        fontSize: "0.98rem",
                        lineHeight: 1.7,
                        marginBottom: 0,
                      }}
                    >
                      {f.a}
                    </p>
                  </motion.div>
                ))}
              </Col>
            </Row>

            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true }}
            >
              <AnimatedButton text="Contact Us" href="/contact" />
              <p
                style={{
                  maxWidth: 720,
                  margin: "1.2rem auto 0",
                  fontSize: "0.9rem",
                  color: "#94a3b8",
                  lineHeight: 1.6,
                }}
              >
                <em>
                  Final approval or eligibility decisions are made only by the
                  respective agencies or institutions. Our role is to help you
                  complete, organize, and submit your forms clearly and
                  correctly.
                </em>
              </p>
            </motion.div>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ApplicationsCenter;