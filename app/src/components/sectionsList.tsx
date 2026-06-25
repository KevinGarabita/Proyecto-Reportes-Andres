import { Component, useState } from "react";
import SectionCard from "./sectionCard";
import GeneralSection from "./generalSection";
import ClientSection from "./clientSection";
import GeolocationSection from "./geolocationSection";
import InstallationSection from "./installationSection";
import AssignedPersonnelSection from "./assignedPersonnelSection";
import type { CreateReportRequest } from "../types/report";

type SectionsListProps = {
  report: CreateReportRequest;
  setReport: React.Dispatch<React.SetStateAction<CreateReportRequest>>;
};

function SectionsList({ report, setReport }: SectionsListProps) {
  const sections = [
    {
      title: "Información General",
      completed: false,
      component: <GeneralSection report={report} setReport={setReport} />,
    },
    {
      title: "Cliente",
      completed: false,
      component: (
        <ClientSection report={report} setReport={setReport}></ClientSection>
      ),
    },
    {
      title: "Instalación",
      completed: false,
      component: (
        <InstallationSection
          report={report}
          setReport={setReport}
        ></InstallationSection>
      ),
    },
    {
      title: "Georeferencias",
      completed: false,
      component: (
        <GeolocationSection
          report={report}
          setReport={setReport}
        ></GeolocationSection>
      ),
    },
    {
      title: "Personal Asigando",
      completed: false,
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
    <div className="container">
      <div className="row gy-3">
        {sections.map((section, index) => (
          <div className="col-12" key={section.title}>
            {" "}
            <SectionCard
              title={section.title}
              isOpen={openSectionIndex === index}
              isCompleted={section.completed}
              ontToggle={() => setOpenSectionIndex(index)}
              onNext={() => {
                if (index < sections.length - 1) {
                  setOpenSectionIndex(index + 1);
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
