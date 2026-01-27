import { useAuth } from "../app/features/auth/AuthProvider";

export function useAuthFetch() {
  const { token } = useAuth();

  async function authFetch(input: RequestInfo, init: RequestInit = {}) {
    if (!token) throw new Error("Not authenticated");

    const res = await fetch(input, {
      ...init,
      headers: {
        ...(init.headers || {}),
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.status === 401) {
      throw new Error("Unauthorized");
    }

    return res;
  }

  return authFetch;
}
