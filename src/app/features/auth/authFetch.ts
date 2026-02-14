import { useAuth } from "./AuthProvider";

export function useAuthFetch() {
  const { token } = useAuth();

  async function authFetch<T>(
    input: RequestInfo,
    init: RequestInit = {},
  ): Promise<T> {
    if (!token) throw new Error("Not authenticated");

    const res = await fetch(input, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      throw new Error("Unauthorized");
    }

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new Error(`Request failed (${res.status}): ${text}`);
    }

    return (await res.json()) as T;
  }

  return authFetch;
}
