import { useEffect, useState } from "react";
import { ReportStatus } from "../types/reportStatus";
import OrderCard from "./orderCard";
import { supabase } from "../../lib/supabase";
import type { Report } from "../types/report";
import type { ReportActionType } from "../types/reportAction";

function ReportList() {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const fetchReports = async () => {
      const { data, error } = await supabase.from("reports").select("*");

      if (error) {
        console.error(error);
        return;
      }

      setReports(
        data.map((row) => ({
          id: row.id,
          folio_pisa: row.folio_pisa,
          client: row.nombre_cliente,
          date: new Date(row.fecha_liquidacion),
          status:
            row.estado == "DRAFT"
              ? ReportStatus.DRAFT
              : row.estado == "APPROVED"
                ? ReportStatus.APPROVED
                : ReportStatus.REVIEW,
        })),
      );
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
