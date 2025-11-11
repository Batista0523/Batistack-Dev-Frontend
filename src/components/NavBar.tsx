import { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setExpanded(false);
  };

  const handleNavClick = () => {
    setExpanded(false);
  };

  const linkStyle = (path: string) =>
    `nav-link px-3 py-2 fw-semibold position-relative ${
      location.pathname === path ? "text-primary" : "text-white"
    }`;

  const underlineStyle = {
    position: "absolute" as const,
    bottom: 0,
    left: "25%",
    width: "50%",
    height: "2px",
    backgroundColor: "#0d6efd", 
    transition: "opacity 0.3s ease-in-out",
    opacity: 0,
  };

  const hoverContainerStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-block",
  };

  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#000" }}
      className="shadow-sm py-3 sticky-top border-bottom border-primary"
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
    >
      <Container>
        <Link to="/" className="navbar-brand fw-bold fs-4 text-white">
          Batistack<span className="text-primary"> Development</span>
        </Link>
        <Navbar.Toggle aria-controls="main-navbar" className="bg-light" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-2">
            {[
              { path: "/about", label: "About" },
              { path: "/services", label: "Web & AI" },
              { path: "/applications", label: "Forms & Benefits Help" },
              { path: "/speedPage", label: "AI Website Audit" },
              { path: "/contact", label: "Contact" },
              ...(isAuthenticated && user
                ? [{ path: "/dashboardPage", label: "Dashboard" }]
                : []),
            ].map((link, index, array) => (
              <div key={link.path} className="d-flex align-items-center gap-2">
                <Nav.Item>
                  <div
                    style={hoverContainerStyle}
                    className="nav-hover-container"
                  >
                    <Link
                      to={link.path}
                      onClick={handleNavClick}
                      className={linkStyle(link.path)}
                      onMouseEnter={(e) => {
                        const underline = e.currentTarget.querySelector(
                          ".underline"
                        ) as HTMLElement;
                        if (underline) underline.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        const underline = e.currentTarget.querySelector(
                          ".underline"
                        ) as HTMLElement;
                        if (underline) underline.style.opacity = "0";
                      }}
                    >
                      {link.label}
                      <div className="underline" style={underlineStyle}></div>
                    </Link>
                  </div>
                </Nav.Item>
                {index < array.length - 1 && (
                  <span className="text-white fs-5 px-1">|</span>
                )}
              </div>
            ))}

            {isAuthenticated && user ? (
              <Nav.Item>
                <Button
                  onClick={handleLogout}
                  variant="outline-danger"
                  size="sm"
                  className="px-3 py-2 rounded-pill"
                >
                  Logout
                </Button>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Link
                  to="/login"
                  onClick={handleNavClick}
                  className="btn btn-outline-primary btn-sm px-4 py-2 rounded-pill"
                >
                  Admin Login
                </Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
