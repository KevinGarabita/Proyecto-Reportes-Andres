import { ReportStatus, type ReportStatusType } from "../types/reportStatus";
type ReportCardProps = Readonly<{
  folio_pisa: string;
  client: string;
  status: ReportStatusType;
  date: Date;
  onAction: (action: string, reportId: number) => void;
}>;

const statusConfig = {
  [ReportStatus.Pending]: {
    border: "border-warning",
    badge: "text-bg-warning",
    actions: [
      {
        type: "capture",
        text: "Continuar Captura",
        className: "btn btn-warning text-white",
      },
      {
        type: "delete",
        text: "Eliminar Reporte",
        className: "btn btn-outline-danger",
      },
    ],
  },
  [ReportStatus.Review]: {
    border: "border-primary",
    badge: "text-bg-primary",
    actions: [
      {
        type: "review",
        text: "En Revisión",
        className: "btn btn-outline-primary",
      },
    ],
  },
  [ReportStatus.Approved]: {
    border: "border-success",
    badge: "text-bg-success",
    actions: [
      {
        type: "download",
        text: "Descargar PDF",
        className: "btn btn-success",
      },
    ],
  },
};

function OrderCard({
  folio_pisa,
  client,
  status,
  date,
  onAction,
}: ReportCardProps) {
  const config = statusConfig[status];
  return (
    <div className={`card rounded-4 p-3 border-2 ${config.border}`}>
      {/*HEADER*/}
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <h6 className="card-subtitle mb-2 text-body-secondary text-uppercase">
            Folio pisa
          </h6>

          <h3 className="card-title mb-0 text-uppercase"> {folio_pisa}</h3>
        </div>
        <span className={`badge rounded-pill ${config.badge}`}> {status}</span>
      </div>

      {/*INFO*/}

      <div className="d-flex justify-content-between align-items-start rounded-5 bg-light p-4 mt-3">
        <div>
          <h3 className="card-title mb-3">{client}</h3>
          <h5 className="card-subtitle text-body-secondary mb-0">
            {date.toLocaleDateString("es-MX")}
          </h5>
        </div>
      </div>

      {/*BUTTONS*/}

      <div className="container mt-3">
        <div className="row ">
          {config.actions.map((action) => (
            <div
              key={action.text}
              className={`col-${config.actions.length === 1 ? 12 : 6}`}
            >
              <button
                className={`${action.className} w-100 py-3 rounded-5 fw-semibold fs-4`}
                onClick={() => onAction(action.type)}
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
