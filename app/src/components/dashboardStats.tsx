import StatsCard from "./statsCard";

import type { ReportStats } from "../types/report";

type DashboardStats = {
  stats: ReportStats;
};
function DashboardStats({ stats }: DashboardStats) {
  return (
    <div className="container-fluid py-4 px-5">
      <div className="row">
        <div className="col">
          <h3 className="fw-bold">Panel de validación</h3>
          <h4 className="text-black-50">
            Revise solicitudes y valide las órdenes
          </h4>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4">
          {" "}
          <StatsCard
            title="solicitudes pendientes"
            number={stats.pending}
          ></StatsCard>
        </div>
        <div className="col-4">
          {" "}
          <StatsCard
            title="órdenes liquidadas"
            number={stats.approved}
          ></StatsCard>
        </div>
        <div className="col-4">
          {" "}
          <StatsCard title="Total" number={stats.total}></StatsCard>
        </div>
      </div>
      <div className="row gy-4 mt-2"></div>
    </div>
  );
}

export default DashboardStats;
