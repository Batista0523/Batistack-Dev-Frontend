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
import Industries from "./components/Industries";
import Barbsershop from "./Pages/industries/Barbsershop";
import Hvac from "./Pages/industries/Hvac";
import Ecommerce from "./Pages/industries/Ecommerce";
import Electrician from "./Pages/industries/Electrician";
import Salon from "./Pages/industries/Salon";
import FitnessTrainers from "./Pages/industries/FitnessTrainers";
import LawFirms from "./Pages/industries/LawFirms";
import PlumbingServices from "./Pages/industries/PlumbingServices";
import RestaurantCafe from "./Pages/industries/RestaurantCafe";
import RealEstate from "./Pages/industries/RealEstate";
import SintraPartner from "./Pages/SintraPartner";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
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
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/industries/hvac" element={<Hvac />} />
        <Route path="/industries/barbershop" element={<Barbsershop />} />
        <Route path="/industries/electrician" element={<Electrician />} />
        <Route path="/industries/ecommerce" element={<Ecommerce />} />
        <Route path="/industries/salon" element={<Salon/>} />
        <Route path="/industries/restaurant" element={<RestaurantCafe />} />
        <Route path="/industries/fitness" element={<FitnessTrainers/>} />
        <Route path="/industries/lawfirms" element={<LawFirms />} />
        <Route path="/industries/real-estate" element={<RealEstate />} />
        <Route path="/industries/plumber" element={<PlumbingServices />} />
        <Route path="/sintra" element={<SintraPartner/>} />
        <Route path="/policy" element={<PrivacyPolicy/>} />
        <Route path="/industries/" element={<Industries />} />
        <Route
          path="/dashboardPage"
          element={isAuthenticated ? <DashboardPage /> : <Login />}
        />
      </Routes>
    </>
  );
}

export default App;
