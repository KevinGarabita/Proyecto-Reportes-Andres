import ReportList from "../components/reportList";
import HomeHeader from "../components/homeHeader";
function Home() {
  return (
    <div>
      <HomeHeader technicianName="Juan"></HomeHeader>
      <ReportList></ReportList>
    </div>
  );
}

export default Home;
