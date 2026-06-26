function StatusTabs() {
  return (
    <div className="row align-items-center mt-4">
      <div className="col-4">
        <button className="btn w-100 border-bottom border-3 border-info text-white">
          Pendientes
        </button>
      </div>
      <div className="col-4">
        <button className="btn w-100 text-white">En revisión</button>
      </div>
      <div className="col-4">
        <button className="btn w-100 text-white">Aprobados</button>
      </div>
    </div>
  );
}

export default StatusTabs;
