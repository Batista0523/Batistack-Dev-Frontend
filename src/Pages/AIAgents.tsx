import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AIAgents() {
  return (
    <>
      <Helmet>
        <title>AI Agents | Batistack — Your AI Workforce</title>
        <meta name="description" content="Meet your new AI workforce. Specialized agents installed in your business — each trained for a specific job, all working together 24/7." />
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
            ● AI Workforce Solutions
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
            Meet Your New<br />
            <span style={{ color: "#00AEEF" }}>AI Workforce</span>
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
            Specialized agents installed in your business.
            Each one trained for a specific job.
            All working together, 24/7.
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
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
              Schedule Installation
            </Link>
            <Link
              to="/how-it-works"
              style={{
                display:       "inline-block",
                fontFamily:    "'Raleway', sans-serif",
                fontWeight:    600,
                fontSize:      "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color:         "#FFFFFF",
                background:    "transparent",
                border:        "1px solid rgba(0,174,239,0.4)",
                padding:       "14px 32px",
                textDecoration:"none",
                borderRadius:  "6px",
              }}
            >
              How It Works
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
