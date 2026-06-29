import type { ReportDetails } from "../../types/report";
import type { FieldConfig } from "../../types/reportFields";

import EditableField from "./editableField";

type Props = {
  fields: FieldConfig[];
  report: ReportDetails;
  editable: boolean;
};

function ReportFields({ fields, report, editable }: Props) {
  return (
    <div className="row g-4">
      {fields.map((field) => (
        <div key={field.label} className={`col-lg-${field.col ?? 6}`}>
          <EditableField
            label={field.label}
            value={field.getValue(report)}
            editable={editable && field.type !== "readonly"}
            type={field.type}
            options={field.options}
          />
        </div>
      ))}
    </div>
  );
}

export default ReportFields;
