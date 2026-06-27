'use client';
import { Reveal } from "../components/ui";
import Link from "next/link";

const EFFECTIVE_DATE = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const SECTIONS = [
  {
    number: "01",
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, including full name, email address, and phone number submitted through contact forms. We also collect usage data automatically when you visit our website — pages visited, time spent, referring URLs, and browser or device information gathered via analytics tools.",
  },
  {
    number: "02",
    title: "How We Use Information",
    content:
      "We use the information we collect to respond to your inquiries and deliver our services, to improve and personalize the website experience, to analyze traffic patterns and optimize performance, and to communicate service updates or relevant information when applicable.",
  },
  {
    number: "03",
    title: "Legal Basis",
    content:
      "We process your personal data on the basis of your consent when you submit a contact form or opt in to communications. Where consent is not the applicable basis, we rely on legitimate interest — namely, operating and improving our business services — to process data in a proportionate and non-intrusive manner.",
  },
  {
    number: "04",
    title: "Data Security",
    content:
      "We implement industry-standard security measures including encrypted data transmission, access controls, and secure server infrastructure to protect your personal information from unauthorized access, disclosure, alteration, or destruction. No method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
  },
  {
    number: "05",
    title: "Sharing Your Information",
    content:
      "We do not sell, trade, or rent your personal information to third parties. Information may be shared only with trusted service providers who assist us in operating our website and delivering services, or when required by law. All service providers are bound by confidentiality obligations.",
  },
  {
    number: "06",
    title: "Cookies & Tracking",
    content:
      "We use cookies and similar tracking technologies to analyze site traffic, understand usage patterns, and enhance your browsing experience. Analytics cookies may be set by third-party providers such as Google Analytics. You may opt out of cookie tracking at any time through your browser settings or via available opt-out tools provided by those services.",
  },
  {
    number: "07",
    title: "Data Retention",
    content:
      "We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or business obligations. When data is no longer needed, it is securely deleted or anonymized.",
  },
  {
    number: "08",
    title: "Your Rights",
    content:
      "You have the right to request access to the personal data we hold about you, to request correction of inaccurate information, or to request deletion of your data. You may also object to or request restriction of certain processing activities, and withdraw consent at any time. To exercise any of these rights, contact us at elisaul@batistack.com.",
  },
  {
    number: "09",
    title: "Policy Updates",
    content:
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. When we make material changes, we will update the effective date displayed at the top of this page. We encourage you to review this policy periodically.",
  },
  {
    number: "10",
    title: "Contact Us",
    content: null,
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <main style={{ background: "var(--void)", paddingTop: "72px" }}>

        {/* ── Hero ── */}
        <section
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,174,239,0.06) 0%, transparent 55%), #0A0A0A",
            borderBottom: "1px solid #1E1E1E",
            padding: "72px 0 60px",
          }}
        >
          <div className="section-container policy-container">
            <Reveal>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#00AEEF",
                  marginBottom: "16px",
                }}
              >
                Legal
              </p>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(30px, 4vw, 48px)",
                  lineHeight: 1.1,
                  color: "var(--bone)",
                  margin: "0 0 16px",
                  letterSpacing: "-0.015em",
                }}
              >
                Privacy Policy
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  color: "var(--mist)",
                  letterSpacing: "0.04em",
                }}
              >
                Effective Date: {EFFECTIVE_DATE}
              </p>
            </Reveal>
          </div>
          {/* Blue accent line */}
          <div
            style={{
              height: "2px",
              background:
                "linear-gradient(90deg, #00AEEF 0%, rgba(0,174,239,0.1) 60%, transparent 100%)",
              maxWidth: "760px",
              margin: "40px auto 0 max(60px, calc((100vw - 760px) / 2))",
            }}
          />
        </section>

        {/* ── Sections ── */}
        <section style={{ padding: "64px 0 100px" }}>
          <div className="section-container policy-container">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.number} delay={0.04 * i}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    gap: "0 28px",
                    alignItems: "start",
                    paddingBottom: i < SECTIONS.length - 1 ? "48px" : 0,
                    marginBottom: i < SECTIONS.length - 1 ? "48px" : 0,
                    borderBottom: i < SECTIONS.length - 1 ? "1px solid #1E1E1E" : "none",
                  }}
                  className="policy-row"
                >
                  {/* Number */}
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "13px",
                      letterSpacing: "0.08em",
                      color: "rgba(0,174,239,0.4)",
                      paddingTop: "4px",
                    }}
                  >
                    {s.number}
                  </span>

                  {/* Content */}
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: "clamp(17px, 2vw, 22px)",
                        color: "var(--bone)",
                        margin: "0 0 14px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {s.title}
                    </h2>

                    {s.content ? (
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "15px",
                          color: "var(--mist)",
                          lineHeight: 1.8,
                          margin: 0,
                        }}
                      >
                        {s.content}
                      </p>
                    ) : (
                      /* Contact section */
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "15px",
                          color: "var(--mist)",
                          lineHeight: 1.8,
                        }}
                      >
                        <p style={{ margin: "0 0 16px" }}>
                          For questions, concerns, or requests regarding this Privacy
                          Policy or your personal data, please reach out:
                        </p>
                        <div
                          style={{
                            background: "#141414",
                            border: "1px solid #1E1E1E",
                            borderLeft: "2px solid #00AEEF",
                            borderRadius: "8px",
                            padding: "20px 24px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
                          <span>
                            Email:{" "}
                            <a
                              href="mailto:elisaul@batistack.com"
                              style={{
                                color: "#00AEEF",
                                textDecoration: "none",
                                transition: "opacity 0.2s",
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                              elisaul@batistack.com
                            </a>
                          </span>
                          <span>Phone: 929-733-1600</span>
                          <span>Location: New York City, NY</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Footer note */}
            <Reveal delay={0.1}>
              <div
                style={{
                  borderTop: "1px solid #1E1E1E",
                  paddingTop: "36px",
                  marginTop: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "#555",
                    margin: 0,
                    letterSpacing: "0.04em",
                  }}
                >
                  © {new Date().getFullYear()} Batistack Development Corp — New York City
                </p>
                <Link
                  href="/"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "12px",
                    color: "#555",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00AEEF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
                >
                  ← Back to Home
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <style>{`
        .policy-container {
          max-width: 820px !important;
        }
        @media (max-width: 640px) {
          .policy-row {
            grid-template-columns: 1fr !important;
            gap: 8px 0 !important;
          }
        }
      `}</style>
    </>
  );
}
