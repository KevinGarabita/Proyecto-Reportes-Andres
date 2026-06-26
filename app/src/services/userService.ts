import { apiFetch } from "./api";
import type { User } from "../types/user";
import { Role } from "../types/userRole";

export async function getSupervisors(): Promise<User[]> {
  const response = await apiFetch(`/users?role=${Role.SUPERVISOR}`);

  if (!response.ok) {
    throw new Error("Error al obtener supervisores");
  }

  return response.json();
}
