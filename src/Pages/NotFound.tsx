import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--void)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
      }}
    >
      <Helmet>
        <title>Page Not Found | Batistack — AI Infrastructure & Agent Services NYC</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <img
        src="/brand/batistack-mark.png"
        alt="Batistack"
        style={{ height: "72px", width: "auto", display: "block" }}
      />

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          fontSize: "clamp(72px, 16vw, 140px)",
          lineHeight: 1,
          color: "var(--bone)",
          margin: "48px 0 0",
          letterSpacing: "0.02em",
        }}
      >
        4<span style={{ color: "#00AEEF" }}>0</span>4
      </h1>

      <div
        style={{
          width: "64px",
          height: "2px",
          background: "linear-gradient(90deg, #00AEEF, rgba(0,174,239,0.1))",
          margin: "28px auto",
          borderRadius: "1px",
        }}
      />

      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontWeight: 600,
          fontSize: "20px",
          color: "var(--bone)",
          margin: 0,
        }}
      >
        This page is off the grid.
      </p>
      <p
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "15px",
          color: "var(--mist)",
          maxWidth: "420px",
          margin: "12px 0 40px",
          lineHeight: 1.7,
        }}
      >
        The page you're looking for doesn't exist or has been moved. Your AI
        workforce is still running — let's get you back on track.
      </p>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>
        <Link
          to="/"
          data-cursor="cta"
          style={{
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
            transition: "background 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#22c4ff";
            e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,174,239,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#00AEEF";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          Back to Home
        </Link>
        <Link
          to="/contact"
          data-cursor="cta"
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#00AEEF",
            background: "transparent",
            border: "1px solid rgba(0,174,239,0.5)",
            padding: "13px 32px",
            borderRadius: "6px",
            textDecoration: "none",
            transition: "border-color 0.2s ease, background 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#00AEEF";
            e.currentTarget.style.background = "rgba(0,174,239,0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(0,174,239,0.5)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}
