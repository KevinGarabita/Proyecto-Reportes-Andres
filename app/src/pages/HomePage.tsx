import { useNavigate } from "react-router-dom";

import FloatingButton from "../components/floatingButton";
import HomeHeader from "../components/homeHeader";
import PageHeader from "../components/pageHeader";
import ReportList from "../components/reportList";

import { useAuth } from "../hooks/useAuth";
import { useReports } from "../hooks/useReports";

function HomePage() {
  const navigate = useNavigate();

  const { user, loading } = useAuth();

  const {
    reports,
    stats,
    loading: loadingReports,
    filters,
    setStatus,
    deleteReport,
  } = useReports();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <PageHeader>
        <HomeHeader
          technicianName={user.name}
          status={filters.status ?? "DRAFT"}
          stats={stats}
          onStatusChange={setStatus}
        />
      </PageHeader>

      <ReportList
        reports={reports}
        loading={loadingReports}
        onDelete={deleteReport}
      />

      <FloatingButton onClick={() => navigate("/reports/create")} />
    </>
  );
}

export default HomePage;
