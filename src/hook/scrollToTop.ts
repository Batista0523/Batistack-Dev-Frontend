
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
   
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50); 
  }, [pathname]);

  return null;
}

export default ScrollToTop;
