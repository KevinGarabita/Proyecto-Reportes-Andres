import type { CreateReportRequest } from "../types/report";

export function isGeneralCompleted(report: CreateReportRequest): boolean {
  return (
    report.cope.trim() !== "" &&
    report.expediente_pic.trim() !== "" &&
    report.folio_pisa.trim() !== "" &&
    report.folio_plex.trim() !== "" &&
    report.tipo_tarea.trim() !== "" &&
    Boolean(report.fecha_liquidacion)
  );
}

export function isClientCompleted(report: CreateReportRequest): boolean {
  return (
    report.nombre_cliente.trim() !== "" && report.telefono_cliente.trim() !== ""
  );
}

export function isInstallationCompleted(report: CreateReportRequest): boolean {
  return (
    Boolean(report.tecnologia) &&
    report.distrito.trim() !== "" &&
    report.terminal.trim() !== "" &&
    report.par.trim() !== "" &&
    report.metraje !== null &&
    report.metraje > 0 &&
    Boolean(report.tipo_os) &&
    report.alfanumerico.trim() !== ""
  );
}

export function isGeolocationCompleted(report: CreateReportRequest): boolean {
  return (
    report.georeferencia_casa.trim() !== "" &&
    report.georeferencia_terminal.trim() !== ""
  );
}

export function isAssignedPersonnelCompleted(
  report: CreateReportRequest,
): boolean {
  return Boolean(report.supervisor_id);
}

export function isReportCompleted(report: CreateReportRequest): boolean {
  return (
    isGeneralCompleted(report) &&
    isClientCompleted(report) &&
    isInstallationCompleted(report) &&
    isGeolocationCompleted(report) &&
    isAssignedPersonnelCompleted(report)
  );
}
