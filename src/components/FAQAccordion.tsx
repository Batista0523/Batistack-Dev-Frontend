'use client';
import { useState } from "react";
import { Reveal } from "./Reveal";
import { Section, SectionHeading } from "./ui";

interface FAQ {
  q: string;
  a: string;
}

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section bg="#0D0D0D">
      <SectionHeading
        label="Questions"
        title="Everything Owners Ask Us"
        sub="Straight answers, no fine print. If your question isn't here, ask us directly on a free call."
      />
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={f.q} delay={0.05 * i}>
              <div
                style={{
                  background: "#141414",
                  border: isOpen ? "1px solid rgba(0,174,239,0.45)" : "1px solid #1E1E1E",
                  borderRadius: "12px",
                  marginBottom: "14px",
                  overflow: "hidden",
                  transition: "border-color 0.25s ease",
                }}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-button-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-cursor="cta"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "18px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: "22px 26px",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "16.5px",
                      color: isOpen ? "var(--bone)" : "var(--silver)",
                      lineHeight: 1.4,
                      transition: "color 0.2s ease",
                    }}
                  >
                    {f.q}
                  </span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00AEEF"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    style={{
                      flexShrink: 0,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 0.35s ease",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "14.5px",
                        color: "var(--mist)",
                        lineHeight: 1.75,
                        margin: 0,
                        padding: "0 26px 24px",
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
