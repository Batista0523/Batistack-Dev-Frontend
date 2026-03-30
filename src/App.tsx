import { Routes, Route, useLocation } from "react-router-dom";
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
import { trackPageView } from "./ga";
import ApplicationsCenter from "./Pages/ApplicationsCenter";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ChatBot from "./components/ChatBot";
import WebsiteAudit from "./Pages/WebsiteAudit";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import "./global.css";
import "./styles/globals.css";

function App() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  const hideChrome = ["/dashboardPage", "/login"].includes(location.pathname);
  const hideFooter = ["/dashboardPage", "/login"].includes(location.pathname);

  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      {!hideChrome && <NavBar />}
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/speedPage"    element={<WebsiteAudit />} />
        <Route path="/services"     element={<Services />} />
        <Route path="/login"        element={<Login />} />
        <Route path="/contact"      element={<ContactForm />} />
        <Route path="/applications" element={<ApplicationsCenter />} />
        <Route path="/policy"       element={<PrivacyPolicy />} />
        <Route
          path="/dashboardPage"
          element={isAuthenticated ? <DashboardPage /> : <Login />}
        />
      </Routes>
      {!hideFooter && <Footer />}
      <ChatBot />
    </>
  );
}

export default App;
