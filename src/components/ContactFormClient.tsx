'use client';

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { INDUSTRIES } from "../data/industries";
import { fireConversionEvent } from "../ga";

// ─── Types (preserved) ────────────────────────────────────────────────────────

type ContactFormValues = {
  name: string;
  company: string;
  industry: string;
  email: string;
  phone: string;
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
  company: "",
  industry: "",
  email: "",
  phone: "",
  message: "",
  source: "Website",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ─── Field components ─────────────────────────────────────────────────────────

const fieldShellStyle = (focused: boolean): React.CSSProperties => ({
  width: "100%",
  background: "var(--void)",
  border: `1px solid ${focused ? "#00AEEF" : "var(--smoke)"}`,
  borderRadius: "8px",
  padding: "13px 16px",
  fontFamily: "var(--font-sans)",
  fontSize: "15px",
  color: "var(--bone)",
  outline: "none",
  transition: "border-color 0.2s ease",
  display: "block",
  boxSizing: "border-box",
});

function FieldLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: "block",
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: "10px",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "var(--mist)",
        marginBottom: "8px",
      }}
    >
      {children}
    </label>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p
      role="alert"
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "12px",
        color: "#e05c5c",
        marginTop: "6px",
        marginBottom: 0,
      }}
    >
      {children}
    </p>
  );
}

