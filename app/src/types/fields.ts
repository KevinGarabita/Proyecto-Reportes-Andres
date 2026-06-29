export type FieldType =
  | "text"
  | "number"
  | "date"
  | "textarea"
  | "select"
  | "readonly";

export type FieldOption = {
  value: string;
  label: string;
};
