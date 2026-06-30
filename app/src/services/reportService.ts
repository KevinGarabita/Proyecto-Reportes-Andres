import { apiFetch } from "./api";

import type {
  CreateReportRequest,
  ReportDetails,
  ReportFilters,
  ReportsResponse,
} from "../types/report";
import type { EvidenceFile, EvidenceKey } from "../types/evidence";

export async function getReports(
  filters?: ReportFilters,
): Promise<ReportsResponse> {
  const params = new URLSearchParams();

  if (filters?.status) {
    params.append("status", filters.status);
  }

  if (filters?.search) {
    params.append("search", filters.search);
  }

  if (filters?.page !== undefined) {
    params.append("page", filters.page.toString());
  }

  if (filters?.pageSize !== undefined) {
    params.append("page_size", filters.pageSize.toString());
  }

  if (filters?.startDate) {
    params.append("start_date", filters.startDate);
  }

  if (filters?.endDate) {
    params.append("end_date", filters.endDate);
  }

  const response = await apiFetch(`/reports/?${params.toString()}`);

  if (!response.ok) {
    throw new Error("No se pudieron obtener los reportes.");
  }

  return await response.json();
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
  evidences: Partial<Record<EvidenceKey, EvidenceFile>>,
): Promise<ReportDetails> {
  const formData = new FormData();

  formData.append("report", JSON.stringify(report));

  Object.entries(evidences).forEach(([key, evidence]) => {
    if (!evidence) return;

    formData.append(key.toLowerCase(), evidence.file);
  });

  const response = await apiFetch(`/reports/${reportId}`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    console.error(error);
    throw new Error("Error al actualizar reporte");
  }

  return response.json();
}

export async function createReport(
  report: CreateReportRequest,
  evidences: Partial<Record<EvidenceKey, EvidenceFile>>,
): Promise<ReportDetails> {
  const formData = new FormData();

  formData.append("report", JSON.stringify(report));

  Object.entries(evidences).forEach(([key, evidence]) => {
    if (evidence == null) return;

    formData.append(key, evidence.file);
  });

  console.log(formData.get("report"));

  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }
  const response = await apiFetch("/reports/", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();

    console.log(error);

    throw new Error(JSON.stringify(error));
  }

  return response.json();
}

export async function downloadPdf(id: string) {
  const response = await apiFetch(`/reports/${id}/pdf`);

  if (!response.ok) {
    throw new Error("No se pudo descargar el PDF");
  }

  return response.blob();
}

export async function approveReport(id: string): Promise<void> {
  const response = await apiFetch(`/reports/${id}/approve`, {
    method: "PUT",
  });

  if (!response.ok) {
    throw new Error("No se pudo aprobar el reporte");
  }
}
