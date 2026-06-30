import SearchBar from "./searchBar";
import StatusTabs from "./statusTabs";
import uxmalLogo from "../assets/logo-uxmal.png";

import type { ReportStatusType } from "../types/reportStatus";
import type { ReportStats } from "../types/report";

type HomeHeaderProps = {
  technicianName: string;

  status: ReportStatusType;

  stats: ReportStats | null;

  onStatusChange: (status: ReportStatusType) => void;
};

function HomeHeader({
  technicianName,
  status,
  stats,
  onStatusChange,
}: HomeHeaderProps) {
  return (
    <div>
      <div className="position-relative py-4">
        {/* Logo */}
        <div className="d-none d-md-block position-absolute start-0 top-20 translate-middle-y ms-3">
          <img src={uxmalLogo} alt="Uxmal Technologies" className="logo" />
        </div>

        {/* Logo en móvil */}
        <div className="d-block d-md-none text-center mb-3">
          <img src={uxmalLogo} alt="Uxmal Technologies" className="logo" />
        </div>

        {/* Texto */}
        <div className="text-center">
          <h1 className="fw-bold text-white">Hola, {technicianName}</h1>

          <p className="text-secondary fs-4 mb-0">
            Gestiona y da seguimiento a tus reportes
          </p>
        </div>
      </div>

      <SearchBar value="" onChange={() => {}} />

      <StatusTabs status={status} stats={stats} onChange={onStatusChange} />
    </div>
  );
}

export default HomeHeader;
