import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTrafficTracker } from "../hook/useTrafficTracker";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// ─── Design tokens ────────────────────────────────────────────────────────────
const t = {
  black: "#0a0a0a",
  offWhite: "#f5f3ef",
  cream: "#ede9e1",
  gold: "#c9a84c",
  goldLight: "#e8d5a3",
  gray: "#6b6b6b",
  grayLight: "#d4d0c8",
  fontSerif: "'Cormorant Garamond', Georgia, serif",
  fontSans: "'DM Sans', sans-serif",
};

// ─── Shared input style ────────────────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 0",
  border: "none",
  borderBottom: `1.5px solid ${t.grayLight}`,
  background: "transparent",
  fontFamily: t.fontSans,
  fontSize: 15,
  color: t.black,
  outline: "none",
  transition: "border-color 0.3s",
  display: "block",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 10,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: t.gray,
  marginBottom: 10,
  fontFamily: t.fontSans,
};

// ─── Gold-underline input with focus handling ──────────────────────────────────
function GoldInput({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <input
        {...props}
        style={{
          ...inputStyle,
          borderBottomColor: focused ? t.gold : t.grayLight,
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
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
      <label style={labelStyle}>{label}</label>
      <select
        {...props}
        style={{
          ...inputStyle,
          borderBottomColor: focused ? t.gold : t.grayLight,
          cursor: "pointer",
          appearance: "none",
          WebkitAppearance: "none",
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        {children}
      </select>
    </div>
  );
}

function GoldTextarea({
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      <textarea
        {...props}
        style={{
          ...inputStyle,
          borderBottomColor: focused ? t.gold : t.grayLight,
          resize: "vertical",
          height: 100,
        }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </div>
  );
}

// ─── Socials data (original hrefs preserved) ──────────────────────────────────
const socials = [
  { label: "Instagram", href: "https://www.instagram.com/bati.stack" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/batistack" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61575947108161",
  },
  { label: "X", href: "https://x.com/BatistackDev" },
];

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
  reply_to: string;
  service: string;
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

// ─── Component ────────────────────────────────────────────────────────────────
function ContactForm() {
  useTrafficTracker("click", "/contact");

  const [formData, setFormData] =
    useState<ContactFormValues>(initialFormValues);
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});
  const [success, setSuccess] = useState("");
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    if (success) setSuccess("");
    if (error) setError("");
  };

  const validateForm = (values: ContactFormValues): ContactFormErrors => {
    const nextErrors: ContactFormErrors = {};

    if (!values.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!values.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      nextErrors.message = "Please tell us about your project.";
    }

    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const validationErrors = validateForm(formData);
    setFieldErrors(validationErrors);
    setSuccess("");
    setError("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setError(
        "Email service is not configured. Add your EmailJS IDs and try again.",
      );
      return;
    }

    setLoading(true);

    const templateParams: EmailJsTemplateParams = {
      from_name: formData.name.trim(),
      reply_to: formData.email.trim(),
      service: formData.service || "Not specified",
      message: formData.message.trim(),
      source: formData.source,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });
      setSuccess("Your message has been sent successfully!");
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
      </Helmet>

      {/* Placeholder-color injection */}
      <style>{`
        .bs-contact-placeholder::placeholder { color: ${t.grayLight}; }
        .bs-contact-placeholder:focus { outline: none; }
      `}</style>

      <div
        style={{
          background: t.offWhite,
          color: t.black,
          minHeight: "100vh",
        }}
      >
        <section
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "160px 60px 120px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 100,
              alignItems: "start",
            }}
            className="bs-contact-grid"
          >
            {/* ── LEFT ──────────────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Section label */}
              <p
                style={{
                  fontFamily: t.fontSans,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: t.gold,
                  marginBottom: 24,
                }}
              >
                Let's work together
              </p>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: t.fontSerif,
                  fontSize: "clamp(40px, 4vw, 60px)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: t.black,
                  margin: "0 0 48px",
                }}
              >
                Ready to build
                <br />
                something <em>great?</em>
              </h1>

              {/* Contact info items */}
              {[
                { label: "Location", value: "New York City, NY" },
                { label: "Email", value: "elisual@batistack.com" },
                { label: "Phone", value: "929-733-1600" },
                { label: "Response Time", value: "Within 24 hours" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderBottom: `1px solid ${t.grayLight}`,
                    paddingBottom: 24,
                    marginTop: 40,
                  }}
                >
                  <p
                    style={{
                      fontFamily: t.fontSans,
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: t.gold,
                      margin: "0 0 6px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontFamily: t.fontSans,
                      fontSize: 16,
                      color: t.black,
                      margin: 0,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}

              {/* Social links */}
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  marginTop: 48,
                  flexWrap: "wrap",
                }}
              >
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: t.fontSans,
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: t.black,
                      textDecoration: "none",
                      borderBottom: `1px solid ${t.grayLight}`,
                      paddingBottom: 2,
                      transition: "border-color 0.3s, color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        t.gold;
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.borderBottomColor = t.gold;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        t.black;
                      (
                        e.currentTarget as HTMLAnchorElement
                      ).style.borderBottomColor = t.grayLight;
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* ── RIGHT — FORM ──────────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {/* Status alerts */}
              {success && (
                <div
                  style={{
                    color: "#2d7a47",
                    fontSize: 14,
                    marginBottom: 24,
                    fontFamily: t.fontSans,
                  }}
                >
                  {success}
                </div>
              )}
              {error && (
                <div
                  style={{
                    color: "#b93333",
                    fontSize: 14,
                    marginBottom: 24,
                    fontFamily: t.fontSans,
                  }}
                >
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 32 }}>
                  <GoldInput
                    label="Name"
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bs-contact-placeholder"
                  />
                  {fieldErrors.name && (
                    <p
                      style={{
                        color: "#b93333",
                        fontSize: 12,
                        marginTop: 10,
                        fontFamily: t.fontSans,
                      }}
                    >
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div style={{ marginBottom: 32 }}>
                  <GoldInput
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bs-contact-placeholder"
                  />
                  {fieldErrors.email && (
                    <p
                      style={{
                        color: "#b93333",
                        fontSize: 12,
                        marginTop: 10,
                        fontFamily: t.fontSans,
                      }}
                    >
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Service */}
                <div style={{ marginBottom: 32 }}>
                  <GoldSelect
                    label="Service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="bs-contact-placeholder"
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
                <div style={{ marginBottom: 40 }}>
                  <GoldTextarea
                    label="Message"
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bs-contact-placeholder"
                  />
                  {fieldErrors.message && (
                    <p
                      style={{
                        color: "#b93333",
                        fontSize: 12,
                        marginTop: 10,
                        fontFamily: t.fontSans,
                      }}
                    >
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: "100%",
                    padding: "18px 0",
                    background: loading ? t.gray : t.black,
                    color: "#ffffff",
                    border: "none",
                    fontFamily: t.fontSans,
                    fontSize: 12,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    cursor: loading ? "not-allowed" : "pointer",
                    transition: "background 0.3s",
                  }}
                >
                  {loading ? "Sending..." : "Send Message \u2192"}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 768px) {
          .bs-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
          section {
            padding: 120px 28px 80px !important;
          }
        }
      `}</style>
    </>
  );
}

export default ContactForm;
