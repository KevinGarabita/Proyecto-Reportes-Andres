import { useNavigate } from "react-router-dom";
import { BsFileEarmarkPdf } from "react-icons/bs";

import type { ReportSummary } from "../types/report";
import { ReportStatus } from "../types/reportStatus";
import { downloadPdf } from "../services/reportService";

type DashboardReportRowProps = {
  report: ReportSummary;
};

function DashboardReportRow({ report }: DashboardReportRowProps) {
  const navigate = useNavigate();

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      const blob = await downloadPdf(report.id);

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");

      a.href = url;
      a.download = `${report.folio_pisa}.pdf`;

      document.body.appendChild(a);

      a.click();

      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <tr
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/dashboard/report/${report.id}`)}
    >
      <td>{report.folio_pisa}</td>

      <td>{report.nombre_cliente}</td>

      <td>{report.tecnico.name}</td>

      <td>{report.fecha_liquidacion}</td>

      <td>
        {report.estado === ReportStatus.REVIEW ? (
          <span className="badge rounded-pill text-bg-warning">Pendiente</span>
        ) : (
          <span className="badge rounded-pill text-bg-success">Liquidada</span>
        )}
      </td>

      <td className="text-center border-start">
        {report.estado === ReportStatus.APPROVED ? (
          <BsFileEarmarkPdf
            size={22}
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={handleDownload}
          />
        ) : (
          "-"
        )}
      </td>
    </tr>
  );
}

export default DashboardReportRow;
