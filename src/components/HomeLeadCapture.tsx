'use client';
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { fireConversionEvent } from "../ga";

type FormState = "idle" | "sending" | "success" | "error";

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden style={{ flexShrink: 0, marginTop: "3px" }}>
      <path d="m4 12 5 5L20 6" />
    </svg>
  );
}

export default function HomeLeadCapture() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", service: "", budget: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    fireConversionEvent();
    setFormState("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: fields.name,
          from_email: fields.email,
          service: fields.service || "AI Workforce Assessment",
          budget: fields.budget || "Not specified",
          message: fields.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      setFormState("success");
    } catch {
      setFormState("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0A0A0A",
    border: "1px solid #1E1E1E",
    borderRadius: "8px",
    padding: "14px 16px",
    fontFamily: "var(--font-sans)",
    fontSize: "15px",
    color: "var(--bone)",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section style={{ background: "transparent", padding: "96px 0" }}>
      <div className="section-container">
        <div
          className="lead-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "start",
            background: "#141414",
            border: "1px solid #1E1E1E",
            borderRadius: "16px",
            padding: "clamp(32px, 5vw, 64px)",
          }}
        >
          <div>
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid #1E1E1E",
                background: "#0D0D0D",
                aspectRatio: "4/3",
                marginBottom: "28px",
              }}
            >
              <img
                src="/brand/autopilot-closeup.png"
                alt="Batistack Autopilot AI station"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#00AEEF", marginBottom: "14px" }}>
              Free Assessment
            </p>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(28px, 3.5vw, 40px)", color: "var(--bone)", lineHeight: 1.15, margin: 0 }}>
              Find Out What an AI Workforce Would Do for Your Business.
            </h2>
            <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0" }}>
              {[
                "30-minute call, zero obligation",
                "We map your biggest time drains",
                "You get a concrete automation plan",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "10px", marginBottom: "12px" }}>
                  <CheckIcon />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "14.5px", color: "var(--silver)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {formState === "success" ? (
              <div style={{ textAlign: "center", padding: "32px 0" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00AEEF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <path d="m8 12 3 3 5-6" />
                </svg>
                <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "20px", color: "var(--bone)", margin: "18px 0 8px" }}>
                  Message received.
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: "14px", color: "var(--mist)" }}>
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ marginBottom: "10px" }}>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#00AEEF",
                    margin: "0 0 12px",
                  }}>
                    Reply within 24 hours
                  </p>
                  <h3 style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(20px, 2.2vw, 26px)",
                    color: "var(--bone)",
                    lineHeight: 1.2,
                    margin: "0 0 10px",
                    letterSpacing: "-0.01em",
                  }}>
                    Start the conversation.
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "var(--mist)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    No pitch. Just a clear map of what an AI workforce would take off your plate.
                  </p>
                </div>
                <label htmlFor="lead-name" style={{ display: "none" }}>Name</label>
                <input id="lead-name" name="name" required placeholder="Your name" value={fields.name} onChange={handleChange} style={inputStyle} />
                <label htmlFor="lead-email" style={{ display: "none" }}>Email</label>
                <input id="lead-email" name="email" type="email" required placeholder="Work email" value={fields.email} onChange={handleChange} style={inputStyle} />
                <label htmlFor="lead-message" style={{ display: "none" }}>Message</label>
                <textarea
                  id="lead-message"
                  name="message"
                  required
                  placeholder="What's eating your time? (missed calls, invoicing, follow-ups…)"
                  rows={3}
                  value={fields.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
                <button
                  type="submit"
                  disabled={formState === "sending"}
                  data-cursor="cta"
                  className="ui-btn-primary"
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#0A0A0A",
                    background: "#00AEEF",
                    border: "none",
                    borderRadius: "6px",
                    padding: "15px 34px",
                    cursor: "pointer",
                    opacity: formState === "sending" ? 0.7 : 1,
                    transition: "background 0.2s ease, box-shadow 0.2s ease",
                  }}
                >
                  {formState === "sending" ? "Sending…" : "Get My Free Assessment"}
                </button>
                {formState === "error" && (
                  <p role="alert" style={{ fontFamily: "var(--font-sans)", fontSize: "13px", color: "#f87171", margin: 0 }}>
                    Failed to send your message. Please try again later.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
        <style>{`
          @media (max-width: 960px) {
            .lead-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
          .lead-grid input:focus, .lead-grid textarea:focus {
            border-color: #00AEEF !important;
          }
        `}</style>
      </div>
    </section>
  );
}
