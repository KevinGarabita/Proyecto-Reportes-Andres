import type { CreateReportRequest } from "../types/report";

type SectionProps = {
  report: CreateReportRequest;
  setReport: React.Dispatch<React.SetStateAction<CreateReportRequest>>;
};

function GeolocationSection({ report, setReport }: SectionProps) {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">Georreferencia Casa</label>

        <input
          className="form-control"
          placeholder="Ej. 18.6626540, -91.8101692"
          value={report.georeferencia_casa}
          onChange={(e) =>
            setReport({
              ...report,
              georeferencia_casa: e.target.value,
            })
          }
        />
      </div>

      <div>
        <label className="form-label">Georreferencia Terminal</label>

        <input
          className="form-control"
          placeholder="Ej. 18.6627086, -91.8098457"
          value={report.georeferencia_terminal}
          onChange={(e) =>
            setReport({
              ...report,
              georeferencia_terminal: e.target.value,
            })
          }
        />
      </div>
    </>
  );
}

export default GeolocationSection;
