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
    `fw-semibold px-3 py-2 rounded-pill text-decoration-none border transition ${
      location.pathname === path
        ? "bg-white text-black border-white"
        : "text-white bg-transparent border-0"
    }`;

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
          <Nav className="ms-auto align-items-center gap-3">
            {[
              { path: "/about", label: "About" },
              { path: "/services", label: "Services" },
              { path: "/speedPage", label: "AI Website Audit" },
              { path: "/aiServices", label: "AI Services" },
              { path: "/contact", label: "Contact" },
              ...(isAuthenticated && user
                ? [{ path: "/dashboardPage", label: "Dashboard" }]
                : []),
            ].map((link) => (
              <Nav.Item key={link.path}>
                <Link
                  to={link.path}
                  onClick={handleNavClick}
                  className={linkStyle(link.path)}
                  onMouseEnter={(e) => {
                    if (location.pathname !== link.path) {
                      e.currentTarget.style.backgroundColor = "#fff";
                      e.currentTarget.style.color = "#000";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (location.pathname !== link.path) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                >
                  {link.label}
                </Link>
              </Nav.Item>
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
