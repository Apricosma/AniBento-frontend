import "server-only";

import { cookies } from "next/headers";
import { apiFetch } from "@/lib/fetch";
import type { User } from "./types";

export async function fetchCurrentUserServer(): Promise<User | null> {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map(({ name, value }) => `${name}=${value}`)
    .join("; ");

  if (!cookieHeader) {
    return null;
  }

  try {
    const user = await apiFetch<User | null>("/auth/me", {
      cache: "no-store",
      headers: {
        Cookie: cookieHeader,
      },
    });

    return user ?? null;
  } catch {
    return null;
  }
}
