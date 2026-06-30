import type { FieldOption, FieldType } from "./fields";

export type FieldConfig = {
  key: string;

  label: string;

  type?: FieldType;

  col?: number;

  options?: FieldOption[];
};
