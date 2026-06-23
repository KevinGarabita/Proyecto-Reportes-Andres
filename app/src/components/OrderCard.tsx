import type { ReportSummary } from "../types/report";
import { ReportAction, type ReportActionType } from "../types/reportAction";
import { ReportStatus, ReportStatusLabel } from "../types/reportStatus";

type ReportCardProps = Readonly<{
  report: ReportSummary;
  onAction: (action: ReportActionType, reportId: number) => void;
}>;

const statusConfig = {
  [ReportStatus.DRAFT]: {
    border: "border-warning",
    badge: "text-bg-warning",
    actions: [
      {
        type: ReportAction.Capture,
        text: "Continuar Captura",
        className: "btn btn-warning text-white",
      },
      {
        type: ReportAction.Delete,
        text: "Eliminar Reporte",
        className: "btn btn-outline-danger",
      },
    ],
  },
  [ReportStatus.REVIEW]: {
    border: "border-primary",
    badge: "text-bg-primary",
    actions: [
      {
        type: ReportAction.Review,
        text: "En Revisión",
        className: "btn btn-outline-primary",
      },
    ],
  },
  [ReportStatus.APPROVED]: {
    border: "border-success",
    badge: "text-bg-success",
    actions: [
      {
        type: ReportAction.Download,
        text: "Descargar PDF",
        className: "btn btn-success",
      },
    ],
  },
};

function OrderCard({ report, onAction }: ReportCardProps) {
  const config = statusConfig[report.estado];
  return (
    <div className={`card rounded-4 p-3 border-2 ${config.border}`}>
      {/*HEADER*/}
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h6 className="card-subtitle mb-2 text-body-secondary text-uppercase">
            Folio pisa
          </h6>

          <h3 className="card-title mb-0 text-uppercase">
            {" "}
            {report.folio_pisa}
          </h3>
        </div>
        <span className={`badge rounded-pill ${config.badge}`}>
          {" "}
          {ReportStatusLabel[report.estado]}
        </span>
      </div>

      {/*INFO*/}

      <div className="d-flex justify-content-between align-items-start rounded-5 bg-light p-4 mt-3">
        <div>
          <h3 className="card-title mb-3">{report.nombre_cliente}</h3>
          <h5 className="card-subtitle text-body-secondary mb-0">
            {new Date(report.fecha_liquidacion).toLocaleDateString("es-MX")}
          </h5>
        </div>
      </div>

      {/*BUTTONS*/}

      <div className="container mt-3">
        <div className="row ">
          {config.actions.map((action) => (
            <div
              key={action.type}
              className={`col-${config.actions.length === 1 ? 12 : 6}`}
            >
              <button
                className={`${action.className} w-100 py-3 rounded-5 fw-semibold fs-4`}
                onClick={() => onAction(action.type, report.id)}
                disabled={action.type === ReportAction.Review}
              >
                {action.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
