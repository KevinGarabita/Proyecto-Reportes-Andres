import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import PageHeader from "../components/pageHeader";
import SectionsList from "../components/sectionsList";
import BottomActionBar from "../components/bottomActionBar";

import {
  createReport,
  getReport,
  updateReport,
} from "../services/reportService";
import type { EvidenceFile, EvidenceKey } from "../types/evidence";
import type { CreateReportRequest } from "../types/report";
import { ReportStatus } from "../types/reportStatus";
import { isReportCompleted } from "../utils/reportValidation";
import EvidenceList from "../components/evidencesList";

function CreateReportPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [loading, setLoading] = useState(!!id);

  const [step, setStep] = useState<"form" | "evidences">("form");
  const [evidences, setEvidences] = useState<
    Partial<Record<EvidenceKey, EvidenceFile>>
  >({});
  const [report, setReport] = useState<CreateReportRequest>({
    cope: "",
    expediente_pic: "",
    folio_pisa: "",
    folio_plex: "",
    tipo_tarea: "",
    telefono_cliente: "",
    nombre_cliente: "",

    tecnologia: null,

    distrito: "",
    terminal: "",
    par: "",
    metraje: null,

    tipo_os: null,

    georeferencia_casa: {
      latitude: null,
      longitude: null,
    },
    georeferencia_terminal: {
      latitude: null,
      longitude: null,
    },
    alfanumerico: "",

    supervisor_id: null,

    fecha_liquidacion: null,

    estado: ReportStatus.DRAFT,
  });

  const canContinue = isReportCompleted(report);
  const hasAllEvidences = Object.keys(evidences).length === 8;

  const canSubmit = canContinue && hasAllEvidences;

  useEffect(() => {
    if (!id) return;

    const fetchReport = async () => {
      try {
        const data = await getReport(id);
        setReport(data);
        console.log(data);
      } catch (error) {
        console.error(error);

        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo cargar el reporte.",
        });

        navigate("/home", { replace: true });
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, [id, navigate]);

  const handleSave = async () => {
    const data = {
      ...report,
      estado: ReportStatus.DRAFT,
    };

    try {
      if (id) {
        await updateReport(id, data, {});
      } else {
        const createdReport = await createReport(data, {});

        navigate(`/reports/${createdReport.id}`, {
          replace: true,
        });
      }

      await Swal.fire({
        icon: "success",
        title: "Borrador guardado",
        text: "El reporte se guardó correctamente.",
        timer: 1800,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo guardar el borrador.",
      });
    }
  };

  const handleSubmit = async () => {
    if (!isReportCompleted(report)) {
      await Swal.fire({
        icon: "warning",
        title: "Información incompleta",
        text: "Debes completar todas las secciones antes de enviar el reporte.",
      });

      return;
    }

    const data = {
      ...report,
      estado: ReportStatus.REVIEW,
    };

    try {
      if (id) {
        await updateReport(id, data, {});
      } else {
        await createReport(data, evidences);
      }

      await Swal.fire({
        icon: "success",
        title: "Reporte enviado",
        text: "El reporte fue enviado correctamente a revisión.",
        confirmButtonText: "Aceptar",
      });

      navigate("/home", { replace: true });
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo enviar el reporte.",
      });
    }
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" role="status" />
      </div>
    );
  }

  const handleContinue = () => {
    setStep("evidences");
  };
  return (
    <div>
      <PageHeader>
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center gap-3">
              <div className="logo-circle">📶</div>

              <div>
                <h4 className="fw-bold text-white mb-1">
                  Captura de información
                </h4>

                <p
                  className="text-secondary mb-0"
                  style={{ minHeight: "24px" }}
                >
                  {report.folio_pisa
                    ? `Folio Pisa ${report.folio_pisa}`
                    : "\u00A0"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageHeader>
      {step === "form" ? (
        <>
          <SectionsList report={report} setReport={setReport} />

          <BottomActionBar
            onSave={handleSave}
            onSubmit={handleContinue}
            canSubmit={canContinue}
            submitText="Continuar"
          />
        </>
      ) : (
        <>
          <EvidenceList evidences={evidences} setEvidences={setEvidences} />

          <BottomActionBar
            onSubmit={handleSubmit}
            canSubmit={canSubmit}
            submitText="Enviar a revisión"
          />
        </>
      )}
    </div>
  );
}

export default CreateReportPage;
