import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTrafficTracker } from "../hook/useTrafficTracker";
import SectionLabel from "../components/SectionLabel";

/* ── Application card with gold accent hover (mirrors ServiceCard) ── */
interface AppCardProps {
  icon: string;
  title: string;
  desc: string;
}

function AppCard({ icon, title, desc }: AppCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--cream)" : "var(--off-white)",
        padding: "40px",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.3s",
      }}
    >
      {/* Gold left accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "3px",
          height: hovered ? "100%" : "0%",
          background: "var(--gold)",
          transition: "height 0.4s ease",
        }}
      />
      <div style={{ fontSize: "32px", marginBottom: "16px" }}>{icon}</div>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "20px",
          fontWeight: 400,
          marginBottom: "10px",
          color: "var(--black)",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.7,
          color: "var(--gray)",
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

/* ── Trust item card ── */
interface TrustCardProps {
  title: string;
  desc: string;
}

function TrustCard({ title, desc }: TrustCardProps) {
  return (
    <div
      style={{
        padding: "32px",
        background: "#fff",
        border: "1px solid var(--gray-light)",
      }}
    >
      <h4
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "20px",
          fontWeight: 400,
          marginBottom: "12px",
          color: "var(--black)",
        }}
      >
        {title}
      </h4>
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.7,
          color: "var(--gray)",
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}

/* ── Page ── */
function ApplicationsCenter() {
  useTrafficTracker("page_view", "/applications");

  const applications = [
    {
      icon: "🍽️",
      title: "SNAP (Food Stamps)",
      desc: "Assistance with food benefit applications for eligible New York families and individuals.",
    },
    {
      icon: "🏠",
      title: "NYCHA Housing",
      desc: "Help navigating public housing applications and waitlist processes.",
    },
    {
      icon: "🪪",
      title: "DMV Services",
      desc: "Driver's license, vehicle registration, and ID applications.",
    },
    {
      icon: "✈️",
      title: "Passport Applications",
      desc: "Document preparation and scheduling assistance for US passport applications.",
    },
    {
      icon: "🌍",
      title: "Immigration Assistance",
      desc: "Support with DACA renewals, green card applications, and naturalization paperwork.",
    },
    {
      icon: "🗣️",
      title: "Document Translation",
      desc: "Certified translation assistance for legal and official documents.",
    },
    {
      icon: "🏥",
      title: "Medicaid Enrollment",
      desc: "Help with Medicaid and Health Plus enrollment for eligible residents.",
    },
    {
      icon: "💼",
      title: "Employment Benefits",
      desc: "Assistance with unemployment claims and employment benefit applications.",
    },
    {
      icon: "📋",
      title: "Other Applications",
      desc: "Additional government program enrollment and application support.",
    },
  ];

  const trustItems = [
    {
      title: "Bilingual Support",
      desc: "We assist in English and Spanish, making the process accessible to all communities.",
    },
    {
      title: "Document Review",
      desc: "We review your documents before submission to minimize errors and delays.",
    },
    {
      title: "Step-by-Step Guidance",
      desc: "We walk you through every step of the process, so you're never confused.",
    },
    {
      title: "Zero Judgment",
      desc: "We serve everyone — regardless of immigration status, income level, or background.",
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
          background: "var(--off-white)",
          color: "var(--black)",
          fontFamily: "var(--font-sans)",
          overflowX: "hidden",
        }}
      >
        {/* ── Hero ── */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            padding: "clamp(120px, 12vw, 160px) clamp(28px, 5vw, 60px) 80px",
            borderBottom: "1px solid var(--gray-light)",
          }}
        >
          <SectionLabel>Application Assistance</SectionLabel>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(48px, 5vw, 80px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            NYC Application
            <br />
            Assistance Center
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "var(--gray)",
              maxWidth: "520px",
              marginTop: "24px",
              lineHeight: 1.7,
            }}
          >
            We help New York residents navigate government applications for
            SNAP, NYCHA, DMV, Immigration, and more — clearly and confidently.
          </p>

          {/* Disclaimer banner */}
          <div
            style={{
              background: "var(--cream)",
              borderLeft: "3px solid var(--gold)",
              padding: "16px 20px",
              marginTop: "40px",
              maxWidth: "600px",
              fontSize: "14px",
              color: "var(--gray)",
              lineHeight: 1.7,
            }}
          >
            ⚠️ We assist with the application process only. We are not a legal
            firm and do not provide legal advice. For legal guidance, consult a
            licensed attorney.
          </div>
        </motion.section>

        {/* ── Applications Grid ── */}
        <section
          style={{
            padding: "80px clamp(28px, 5vw, 60px)",
            borderBottom: "1px solid var(--gray-light)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Services We Help With</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              9 Application Types
            </h2>
          </motion.div>

          {/* 3x3 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "2px",
              background: "var(--gray-light)",
              marginTop: "60px",
            }}
          >
            {applications.map((app, i) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
              >
                <AppCard icon={app.icon} title={app.title} desc={app.desc} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── Why Trust Us ── */}
        <section
          style={{
            padding: "80px clamp(28px, 5vw, 60px)",
            background: "var(--cream)",
            borderBottom: "1px solid var(--gray-light)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionLabel>Why Work With Us</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 300,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              We've helped hundreds
              <br />
              of NYC residents.
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "24px",
              marginTop: "60px",
            }}
          >
            {trustItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <TrustCard title={item.title} desc={item.desc} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{
            padding: "80px clamp(28px, 5vw, 60px)",
            background: "var(--black)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "56px",
              fontWeight: 300,
              color: "#fff",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Need help with an
            <br />
            <em>application?</em>
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#777",
              marginTop: "20px",
              lineHeight: 1.7,
            }}
          >
            Our team is ready to walk you through the process — in English or
            Spanish, step by step.
          </p>

          <Link
            to="/contact"
            className="btn-primary-bs"
            style={{ marginTop: "40px", display: "inline-block" }}
          >
            Get Free Help Today
          </Link>
        </motion.section>

        {/* ── Legal Disclaimer ── */}
        <section
          style={{
            padding: "60px clamp(28px, 5vw, 60px)",
            background: "var(--cream)",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              color: "var(--gray)",
              lineHeight: 1.8,
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            DISCLAIMER: Batistack Development Corp. provides administrative
            assistance with government application forms only. We are not
            attorneys, legal advisors, or immigration consultants. Nothing on
            this page constitutes legal advice. Use of our services does not
            create an attorney-client relationship. For legal guidance, please
            consult a licensed professional. Batistack is not affiliated with,
            endorsed by, or connected to any government agency.
          </p>
        </section>
      </div>
    </>
  );
}

export default ApplicationsCenter;
