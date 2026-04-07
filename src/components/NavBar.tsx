import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Services",   to: "/services"  },
  { label: "Speed Test", to: "/speedPage" },
  { label: "Blog",       to: "/blog"      },
  { label: "About",      to: "/about"     },
  { label: "Contact",    to: "/contact"   },
];

export default function NavBar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { isAuthenticated }       = useAuth();
  const location                  = useLocation();

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close overlay on route change
  useEffect(() => setMenuOpen(false), [location]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Nav bar ── */}
      <nav
        style={{
          position:        "fixed",
          top:             0,
          left:            0,
          right:           0,
          zIndex:          100,
          height:          "80px",
          display:         "flex",
          alignItems:      "center",
          background:      scrolled ? "rgba(8,8,8,0.92)" : "transparent",
          backdropFilter:  scrolled ? "blur(20px)"         : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)"    : "none",
          borderBottom:    scrolled ? "1px solid var(--gold-dim)" : "none",
          transition:      "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        {/* Inner container */}
        <div
          className="nav-inner"
          style={{
            maxWidth:      "1280px",
            width:         "100%",
            margin:        "0 auto",
            padding:       "0 60px",
            display:       "flex",
            alignItems:    "center",
            justifyContent:"space-between",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{ textDecoration: "none", display: "inline-flex", alignItems: "baseline", gap: 0 }}
          >
            <span
              style={{
                fontFamily:    "var(--font-display)",
                fontSize:      "28px",
                color:         "var(--bone)",
                letterSpacing: "0.04em",
                lineHeight:    1,
              }}
            >
              BATI
            </span>
            <span
              style={{
                fontFamily:    "var(--font-serif)",
                fontStyle:     "italic",
                fontSize:      "28px",
                color:         "var(--gold)",
                letterSpacing: "0.02em",
                lineHeight:    1,
              }}
            >
              STACK
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul
            className="nav-desktop-links"
            style={{
              display:    "flex",
              gap:        "40px",
              listStyle:  "none",
              margin:     0,
              padding:    0,
              alignItems: "center",
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} label={link.label} />
              </li>
            ))}
            {isAuthenticated && (
              <li>
                <Link
                  to="/dashboardPage"
                  style={{
                    fontFamily:    "var(--font-sans)",
                    fontSize:      "11px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color:         "var(--mist)",
                    textDecoration:"none",
                    transition:    "color 0.2s ease",
                  }}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          {/* Desktop CTA */}
          <div
            className="nav-desktop-cta"
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
          >
            <FreeAuditButton />
            <CtaButton />
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{
              background:    "transparent",
              border:        "none",
              padding:       "8px",
              display:       "flex",
              flexDirection: "column",
              gap:           "5px",
              cursor:        "pointer",
              zIndex:        201,
            }}
          >
            <span
              style={{
                display:    "block",
                width:      "22px",
                height:     "1px",
                background: "var(--bone)",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform:  menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display:    "block",
                width:      "22px",
                height:     "1px",
                background: "var(--bone)",
                transition: "opacity 0.3s ease",
                opacity:    menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display:    "block",
                width:      "22px",
                height:     "1px",
                background: "var(--bone)",
                transition: "transform 0.3s ease",
                transform:  menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position:       "fixed",
              inset:          0,
              background:     "#080808",
              zIndex:         200,
              display:        "flex",
              flexDirection:  "column",
              alignItems:     "center",
              justifyContent: "center",
              gap:            "8px",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                position:   "absolute",
                top:        "28px",
                right:      "24px",
                background: "transparent",
                border:     "none",
                color:      "var(--bone)",
                fontSize:   "28px",
                lineHeight: 1,
                cursor:     "pointer",
                padding:    "8px",
              }}
            >
              ×
            </button>

            <motion.ul
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
              initial="hidden"
              animate="show"
              style={{ listStyle: "none", textAlign: "center", padding: 0, margin: 0 }}
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.to}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
                  }}
                  style={{ marginBottom: "8px" }}
                >
                  <Link
                    to={link.to}
                    style={{
                      fontFamily:    "var(--font-serif)",
                      fontStyle:     "italic",
                      fontSize:      "clamp(36px, 9vw, 60px)",
                      fontWeight:    300,
                      color:         "var(--bone)",
                      textDecoration:"none",
                      letterSpacing: "0.02em",
                      lineHeight:    1.2,
                      display:       "block",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              {isAuthenticated && (
                <motion.li
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
                  }}
                  style={{ marginBottom: "8px" }}
                >
                  <Link
                    to="/dashboardPage"
                    style={{
                      fontFamily:    "var(--font-serif)",
                      fontStyle:     "italic",
                      fontSize:      "clamp(36px, 9vw, 60px)",
                      fontWeight:    300,
                      color:         "var(--bone)",
                      textDecoration:"none",
                      letterSpacing: "0.02em",
                      lineHeight:    1.2,
                      display:       "block",
                    }}
                  >
                    Dashboard
                  </Link>
                </motion.li>
              )}
              {/* Mobile Free Audit CTA */}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
                style={{ marginTop: "32px" }}
              >
                <a
                  href="/#free-audit"
                  style={{
                    fontFamily:     "var(--font-display)",
                    fontSize:       "14px",
                    letterSpacing:  "0.1em",
                    textTransform:  "uppercase",
                    color:          "var(--gold)",
                    border:         "1px solid var(--gold)",
                    padding:        "14px 40px",
                    textDecoration: "none",
                    display:        "inline-block",
                    background:     "transparent",
                  }}
                >
                  Free Audit
                </a>
              </motion.li>
              {/* Mobile CTA */}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
                }}
                style={{ marginTop: "12px" }}
              >
                <Link
                  to="/contact"
                  data-cursor="cta"
                  style={{
                    fontFamily:     "var(--font-display)",
                    fontSize:       "14px",
                    letterSpacing:  "0.1em",
                    textTransform:  "uppercase",
                    color:          "var(--bone)",
                    border:         "1px solid var(--gold)",
                    padding:        "14px 40px",
                    textDecoration: "none",
                    display:        "inline-block",
                    background:     "transparent",
                  }}
                >
                  Start a Project
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive styles */}
      <style>{`
        .nav-desktop-links,
        .nav-desktop-cta {
          display: flex;
        }
        .nav-hamburger {
          display: none !important;
        }
        @media (max-width: 768px) {
          .nav-inner {
            padding: 0 24px !important;
          }
          .nav-desktop-links,
          .nav-desktop-cta {
            display: none !important;
          }
          .nav-hamburger {
            display: flex !important;
          }
        }
        .nav-link-item {
          position: relative;
        }
        .nav-link-item::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.25s ease;
        }
        .nav-link-item:hover::after {
          width: 100%;
        }
        .nav-link-item:hover {
          color: #ffffff !important;
        }
      `}</style>
    </>
  );
}

