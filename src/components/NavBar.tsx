import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinks = [
    { label: "Services", to: "/services" },
    { label: "About",    to: "/about"    },
    { label: "Audit",    to: "/speedPage"},
    { label: "Contact",  to: "/contact"  },
  ];

  const linkStyle = (to: string): React.CSSProperties => ({
    fontSize: "13px",
    fontWeight: 400,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: location.pathname === to ? "var(--black)" : "var(--gray)",
    textDecoration: "none",
    transition: "color 0.25s",
  });

  return (
    <>
      <nav
        className="site-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "18px clamp(28px, 5vw, 60px)" : "28px clamp(28px, 5vw, 60px)",
          background: scrolled ? "rgba(245,243,239,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--gray-light)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "22px",
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: "var(--black)",
            textDecoration: "none",
          }}
        >
          Bati<span style={{ color: "var(--gold)" }}>stack</span>
        </Link>

        {/* Desktop links */}
        <ul
          className="d-none d-md-flex"
          style={{ display: "flex", gap: "40px", listStyle: "none", margin: 0, padding: 0, alignItems: "center" }}
        >
          {navLinks.map((l) => (
            <li key={l.to}>
              <Link to={l.to} style={linkStyle(l.to)}>{l.label}</Link>
            </li>
          ))}
          {isAuthenticated && (
            <li>
              <Link to="/dashboardPage" style={linkStyle("/dashboardPage")}>Dashboard</Link>
            </li>
          )}
        </ul>

        {/* Desktop CTA */}
        <div className="d-none d-md-block">
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--black)",
                background: "transparent",
                border: "1.5px solid var(--black)",
                padding: "11px 26px",
                transition: "background 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--black)";
                (e.currentTarget as HTMLElement).style.color = "var(--off-white)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--black)";
              }}
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/contact"
              style={{
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--black)",
                textDecoration: "none",
                padding: "11px 26px",
                border: "1.5px solid var(--black)",
                display: "inline-block",
                transition: "background 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--black)";
                (e.currentTarget as HTMLElement).style.color = "var(--off-white)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--black)";
              }}
            >
              Get a Quote
            </Link>
          )}
        </div>

        {/* Hamburger */}
        <button
          className="d-md-none"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          style={{
            background: "transparent",
            border: "none",
            padding: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            zIndex: 101,
          }}
        >
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--black)", transition: "transform 0.3s, opacity 0.3s", transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--black)", transition: "opacity 0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: "block", width: "22px", height: "1.5px", background: "var(--black)", transition: "transform 0.3s", transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="site-nav-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              background: "var(--off-white)",
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "36px",
              padding: "120px 28px 48px",
              overflowY: "auto",
            }}
          >
            {navLinks.map((l, i) => (
              <motion.div key={l.to} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <Link
                  to={l.to}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "36px",
                    fontWeight: 300,
                    color: "var(--black)",
                    textDecoration: "none",
                    letterSpacing: "0.02em",
                  }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            {isAuthenticated && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: navLinks.length * 0.08 }}>
                <Link to="/dashboardPage" style={{ fontFamily: "var(--font-serif)", fontSize: "36px", fontWeight: 300, color: "var(--black)", textDecoration: "none" }}>
                  Dashboard
                </Link>
              </motion.div>
            )}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (navLinks.length + 1) * 0.08 }}>
              {isAuthenticated ? (
                <button onClick={handleLogout} style={{ fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray)", background: "transparent", border: "1.5px solid var(--gray-light)", padding: "12px 32px" }}>
                  Log Out
                </button>
              ) : (
                <Link to="/contact" style={{ fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--black)", textDecoration: "none", border: "1.5px solid var(--black)", padding: "12px 32px", display: "inline-block" }}>
                  Get a Quote
                </Link>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
