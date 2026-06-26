import { useEffect, useState } from "react";
import { getSupervisors } from "../services/userService";
import type { User } from "../types/user";
import type { CreateReportRequest } from "../types/report";

type SectionProps = {
  report: CreateReportRequest;
  setReport: React.Dispatch<React.SetStateAction<CreateReportRequest>>;
};

function AssignedPersonnelSection({ report, setReport }: SectionProps) {
  const [supervisors, setSupervisors] = useState<User[]>([]);

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
        <option value="">Seleccionar supervisor...</option>

        {supervisors.map((supervisor) => (
          <option key={supervisor.id} value={supervisor.id}>
            {supervisor.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AssignedPersonnelSection;
