import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const COMPANY_LINKS = [
  { label: "About",         to: "/about"    },
  { label: "Services",      to: "/services" },
  { label: "Blog",          to: "/blog"     },
  { label: "Contact",       to: "/contact"  },
  { label: "Privacy Policy",to: "/policy"   },
];

const SERVICES_LINKS = [
  { label: "AI Infrastructure",    to: "/services"       },
  { label: "AI Agents",            to: "/ai-agents"      },
  { label: "How It Works",         to: "/how-it-works"   },
  { label: "Digital Presence",     to: "/services"       },
  { label: "Custom Applications",  to: "/services"       },
];

const INDUSTRIES_LINKS = [
  { label: "HVAC & Mechanical",   to: "/industries/hvac"                },
  { label: "Plumbing Services",   to: "/industries/plumbing"            },
  { label: "Electrical",          to: "/industries/electrical"          },
  { label: "Real Estate",         to: "/industries/real-estate"         },
  { label: "Gyms & Fitness",      to: "/industries/gyms-fitness"        },
  { label: "Legal Services",      to: "/industries/legal"               },
  { label: "Cleaning Services",   to: "/industries/commercial-cleaning" },
  { label: "Insurance",           to: "/industries/insurance"           },
];

const SOCIAL = [
  { icon: <FaLinkedinIn />, label: "LinkedIn",  href: "https://www.linkedin.com/company/batistack" },
  { icon: <FaInstagram />,  label: "Instagram", href: "https://www.instagram.com/batistack"        },
  { icon: <FaYoutube />,    label: "YouTube",   href: "https://www.youtube.com/@batistack"          },
  { icon: <FaFacebookF />,  label: "Facebook",  href: "https://www.facebook.com/batistack"         },
];

export default function Footer() {
  return (
    <footer
      style={{
        background:  "#0A0A0A",
        borderTop:   "1px solid #1E1E1E",
        paddingTop:  "72px",
      }}
    >
      <div
        className="footer-container"
        style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 60px" }}
      >
        {/* Blue accent line */}
        <div
          style={{
            height: "2px",
            background: "linear-gradient(90deg, #00AEEF 0%, rgba(0,174,239,0.1) 100%)",
            marginBottom: "56px",
            borderRadius: "1px",
          }}
        />

        {/* 4-column grid */}
        <div
          className="footer-grid"
          style={{
            display:             "grid",
            gridTemplateColumns: "2fr 1fr 1.4fr 1.4fr",
            gap:                 "48px",
            alignItems:          "start",
          }}
        >
          {/* Col 1 — Brand */}
          <div>
            <Link to="/" style={{ textDecoration: "none", display: "inline-flex" }}>
              <img
                src="/brand/batistack-logo.png"
                alt="Batistack Development Corp — AI Infrastructure & Agent Services, New York City"
                loading="lazy"
                style={{ width: "220px", maxWidth: "100%", height: "auto", display: "block" }}
              />
            </Link>

            <p
              style={{
                fontFamily:  "'Raleway', sans-serif",
                fontWeight:  400,
                fontSize:    "14px",
                color:       "#888888",
                marginTop:   "16px",
                lineHeight:  1.7,
                maxWidth:    "280px",
              }}
            >
              We Build Your AI Workforce.
              You Grow Your Business.
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
              {SOCIAL.map((s) => (
                <SocialIcon key={s.label} {...s} />
              ))}
            </div>
          </div>

          {/* Col 2 — Company */}
          <div>
            <FooterColTitle>Company</FooterColTitle>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {COMPANY_LINKS.map((link) => (
                <li key={link.to + link.label} style={{ marginBottom: "10px" }}>
                  <FooterNavLink to={link.to} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <FooterColTitle>Services</FooterColTitle>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {SERVICES_LINKS.map((link) => (
                <li key={link.label} style={{ marginBottom: "10px" }}>
                  <FooterNavLink to={link.to} label={link.label} />
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Industries + Contact */}
          <div>
            <FooterColTitle>Industries</FooterColTitle>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
              {INDUSTRIES_LINKS.map((link) => (
                <li key={link.label} style={{ marginBottom: "8px" }}>
                  <FooterNavLink to={link.to} label={link.label} />
                </li>
              ))}
            </ul>

            <FooterColTitle>Contact</FooterColTitle>
            <div
              style={{
                display:       "flex",
                flexDirection: "column",
                gap:           "8px",
              }}
            >
              <a
                href="mailto:elisaul@batistack.com"
                style={{
                  fontFamily:  "'Raleway', sans-serif",
                  fontSize:    "12px",
                  color:       "#888888",
                  textDecoration: "none",
                  transition:  "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#00AEEF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
              >
                elisaul@batistack.com
              </a>
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "12px", color: "#888888" }}>
                New York City, NY
              </span>
              <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", color: "#555555" }}>
                Mon–Fri 9AM–6PM EST
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop:      "1px solid #1E1E1E",
            marginTop:      "56px",
            paddingTop:     "24px",
            paddingBottom:  "40px",
            display:        "flex",
            justifyContent: "space-between",
            alignItems:     "center",
            flexWrap:       "wrap",
            gap:            "12px",
          }}
        >
          <span
            style={{
              fontFamily:    "'Raleway', sans-serif",
              fontWeight:    400,
              fontSize:      "12px",
              color:         "#555555",
              letterSpacing: "0.02em",
            }}
          >
            © 2023 Batistack Development Corp. All rights reserved.
          </span>

          <span
            style={{
              fontFamily:    "'Raleway', sans-serif",
              fontSize:      "12px",
              color:         "#555555",
              letterSpacing: "0.04em",
            }}
          >
            Batistack Development Corp — New York, NY
          </span>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-container {
            padding: 0 32px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-container {
            padding: 0 24px !important;
          }
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}

/* ── Sub-components ── */

function FooterColTitle({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily:    "'Raleway', sans-serif",
        fontWeight:    700,
        fontSize:      "10px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color:         "#00AEEF",
        marginBottom:  "16px",
      }}
    >
      {children}
    </p>
  );
}

function FooterNavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      style={{
        fontFamily:    "'Raleway', sans-serif",
        fontWeight:    400,
        fontSize:      "13px",
        color:         "#888888",
        textDecoration:"none",
        display:       "inline-block",
        transition:    "color 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#888888")}
    >
      {label}
    </Link>
  );
}

function SocialIcon({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        "inline-flex",
        alignItems:     "center",
        justifyContent: "center",
        width:          "36px",
        height:         "36px",
        borderRadius:   "8px",
        border:         `1px solid ${hovered ? "#00AEEF" : "#1E1E1E"}`,
        color:          hovered ? "#00AEEF" : "#888888",
        background:     hovered ? "rgba(0,174,239,0.08)" : "transparent",
        fontSize:       "14px",
        transition:     "border-color 0.2s ease, color 0.2s ease, background 0.2s ease",
        textDecoration: "none",
      }}
    >
      {icon}
    </a>
  );
}
