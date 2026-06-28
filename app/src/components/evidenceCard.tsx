import { useEffect, useMemo, useRef } from "react";
import Swal from "sweetalert2";
import { compressImage } from "../utils/imageCompression";

export type EvidenceFile = {
  file: File;
};

type EvidenceCardProps = {
  title: string;
  subtitle: string;
  evidence: EvidenceFile | null;
  onChange: (evidence: EvidenceFile) => void;
};

function EvidenceCard({
  title,
  subtitle,
  evidence,
  onChange,
}: EvidenceCardProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const preview = useMemo(() => {
    if (!evidence) return null;

    return URL.createObjectURL(evidence.file);
  }, [evidence]);

  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const handleSelect = () => {
    inputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      await Swal.fire({
        icon: "error",
        title: "Archivo no permitido",
        text: "Solo se permiten imágenes.",
      });

      event.target.value = "";
      return;
    }

    console.log(
      "Original:",
      file.name,
      (file.size / 1024 / 1024).toFixed(2),
      "MB",
    );

    const compressed = await compressImage(file);

    console.log(
      "Comprimida:",
      compressed.name,
      (compressed.size / 1024 / 1024).toFixed(2),
      "MB",
    );

    onChange({ file: compressed });
    event.target.value = "";
  };

  return (
    <div
      className={`card shadow-sm border-2 mb-3 ${
        evidence ? "border-success" : ""
      }`}
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h5 className="fw-semibold mb-1">{title}</h5>

            <p className="text-secondary mb-0">{subtitle}</p>
          </div>

          {evidence && (
            <span className="badge text-bg-success">Completado</span>
          )}
        </div>

        <div
          className="border border-2 border-secondary-subtle rounded d-flex justify-content-center align-items-center overflow-hidden"
          style={{
            minHeight: 220,
            cursor: "pointer",
            borderStyle: "dashed",
            backgroundColor: "#fafafa",
          }}
          onClick={handleSelect}
        >
          {preview ? (
            <img
              src={preview}
              alt={title}
              className="img-fluid w-100 h-100"
              style={{
                objectFit: "cover",
                maxHeight: 320,
              }}
            />
          ) : (
            <div className="text-center">
              <div
                className="rounded-circle bg-primary bg-opacity-10 d-inline-flex justify-content-center align-items-center mb-3"
                style={{
                  width: 72,
                  height: 72,
                }}
              >
                <i className="bi bi-image fs-2 text-primary" />
              </div>

              <p className="text-secondary fw-medium mb-0">
                Toca para seleccionar
              </p>
            </div>
          )}
        </div>

        <input
          ref={inputRef}
          hidden
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}

export default EvidenceCard;
