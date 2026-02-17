import { HttpError } from "@/app/features/auth/authFetch";

export async function apiFetch<T>(
  endpoint: string,
  token?: string | null,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}${endpoint}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...init?.headers,
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new HttpError(res.status, text);
  }

  return res.status === 204 ? undefined : res.json();
}