export const ReportStatus = {
  DRAFT: "• Pendiente",
  REVIEW: "• En revisión",
  APPROVED: "• Aprobado",
} as const;

export type ReportStatusType = (typeof ReportStatus)[keyof typeof ReportStatus];
