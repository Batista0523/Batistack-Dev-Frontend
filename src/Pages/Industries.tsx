import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries | Batistack — Built for NYC Service Businesses</title>
        <meta name="description" content="Batistack AI workforce solutions built for HVAC, plumbing, electrical, real estate, gyms, legal, cleaning, and insurance businesses in New York City." />
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
        <div style={{ textAlign: "center", maxWidth: "640px", padding: "0 24px" }}>
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
            ● NYC Service Businesses
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
            Built for<br />
            <span style={{ color: "#00AEEF" }}>NYC Industries</span>
          </h1>

          <p
            style={{
              fontFamily:  "'Raleway', sans-serif",
              fontWeight:  400,
              color:       "#888888",
              fontSize:    "18px",
              lineHeight:  1.7,
              marginBottom:"32px",
            }}
          >
            HVAC · Plumbing · Electrical · Real Estate<br />
            Gyms · Legal · Cleaning · Insurance
          </p>

          <p
            style={{
              fontFamily:  "'Raleway', sans-serif",
              color:       "#555555",
              fontSize:    "15px",
              lineHeight:  1.7,
              marginBottom:"40px",
            }}
          >
            Each industry page is coming soon with specific
            automation use cases, agent configurations,
            and real examples from NYC businesses.
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
            Schedule Free Assessment
          </Link>
        </div>
      </div>
    </>
  );
}
