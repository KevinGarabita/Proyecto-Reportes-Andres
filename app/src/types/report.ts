import type { Coordinate } from "./coordinate";
import type { ReportStatusType } from "./reportStatus";
import type { UserReference } from "./user";

type ReportBase = {
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

  georeferencia_casa: Coordinate;
  georeferencia_terminal: Coordinate;

  alfanumerico: string;

  supervisor_id: string | null;

  fecha_liquidacion: string | null;

  estado: ReportStatusType;
};

export type ReportSummary = {
  id: string;
  folio_pisa: string;
  nombre_cliente: string;
  estado: ReportStatusType;
  fecha_liquidacion: string | null;

  tecnico: UserReference;
  supervisor: UserReference | null;
};

export type CreateReportRequest = ReportBase;

export type ReportDetails = ReportBase & {
  id: string;

  tecnico: UserReference;
  supervisor: UserReference | null;

  tecnico_id: string;

  created_at: string;
  updated_at: string;

  pdf_storage_path: string | null;
};

export type ReportStats = {
  pending: number;
  approved: number;
  total: number;
  period_days: number;
};

export type ReportsResponse = {
  stats: ReportStats | null;
  reports: ReportSummary[];
};
