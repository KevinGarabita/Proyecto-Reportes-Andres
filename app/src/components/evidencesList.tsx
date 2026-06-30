import EvidenceCard from "./evidenceCard";
import { EVIDENCES } from "../constants/evidences";

import type { EvidenceFile, EvidenceKey } from "../types/evidence";

type Props = {
  evidences: Partial<Record<EvidenceKey, EvidenceFile>>;
  setEvidences: React.Dispatch<
    React.SetStateAction<Partial<Record<EvidenceKey, EvidenceFile>>>
  >;
};

function EvidenceList({ evidences, setEvidences }: Props) {
  return (
    <div className="container py-4 mb-5">
      {EVIDENCES.map((item) => (
        <EvidenceCard
          key={item.key}
          title={item.title}
          subtitle={item.subtitle}
          evidence={evidences[item.key] ?? null}
          onChange={(evidence) =>
            setEvidences((prev) => ({
              ...prev,
              [item.key]: evidence,
            }))
          }
        />
      ))}
    </div>
  );
}

export default EvidenceList;
