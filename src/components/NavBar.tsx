import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function LogoLockup({ markHeight = 38 }: { markHeight?: number }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "11px" }}>
      <img
        src="/brand/batistack-mark.png"
        alt=""
        height={markHeight}
        style={{ height: `${markHeight}px`, width: "auto", display: "block" }}
      />
      <img
        src="/brand/batistack-wordmark.png"
        alt="Batistack"
        style={{ height: `${Math.round(markHeight * 0.38)}px`, width: "auto", display: "block" }}
      />
    </span>
  );
}

const NAV_LINKS = [
  { label: "Home",         to: "/"              },
  { label: "AI Agents",    to: "/ai-agents"     },
  { label: "How It Works", to: "/how-it-works"  },
  { label: "Industries",   to: "/industries"    },
  { label: "Services",     to: "/services"      },
  { label: "About",        to: "/about"         },
  { label: "Contact",      to: "/contact"       },
];

export default function NavBar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const location                  = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── Nav bar ── */}
      <nav
        style={{
          position:       "fixed",
          top:            0,
          left:           0,
          right:          0,
          zIndex:         100,
          height:         "72px",
          display:        "flex",
          alignItems:     "center",
          background:     scrolled
            ? "rgba(10,10,10,0.96)"
            : "rgba(10,10,10,0.90)",
          backdropFilter:  scrolled ? "blur(20px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          borderBottom:   "1px solid #00AEEF",
          transition:     "background 0.3s ease, backdrop-filter 0.3s ease",
        }}
      >
        <div
          className="nav-inner"
          style={{
            maxWidth:            "1280px",
            width:               "100%",
            margin:              "0 auto",
            padding:             "0 48px",
            display:             "grid",
            gridTemplateColumns: "auto 1fr auto",
            alignItems:          "center",
            gap:                 "24px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
            aria-label="Batistack home"
          >
            <LogoLockup markHeight={38} />
          </Link>

          {/* Desktop nav links */}
          <ul
            className="nav-desktop-links"
            style={{
              justifySelf:  "center",
              display:      "flex",
              gap:          "2px",
              listStyle:    "none",
              margin:       0,
              padding:      0,
              alignItems:   "center",
            }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} label={link.label} />
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="nav-desktop-cta" style={{ display: "flex", alignItems: "center", gap: "10px", justifySelf: "end" }}>
            <GetStartedButton />
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
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display:    "block",
                  width:      "22px",
                  height:     "1.5px",
                  background: i === 1 && menuOpen ? "transparent" : "#FFFFFF",
                  borderRadius: "1px",
                  transition: "transform 0.3s ease, opacity 0.3s ease, background 0.3s ease",
                  transform:
                    i === 0 && menuOpen ? "translateY(6.5px) rotate(45deg)"
                    : i === 2 && menuOpen ? "translateY(-6.5px) rotate(-45deg)"
                    : "none",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{
              position:       "fixed",
              inset:          0,
              background:     "#0A0A0A",
              zIndex:         200,
              display:        "flex",
              flexDirection:  "column",
              alignItems:     "center",
              justifyContent: "center",
              gap:            "0",
              borderTop:      "1px solid #00AEEF",
            }}
          >
            {/* Logo in mobile overlay */}
            <div style={{ position: "absolute", top: "20px", left: "24px" }}>
              <LogoLockup markHeight={34} />
            </div>

            {/* Close button */}
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                position:   "absolute",
                top:        "20px",
                right:      "20px",
                background: "transparent",
                border:     "1px solid #1E1E1E",
                color:      "#FFFFFF",
                width:      "36px",
                height:     "36px",
                borderRadius: "6px",
                fontSize:   "20px",
                lineHeight: "1",
                cursor:     "pointer",
                display:    "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ×
            </button>

            <motion.ul
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06 } },
              }}
              initial="hidden"
              animate="show"
              style={{ listStyle: "none", textAlign: "center", padding: 0, margin: 0, width: "100%" }}
            >
              {NAV_LINKS.map((link) => (
                <motion.li
                  key={link.to}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
                  }}
                  style={{ borderBottom: "1px solid #1E1E1E" }}
                >
                  <Link
                    to={link.to}
                    style={{
                      fontFamily:    "'Raleway', sans-serif",
                      fontWeight:    600,
                      fontSize:      "clamp(22px, 5vw, 32px)",
                      color:         location.pathname === link.to ? "#00AEEF" : "#FFFFFF",
                      textDecoration:"none",
                      letterSpacing: "0.04em",
                      display:       "block",
                      padding:       "18px 24px",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.4 }}
              style={{ marginTop: "32px", padding: "0 24px", width: "100%" }}
            >
              <Link
                to="/contact"
                style={{
                  display:       "block",
                  width:         "100%",
                  textAlign:     "center",
                  fontFamily:    "'Raleway', sans-serif",
                  fontWeight:    700,
                  fontSize:      "14px",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color:         "#0A0A0A",
                  background:    "#00AEEF",
                  padding:       "16px 24px",
                  textDecoration:"none",
                  borderRadius:  "6px",
                }}
              >
                Get Started
              </Link>
            </motion.div>
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
        @media (max-width: 960px) {
          .nav-inner {
            padding: 0 24px !important;
            grid-template-columns: auto 1fr !important;
            gap: 0 !important;
          }
          .nav-desktop-links,
          .nav-desktop-cta {
            display: none !important;
          }
          .nav-hamburger {
            display: flex !important;
            justify-self: end;
          }
        }
        .nav-link-pill {
          transition: background 0.2s ease, color 0.2s ease;
        }
        .nav-link-pill:hover {
          background: rgba(0,174,239,0.08) !important;
          color: #FFFFFF !important;
        }
      `}</style>
    </>
  );
}

/* ── Sub-components ── */

function NavLink({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  const active = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));

  return (
    <Link
      to={to}
      className="nav-link-pill"
      style={{
        fontFamily:    "'Raleway', sans-serif",
        fontWeight:    active ? 700 : 500,
        fontSize:      "12px",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color:         active ? "#00AEEF" : "#888888",
        textDecoration:"none",
        display:       "inline-block",
        padding:       "8px 12px",
        borderRadius:  "6px",
        background:    active ? "rgba(0,174,239,0.1)" : "transparent",
        whiteSpace:    "nowrap",
      }}
    >
      {label}
    </Link>
  );
}

function GetStartedButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/contact"
      data-cursor="cta"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:    "'Raleway', sans-serif",
        fontWeight:    700,
        fontSize:      "12px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color:         hovered ? "#FFFFFF" : "#0A0A0A",
        background:    hovered ? "#22c4ff" : "#00AEEF",
        padding:       "10px 20px",
        textDecoration:"none",
        display:       "inline-block",
        borderRadius:  "6px",
        transition:    "background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
        boxShadow:     hovered ? "0 4px 16px rgba(0,174,239,0.35)" : "none",
        whiteSpace:    "nowrap",
      }}
    >
      Get Started
    </Link>
  );
}
