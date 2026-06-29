import { BsCpu, BsHash, BsPeople, BsPerson } from "react-icons/bs";

import ReportSection from "./report/reportSection";
import ReportFields from "./report/reportFields";

import {
  customerFields,
  identificationFields,
  personnelFields,
  technicalFields,
} from "../constants/reportSections";

import type { ReportDetails as ReportDetailsType } from "../types/report";

type ReportDetailsSectionProps = {
  report: ReportDetailsType;

  editable: boolean;
};

function ReportDetailsSection({ report, editable }: ReportDetailsSectionProps) {
  return (
    <>
      <ReportSection
        title="Identificación del expediente"
        icon={<BsHash size={20} />}
      >
        <ReportFields
          report={report}
          fields={identificationFields}
          editable={editable}
        />
      </ReportSection>

      <ReportSection title="Datos del cliente" icon={<BsPerson size={20} />}>
        <ReportFields
          report={report}
          fields={customerFields}
          editable={editable}
        />
      </ReportSection>

      <ReportSection title="Personal asignado" icon={<BsPeople size={20} />}>
        <ReportFields
          report={report}
          fields={personnelFields}
          editable={editable}
        />
      </ReportSection>

      <ReportSection title="Detalles técnicos" icon={<BsCpu size={20} />}>
        <ReportFields
          report={report}
          fields={technicalFields}
          editable={editable}
        />
      </ReportSection>
    </>
  );
}

export default ReportDetailsSection;
