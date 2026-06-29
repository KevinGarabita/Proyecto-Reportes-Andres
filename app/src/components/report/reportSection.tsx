import type { ReactNode } from "react";
import { BsChevronUp } from "react-icons/bs";

type ReportSectionProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
};

function ReportSection({ title, icon, children }: ReportSectionProps) {
  return (
    <div className="card shadow-sm border-0 rounded-4 mb-4">
      <div className="card-header bg-white py-3 rounded-top-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <span className="text-secondary">{icon}</span>

            <h4 className="fw-bold mb-0">{title}</h4>
          </div>

          <BsChevronUp className="text-secondary" />
        </div>
      </div>

      <div className="card-body py-4">{children}</div>
    </div>
  );
}

export default ReportSection;
