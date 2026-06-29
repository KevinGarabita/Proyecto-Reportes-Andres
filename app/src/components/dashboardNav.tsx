import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

function DashboardNav() {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  if (!user) {
    return null;
  }
  return (
    <nav className="navbar navbar-expand-lg bg-telefield navbar-dark">
      <div className="container-fluid ">
        <a className="navbar-brand" href="#">
          Telefield
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/dashboard">
                Dashboard
              </a>
            </li>
          </ul>

          <div className="d-flex align-items-center text-white">
            <div className="text-start">
              <div className="fw-bold">{user.name}</div>
              <small className="text-white-50">{user.role.toLowerCase()}</small>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default DashboardNav;
