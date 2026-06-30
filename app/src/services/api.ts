import { API_URL } from "../config/api";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const headers = new Headers(options.headers);

  if (!(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    credentials: "include",
    headers,
  });

  return response;
}
