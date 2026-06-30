import type { ReportStats } from "../types/report";
import type { ReportStatusType } from "../types/reportStatus";

type Props = {
  status: ReportStatusType;

  stats: ReportStats | null;

  onChange: (status: ReportStatusType) => void;
};

function StatusTabs({ status, stats, onChange }: Props) {
  return (
    <div className="container-fluid">
      <div className="row g-4 gy-md-0 mt-4">
        <div className="col-md-4">
          <button
            className={`btn ${
              status === "DRAFT" ? "btn-warning" : "btn-outline-warning"
            } w-100 h-100 text-break`}
            onClick={() => onChange("DRAFT")}
          >
            Pendientes ({stats?.draft ?? 0})
          </button>
        </div>

        <div className="col-md-4">
          <button
            className={`btn ${
              status === "REVIEW" ? "btn-primary" : "btn-outline-primary"
            } w-100 h-100 text-break`}
            onClick={() => onChange("REVIEW")}
          >
            En revisión ({stats?.review ?? 0})
          </button>
        </div>

        <div className="col-md-4">
          <button
            className={`btn ${
              status === "APPROVED" ? "btn-success" : "btn-outline-success"
            } w-100 h-100 text-break`}
            onClick={() => onChange("APPROVED")}
          >
            Aprobados ({stats?.approved ?? 0})
          </button>
        </div>
      </div>
    </div>
  );
}

export default StatusTabs;
