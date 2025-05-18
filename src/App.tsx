import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import NavBar from "./components/NavBar";
import Login from "./Pages/Login";
import ContactForm from "./Pages/ContactForm";
import { useAuth } from "./context/AuthContext";
import DashboardPage from "./Pages/DashboardPage";

import ScrollToTop from "./hook/scrollToTop";


function App() {
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
