import { useNavigate } from "react-router-dom";

import OrderCard from "./orderCard";

import type { ReportSummary } from "../types/report";
import { ReportAction, type ReportActionType } from "../types/reportAction";

type Props = {
  reports: ReportSummary[];
  loading: boolean;

  onDelete: (reportId: string) => Promise<void>;
};

function ReportList({ reports, loading, onDelete }: Props) {
  const navigate = useNavigate();

  const handleCapture = (reportId: string) => navigate(`/reports/${reportId}`);

  const handleAction = (type: ReportActionType, reportId: string) => {
    switch (type) {
      case ReportAction.Capture:
        handleCapture(reportId);
        break;

      case ReportAction.Delete:
        onDelete(reportId);
        break;

      case ReportAction.Review:
        break;

      case ReportAction.Download:
        break;
    }
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" />
      </div>
    );
  }

  if (reports.length === 0) {
    return (
      <div className="container py-5 text-center text-secondary">
        No hay reportes.
      </div>
    );
  }

  return (
    <div className="container" style={{ paddingBottom: "120px" }}>
      <div className="row gy-5 py-1">
        {reports.map((report) => (
          <div key={report.id} className="col-12">
            <OrderCard report={report} onAction={handleAction} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReportList;
