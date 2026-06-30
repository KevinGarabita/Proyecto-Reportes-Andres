import { BsCpu, BsGeoAlt, BsHash, BsPeople, BsPerson } from "react-icons/bs";

import ReportSection from "./report/reportSection";
import ReportFields from "./report/reportFields";
import GeoreferenceSection from "./georeferenceSection";

import {
  customerFields,
  identificationFields,
  personnelFields,
  technicalFields,
} from "../constants/reportSections";

import type { ReportDetails } from "../types/report";

type ReportDetailsSectionProps = {
  report: ReportDetails;
  editable: boolean;
  onChange: (report: ReportDetails) => void;
};

function ReportDetailsSection({
  report,
  editable,
  onChange,
}: ReportDetailsSectionProps) {
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
          onChange={onChange}
        />
      </ReportSection>

      <ReportSection title="Datos del cliente" icon={<BsPerson size={20} />}>
        <ReportFields
          report={report}
          fields={customerFields}
          editable={editable}
          onChange={onChange}
        />
      </ReportSection>

      <ReportSection title="Personal asignado" icon={<BsPeople size={20} />}>
        <ReportFields
          report={report}
          fields={personnelFields}
          editable={editable}
          onChange={onChange}
        />
      </ReportSection>

      <ReportSection title="Detalles técnicos" icon={<BsCpu size={20} />}>
        <ReportFields
          report={report}
          fields={technicalFields}
          editable={editable}
          onChange={onChange}
        />
      </ReportSection>

      <ReportSection title="Georreferencias" icon={<BsGeoAlt size={20} />}>
        <GeoreferenceSection
          report={report}
          editable={editable}
          onChange={onChange}
        />
      </ReportSection>
    </>
  );
}

export default ReportDetailsSection;
