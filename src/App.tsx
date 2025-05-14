import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import NavBar from "./components/NavBar";
import Login from "./Pages/Login";
import ContactForm from "./Pages/ContactForm";
import { useAuth } from "./context/AuthContext";
import DashboardPage from "./Pages/DashboardPage";
import SocialMediaLinks from "./components/socialMediaLinks";
function App() {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <Router>
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
        <SocialMediaLinks />
      </Router>
    </div>
  );
}

export default App;
