import type { Coordinate } from "../types/coordinate";

type CoordinateCardProps = {
  title: string;

  coordinate: Coordinate;

  editable: boolean;

  onChange?: (coordinate: Coordinate) => void;
};

function CoordinateCard({
  title,
  coordinate,
  editable,
  onChange,
}: CoordinateCardProps) {
  const mapsUrl = `https://www.google.com/maps?q=${coordinate.latitude},${coordinate.longitude}`;

  const handleLatitude = (value: string) => {
    onChange?.({
      ...coordinate,
      latitude: value === "" ? null : Number(value),
    });
  };

  const handleLongitude = (value: string) => {
    onChange?.({
      ...coordinate,
      longitude: value === "" ? null : Number(value),
    });
  };

  return (
    <div className="col">
      <div className="fw-semibold text-uppercase text-secondary mb-2">
        {title}
      </div>

      <div className="border rounded-4 p-4 h-100 bg-light">
        {editable ? (
          <>
            <div className="mb-3">
              <label className="form-label">Latitud</label>

              <input
                type="number"
                step="any"
                className="form-control"
                value={coordinate.latitude ?? ""}
                onChange={(e) => handleLatitude(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Longitud</label>

              <input
                type="number"
                step="any"
                className="form-control"
                value={coordinate.longitude ?? ""}
                onChange={(e) => handleLongitude(e.target.value)}
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-2">
              <strong>Latitud:</strong> {coordinate.latitude}
            </div>

            <div className="mb-4">
              <strong>Longitud:</strong> {coordinate.longitude}
            </div>
          </>
        )}

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none fw-semibold"
        >
          Ver en Google Maps →
        </a>
      </div>
    </div>
  );
}

export default CoordinateCard;
