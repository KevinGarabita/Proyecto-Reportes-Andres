import type { ReportStatusType } from "./reportStatus";

export type Report = {
  id: number;
  folio_pisa: string;
  client: string;
  date: Date;
  status: ReportStatusType;
};
