import type { ReportStatusType } from "./reportStatus";

export type ReportSummary = {
  id: string;
  folio_pisa: string;
  nombre_cliente: string;
  estado: ReportStatusType;
  fecha_liquidacion: Date;
};

export type CreateReportRequest = {
  cope: string;
  expediente_pic: string;

  folio_pisa: string;
  folio_plex: string;

  tipo_tarea: string;

  telefono_cliente: string;
  nombre_cliente: string;

  tecnologia: string;

  distrito: string;
  terminal: string;

  par: string;
  metraje: number;

  tipo_os: string;

  georeferencia_casa: string;
  georeferencia_terminal: string;

  alfanumerico: string;

  supervisor_id: string;
  tecnico_id: string;

  fecha_liquidacion: string;

  estado: ReportStatusType;
};

export type ReportDetails = CreateReportRequest & {
  id: string;
};
