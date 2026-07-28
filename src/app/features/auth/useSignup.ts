"use client";

import { useState } from "react";
import { useAuth } from "./AuthProvider";
import type { User } from "./types";
import type { RegisterRequest } from "./api";
import { HttpError } from "@/lib/fetch";

export function useSignup() {
  const { signup } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(request: RegisterRequest): Promise<User | null> {
    setIsSubmitting(true);
    setError(null);

    try {
      return await signup(request);
    } catch (err) {
      if (err instanceof HttpError) {
        try {
          const errors: { description: string }[] = JSON.parse(err.body);

          setError(errors.map((e) => `• ${e.description}`).join("\n"));
        } catch {
          setError(err.message);
        }
      } else {
        setError(err instanceof Error ? err.message : "Sign up failed");
      }

      return null;
    } finally {
      setIsSubmitting(false);
    }
  }

  return { submit, isSubmitting, error };
}