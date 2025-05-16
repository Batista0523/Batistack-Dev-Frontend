import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import axios from "axios";

interface AdminUser {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: AdminUser | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [inactivityTimer, setInactivityTimer] = useState<number | null>(null);
  const INACTIVITY_LIMIT = 15 * 60 * 1000; 

  const url = import.meta.env.VITE_BASE_URL;
  const loginEndpoint = import.meta.env.VITE_LOGING_ENPOING;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  
    const events = ["mousemove", "keydown", "scroll", "click"];

    const resetTimer = () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
      const newTimer = window.setTimeout(() => {
        logout(true); 
      }, INACTIVITY_LIMIT);
      setInactivityTimer(newTimer);
    };

    if (user) {
      events.forEach((event) => window.addEventListener(event, resetTimer));
      resetTimer();
    }

    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer));
      if (inactivityTimer) clearTimeout(inactivityTimer);
    };
  }, [user]);

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${url}/${loginEndpoint}`, {
        email,
        password,
      });

      const { payload } = response.data;

      if (!payload) throw new Error("Invalid user data received");

      setUser(payload);
      localStorage.setItem("user", JSON.stringify(payload));
    } catch (error) {
      console.error("Login Error:", error);
      throw new Error("Invalid email or password");
    }
  };

  const logout = (fromTimeout = false) => {
    setUser(null);
    localStorage.removeItem("user");

    if (fromTimeout) {
      alert("Session expired due to inactivity. Please log in again.");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
