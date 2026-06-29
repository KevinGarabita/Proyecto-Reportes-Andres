import type { ReportSummary } from "../types/report";
import DashboardReportRow from "./dashboardReportRow";

type DashboardReportListProps = {
  reports: ReportSummary[];
};
function DashboardReportList({ reports }: DashboardReportListProps) {
  return (
    <div className="container-fluid">
      <div className="table-responsive shadow-sm rounded-4 border">
        <table className="table table-hover table-striped align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th>Folio Pisa</th>
              <th>Cliente</th>
              <th>Técnico</th>
              <th>Fecha</th>
              <th>Estado</th>
              <th className="text-center">PDF</th>
            </tr>
          </thead>

          <tbody>
            {reports.map((report) => (
              <DashboardReportRow key={report.id} report={report} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardReportList;
