import type { FieldOption, FieldType } from "../../types/fields";

type EditableFieldProps = {
  label: string;

  value: string | number | null;

  editable: boolean;

  type?: FieldType;

  options?: FieldOption[];

  placeholder?: string;

  onChange?: (value: string) => void;
};

function EditableField({
  label,

  value,

  editable,

  type = "text",

  options = [],

  placeholder,

  onChange,
}: EditableFieldProps) {
  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            className="form-control"
            rows={3}
            value={value ?? ""}
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
          />
        );

      case "select":
        return (
          <select
            className="form-select"
            value={value ?? ""}
            onChange={(e) => onChange?.(e.target.value)}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "number":
        return (
          <input
            className="form-control"
            type="number"
            value={value ?? ""}
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
          />
        );

      case "date":
        return (
          <input
            className="form-control"
            type="date"
            value={value ?? ""}
            onChange={(e) => onChange?.(e.target.value)}
          />
        );

      default:
        return (
          <input
            className="form-control"
            type="text"
            value={value ?? ""}
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
          />
        );
    }
  };

  return (
    <div>
      <div
        className="
        text-uppercase
        text-secondary
        fw-semibold
        small
        mb-2
      "
      >
        {label}
      </div>

      {editable ? (
        renderInput()
      ) : (
        <div
          className="fs-3"
          style={{
            minHeight: "38px",
          }}
        >
          {value || "-"}
        </div>
      )}
    </div>
  );
}

export default EditableField;
