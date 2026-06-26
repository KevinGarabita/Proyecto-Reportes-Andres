import type {
  CreateReportRequest,
  ReportDetails,
  ReportSummary,
} from "../types/report";

import { API_URL } from "../config/api";

export async function getReports(): Promise<ReportSummary[]> {
  const response = await fetch(`${API_URL}/reports/`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error al obtener reportes");
  }

  return response.json();
}

export async function getReport(id: string): Promise<ReportDetails> {
  const response = await fetch(`${API_URL}/reports/${id}`, {
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error al obtener reporte");
  }

  return response.json();
}

export async function deleteReport(reportId: string) {
  const response = await fetch(`${API_URL}/reports/${reportId}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar reporte");
  }
}

export async function updateReport(
  reportId: string,
  report: CreateReportRequest,
): Promise<ReportDetails> {
  const response = await fetch(`${API_URL}/reports/${reportId}`, {
    method: "PUT",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
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
  const response = await fetch(`${API_URL}/reports/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(report),
  });

  if (!response.ok) {
    console.log(await response.json());
    throw new Error("Error al crear reporte");
  }

  return response.json();
}
