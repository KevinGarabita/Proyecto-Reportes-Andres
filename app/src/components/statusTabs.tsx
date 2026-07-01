import type { ReportStats } from "../types/report";
import type { ReportStatusType } from "../types/reportStatus";

type Props = {
  status: ReportStatusType;
  stats: ReportStats | null;
  onChange: (status: ReportStatusType) => void;
};

function StatusTabs({ status, stats, onChange }: Props) {
  return (
    <div className="container-fluid p-0 mt-4 border-bottom border-secondary-subtle">
      <div className="row g-0">
        <div className="col">
          <button
            type="button"
            className={`status-tab ${status === "DRAFT" ? "active draft" : ""}`}
            onClick={() => onChange("DRAFT")}
          >
            <span>Pendientes</span>

            <span className="badge rounded-pill bg-warning-subtle text-warning ms-2">
              {stats?.draft ?? 0}
            </span>
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className={`status-tab ${
              status === "REVIEW" ? "active review" : ""
            }`}
            onClick={() => onChange("REVIEW")}
          >
            <span>En revisión</span>

            <span className="badge rounded-pill bg-primary-subtle text-primary ms-2">
              {stats?.review ?? 0}
            </span>
          </button>
        </div>

        <div className="col">
          <button
            type="button"
            className={`status-tab ${
              status === "APPROVED" ? "active approved" : ""
            }`}
            onClick={() => onChange("APPROVED")}
          >
            <span>Aprobados</span>

            <span className="badge rounded-pill bg-success-subtle text-success ms-2">
              {stats?.approved ?? 0}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default StatusTabs;
