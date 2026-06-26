import { useEffect, useState } from "react";
import PageHeader from "../components/pageHeader";
import { useParams } from "react-router-dom";
import {
  createReport,
  getReport,
  updateReport,
} from "../services/reportService";
import SectionsList from "../components/sectionsList";
import type { CreateReportRequest } from "../types/report";
import { ReportStatus } from "../types/reportStatus";
import BottomActionBar from "../components/bottomActionBar";
import { isReportCompleted } from "../utils/reportValidation";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function CreateReportPage() {
  const navigate = useNavigate();
  const { id } = useParams();
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

    georeferencia_casa: "",
    georeferencia_terminal: "",
    alfanumerico: "",

    supervisor_id: null,
    tecnico_id: null,

    fecha_liquidacion: null,

    estado: "DRAFT",
  });
  useEffect(() => {
    console.log("create");
    if (!id) return;
    const fetchReport = async () => {
      try {
        const data = await getReport(id);
        setReport(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReport();
  }, [id]);

  const handleSave = async () => {
    const data = {
      ...report,
      estado: ReportStatus.DRAFT,
    };
    try {
      if (id) {
        await updateReport(id, data);
      } else {
        await createReport(data);
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
        await updateReport(id, data);
      } else {
        await createReport(data);
      }

      await Swal.fire({
        icon: "success",
        title: "Reporte enviado",
        text: "El reporte fue enviado correctamente a revisión.",
        confirmButtonText: "Aceptar",
      });

      navigate("/");
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo enviar el reporte.",
      });
    }
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
                  {report ? `Folio Pisa ${report.folio_pisa}` : "\u00A0"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageHeader>
      <SectionsList report={report} setReport={setReport}></SectionsList>
      <BottomActionBar
        onSave={handleSave}
        onSubmit={handleSubmit}
        canSubmit={isReportCompleted(report)}
      ></BottomActionBar>
    </div>
  );
}

export default CreateReportPage;
