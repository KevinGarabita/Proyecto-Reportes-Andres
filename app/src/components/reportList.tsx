import { useEffect, useState } from "react";
import { ReportStatus } from "../types/reportStatus";
import OrderCard from "./OrderCard";
import type { ReportSummary } from "../types/report";
import type { ReportActionType } from "../types/reportAction";
import { getReports } from "../services/reportService";

function ReportList() {
  const [reports, setReports] = useState<ReportSummary[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await getReports();
        console.log(data);
        setReports(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReports();
  }, []);

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
