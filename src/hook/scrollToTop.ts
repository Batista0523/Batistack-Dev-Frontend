'use client';
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
