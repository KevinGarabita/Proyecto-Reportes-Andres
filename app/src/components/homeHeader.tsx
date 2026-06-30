import Header from "./header";
import SearchBar from "./searchBar";
import StatusTabs from "./statusTabs";

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
      <Header />

      <div className="mt-5">
        <h1 className="fw-bold text-white">Hola, {technicianName}</h1>

        <p className="text-secondary fs-4">
          Gestiona y da seguimiento a tus reportes
        </p>
      </div>

      <SearchBar value="" onChange={() => {}} />

      <StatusTabs status={status} stats={stats} onChange={onStatusChange} />
    </div>
  );
}

export default HomeHeader;
