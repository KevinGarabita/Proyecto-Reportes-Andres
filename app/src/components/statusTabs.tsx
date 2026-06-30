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
      <div className="row gx-5 mt-4">
        <div className="col-4">
          <button
            className={`btn ${
              status === "DRAFT" ? "btn-primary" : "btn-outline-primary"
            } w-100`}
            onClick={() => onChange("DRAFT")}
          >
            Pendientes ({stats?.draft ?? 0})
          </button>
        </div>

        <div className="col-4">
          <button
            className={`btn ${
              status === "REVIEW" ? "btn-primary" : "btn-outline-primary"
            } w-100`}
            onClick={() => onChange("REVIEW")}
          >
            En revisión ({stats?.review ?? 0})
          </button>
        </div>

        <div className="col-4">
          <button
            className={`btn ${
              status === "APPROVED" ? "btn-primary" : "btn-outline-primary"
            } w-100`}
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
