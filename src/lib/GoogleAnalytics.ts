import ReactGA from "react-ga4";
const GoogleAnalyticsKey = import.meta.env.VITE_GOOGLE_ANALYTICS_KEY;
export const InitializeGoogleAnalytics = () => {
  ReactGA.initialize(GoogleAnalyticsKey);
};

export const PageVisitor = () => {
  ReactGA.send("Someone has visited your portfolio");
};
