import ReportList from "../components/reportList";
import HomeHeader from "../components/homeHeader";
import FloatingButton from "../components/FloatingButton";
import { useNavigate } from "react-router-dom";
import PageHeader from "../components/pageHeader";
function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <PageHeader>
        <HomeHeader technicianName="Juan"></HomeHeader>
      </PageHeader>
      <ReportList></ReportList>
      <FloatingButton
        onClick={() => navigate("/reports/create")}
      ></FloatingButton>
    </div>
  );
}

export default HomePage;
