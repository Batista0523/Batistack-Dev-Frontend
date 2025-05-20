import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import NavBar from "./components/NavBar";
import Login from "./Pages/Login";
import ContactForm from "./Pages/ContactForm";
import { useAuth } from "./context/AuthContext";
import DashboardPage from "./Pages/DashboardPage";
import { useEffect } from "react";
import ScrollToTop from "./hook/scrollToTop";

import { useLocation } from "react-router-dom";
import { trackPageView } from "./ga";

function App() {
    const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  const { isAuthenticated } = useAuth();
  return (
    <div>
      <Router>
        <ScrollToTop/>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="/dashboardPage"
            element={isAuthenticated ? <DashboardPage /> : <Login />}
          />
        </Routes>
  
      </Router>
    </div>
  );
}

export default App;
