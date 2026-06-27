import { apiFetch } from "./api";

import type {
  CreateReportRequest,
  ReportDetails,
  ReportSummary,
} from "../types/report";

export async function getReports(): Promise<ReportSummary[]> {
  const response = await apiFetch("/reports/");

  if (!response.ok) {
    throw new Error("Error al obtener reportes");
  }

  return response.json();
}

export async function getReport(id: string): Promise<ReportDetails> {
  const response = await apiFetch(`/reports/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener reporte");
  }

  return response.json();
}

export async function deleteReport(reportId: string): Promise<void> {
  const response = await apiFetch(`/reports/${reportId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar reporte");
  }
}

export async function updateReport(
  reportId: string,
  report: CreateReportRequest,
): Promise<ReportDetails> {
  const response = await apiFetch(`/reports/${reportId}`, {
    method: "PUT",
    body: JSON.stringify(report),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar reporte");
  }

  return response.json();
}

export async function createReport(
  report: CreateReportRequest,
): Promise<ReportDetails> {
  const response = await apiFetch("/reports/", {
    method: "POST",
    body: JSON.stringify(report),
  });

  if (!response.ok) {
    const error = await response.json();
    console.error(error);
    throw new Error("Error al crear reporte");
  }

  return response.json();
}
