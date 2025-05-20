import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-WTJ63BBML5");
};

export const trackPageView = (url: string) => {
  ReactGA.send({ hitType: "pageview", page: url });
};