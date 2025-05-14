import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const linkStyle = (path: string) =>
    `nav-link px-3 fw-semibold ${
      location.pathname === path ? "text-primary" : "text-dark"
    }`;

  return (
    <Navbar expand="lg" bg="white" className="shadow-sm py-3 sticky-top">
      <Container>
        <Link to="/" className="navbar-brand fw-bold fs-4 text-dark">
          Batistack<span style={{ color: "#0d6efd" }}> Development</span>
        </Link>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Item>
              <Link to="/" className={linkStyle("/")}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className={linkStyle("/about")}>
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/services" className={linkStyle("/services")}>
                Services
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className={linkStyle("/contact")}>
                Contact
              </Link>
            </Nav.Item>

            {isAuthenticated && user ? (
              <>
                <Nav.Item>
                  <Link to="/dashboardPage" className={linkStyle("/dashboardPage")}>
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
