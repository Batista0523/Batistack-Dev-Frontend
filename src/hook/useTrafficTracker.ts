
import { useEffect, useRef } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const useTrafficTracker = (event_type: string, path: string) => {
  const hasTracked = useRef(false);

  useEffect(() => {
    const captureTrafficEvent = async () => {
      if (hasTracked.current) return; 

      try {
        const ipAddress = await getIPAddress();
        await axios.post(`${API_BASE_URL}/traffic`, {
          event_type,
          path,
          referrer: document.referrer || "Direct",
          utm_source: new URLSearchParams(window.location.search).get("utm_source") || "N/A",
          utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || "N/A",
          utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || "N/A",
          user_agent: navigator.userAgent,
          ip_address: ipAddress,
        });

        hasTracked.current = true;
        console.log("✅ Traffic event captured:", event_type, path);
      } catch (error) {
        console.error("❌ Error capturing traffic event:", error);
      }
    };

    captureTrafficEvent();

    return () => {
      hasTracked.current = false; 
    };
  }, [event_type, path]);
};


const getIPAddress = async () => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    console.error("❌ Error getting IP address:", error);
    return "Unknown IP";
  }
};
