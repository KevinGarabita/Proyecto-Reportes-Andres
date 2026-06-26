import type { CreateReportRequest } from "../types/report";

type SectionProps = {
  report: CreateReportRequest;
  setReport: React.Dispatch<React.SetStateAction<CreateReportRequest>>;
};
function ClientSection({ report, setReport }: SectionProps) {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">Nombre del cliente</label>
        <input
          className="form-control"
          value={report.nombre_cliente}
          onChange={(e) =>
            setReport({ ...report, nombre_cliente: e.target.value })
          }
        />
      </div>

      <div>
        <label className="form-label">Teléfono</label>
        <input
          type="tel"
          className="form-control"
          value={report.telefono_cliente}
          onChange={(e) =>
            setReport({ ...report, telefono_cliente: e.target.value })
          }
        />
      </div>
    </>
  );
}

export default ClientSection;
