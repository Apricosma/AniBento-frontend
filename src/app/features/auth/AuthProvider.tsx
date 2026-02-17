"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { login as apiLogin, fetchUserData } from "./api";
import type { User, AuthResponse } from "./types";

type AuthState = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  ready: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

const TOKEN_KEY = "anibento_token";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedToken =
      typeof window !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;
    if (!storedToken) {
      setIsLoading(false);
      return;
    }

    (async () => {
      try {
        setToken(storedToken);
        const user = await fetchUserData(storedToken);
        setUser(user);
      } catch {
        localStorage.removeItem(TOKEN_KEY);
        setToken(null);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  async function handleLogin(email: string, password: string) {
    setIsLoading(true);
    try {
      const res: AuthResponse = await apiLogin(email, password);

      setToken(res.accessToken);
      localStorage.setItem(TOKEN_KEY, res.accessToken);

      const me = await fetchUserData(res.accessToken);
      setUser(me);
    } finally {
      setIsLoading(false);
    }
  }

  function handleLogout() {
    setUser(null);
    setToken(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem(TOKEN_KEY);
    }
  }

  const value: AuthState = {
    user,
    token,
    isLoading,
    ready: !isLoading,
    login: handleLogin,
    logout: () => handleLogout(),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
