import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        background: "var(--black)",
        color: "var(--off-white)",
        padding: "60px clamp(28px, 5vw, 60px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "24px",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "24px",
          fontWeight: 300,
          letterSpacing: "0.04em",
        }}
      >
        Bati<span style={{ color: "var(--gold)" }}>stack</span>
      </div>

      {/* Copyright */}
      <p
        style={{
          fontSize: "12px",
          color: "#555",
          letterSpacing: "0.06em",
          textAlign: "center",
          margin: 0,
        }}
      >
        © {new Date().getFullYear()} Batistack Development Corp. · New York City
      </p>

      {/* Links */}
      <ul
        style={{
          display: "flex",
          gap: "32px",
          listStyle: "none",
          margin: 0,
          padding: 0,
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "Services", to: "/services" },
          { label: "About",    to: "/about"    },
          { label: "Contact",  to: "/contact"  },
          { label: "Privacy",  to: "/policy"   },
          { label: "Applications", to: "/applications" },
        ].map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#555",
                textDecoration: "none",
                transition: "color 0.25s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
