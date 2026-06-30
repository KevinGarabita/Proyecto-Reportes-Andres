import type { ReportDetails } from "../../types/report";
import type { FieldConfig } from "../../types/reportFields";

import EditableField from "./editableField";

type Props = {
  fields: FieldConfig[];
  report: ReportDetails;
  editable: boolean;

  onChange: (report: ReportDetails) => void;
};

function getValue(obj: unknown, path: string): unknown {
  return path.split(".").reduce((acc, key) => {
    if (acc && typeof acc === "object") {
      return (acc as Record<string, unknown>)[key];
    }

    return undefined;
  }, obj);
}

function setValue(obj: Record<string, unknown>, path: string, value: unknown) {
  const keys = path.split(".");
  const last = keys.pop()!;

  let current = obj;

  for (const key of keys) {
    current[key] = {
      ...(current[key] as Record<string, unknown>),
    };

    current = current[key] as Record<string, unknown>;
  }

  current[last] = value;
}

function ReportFields({ fields, report, editable, onChange }: Props) {
  return (
    <div className="row g-4">
      {fields.map((field) => (
        <div key={field.key} className={`col-lg-${field.col ?? 6}`}>
          <EditableField
            label={field.label}
            value={getValue(report, field.key) as string | number | null}
            editable={editable && field.type !== "readonly"}
            type={field.type}
            options={field.options}
            onChange={(value) => {
              const updated = structuredClone(report);

              setValue(updated, field.key, value);

              onChange(updated);
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default ReportFields;
