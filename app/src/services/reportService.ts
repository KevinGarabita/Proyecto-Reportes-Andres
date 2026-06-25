import type { ReportDetails, ReportSummary } from "../types/report";

const API_URL = "http://192.168.1.64:8000";

export async function getReports(): Promise<ReportSummary[]> {
  const response = await fetch(`${API_URL}/reports/`);

  if (!response.ok) {
    throw new Error("Error al obtener reportes");
  }

  return response.json();
}

export async function getReport(id: string): Promise<ReportDetails> {
  const response = await fetch(`${API_URL}/reports/${id}`);
  if (!response.ok) {
    throw new Error("Error al obtener reporte");
  }

  return response.json();
}

export async function deleteReport(reportId: string) {
  const response = await fetch(`${API_URL}/reports/${reportId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar reporte");
  }
}
