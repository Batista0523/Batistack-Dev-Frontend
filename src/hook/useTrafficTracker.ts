import { useEffect, useRef } from "react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

// Define una interfaz para el evento de tráfico
interface TrafficEventPayload {
  event_type: string;
  path: string;
  referrer: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  user_agent: string;
  ip_address: string;
  created_at: string;
}

export const useTrafficTracker = (event_type: string, path: string) => {
  const hasTracked = useRef(false);

  useEffect(() => {
    const captureTrafficEvent = async () => {
      if (hasTracked.current) return;

      try {
        const ipAddress = await getIPAddress();
        const eventPayload: TrafficEventPayload = {
          event_type,
          path,
          referrer: document.referrer || "Direct",
          utm_source: getUTMParameter("utm_source"),
          utm_medium: getUTMParameter("utm_medium"),
          utm_campaign: getUTMParameter("utm_campaign"),
          user_agent: navigator.userAgent,
          ip_address: ipAddress,
          created_at: new Date().toISOString(),
        };

        await axios.post(`${API_BASE_URL}/traffic`, eventPayload);

        hasTracked.current = true;
        console.log("✅ Traffic event captured:", eventPayload);
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

// ✅ Función para obtener la IP del usuario
const getIPAddress = async (): Promise<string> => {
  try {
    const response = await axios.get("https://api.ipify.org?format=json");
    return response.data.ip;
  } catch (error) {
    console.error("❌ Error getting IP address:", error);
    return "Unknown IP";
  }
};

// ✅ Función para capturar parámetros UTM
const getUTMParameter = (param: string): string => {
  return new URLSearchParams(window.location.search).get(param) || "N/A";
};
