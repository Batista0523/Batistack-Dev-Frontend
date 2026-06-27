import ReactGA from "react-ga4";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string | undefined;

export const initGA = () => {
  if (typeof window === "undefined") return;
  if (!GA_ID || window.location.hostname !== "batistack.com") return;
  ReactGA.initialize(GA_ID);
};

export const trackPageView = (url: string) => {
  if (typeof window === "undefined") return;
  if (!GA_ID) return;
  ReactGA.send({ hitType: "pageview", page: url });
};

export const fireConversionEvent = () => {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", "request_demo", {
      event_category: "conversion",
      event_label: "cta_click",
    });
  }
};
