import { Link, useParams } from "react-router-dom";

import DashboardNav from "../components/dashboardNav";
import ReportDetailsSection from "../components/reportDetailsSection";

import { useReportEditor } from "../hooks/useReportEditor";

function ReportPage() {
  const { id } = useParams();

  const {
    draftReport,

    setDraftReport,

    canEdit,
    editable,

    saving,
    approving,

    hasChanges,
    isApproved,

    handleEnableEdit,
    handleCancelEdit,
    handleSave,
    handleApprove,
    savedMessage,
  } = useReportEditor({
    id,
  });

  if (!draftReport) return null;

  return (
    <>
      <DashboardNav />
      {savedMessage && (
        <div className="alert alert-success rounded-0 text-center mb-0">
          Reporte guardado correctamente.
        </div>
      )}

      <div className="container-fluid py-3 border-bottom bg-white">
        <div className="row align-items-center">
          <div className="col">
            <Link
              to="/dashboard"
              className={`btn btn-outline-secondary rounded-pill px-4 ${
                saving || approving ? "disabled" : ""
              }`}
            >
              ← Regresar
            </Link>
          </div>

          {!isApproved && (
            <div className="col-auto">
              <div className="d-flex gap-2">
                {editable && (
                  <button
                    className="btn btn-success rounded-pill px-4"
                    disabled={!hasChanges || saving || approving}
                    onClick={handleSave}
                  >
                    {saving ? "Guardando..." : "Guardar cambios"}
                  </button>
                )}

                <button
                  className={`btn rounded-pill px-4 ${
                    editable ? "btn-outline-danger" : "btn-outline-primary"
                  }`}
                  disabled={saving || approving}
                  onClick={editable ? handleCancelEdit : handleEnableEdit}
                >
                  {editable ? "Cancelar edición" : "Habilitar edición"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container-fluid py-4">
        <div className="row g-4">
          <div className="col-lg-8">
            <ReportDetailsSection
              report={draftReport}
              editable={canEdit}
              onChange={setDraftReport}
            />
          </div>

          <div className="col-lg-4">
            {/* Aquí irá el panel de evidencias */}
          </div>
        </div>

        {!isApproved && (
          <>
            <hr className="my-5" />

            <div className="text-center">
              <button
                className="btn btn-success btn-lg rounded-pill px-5"
                disabled={approving || saving}
                onClick={handleApprove}
              >
                {approving ? "Liquidando..." : "Liquidar reporte"}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default ReportPage;
