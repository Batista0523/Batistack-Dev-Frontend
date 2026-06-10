import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import NavBar from "./components/NavBar";
import ContactForm from "./Pages/ContactForm";
import { useEffect } from "react";
import ScrollToTop from "./hook/scrollToTop";
import { trackPageView } from "./ga";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ChatBot from "./components/ChatBot";
import NotFound from "./Pages/NotFound";
import CaseStudyPage from "./Pages/CaseStudyPage";
import Blog from "./Pages/Blog";
import BlogPost from "./Pages/BlogPost";
import AIAgents from "./Pages/AIAgents";
import HowItWorks from "./Pages/HowItWorks";
import Industries from "./Pages/Industries";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import "./global.css";
import "./styles/globals.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return (
    <>
      <CustomCursor />
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/speedPage"    element={<Navigate to="/" replace />} />
        <Route path="/services"     element={<Services />} />
        <Route path="/contact"      element={<ContactForm />} />
        <Route path="/policy"       element={<PrivacyPolicy />} />
        <Route path="/case-studies/:id" element={<CaseStudyPage />} />
        <Route path="/blog"              element={<Blog />} />
        <Route path="/blog/:slug"       element={<BlogPost />} />
        <Route path="/digital-presence" element={<Navigate to="/services" replace />} />
        <Route path="/ai-agents"        element={<AIAgents />} />
        <Route path="/how-it-works"     element={<HowItWorks />} />
        <Route path="/industries"       element={<Industries />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideFooter && <Footer />}
      <ChatBot />
    </>
  );
}

export default App;
