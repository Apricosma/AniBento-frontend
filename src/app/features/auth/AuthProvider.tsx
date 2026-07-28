"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  login as apiLogin,
  logout as apiLogout,
  signup as apiSignup,
  fetchCurrentUser,
  RegisterRequest
} from "./api";
import type { User } from "./types";

type AuthState = {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<User>;
  logout: () => Promise<void>;
  signup: (request: RegisterRequest) => Promise<User>;
  refresh: () => Promise<void>;
};

const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function refresh() {
    setIsLoading(true);
    try {
      const userData = await fetchCurrentUser();
      setUser(userData);
    } catch {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogin(email: string, password: string): Promise<User> {
    setIsLoading(true);
    try {
      await apiLogin(email, password);
      const userData = await fetchCurrentUser();
      setUser(userData);
      return userData;
    } finally {
      setIsLoading(false);
    }
  }

  async function handleLogout() {
    setIsLoading(true);
    try {
      await apiLogout();
    } finally {
      setUser(null);
      setIsLoading(false);
    }
  }

  async function handleSignup(
    request: RegisterRequest
  ): Promise<User> {
    await apiSignup(request)

    const userData = await fetchCurrentUser();
    setUser(userData);

    return userData;
  }

  useEffect(() => {
    refresh();
  }, []);

  const value: AuthState = {
    user,
    isLoading,
    login: handleLogin,
    logout: handleLogout,
    signup: handleSignup,
    refresh,
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
