import ReportList from "../components/reportList";
import HomeHeader from "../components/homeHeader";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/pageHeader";
import FloatingButton from "../components/floatingButton";
import { useAuth } from "../hooks/useAuth";
function HomePage() {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (!user) {
    return null;
  }
  return (
    <div>
      <PageHeader>
        <HomeHeader technicianName={user.name}></HomeHeader>
      </PageHeader>
      <ReportList></ReportList>
      <FloatingButton
        onClick={() => navigate("/reports/create")}
      ></FloatingButton>
    </div>
  );
}

export default HomePage;
