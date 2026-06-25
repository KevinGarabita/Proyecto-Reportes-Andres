import type { CreateReportRequest } from "../types/report";

type SectionProps = {
  report: CreateReportRequest;
  setReport: React.Dispatch<React.SetStateAction<CreateReportRequest>>;
};

function InstallationSection({ report, setReport }: SectionProps) {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">Tecnología</label>

        <select
          className="form-select"
          value={report.tecnologia}
          onChange={(e) =>
            setReport({
              ...report,
              tecnologia: e.target.value,
            })
          }
        >
          <option value="">Seleccionar...</option>
          <option value="FIBER">Fibra</option>
          <option value="COPPER">Cobre</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Distrito</label>

        <input
          className="form-control"
          value={report.distrito}
          onChange={(e) =>
            setReport({
              ...report,
              distrito: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Terminal</label>

        <input
          className="form-control"
          value={report.terminal}
          onChange={(e) =>
            setReport({
              ...report,
              terminal: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Par</label>

        <input
          className="form-control"
          value={report.par}
          onChange={(e) =>
            setReport({
              ...report,
              par: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Metraje</label>

        <input
          type="number"
          className="form-control"
          value={report.metraje}
          onChange={(e) =>
            setReport({
              ...report,
              metraje: Number(e.target.value),
            })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Tipo de OS</label>

        <select
          className="form-select"
          value={report.tipo_os}
          onChange={(e) =>
            setReport({
              ...report,
              tipo_os: e.target.value,
            })
          }
        >
          <option value="">Seleccionar...</option>
          <option value="AERIAL">Aérea</option>
          <option value="UNDERGROUND">Subterránea</option>
        </select>
      </div>

      <div>
        <label className="form-label">Alfanumérico (ONT)</label>

        <input
          className="form-control"
          value={report.alfanumerico}
          onChange={(e) =>
            setReport({
              ...report,
              alfanumerico: e.target.value,
            })
          }
        />
      </div>
    </>
  );
}

export default InstallationSection;
