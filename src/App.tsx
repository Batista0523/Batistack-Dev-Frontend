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

import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ChatBot from "./components/ChatBot";
import WebsiteAudit from "./components/WebsiteAudit";
function App() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speedPage" element={<WebsiteAudit />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactForm />} />

        <Route path="/policy" element={<PrivacyPolicy/>} />
        
        <Route
          path="/dashboardPage"
          element={isAuthenticated ? <DashboardPage /> : <Login />}
        />
      </Routes>
      <ChatBot />
    </>
  );
}

export default App;
