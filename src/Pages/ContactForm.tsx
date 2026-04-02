import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTrafficTracker } from "../hook/useTrafficTracker";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// ─── Types (preserved) ────────────────────────────────────────────────────────

type ContactFormValues = {
  name: string;
  email: string;
  service: string;
  message: string;
  source: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

type EmailJsTemplateParams = {
  from_name: string;
  from_email: string;
  reply_to: string;
  service: string;
  budget: string;
  message: string;
  source: string;
};

const initialFormValues: ContactFormValues = {
  name: "",
  email: "",
  service: "",
  message: "",
  source: "Website",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─── Field components ─────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label
      style={{
        display: "block",
        fontFamily: "var(--font-sans)",
        fontSize: "10px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--mist)",
        marginBottom: "8px",
      }}
    >
      {children}
    </label>
  );
}

function GoldInput({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <input
        {...props}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${focused ? "var(--gold)" : "var(--smoke)"}`,
          padding: "12px 0",
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          color: "var(--bone)",
          outline: "none",
          transition: "border-color 0.2s",
          display: "block",
          boxSizing: "border-box",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="bs-contact-field"
      />
      {error && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "#e05c5c",
            marginTop: "6px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

function GoldSelect({
  label,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <select
        {...props}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${focused ? "var(--gold)" : "var(--smoke)"}`,
          padding: "12px 0",
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          color: "var(--bone)",
          outline: "none",
          transition: "border-color 0.2s",
          display: "block",
          boxSizing: "border-box",
          cursor: "pointer",
          appearance: "none",
          WebkitAppearance: "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="bs-contact-field"
      >
        {children}
      </select>
    </div>
  );
}

function GoldTextarea({
  label,
  error,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <textarea
        {...props}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderBottom: `1px solid ${focused ? "var(--gold)" : "var(--smoke)"}`,
          padding: "12px 0",
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          color: "var(--bone)",
          outline: "none",
          transition: "border-color 0.2s",
          display: "block",
          boxSizing: "border-box",
          resize: "vertical",
          minHeight: "120px",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="bs-contact-field"
      />
      {error && (
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "12px",
            color: "#e05c5c",
            marginTop: "6px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

function ContactForm() {
  useTrafficTracker("click", "/contact");

  const [formData, setFormData] = useState<ContactFormValues>(initialFormValues);
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const servicesList = [
    "Website Development",
    "AI Chat Assistant",
    "AI Voice Agent",
    "Automation",
    "SEO",
    "Website Redesign",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    if (error) setError("");
  };

  const validateForm = (values: ContactFormValues): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) nextErrors.message = "Please tell us about your project.";
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const validationErrors = validateForm(formData);
    setFieldErrors(validationErrors);
    setError("");

    if (Object.keys(validationErrors).length > 0) return;

    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured. Add your EmailJS IDs and try again.");
      return;
    }

    setLoading(true);

    const templateParams: EmailJsTemplateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      service: formData.service || "Not specified",
      budget: "Not specified",
      message: formData.message.trim(),
      source: formData.source,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      setSuccess(true);
      setFormData(initialFormValues);
      setFieldErrors({});
    } catch {
      setError("Failed to send your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Batistack Development</title>
        <meta
          name="description"
          content="Get in touch with Batistack Development. Tell us about your project and we'll respond within 24 hours."
        />
      </Helmet>

      <style>{`
        .bs-contact-field::placeholder { color: var(--mist); opacity: 1; }
        .bs-contact-field option { background: var(--ash); color: var(--bone); }
      `}</style>

      <div
        style={{
          background: "var(--void)",
          color: "var(--bone)",
          minHeight: "100vh",
          paddingTop: "120px",
        }}
      >
        <div
          className="contact-container"
          style={{ maxWidth: "900px", margin: "0 auto", padding: "0 60px 120px" }}
        >
          {/* ── HEADER ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "24px",
              }}
            >
              CONTACT
            </p>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(60px, 10vw, 120px)",
                lineHeight: 0.9,
                color: "var(--bone)",
                margin: "0",
              }}
            >
              LET'S BUILD
              <br />
              SOMETHING.
            </h1>

            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "20px",
                color: "var(--mist)",
                marginTop: "16px",
                marginBottom: "0",
                lineHeight: 1.5,
              }}
            >
              Tell us about your project. We'll respond within 24 hours.
            </p>
          </motion.div>

          {/* ── FORM ───────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ marginTop: "80px" }}
          >
            {success ? (
              /* Success state */
              <div style={{ textAlign: "center", padding: "60px 0" }}>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  style={{ color: "var(--gold)", display: "block", margin: "0 auto 24px" }}
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                  />
                  <polyline
                    points="7,12 10.5,15.5 17,9"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                  />
                </svg>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "28px",
                    color: "var(--bone)",
                    lineHeight: 1.4,
                  }}
                >
                  Message received. We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Name + Email two-column */}
                <div
                  className="contact-two-col"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "40px",
                    marginBottom: "40px",
                  }}
                >
                  <GoldInput
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    error={fieldErrors.name}
                  />
                  <GoldInput
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    error={fieldErrors.email}
                  />
                </div>

                {/* Service */}
                <div style={{ marginBottom: "40px" }}>
                  <GoldSelect
                    label="Service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service...</option>
                    {servicesList.map((srv, i) => (
                      <option key={i} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </GoldSelect>
                </div>

                {/* Message */}
                <div style={{ marginBottom: "40px" }}>
                  <GoldTextarea
                    label="Message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    error={fieldErrors.message}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  data-cursor="cta"
                  disabled={loading}
                  style={{
                    display: "block",
                    width: "100%",
                    marginTop: "40px",
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    letterSpacing: "0.05em",
                    background: "var(--gold)",
                    color: "var(--void)",
                    padding: "20px",
                    border: "none",
                    cursor: loading ? "not-allowed" : "pointer",
                    opacity: loading ? 0.8 : 1,
                    transition: "opacity 0.2s",
                  }}
                >
                  {loading ? "SENDING..." : "SEND MESSAGE →"}
                </button>

                {error && (
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      color: "#e05c5c",
                      marginTop: "12px",
                      textAlign: "center",
                    }}
                  >
                    {error}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-container {
            padding: 0 24px 80px !important;
          }

          .contact-two-col {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </>
  );
}

export default ContactForm;
