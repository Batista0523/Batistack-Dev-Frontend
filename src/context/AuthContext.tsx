
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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const url = import.meta.env.VITE_BASE_URL;


  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${url}/users/login`, {
        email,
        password,
      });

      const { payload } = response.data;

      if (!payload) {
        throw new Error("Invalid user data received");
      }

      setUser(payload);
      localStorage.setItem("user", JSON.stringify(payload));
    } catch (error) {
      console.error("Login Error:", error);
      throw new Error("Invalid email or password");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
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
