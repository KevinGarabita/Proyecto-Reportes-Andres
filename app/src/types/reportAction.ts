export const ReportAction = {
  Capture: "capture",
  Delete: "delete",
  Review: "review",
  Download: "download",
} as const;

export type ReportActionType = (typeof ReportAction)[keyof typeof ReportAction];
