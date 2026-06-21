import { useState } from "react";
import { ReportStatus } from "../types/reportStatus";
import OrderCard from "./orderCard";

const reports = [
  {
    id: 1,
    folio_pisa: "PSA-2024-001",
    client: "Telmex",
    date: new Date(),
    status: ReportStatus.Approved,
  },
  {
    id: 2,
    folio_pisa: "PSA-2024-001",
    client: "Telmex",
    date: new Date(),
    status: ReportStatus.Pending,
  },
  {
    id: 3,
    folio_pisa: "PSA-2024-001",
    client: "Telmex",
    date: new Date(),
    status: ReportStatus.Review,
  },
  {
    id: 4,
    folio_pisa: "PSA-2024-001",
    client: "Telmex",
    date: new Date(),
    status: ReportStatus.Approved,
  },
];

function ReportList() {
  return (
    <div className="container gy-3">
      <div className="row gy-4">
        {reports.map((report) => (
          <div key={report.id} className="col-12">
            <OrderCard
              folio_pisa={report.folio_pisa}
              client={report.client}
              date={report.date}
              status={report.status}
            ></OrderCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReportList;
