import { apiFetch } from "@/lib/fetch";
import type { User } from "./types";

export async function login(email: string, password: string): Promise<void> {
  await apiFetch<void>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function logout(): Promise<void> {
  return apiFetch<void>("/auth/logout", {
    method: "POST",
  });
}

export type RegisterRequest = {
  email: string,
  username: string,
  password: string
}

export async function signup(
  request: RegisterRequest
): Promise<void> {
  await apiFetch<void>("/auth/register", {
    method: "POST",
    body: JSON.stringify( request )
  });
}

export async function fetchCurrentUser(): Promise<User> {
  return apiFetch<User>("/auth/me");
}
