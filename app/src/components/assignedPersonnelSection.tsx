import { useEffect, useState } from "react";
import { getSupervisors } from "../services/userService";
import type { user } from "../types/user";
import type { CreateReportRequest } from "../types/report";

type SectionProps = {
  report: CreateReportRequest;
  setReport: React.Dispatch<React.SetStateAction<CreateReportRequest>>;
};

function AssignedPersonnelSection({ report, setReport }: SectionProps) {
  const [supervisors, setSupervisors] = useState<user[]>([]);
  useEffect(() => {
    const fetchSupervisors = async () => {
      try {
        const data = await getSupervisors();
        setSupervisors(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSupervisors();
  }, []);
  return (
    <>
      <div className="mb-4">
        <label className="form-label">Supervisor</label>

        <select
          className="form-select"
          value={report.supervisor_id ?? ""}
          onChange={(e) =>
            setReport({
              ...report,
              supervisor_id: e.target.value,
            })
          }
        >
          <option>Seleccionar supervisor...</option>

          {supervisors.map((supervisor) => (
            <option key={supervisor.id} value={supervisor.id}>
              {supervisor.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="form-label">Técnico</label>

        <input
          className="form-control"
          value={report.tecnico_id ?? ""}
          onChange={(e) => setReport({ ...report, tecnico_id: e.target.value })}
        />
      </div>
    </>
  );
}

export default AssignedPersonnelSection;
