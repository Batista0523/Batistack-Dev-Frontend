import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SectionLabel from "../components/SectionLabel";

function PrivacyPolicy() {
  const effectiveDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const sections = [
    {
      number: "01",
      title: "Information We Collect",
      content: (
        <>
          <p>
            We collect information you provide directly to us, including full
            name, email address, and phone number submitted through contact
            forms. We also collect usage data automatically when you visit our
            website, including pages visited, time spent, referring URLs, and
            browser or device information gathered via analytics tools.
          </p>
        </>
      ),
    },
    {
      number: "02",
      title: "How We Use Information",
      content: (
        <>
          <p>
            We use the information we collect to respond to your inquiries and
            deliver our services, to improve and personalize the website
            experience, to analyze traffic patterns and optimize performance, and
            to communicate service updates or relevant information when
            applicable.
          </p>
        </>
      ),
    },
    {
      number: "03",
      title: "Legal Basis",
      content: (
        <>
          <p>
            We process your personal data on the basis of your consent when you
            submit a contact form or opt in to communications. Where consent is
            not the applicable basis, we rely on legitimate interest — namely,
            operating and improving our business services — to process data in a
            proportionate and non-intrusive manner.
          </p>
        </>
      ),
    },
    {
      number: "04",
      title: "Data Security",
      content: (
        <>
          <p>
            We implement industry-standard security measures including encrypted
            data transmission, access controls, and secure server infrastructure
            to protect your personal information from unauthorized access,
            disclosure, alteration, or destruction. No method of transmission
            over the internet is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </>
      ),
    },
    {
      number: "05",
      title: "Sharing Your Information",
      content: (
        <>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. Information may be shared only with trusted service
            providers who assist us in operating our website and delivering
            services, or when required by law. All service providers are bound
            by confidentiality obligations.
          </p>
        </>
      ),
    },
    {
      number: "06",
      title: "Cookies & Tracking",
      content: (
        <>
          <p>
            We use cookies and similar tracking technologies to analyze site
            traffic, understand usage patterns, and enhance your browsing
            experience. Analytics cookies may be set by third-party providers
            such as Google Analytics. You may opt out of cookie tracking at any
            time through your browser settings or by using available opt-out
            tools provided by those services.
          </p>
        </>
      ),
    },
    {
      number: "07",
      title: "Data Retention",
      content: (
        <>
          <p>
            We retain your personal information only for as long as necessary to
            fulfill the purposes for which it was collected, including legal,
            accounting, or business obligations. When data is no longer needed,
            it is securely deleted or anonymized.
          </p>
        </>
      ),
    },
    {
      number: "08",
      title: "Your Rights",
      content: (
        <>
          <p>
            You have the right to request access to the personal data we hold
            about you, to request correction of inaccurate information, or to
            request deletion of your data. You may also object to or request
            restriction of certain processing activities, and withdraw consent at
            any time. To exercise any of these rights, contact us at
            info@batistack.com.
          </p>
        </>
      ),
    },
    {
      number: "09",
      title: "Policy Updates",
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. When we make
            material changes, we will update the effective date displayed at the
            top of this page. We encourage you to review this policy
            periodically.
          </p>
        </>
      ),
    },
    {
      number: "10",
      title: "Contact Us",
      content: (
        <>
          <p>
            For questions, concerns, or requests regarding this Privacy Policy or
            your personal data, please reach out to us through any of the
            following:
          </p>
          <p style={{ marginTop: "16px" }}>
            Email:{" "}
            <a
              href="mailto:info@batistack.com"
              style={{ color: "var(--black)", textDecoration: "underline" }}
            >
              info@batistack.com
            </a>
            <br />
            Phone: 929-733-1600
            <br />
            Location: New York City, NY
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Batistack Development</title>
        <meta
          name="description"
          content="Read our professional Privacy Policy to understand how Batistack Development collects, uses, and protects your data."
        />
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
            padding: "clamp(120px, 12vw, 160px) clamp(28px, 5vw, 60px) 60px",
            borderBottom: "1px solid var(--gray-light)",
          }}
        >
          <SectionLabel>Legal</SectionLabel>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Privacy Policy
          </h1>

          <p
            style={{
              fontSize: "13px",
              color: "var(--gray)",
              marginTop: "20px",
            }}
          >
            Effective Date: {effectiveDate}
          </p>
        </motion.section>

        {/* ── Content ── */}
        <section
          style={{
            padding: "60px clamp(28px, 5vw, 60px) 120px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {sections.map((section, i) => (
            <motion.div
              key={section.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "13px",
                  color: "var(--gold)",
                  marginBottom: "8px",
                  letterSpacing: "0.05em",
                }}
              >
                {section.number}
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "24px",
                  fontWeight: 400,
                  marginBottom: "16px",
                  color: "var(--black)",
                }}
              >
                {section.title}
              </h2>

              <div
                style={{
                  fontSize: "15px",
                  color: "var(--gray)",
                  lineHeight: 1.8,
                }}
              >
                {section.content}
              </div>

              {i < sections.length - 1 && (
                <div
                  style={{
                    borderTop: "1px solid var(--gray-light)",
                    margin: "48px 0",
                  }}
                />
              )}
            </motion.div>
          ))}

          {/* ── Footer line ── */}
          <div
            style={{
              borderTop: "1px solid var(--gray-light)",
              paddingTop: "40px",
              marginTop: "60px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                color: "var(--gray)",
              }}
            >
              &copy; {new Date().getFullYear()} Batistack Development Corp.
              &nbsp;&middot;&nbsp; New York City
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default PrivacyPolicy;
