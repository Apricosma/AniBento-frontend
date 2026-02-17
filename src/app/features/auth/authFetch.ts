import { useAuth } from "./AuthProvider";

export class HttpError extends Error {
  constructor(
    public status: number,
    public body: string,
    message = `HTTP ${status}`
  ) {
    super(message);
  }
}

export function useAuthFetch() {
  const { token, ready } = useAuth();

  async function authFetch<T>(
    input: RequestInfo,
    init: RequestInit = {},
    options?: { requireAuth?: boolean }
  ): Promise<T> {
    const requireAuth = options?.requireAuth ?? false;

    if (requireAuth && !ready) throw new Error("Auth not ready");
    if (requireAuth && !token) throw new Error("Not authenticated");

    const res = await fetch(input, {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...(init.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      throw new HttpError(res.status, text, `Request failed (${res.status})`);
    }

    // Handle 204
    if (res.status === 204) return undefined as T;

    return (await res.json()) as T;
  }

  return { authFetch, ready, token };
}