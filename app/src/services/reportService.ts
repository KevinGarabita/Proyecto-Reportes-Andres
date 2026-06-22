import type { Report } from "../types/report";

const API_URL = "http://localhost:8000";

export async function getReports(): Promise<Report[]> {
  const response = await fetch(`${API_URL}/reports/`);

  if (!response.ok) {
    throw new Error("Error al obtener reportes");
  }

  return response.json();
}
