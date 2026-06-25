type FloatingButtonProps = {
  onClick: () => void;
};

function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <button
      className="btn btn-primary position-fixed start-50 translate-middle-x rounded-pill shadow-lg px-5 py-3 fw-semibold"
      style={{
        bottom: "24px",
        zIndex: 1050,
      }}
      onClick={onClick}
    >
      Nuevo Reporte
    </button>
  );
}
export default FloatingButton;
