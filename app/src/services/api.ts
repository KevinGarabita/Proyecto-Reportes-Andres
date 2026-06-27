import { API_URL } from "../config/api";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    credentials: "include",
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (response.status === 401) {
    window.location.href = "/";
    return Promise.reject(new Error("No autenticado"));
  }

  return response;
}
