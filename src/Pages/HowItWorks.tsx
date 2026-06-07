import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <>
      <Helmet>
        <title>How It Works | Batistack — From Contract to Operational in Days</title>
        <meta name="description" content="From free assessment to fully operational AI workforce in under 8 days. Learn how Batistack installs your AI team in your NYC business." />
      </Helmet>

      <div
        style={{
          background:      "#0A0A0A",
          minHeight:       "100vh",
          paddingTop:      "120px",
          display:         "flex",
          alignItems:      "center",
          justifyContent:  "center",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "600px", padding: "0 24px" }}>
          <span
            style={{
              display:       "inline-block",
              background:    "rgba(0,174,239,0.1)",
              border:        "1px solid rgba(0,174,239,0.3)",
              borderRadius:  "20px",
              padding:       "6px 18px",
              fontFamily:    "'Raleway', sans-serif",
              fontWeight:    600,
              fontSize:      "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color:         "#00AEEF",
              marginBottom:  "28px",
            }}
          >
            ● The Process
          </span>

          <h1
            style={{
              fontFamily:  "'Raleway', sans-serif",
              fontWeight:  700,
              fontSize:    "clamp(40px, 8vw, 72px)",
              color:       "#FFFFFF",
              marginBottom:"16px",
              lineHeight:  1.1,
            }}
          >
            From Contract to<br />
            <span style={{ color: "#00AEEF" }}>Operational in Days</span>
          </h1>

          <p
            style={{
              fontFamily:  "'Raleway', sans-serif",
              fontWeight:  400,
              color:       "#888888",
              fontSize:    "18px",
              lineHeight:  1.7,
              marginBottom:"40px",
            }}
          >
            A streamlined 8-step process that takes your business
            from assessment to a fully operational AI workforce —
            without disrupting your operations.
          </p>

          <Link
            to="/contact"
            style={{
              display:       "inline-block",
              fontFamily:    "'Raleway', sans-serif",
              fontWeight:    700,
              fontSize:      "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color:         "#0A0A0A",
              background:    "#00AEEF",
              padding:       "14px 32px",
              textDecoration:"none",
              borderRadius:  "6px",
            }}
          >
            Start Your Assessment
          </Link>
        </div>
      </div>
    </>
  );
}
