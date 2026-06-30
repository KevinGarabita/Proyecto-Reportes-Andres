import type { CreateReportRequest } from "../types/report";

type SectionProps = {
  report: CreateReportRequest;
  setReport: React.Dispatch<React.SetStateAction<CreateReportRequest>>;
};

function GeolocationSection({ report, setReport }: SectionProps) {
  return (
    <>
      <h6 className="fw-bold mb-3">Ubicación de la casa</h6>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label className="form-label">Latitud</label>

          <input
            type="number"
            step="any"
            className="form-control"
            placeholder="Ej. 18.6626540"
            value={report.georeferencia_casa.latitude ?? ""}
            onChange={(e) =>
              setReport({
                ...report,
                georeferencia_casa: {
                  ...report.georeferencia_casa,
                  latitude:
                    e.target.value === "" ? null : Number(e.target.value),
                },
              })
            }
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Longitud</label>

          <input
            type="number"
            step="any"
            className="form-control"
            placeholder="Ej. -91.8101692"
            value={report.georeferencia_casa.longitude ?? ""}
            onChange={(e) =>
              setReport({
                ...report,
                georeferencia_casa: {
                  ...report.georeferencia_casa,
                  longitude:
                    e.target.value === "" ? null : Number(e.target.value),
                },
              })
            }
          />
        </div>
      </div>

      <h6 className="fw-bold mb-3">Ubicación de la terminal</h6>

      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Latitud</label>

          <input
            type="number"
            step="any"
            className="form-control"
            placeholder="Ej. 18.6627086"
            value={report.georeferencia_terminal.latitude ?? ""}
            onChange={(e) =>
              setReport({
                ...report,
                georeferencia_terminal: {
                  ...report.georeferencia_terminal,
                  latitude:
                    e.target.value === "" ? null : Number(e.target.value),
                },
              })
            }
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Longitud</label>

          <input
            type="number"
            step="any"
            className="form-control"
            placeholder="Ej. -91.8098457"
            value={report.georeferencia_terminal.longitude ?? ""}
            onChange={(e) =>
              setReport({
                ...report,
                georeferencia_terminal: {
                  ...report.georeferencia_terminal,
                  longitude:
                    e.target.value === "" ? null : Number(e.target.value),
                },
              })
            }
          />
        </div>
      </div>
    </>
  );
}

export default GeolocationSection;
