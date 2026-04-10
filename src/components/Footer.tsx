import { useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

const NAV_LINKS = [
  { label: "Services",   to: "/services"  },
  { label: "Speed Test", to: "/speedPage" },
  { label: "Blog",       to: "/blog"      },
  { label: "About",      to: "/about"     },
  { label: "Contact",    to: "/contact"   },
];

export default function Footer() {
  return (
    <footer
      style={{
        background:  "var(--void)",
        borderTop:   "1px solid var(--smoke)",
        padding:     "80px 0 40px",
      }}
    >
      {/* Main container */}
      <div
        className="footer-container"
        style={{
          maxWidth: "1280px",
          margin:   "0 auto",
          padding:  "0 60px",
        }}
      >
        {/* 3-column row */}
        <div
          className="footer-grid"
          style={{
            display:         "flex",
            justifyContent:  "space-between",
            gap:             "40px",
          }}
        >
          {/* Column 1 — Logo + tagline */}
          <div>
            <Link
              to="/"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            >
              <BrandLogo />
            </Link>
            <p
              style={{
                fontFamily:  "var(--font-serif)",
                fontStyle:   "italic",
                fontSize:    "18px",
                color:       "var(--mist)",
                marginTop:   "12px",
                lineHeight:  1.5,
              }}
            >
              Built in New York. Powered by AI.
            </p>
          </div>

          {/* Column 2 — Nav links */}
          <nav>
            <ul
              style={{
                listStyle:     "none",
                padding:       0,
                margin:        0,
                display:       "flex",
                flexDirection: "column",
                gap:           "14px",
              }}
            >
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <FooterNavLink to={link.to} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Contact */}
          <div
            style={{
              display:       "flex",
              flexDirection: "column",
              gap:           "10px",
            }}
          >
            <FooterEmailLink />
            <span
              style={{
                fontFamily:    "var(--font-sans)",
                fontSize:      "11px",
                color:         "var(--mist)",
                letterSpacing: "0.05em",
              }}
            >
              NYC, New York
            </span>
            <span
              style={{
                fontFamily:    "var(--font-sans)",
                fontSize:      "10px",
                color:         "var(--mist)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity:       0.7,
              }}
            >
              Available for new projects
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop:      "1px solid var(--smoke)",
            marginTop:      "60px",
            paddingTop:     "24px",
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "center",
            flexWrap:       "wrap",
            gap:            "12px",
          }}
        >
          <span
            style={{
              fontFamily:    "var(--font-sans)",
              fontSize:      "11px",
              color:         "var(--mist)",
              letterSpacing: "0.04em",
            }}
          >
            © {new Date().getFullYear()} Batistack Development Corp.
          </span>

          {/* Decorative gold divider */}
          <div
            style={{
              width:     "1px",
              height:    "40px",
              background:"var(--gold-dim)",
              transform: "rotate(20deg)",
              opacity:   0.6,
            }}
            aria-hidden="true"
          />

          <span
            style={{
              fontFamily:    "var(--font-sans)",
              fontSize:      "11px",
              color:         "var(--mist)",
              letterSpacing: "0.04em",
            }}
          >
            batistack.com
          </span>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .footer-container {
            padding: 0 24px !important;
          }
          .footer-grid {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .footer-grid > * {
            align-items: center !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function FooterNavLink({ to, label }: { to: string; label: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:    "var(--font-sans)",
        fontSize:      "11px",
        textTransform: "uppercase",
        letterSpacing: "0.15em",
        color:         hovered ? "var(--gold)" : "var(--mist)",
        textDecoration:"none",
        transition:    "color 0.2s ease",
        display:       "inline-block",
      }}
    >
      {label}
    </Link>
  );
}

function FooterEmailLink() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="mailto:elisaul@batistack.com"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:    "var(--font-sans)",
        fontSize:      "13px",
        color:         hovered ? "var(--gold)" : "var(--mist)",
        textDecoration:"none",
        transition:    "color 0.2s ease",
        letterSpacing: "0.02em",
      }}
    >
      elisaul@batistack.com
    </a>
  );
}
