import { useEffect, useState } from "react";

type Supervisor = { id: string; nombre: string };

type SectionProps = {
  report: CreateReportRequest;
  setReport: React.Dispatch<React.SetStateAction<CreateReportRequest>>;
};
function AssignedPersonnelSection({ report, setReport }: SectionProps) {
  const fetchSupervisors = async () => {};
  return (
    <>
      <div className="mb-4">
        <label className="form-label">Supervisor</label>

        <select className="form-select">
          <option>Seleccionar supervisor...</option>
        </select>
      </div>

      <div>
        <label className="form-label">Técnico</label>

        <input
          className="form-control"
          value="William Antonio Cajun López"
          readOnly
        />
      </div>
    </>
  );
}

export default AssignedPersonnelSection;
