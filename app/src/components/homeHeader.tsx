import Header from "./header";
import SearchBar from "./searchBar";
import StatusTabs from "./statusTabs";
type HomeHeaderProps = {
  technicianName: string;
};

function HomeHeader({ technicianName }: HomeHeaderProps) {
  return (
    <div className="container-fluid bg-telefield mb-3 p-4 text-center">
      <Header></Header>
      <div className="mt-5">
        <h1 className="fw-bold text-white">Hola, {technicianName}</h1>
        <p className="text-secondary fs-4">
          Gestiona y da seguimiento a tus reportes
        </p>
      </div>

      <SearchBar></SearchBar>
      <StatusTabs></StatusTabs>
    </div>
  );
}

export default HomeHeader;
