import { useState } from "react";
import { ReportStatus } from "../types/reportStatus";
import OrderCard from "./orderCard";
import type { Report } from "../types/report";
import type { ReportActionType } from "../types/reportAction";

const reports: Report[] = [
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
  const handleAction = (type: ReportActionType, reportId: number) => {
    switch (type) {
      case "capture":
        //Logica para ir al formulario
        break;
      case "delete":
        //logica para borrar la orden en la base de datos y en la UI
        break;
      case "review":
        //no hay logica, el button siempre estara desactivado
        break;
      case "download":
        //logica para descargar el pdf
        break;
    }
  };

  return (
    <div className="container gy-3">
      <div className="row gy-4">
        {reports.map((report) => (
          <div key={report.id} className="col-12">
            <OrderCard report={report} onAction={handleAction}></OrderCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReportList;
