import { useEffect, useState } from "react";
import OrderCard from "./orderCard";
import type { ReportSummary } from "../types/report";
import { ReportAction, type ReportActionType } from "../types/reportAction";
import { deleteReport, getReports } from "../services/reportService";
import { useNavigate } from "react-router-dom";

function ReportList() {
  const navigate = useNavigate();
  const [reports, setReports] = useState<ReportSummary[]>([]);

  const handleDelete = async (reportId: string) => {
    try {
      await deleteReport(reportId);

      setReports((current) =>
        current.filter((report) => report.id != reportId),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleCapture = (reportId: string) => navigate(`/reports/${reportId}`);

  useEffect(() => {
    console.log("report list");
    const fetchReports = async () => {
      try {
        const data = await getReports();
        setReports(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReports();
  }, []);

  const handleAction = (type: ReportActionType, reportId: string) => {
    switch (type) {
      case ReportAction.Capture:
        handleCapture(reportId);
        break;
      case ReportAction.Delete:
        handleDelete(reportId);
        break;
      case ReportAction.Review:
        //aqui no hace nada
        break;
      case ReportAction.Download:
        //logica para descargar el pdf
        break;
    }
  };

  return (
    <div className="container" style={{ paddingBottom: "120px" }}>
      <div className="row gy-5 py-1">
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
