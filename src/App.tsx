import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar";
import ScrollToTop from "./hook/scrollToTop";
import { trackPageView } from "./ga";
import ChatBot from "./components/ChatBot";
import CustomCursor from "./components/CustomCursor";
import Footer from "./components/Footer";
import "./global.css";
import "./styles/globals.css";

const About         = lazy(() => import("./Pages/About"));
const Services      = lazy(() => import("./Pages/Services"));
const ContactForm   = lazy(() => import("./Pages/ContactForm"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const NotFound      = lazy(() => import("./Pages/NotFound"));
const CaseStudyPage = lazy(() => import("./Pages/CaseStudyPage"));
const Blog          = lazy(() => import("./Pages/Blog"));
const BlogPost      = lazy(() => import("./Pages/BlogPost"));
const AIAgents      = lazy(() => import("./Pages/AIAgents"));
const HowItWorks    = lazy(() => import("./Pages/HowItWorks"));
const Industries    = lazy(() => import("./Pages/Industries"));
const IndustryPage  = lazy(() => import("./Pages/IndustryPage"));

function RouteFallback() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--void)",
        paddingTop: "72px",
      }}
    />
  );
}

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
      <Suspense fallback={<RouteFallback />}>
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
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <ChatBot />
    </>
  );
}

export default App;
