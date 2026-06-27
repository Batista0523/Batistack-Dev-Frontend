'use client';
import Link from "next/link";
import { fireConversionEvent } from "../ga";
import { Reveal } from "./Reveal";

export default function BlogPostCTA() {
  return (
    <section style={{ padding: "0 0 100px" }}>
      <div className="blog-post-container">
        <Reveal>
          <div
            style={{
              background: "linear-gradient(160deg, rgba(0,174,239,0.08) 0%, #141414 45%)",
              border: "1px solid rgba(0,174,239,0.4)",
              borderRadius: "16px",
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(0,174,239,0.12) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#00AEEF", margin: 0 }}>
              Free Assessment
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(22px, 3vw, 32px)",
                color: "var(--bone)",
                margin: 0,
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              See which parts of your business an{" "}
              <span style={{ color: "#00AEEF" }}>AI workforce can run</span>
            </h3>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--mist)", lineHeight: 1.7, margin: 0, maxWidth: "480px" }}>
              We'll walk through your operation and identify exactly which tasks
              AI agents can own — lead follow-up, answering calls, billing,
              scheduling. No obligation. Just clarity.
            </p>
            <Link
              href="/contact"
              onClick={fireConversionEvent}
              style={{
                display: "inline-block",
                alignSelf: "flex-start",
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#0A0A0A",
                background: "#00AEEF",
                padding: "14px 32px",
                borderRadius: "6px",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Schedule Free Assessment
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
