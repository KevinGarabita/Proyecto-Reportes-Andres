export const ReportStatus = {
  DRAFT: "DRAFT",
  REVIEW: "REVIEW",
  APPROVED: "APPROVED",
} as const;

export type ReportStatusType = (typeof ReportStatus)[keyof typeof ReportStatus];

export const ReportStatusLabel = {
  DRAFT: "• Pendiente",
  REVIEW: "• En revisión",
  APPROVED: "• Aprobado",
} as const;
