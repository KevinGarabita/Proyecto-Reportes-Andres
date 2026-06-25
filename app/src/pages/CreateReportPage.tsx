import { useEffect, useState } from "react";
import PageHeader from "../components/pageHeader";
import { useParams } from "react-router-dom";
import { getReport } from "../services/reportService";
import type { ReportDetails } from "../types/report";
import SectionsList from "../components/sectionsList";

function CreateReportPage() {
  const { id } = useParams();
  const [report, setReport] = useState<ReportDetails | null>(null);

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
      <SectionsList></SectionsList>
    </div>
  );
}

export default CreateReportPage;
