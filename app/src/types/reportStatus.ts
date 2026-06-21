export const ReportStatus = {
  Pending: "• Pendiente",
  Review: "• En revisión",
  Approved: "• Aprobado",
} as const;

export type ReportStatusType = (typeof ReportStatus)[keyof typeof ReportStatus];
