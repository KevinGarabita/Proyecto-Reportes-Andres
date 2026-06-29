import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import DashboardNav from "../components/dashboardNav";
import ReportDetailsSection from "../components/reportDetailsSection";

import type { ReportDetails } from "../types/report";
import { getReport } from "../services/reportService";

function ReportPage() {
  const { id } = useParams();

  const [report, setReport] = useState<ReportDetails | null>(null);

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    const fetchReport = async () => {
      if (!id) return;

      try {
        const data = await getReport(id);

        setReport(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReport();
  }, [id]);

  if (!report) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <DashboardNav />

      <div className="container-fluid py-3 border-bottom bg-white">
        <div className="row align-items-center">
          <div className="col">
            <Link
              to="/dashboard"
              className="btn btn-outline-secondary rounded-pill px-4"
            >
              ← Regresar
            </Link>
          </div>

          <div className="col-auto">
            <button
              className="btn btn-outline-primary rounded-pill px-4"
              onClick={() => setEditable((prev) => !prev)}
            >
              {editable ? "Cancelar edición" : "Habilitar edición"}
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid py-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <ReportDetailsSection report={report} editable={editable} />
          </div>

          <div className="col-lg-4">{/* Panel de evidencias */}</div>
        </div>
      </div>
    </>
  );
}

export default ReportPage;
