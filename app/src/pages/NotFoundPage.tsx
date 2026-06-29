import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center">
        <div className="display-1 fw-bold">404</div>

        <h2 className="fw-bold mt-3">Página no encontrada</h2>

        <p className="text-secondary mt-3">
          La página que intentas visitar no existe.
        </p>

        <Link to="/" className="btn btn-primary mt-4">
          Ir al login
        </Link>
      </div>
    </div>
  );
}
