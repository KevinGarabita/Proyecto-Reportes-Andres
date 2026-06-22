import type { ReportStatusType } from "./reportStatus";

export type Report = {
  id: string;
  folio_pisa: string;
  client: string;
  status: ReportStatusType;
  date: Date;
};
