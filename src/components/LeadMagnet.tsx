import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import SectionLabel from "./SectionLabel";

interface LeadMagnetProps {
  apiBaseUrl: string;
}

const auditBenefits = [
  "Speed & performance score",
  "AI integration opportunities",
  "Conversion rate analysis",
  "Competitive positioning review",
];

const businessTypes = [
  "Restaurant/Cafe",
  "Retail Store",
  "Service Business",
  "Startup",
  "Agency",
  "Other",
];

export default function LeadMagnet({ apiBaseUrl }: LeadMagnetProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    businessType: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      await axios.post(`${apiBaseUrl}/leads`, {
        name: formData.name,
        email: formData.email,
        website: formData.website,
        businessType: formData.businessType,
        service: "Free Audit",
        source: "Lead Magnet",
      });

      setSuccess("Your audit is on its way! Check your inbox within 24 hours.");
      setFormData({ name: "", email: "", website: "", businessType: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="free-audit"
      style={{
        background: "var(--off-white)",
        padding: "140px 60px",
        position: "relative",
      }}
      className="lead-magnet-section"
    >
      {/* Gold accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "4px",
          height: "100%",
          background: "var(--gold)",
        }}
      />

      <motion.div
        ref={ref}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
        initial={{ opacity: 0, y: 32 }}
        transition={{ duration: 0.8 }}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "100px",
          alignItems: "start",
        }}
        className="lead-magnet-inner"
      >
        {/* Left — copy */}
        <div>
          <SectionLabel>Free offer</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(34px, 3.5vw, 54px)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--black)",
              margin: "0 0 32px 0",
            }}
          >
            Get a free AI-powered audit of your{" "}
            <em>website</em>
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "var(--gray)",
              lineHeight: 1.7,
              margin: "0 0 36px 0",
            }}
          >
            We'll analyse your site and deliver a personalised report covering:
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 40px 0",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {auditBenefits.map((benefit, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  fontSize: "15px",
                  color: "var(--black)",
                  lineHeight: 1.5,
                }}
              >
                <span
                  style={{
                    color: "var(--gold)",
                    fontWeight: 700,
                    fontSize: "16px",
                    lineHeight: 1.5,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <p
            style={{
              fontSize: "13px",
              color: "var(--gray)",
              letterSpacing: "0.04em",
              margin: 0,
            }}
          >
            Delivered within 24 hours. No sales call required.
          </p>
        </div>

        {/* Right — form */}
        <div>
          {success ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                padding: "48px 40px",
                border: "1px solid var(--gold)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "22px",
                  color: "var(--gold)",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {success}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              {error && (
                <p
                  style={{
                    color: "#b93333",
                    fontSize: "14px",
                    marginBottom: "20px",
                  }}
                >
                  {error}
                </p>
              )}

              <div style={{ marginBottom: "28px" }}>
                <label className="home-contact-label">Name</label>
                <input
                  className="home-contact-input"
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  value={formData.name}
                  onChange={handleChange}
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
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ marginBottom: "28px" }}>
                <label className="home-contact-label">
                  Website URL{" "}
                  <span
                    style={{
                      fontStyle: "normal",
                      color: "var(--gray-light)",
                      textTransform: "lowercase",
                      letterSpacing: 0,
                    }}
                  >
                    (optional)
                  </span>
                </label>
                <input
                  className="home-contact-input"
                  type="url"
                  name="website"
                  placeholder="https://yoursite.com"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div style={{ marginBottom: "40px" }}>
                <label className="home-contact-label">Business Type</label>
                <select
                  className="home-contact-input"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select your business type...</option>
                  {businessTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                className="btn-primary-bs"
                disabled={loading}
                style={{ width: "100%" }}
              >
                {loading ? "Submitting..." : "Get My Free Audit"}
              </button>
            </form>
          )}
        </div>
      </motion.div>

      {/* Styles — reuse home-contact-label/input pattern + responsive */}
      <style>{`
        .home-contact-label {
          display: block;
          margin-bottom: 10px;
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gray);
          font-family: var(--font-sans);
        }
        .home-contact-input {
          width: 100%;
          padding: 14px 0;
          border: none;
          border-bottom: 1.5px solid var(--gray-light);
          background: transparent;
          color: var(--black);
          font-family: var(--font-sans);
          font-size: 15px;
          outline: none;
          transition: border-color 0.3s ease;
          -webkit-appearance: none;
          box-sizing: border-box;
        }
        .home-contact-input:focus {
          border-bottom-color: var(--gold);
        }
        .home-contact-input::placeholder {
          color: var(--gray-light);
        }
        @media (max-width: 900px) {
          .lead-magnet-section {
            padding: 80px 28px !important;
          }
          .lead-magnet-inner {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}
