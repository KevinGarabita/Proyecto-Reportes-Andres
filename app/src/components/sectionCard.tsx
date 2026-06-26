type SectionCardProps = {
  title: string;
  isOpen: boolean;
  isCompleted: boolean;
  ontToggle: () => void;
  onNext?: () => void;
  children: React.ReactNode;
};

function SectionCard({
  title,
  isOpen,
  isCompleted,
  ontToggle,
  onNext,
  children,
}: SectionCardProps) {
  return (
    <div
      className={`card border-2 ${
        isCompleted ? "border-success" : "border-primary"
      }`}
    >
      <button
        className="card-header btn text-start d-flex justify-content-between align-items-center"
        onClick={ontToggle}
      >
        <div className="d-flex align-items-center gap-2">
          <span
            className={`fw-bold ${
              isCompleted ? "text-success" : "text-primary"
            }`}
          >
            {title}
          </span>

          {isCompleted && <span className="badge bg-success">Completado</span>}
        </div>

        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="card-body">
          {children}

          <button className="btn btn-primary w-100 mt-4" onClick={onNext}>
            Siguiente sección
          </button>
        </div>
      )}
    </div>
  );
}

export default SectionCard;
