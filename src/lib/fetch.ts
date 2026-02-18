const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5163/api";

export class HttpError extends Error {
  constructor(
    public status: number,
    public body: string,
    message = `HTTP ${status}`
  ) {
    super(message);
  }
}

export async function apiFetch<T = unknown>(
  path: string,
  init: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    ...init,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    
    if (res.status === 404) {
      return null as T;
    }

    throw new HttpError(res.status, text, `Request failed with status ${res.status}: ${text}`);
  }

  if (res.status === 204) return undefined as T;

  const contentLength = res.headers.get("Content-Length");
  if (contentLength === "0") return undefined as T;

  const contentType = res.headers.get("Content-Type") || "";
  if (!contentType.includes("application/json")) {
    await res.text().catch(() => "");
    return undefined as T;
  }

  return (await res.json()) as T;
}
