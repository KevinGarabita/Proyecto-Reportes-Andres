type ReportActionsProps = {
  onSave?: () => void;
  onSubmit: () => void;
  canSubmit: boolean;
  submitText: string;
};

function BottomActionBar({
  onSave,
  onSubmit,
  canSubmit,
  submitText,
}: ReportActionsProps) {
  return (
    <div
      className="position-fixed bottom-0 start-0 end-0 bg-white border-top shadow-lg p-3"
      style={{ zIndex: 1050 }}
    >
      <div className="container">
        <div className="d-flex gap-2">
          {onSave && (
            <button
              className="btn btn-outline-primary flex-fill"
              onClick={onSave}
            >
              Guardar borrador
            </button>
          )}

          <button
            className="btn btn-success flex-fill"
            disabled={!canSubmit}
            onClick={onSubmit}
          >
            {submitText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BottomActionBar;
