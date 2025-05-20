import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { initGA } from "./ga";

initGA();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <AuthProvider>
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </AuthProvider>
  </HelmetProvider>
);
