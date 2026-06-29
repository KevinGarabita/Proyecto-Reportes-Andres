import type { ReportDetails } from "./report";
import type { FieldOption, FieldType } from "./fields";

export type FieldConfig = {
  label: string;

  getValue: (report: ReportDetails) => string | number | null;

  setValue?: (value: string, report: ReportDetails) => void;

  type?: FieldType;

  col?: number;

  options?: FieldOption[];
};
