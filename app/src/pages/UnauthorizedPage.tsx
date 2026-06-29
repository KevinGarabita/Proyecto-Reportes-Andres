import { Link } from "react-router-dom";

export default function UnauthorizedPage() {
  return (
    <div className="container py-5 text-center">
      <h1>403</h1>

      <h3>No tienes permisos para acceder a esta página.</h3>

      <Link to="/" className="btn btn-primary mt-4">
        Volver al login
      </Link>
    </div>
  );
}
