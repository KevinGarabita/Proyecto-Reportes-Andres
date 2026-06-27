import { apiFetch } from "./api";
import type { AuthUser } from "../types/auth";

type LoginRequest = {
  email: string;
  password: string;
};

export async function loginService(request: LoginRequest): Promise<AuthUser> {
  const response = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail);
  }

  return response.json();
}

export async function me(): Promise<AuthUser> {
  const response = await apiFetch("/auth/me");

  if (!response.ok) {
    throw new Error("No autenticado");
  }

  return response.json();
}