// ── Sub-components ──────────────────────────────────────────────────────────

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="nav-link-item"
      style={{
        fontFamily:    "var(--font-sans)",
        fontSize:      "11px",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color:         "var(--mist)",
        textDecoration:"none",
        transition:    "color 0.2s ease",
        display:       "inline-block",
      }}
    >
      {label}
    </Link>
  );
}

function CtaButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/contact"
      data-cursor="cta"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:    "var(--font-display)",
        fontSize:      "14px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color:         hovered ? "var(--void)" : "var(--bone)",
        border:        "1px solid var(--gold)",
        padding:       "10px 24px",
        textDecoration:"none",
        display:       "inline-block",
        background:    hovered ? "var(--gold)" : "transparent",
        transition:    "background 0.25s ease, color 0.25s ease",
      }}
    >
      Start a Project
    </Link>
  );
}

function FreeAuditButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="/#free-audit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:     "var(--font-sans)",
        fontSize:       "11px",
        letterSpacing:  "0.12em",
        textTransform:  "uppercase",
        color:          hovered ? "var(--void)" : "var(--gold)",
        border:         "1px solid var(--gold)",
        padding:        "8px 18px",
        textDecoration: "none",
        display:        "inline-block",
        background:     hovered ? "var(--gold)" : "transparent",
        transition:     "background 0.25s ease, color 0.25s ease",
      }}
    >
      Free Audit
    </a>
  );
}
