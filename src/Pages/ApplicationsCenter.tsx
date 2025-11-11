import { Helmet } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import AnimatedButton from "../components/Button";
import Footer from "../components/Footer";
import { useTrafficTracker } from "../hook/useTrafficTracker";

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
      desc: "We guide you through NYCHA and Section 8 applications or renewals — handling forms, updates, and recertifications accurately to avoid delays or rejections.",
    },
    {
      icon: "bi-car-front",
      title: "DMV Forms & Vehicle Permits",
      desc: "Avoid DMV stress. We prepare your car registration, title transfer, and license renewal forms so your visit is fast and frustration-free.",
    },
    {
      icon: "bi-passport",
      title: "Passport & ID Applications",
      desc: "From new passports to state ID renewals, we help you fill out and submit every document correctly — saving you time and avoiding rejections.",
    },
    {
      icon: "bi-globe-americas",
      title: "Immigration & USCIS Forms",
      desc: "We simplify forms like I-130, I-864, N-400, and I-765 with translation and prep support. *We do not provide legal advice.*",
    },
    {
      icon: "bi-translate",
      title: "Certified Translations",
      desc: "Professional English ↔ Spanish translations for USCIS, schools, and embassies. Certified, accurate, and accepted on the first try.",
    },
    {
      icon: "bi-heart-pulse",
      title: "Medicaid, Medicare & Health Coverage",
      desc: "We help you apply or renew Medicaid, Medicare, and health insurance programs — keeping your benefits active and up to date.",
    },
    {
      icon: "bi-person-vcard",
      title: "Employment & Background Forms",
      desc: "Job applications, onboarding packets, or verification letters — we handle your employment forms quickly and confidentially.",
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
      a: "No. We are not attorneys and do not provide legal advice or representation. We only assist with completing and submitting applications correctly.",
    },
    {
      q: "Is my information kept private?",
      a: "Absolutely. Your documents are stored securely and handled confidentially. We never share your personal data.",
    },
    {
      q: "What types of applications do you handle?",
      a: "We handle most NYC-related paperwork — SNAP, NYCHA, DMV, Passport, Medicaid, Immigration, and more. If it’s an application, we can help.",
    },
    {
      q: "Do you offer bilingual support?",
      a: "Yes, our team speaks both English and Spanish fluently. You’ll always be assisted in your preferred language.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          NYC Application Help Center | SNAP, NYCHA, DMV, Immigration & More |
          Batistack
        </title>
        <meta
          name="description"
          content="We help New Yorkers fill out SNAP, NYCHA, DMV, immigration, passport, and Medicaid applications. Fast, confidential, and affordable — no legal advice, just document assistance."
        />
        <meta
          name="keywords"
          content="SNAP application help NYC, NYCHA recertification, Section 8 renewal, DMV registration form NYC, driver license application, passport renewal help NYC, USCIS form assistance, immigration document help, Medicaid application NYC, Batistack Application Center"
        />
        <meta property="og:title" content="Application Help NYC | Batistack" />
        <meta
          property="og:description"
          content="Get expert help completing NYC applications — SNAP, NYCHA, DMV, immigration, passport, and more — stress-free and affordable."
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
              "description": "We help New Yorkers complete applications like SNAP, NYCHA, DMV, immigration, passport, Medicaid, and One-Shot Deal forms. Fast and affordable. No legal advice provided.",
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
          backgroundColor: "#000",
          color: "#fff",
          overflowX: "hidden",
          fontFamily: "'Inter','Segoe UI','Roboto','Helvetica Neue',sans-serif",
        }}
      >
        <HeroSection
          title="Helping New Yorkers with Every Application"
          description="From SNAP and NYCHA to DMV, Immigration, and Passport forms — we take care of the paperwork, so you don’t have to. Fast, affordable, bilingual support."
          buttonText="Get Help Now"
          buttonHref="/contact"
        />

        <p
          className="mt-3 text-secondary small text-opacity-75"
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
            fontSize: "0.9rem",
          }}
        >
          <em>
            We are not attorneys and do not provide legal advice. Batistack
            assists applicants by helping prepare and submit their documents in
            accordance with official program guidelines.
          </em>
        </p>
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
                What We <span className="text-primary">Can Help</span> You With
              </h2>
              <p className="fs-5 text-light mt-2">
                We handle all major government and personal applications —
                simple or complex.
              </p>
            </motion.div>

            <Row className="g-4">
              {services.map((s, i) => (
                <Col md={4} key={i}>
                  <motion.div
                    className="h-100 p-4 rounded bg-black shadow border border-secondary text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i
                      className={`bi ${s.icon} text-primary mb-3`}
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                    <h5 className="fw-bold text-white mb-2">{s.title}</h5>
                    <p className="text-light">{s.desc}</p>
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
              <AnimatedButton text="Start an Application" href="/contact" />

              <p
                className="mt-3 text-secondary small text-opacity-75"
                style={{
                  maxWidth: "700px",
                  margin: "0 auto",
                  lineHeight: "1.6",
                  fontSize: "0.9rem",
                }}
              >
                <em>
                  Final approval or eligibility decisions are made solely by the
                  respective government or institutional agencies. Batistack
                  assists applicants by preparing and submitting forms according
                  to official program guidelines.
                </em>
              </p>
            </motion.div>
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
                Why Thousands of New Yorkers{" "}
                <span className="text-primary">Trust Us</span>
              </h2>
              <p className="text-light fs-5">
                We make paperwork simple and stress-free — guiding you from the
                first form to a complete, confident submission.
              </p>
            </motion.div>

            <Row className="g-4 text-center">
              {[
                {
                  icon: "bi-lightning-charge-fill",
                  title: "Fast Turnaround",
                  desc: "Most applications are completed within 24–48 hours with digital copies for your records.",
                },
                {
                  icon: "bi-people-fill",
                  title: "Bilingual Support",
                  desc: "We assist clients in English and Spanish to make every step easy and clear.",
                },
                {
                  icon: "bi-shield-lock-fill",
                  title: "Confidential & Secure",
                  desc: "We follow strict privacy policies to protect your data at all times.",
                },
                {
                  icon: "bi-heart-fill",
                  title: "Community Focused",
                  desc: "We’re New Yorkers helping New Yorkers — with compassion and accuracy.",
                },
              ].map((c, i) => (
                <Col md={3} key={i}>
                  <motion.div
                    className="p-4 bg-dark rounded border border-secondary h-100"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <i
                      className={`bi ${c.icon} text-primary mb-3`}
                      style={{ fontSize: "2.5rem" }}
                    ></i>
                    <h5 className="text-white fw-bold">{c.title}</h5>
                    <p className="text-light">{c.desc}</p>
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
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
            </motion.div>

            <Row className="justify-content-center">
              <Col md={8}>
                {faqs.map((f, i) => (
                  <motion.div
                    key={i}
                    className="mb-4 border-bottom border-secondary pb-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <h5 className="text-primary fw-bold">{f.q}</h5>
                    <p className="text-light">{f.a}</p>
                  </motion.div>
                ))}
              </Col>
            </Row>

            <motion.div
              className="text-center mt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <AnimatedButton text="Contact Us" href="/contact" />
              <p
                className="mt-3 text-secondary small text-opacity-75"
                style={{
                  maxWidth: "700px",
                  margin: "0 auto",
                  lineHeight: "1.6",
                  fontSize: "0.9rem",
                }}
              >
                <em>
                  Final approval or eligibility decisions are made solely by the
                  respective government or institutional agencies. Batistack
                  assists applicants by preparing and submitting forms according
                  to official program guidelines.
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
