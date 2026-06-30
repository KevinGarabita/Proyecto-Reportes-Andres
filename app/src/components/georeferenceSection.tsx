import type { ReportDetails } from "../types/report";
import CoordinateCard from "./CoordinateCard";

type Props = {
  report: ReportDetails;
  editable: boolean;

  onChange: (report: ReportDetails) => void;
};

function GeoreferenceSection({ report, editable, onChange }: Props) {
  return (
    <div className="row g-4">
      <div className="col-lg-6">
        <CoordinateCard
          title="Casa del cliente"
          coordinate={report.georeferencia_casa}
          editable={editable}
          onChange={(coordinate) => {
            onChange({
              ...report,
              georeferencia_casa: coordinate,
            });
          }}
        />{" "}
      </div>
      <div className="col-lg-6">
        {" "}
        <CoordinateCard
          title="Terminal"
          coordinate={report.georeferencia_terminal}
          editable={editable}
          onChange={(coordinate) => {
            onChange({
              ...report,
              georeferencia_terminal: coordinate,
            });
          }}
        />
      </div>
    </div>
  );
}

export default GeoreferenceSection;
