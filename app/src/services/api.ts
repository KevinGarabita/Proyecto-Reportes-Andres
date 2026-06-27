import { API_URL } from "../config/api";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (response.status === 401) {
    throw new Error("UNAUTHORIZED");
  }

  return response;
}
