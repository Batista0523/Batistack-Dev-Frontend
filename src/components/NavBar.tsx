import { useState } from "react";
import { Navbar, Nav, Button, Container, NavDropdown } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setExpanded(false);
  };

  const handleNavClick = () => {
    setExpanded(false);
    setShowDropdown(false);
  };

  const linkStyle = (path: string) =>
    `nav-link px-3 fw-semibold ${
      location.pathname === path ? "text-primary" : "text-dark"
    }`;

  return (
    <Navbar
      expand="lg"
      bg="white"
      className="shadow-sm py-3 sticky-top"
      expanded={expanded}
      onToggle={(val) => setExpanded(val)}
    >
      <Container>
        <Link to="/" className="navbar-brand fw-bold fs-4 text-dark">
          Batistack<span style={{ color: "#0d6efd" }}> Development</span>
        </Link>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Item>
              <Link to="/" onClick={handleNavClick} className={linkStyle("/")}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/about"
                onClick={handleNavClick}
                className={linkStyle("/about")}
              >
                About
              </Link>
            </Nav.Item>

            <NavDropdown
              title={<span className="fw-semibold">Services</span>}
              id="services-hover-dropdown"
              show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="fw-semibold"
            >
              <NavDropdown.Item
                as={Link}
                to="/services"
                onClick={handleNavClick}
              >
                Services Overview
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/industries"
                onClick={handleNavClick}
              >
                Right for You?
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/sintra"
                onClick={handleNavClick}
              >
                Partner Sintra AI
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Item>
              <Link
                to="/contact"
                onClick={handleNavClick}
                className={linkStyle("/contact")}
              >
                Contact
              </Link>
            </Nav.Item>

            {isAuthenticated && user ? (
              <>
                <Nav.Item>
                  <Link
                    to="/dashboardPage"
                    onClick={handleNavClick}
                    className={linkStyle("/dashboardPage")}
                  >
                    Dashboard
                  </Link>
                </Nav.Item>
                <Nav.Item>
                  <Button
                    onClick={handleLogout}
                    variant="outline-danger"
                    size="sm"
                    className="px-3 py-2 rounded-1"
                  >
                    Logout
                  </Button>
                </Nav.Item>
              </>
            ) : (
              <Nav.Item>
                <Link
                  to="/login"
                  onClick={handleNavClick}
                  className="btn btn-outline-primary btn-sm px-4 py-2 rounded-1"
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
