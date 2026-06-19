import ReactGA from "react-ga4";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const initGA = () => {
  ReactGA.initialize("G-WTJ63BBML5");
};

export const trackPageView = (url: string) => {
  ReactGA.send({ hitType: "pageview", page: url });
};

export const fireConversionEvent = () => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "request_demo", {
      event_category: "conversion",
      event_label: "cta_click",
    });
  }
};