function BlueInput({
  label,
  error,
  id,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; id: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <input
        {...props}
        id={id}
        style={fieldShellStyle(focused)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="bs-contact-field"
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

function BlueSelect({
  label,
  children,
  id,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string; id: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <select
        {...props}
        id={id}
        style={{ ...fieldShellStyle(focused), cursor: "pointer", appearance: "none", WebkitAppearance: "none" }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="bs-contact-field"
      >
        {children}
      </select>
    </div>
  );
}

function BlueTextarea({
  label,
  error,
  id,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string; id: string }) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <textarea
        {...props}
        id={id}
        style={{ ...fieldShellStyle(focused), resize: "vertical", minHeight: "120px" }}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="bs-contact-field"
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactFormClient() {

  const [formData, setFormData] = useState<ContactFormValues>(initialFormValues);
  const [fieldErrors, setFieldErrors] = useState<ContactFormErrors>({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

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
    if (!values.message.trim()) nextErrors.message = "Please tell us about your business.";
    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const validationErrors = validateForm(formData);
    setFieldErrors(validationErrors);
    setError("");

    if (Object.keys(validationErrors).length > 0) return;

    fireConversionEvent();

    if (!serviceId || !templateId || !publicKey) {
      setError("Email service is not configured. Add your EmailJS IDs and try again.");
      return;
    }

    setLoading(true);

    const extras = [
      formData.company.trim() && `Company: ${formData.company.trim()}`,
      formData.phone.trim() && `Phone: ${formData.phone.trim()}`,
    ]
      .filter(Boolean)
      .join("\n");

    const templateParams: EmailJsTemplateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      service: formData.industry || "Not specified",
      budget: "Not specified",
      message: extras ? `${formData.message.trim()}\n\n${extras}` : formData.message.trim(),
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
      <style>{`
        .bs-contact-field::placeholder { color: var(--mist); opacity: 0.8; }
        .bs-contact-field option { background: var(--ash); color: var(--bone); }
        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-container { padding: 0 24px 80px !important; }
        }
        @media (max-width: 600px) {
          .contact-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ background: "var(--void)", color: "var(--bone)", minHeight: "100vh", paddingTop: "72px" }}>
        <div
          className="contact-container section-container"
          style={{ padding: "80px 60px 120px" }}
        >
          {/* ── HEADER ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ maxWidth: "680px" }}
          >
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#00AEEF",
                marginBottom: "16px",
              }}
            >
              Free Assessment
            </p>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(34px, 5.5vw, 60px)",
                lineHeight: 1.08,
                color: "var(--bone)",
                margin: 0,
                letterSpacing: "-0.015em",
              }}
            >
              Schedule a Free <span style={{ color: "#00AEEF" }}>AI Assessment</span>.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                color: "var(--mist)",
                marginTop: "18px",
                marginBottom: 0,
                lineHeight: 1.7,
              }}
            >
              Tell us about your business. We'll map exactly what an AI workforce
              would take off your plate — and respond within 24 hours.
            </p>
          </motion.div>

          {/* ── GRID: form + info panel ── */}
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: "56px",
              marginTop: "64px",
              alignItems: "start",
            }}
          >
            {/* Left — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{
                background: "var(--ash)",
                border: "1px solid var(--smoke)",
                borderRadius: "16px",
                padding: "clamp(28px, 4vw, 44px)",
              }}
            >
              {success ? (
                <div style={{ textAlign: "center", padding: "60px 0" }}>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    style={{ color: "#00AEEF", display: "block", margin: "0 auto 24px" }}
                  >
                    <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeWidth="1.5" />
                    <polyline points="7,12 10.5,15.5 17,9" stroke="currentColor" fill="none" strokeWidth="1.5" />
                  </svg>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "24px",
                      color: "var(--bone)",
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    Message received.
                  </p>
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--mist)", marginTop: "10px" }}>
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div
                    className="contact-two-col"
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}
                  >
                    <BlueInput
                      id="contact-name"
                      label="Name *"
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      error={fieldErrors.name}
                    />
                    <BlueInput
                      id="contact-company"
                      label="Company"
                      type="text"
                      name="company"
                      placeholder="Smith HVAC Corp"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <BlueSelect
                      id="contact-industry"
                      label="Industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                    >
                      <option value="">Select your industry…</option>
                      {INDUSTRIES.map((ind) => (
                        <option key={ind.slug} value={ind.name}>
                          {ind.name}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </BlueSelect>
                  </div>

                  <div
                    className="contact-two-col"
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}
                  >
                    <BlueInput
                      id="contact-email"
                      label="Email *"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      error={fieldErrors.email}
                    />
                    <BlueInput
                      id="contact-phone"
                      label="Phone"
                      type="tel"
                      name="phone"
                      placeholder="(212) 555-0123"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div style={{ marginBottom: "28px" }}>
                    <BlueTextarea
                      id="contact-message"
                      label="Message *"
                      name="message"
                      placeholder="What's eating your time? Missed calls, slow invoicing, lost leads…"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      error={fieldErrors.message}
                    />
                  </div>

                  <button
                    type="submit"
                    data-cursor="cta"
                    disabled={loading}
                    className="ui-btn-primary"
                    style={{
                      display: "block",
                      width: "100%",
                      fontFamily: "var(--font-sans)",
                      fontWeight: 700,
                      fontSize: "14px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      background: "#00AEEF",
                      color: "#0A0A0A",
                      padding: "17px",
                      border: "none",
                      borderRadius: "8px",
                      cursor: loading ? "not-allowed" : "pointer",
                      opacity: loading ? 0.8 : 1,
                      transition: "background 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
                    }}
                  >
                    {loading ? "Sending…" : "Schedule a Free Assessment"}
                  </button>

                  {error && (
                    <p
                      role="alert"
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "13px",
                        color: "#e05c5c",
                        marginTop: "14px",
                        textAlign: "center",
                        marginBottom: 0,
                      }}
                    >
                      {error}
                    </p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Right — info panel */}
            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <InfoCard
                title="Response within 24 hours"
                text="Every inquiry gets a personal reply from the team — usually the same business day."
              />
              <InfoCard
                title="Email"
                text="elisaul@batistack.com"
                href="mailto:elisaul@batistack.com"
              />
              <InfoCard title="Location" text="New York, NY — serving all five boroughs" />
              <InfoCard title="Hours" text="Mon–Fri, 9 AM – 6 PM EST" />

              <div
                style={{
                  border: "1px solid rgba(0,174,239,0.35)",
                  background: "radial-gradient(ellipse at 50% 130%, rgba(0,174,239,0.14) 0%, #0D0D0D 65%)",
                  borderRadius: "12px",
                  padding: "24px",
                }}
              >
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "16px", color: "var(--bone)", margin: 0 }}>
                  Prefer to see it first?
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "13.5px", color: "var(--mist)", lineHeight: 1.65, margin: "8px 0 0" }}>
                  Read{" "}
                  <a href="/how-it-works" style={{ color: "#00AEEF", textDecoration: "none" }}>
                    how installation works
                  </a>{" "}
                  or{" "}
                  <a href="/ai-agents" style={{ color: "#00AEEF", textDecoration: "none" }}>
                    meet the seven agents
                  </a>{" "}
                  before you book.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </main>
    </>
  );
}

function InfoCard({ title, text, href }: { title: string; text: string; href?: string }) {
  return (
    <div
      style={{
        background: "var(--ash)",
        border: "1px solid var(--smoke)",
        borderRadius: "12px",
        padding: "20px 24px",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 700,
          fontSize: "10px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#00AEEF",
          margin: 0,
        }}
      >
        {title}
      </p>
      {href ? (
        <a
          href={href}
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "14.5px",
            color: "var(--bone)",
            textDecoration: "none",
            display: "inline-block",
            marginTop: "6px",
          }}
        >
          {text}
        </a>
      ) : (
        <p style={{ fontFamily: "var(--font-sans)", fontSize: "14.5px", color: "var(--silver)", margin: "6px 0 0", lineHeight: 1.6 }}>
          {text}
        </p>
      )}
    </div>
  );
}
