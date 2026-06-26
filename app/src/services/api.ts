import { API_URL } from "../config/api";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  return fetch(`${API_URL}${endpoint}`, {
    credentials: "include",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });
}
