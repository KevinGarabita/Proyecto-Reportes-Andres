import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import DashboardStats from "../components/dashboardStats";
import DashboardReportList from "../components/dashboardReportList";
import type { ReportsResponse } from "../types/report";
import { getReports } from "../services/reportService";

function ManagementPage() {
  const [open, setOpen] = useState(false);
  const { user, loading } = useAuth();

  const [reports, setReports] = useState<ReportsResponse>({
    stats: {
      pending: 0,
      approved: 0,
      total: 0,
      period_days: 30,
    },
    reports: [],
  });

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await getReports();
        setReports(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReports();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (!user) {
    return null;
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-telefield navbar-dark">
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            Telefield
          </a>

          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Dashboard
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center text-white">
              <div className="text-start">
                <div className="fw-bold">{user.name}</div>
                <small className="text-white-50">
                  {user.role.toLowerCase()}
                </small>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {reports.stats && <DashboardStats stats={reports.stats}></DashboardStats>}

      <DashboardReportList reports={reports.reports}></DashboardReportList>
    </>
  );
}

export default ManagementPage;
