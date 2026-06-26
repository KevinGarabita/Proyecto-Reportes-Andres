import type { ReportStatusType } from "./reportStatus";

export type ReportSummary = {
  id: string;
  folio_pisa: string;
  nombre_cliente: string;
  estado: ReportStatusType;
  fecha_liquidacion: string | null;
};

export type CreateReportRequest = {
  cope: string;
  expediente_pic: string;

  folio_pisa: string;
  folio_plex: string;

  tipo_tarea: string;

  telefono_cliente: string;
  nombre_cliente: string;

  tecnologia: string | null;

  distrito: string;
  terminal: string;

  par: string;
  metraje: number | null;

  tipo_os: string | null;

  georeferencia_casa: string;
  georeferencia_terminal: string;

  alfanumerico: string;

  supervisor_id: string | null;
  tecnico_id: string | null;

  fecha_liquidacion: string | null;

  estado: ReportStatusType;
};

export type ReportDetails = CreateReportRequest & {
  id: string;
};
