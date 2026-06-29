import { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import DashboardStats from "../components/dashboardStats";
import DashboardReportList from "../components/dashboardReportList";
import type { ReportsResponse } from "../types/report";
import { getReports } from "../services/reportService";
import DashboardNav from "../components/dashboardNav";

function DashboardPage() {
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
      <DashboardNav></DashboardNav>
      {reports.stats && <DashboardStats stats={reports.stats}></DashboardStats>}

      <DashboardReportList reports={reports.reports}></DashboardReportList>
    </>
  );
}

export default DashboardPage;
