import { API_URL } from "../config/api";
import type { user } from "../types/user";
import { Role } from "../types/userRole";

export async function getSupervisors(): Promise<user[]> {
  const response = await fetch(`${API_URL}/users/?role=${Role.SUPERVISOR}`);

  if (!response.ok) {
    throw new Error("Error al obtener reportes");
  }

  return response.json();
}
