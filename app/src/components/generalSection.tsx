import type { CreateReportRequest } from "../types/report";

type SectionProps = {
  report: CreateReportRequest;
  setReport: React.Dispatch<React.SetStateAction<CreateReportRequest>>;
};

function GeneralSection({ report, setReport }: SectionProps) {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">COPE</label>
        <input
          className="form-control"
          value={report.cope}
          onChange={(e) => setReport({ ...report, cope: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Expediente PIC</label>
        <input
          className="form-control"
          value={report.expediente_pic}
          onChange={(e) =>
            setReport({
              ...report,
              expediente_pic: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Folio Pisa</label>
        <input
          className="form-control"
          value={report.folio_pisa}
          onChange={(e) =>
            setReport({
              ...report,
              folio_pisa: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Folio Plex</label>
        <input
          className="form-control"
          value={report.folio_plex}
          onChange={(e) =>
            setReport({
              ...report,
              folio_plex: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Tipo de tarea</label>
        <input
          className="form-control"
          value={report.tipo_tarea}
          onChange={(e) =>
            setReport({
              ...report,
              tipo_tarea: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="form-label">Fecha de liquidación</label>
        <input
          type="date"
          className="form-control"
          value={report.fecha_liquidacion}
          onChange={(e) =>
            setReport({
              ...report,
              fecha_liquidacion: e.target.value,
            })
          }
        />
      </div>
    </>
  );
}

export default GeneralSection;
