import SectionCard from "./sectionCard";
import GeneralSection from "./generalSection";
import ClientSection from "./clientSection";
import GeolocationSection from "./geolocationSection";
import InstallationSection from "./installationSection";
import AssignedPersonnelSection from "./assignedPersonnelSection";
import type { CreateReportRequest } from "../types/report";
import { useState } from "react";
import {
  isAssignedPersonnelCompleted,
  isClientCompleted,
  isGeneralCompleted,
  isGeolocationCompleted,
  isInstallationCompleted,
} from "../utils/reportValidation";

type SectionsListProps = {
  report: CreateReportRequest;
  setReport: React.Dispatch<React.SetStateAction<CreateReportRequest>>;
};

function SectionsList({ report, setReport }: SectionsListProps) {
  const sections = [
    {
      title: "Información General",
      completed: isGeneralCompleted(report),
      component: <GeneralSection report={report} setReport={setReport} />,
    },
    {
      title: "Cliente",
      completed: isClientCompleted(report),
      component: (
        <ClientSection report={report} setReport={setReport}></ClientSection>
      ),
    },
    {
      title: "Instalación",
      completed: isInstallationCompleted(report),
      component: (
        <InstallationSection
          report={report}
          setReport={setReport}
        ></InstallationSection>
      ),
    },
    {
      title: "Georeferencias",
      completed: isGeolocationCompleted(report),
      component: (
        <GeolocationSection
          report={report}
          setReport={setReport}
        ></GeolocationSection>
      ),
    },
    {
      title: "Personal Asigando",
      completed: isAssignedPersonnelCompleted(report),
      component: (
        <AssignedPersonnelSection
          report={report}
          setReport={setReport}
        ></AssignedPersonnelSection>
      ),
    },
  ];

  const [openSectionIndex, setOpenSectionIndex] = useState(0);

  return (
    <div className="container" style={{ paddingBottom: "120px" }}>
      <div className="row gy-3">
        {sections.map((section, index) => (
          <div className="col-12" key={section.title} id={`section-${index}`}>
            {" "}
            <SectionCard
              title={section.title}
              isOpen={openSectionIndex === index}
              isCompleted={section.completed}
              ontToggle={() => setOpenSectionIndex(index)}
              onNext={() => {
                if (index < sections.length - 1) {
                  setOpenSectionIndex(index + 1);

                  setTimeout(() => {
                    document
                      .getElementById(`section-${index + 1}`)
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }, 150);
                }
              }}
            >
              {section.component}
            </SectionCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionsList;
