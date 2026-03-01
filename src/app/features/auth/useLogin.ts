"use client";

import { useState } from "react";
import { useAuth } from "./AuthProvider";
import type { User } from "./types";

export function useLogin() {
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(email: string, password: string): Promise<User | null> {
    setIsSubmitting(true);
    setError(null);
    try {
      const user = await login(email, password);
      return user;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
      return null;
    } finally {
      setIsSubmitting(false);
    }
  }

  return { submit, isSubmitting, error };
}
