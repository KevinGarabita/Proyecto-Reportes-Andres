import { useState } from "react";
import PageHeader from "../components/pageHeader";
import Swal from "sweetalert2";
import { loginService } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const handleLogin = async () => {
    try {
      const user = await loginService({
        email,
        password,
      });

      login(user);

      await Swal.fire({
        icon: "success",
        title: `Bienvenido ${user.name}`,
        timer: 1500,
        showConfirmButton: false,
      });

      switch (user.role) {
        case "TECHNICIAN":
          navigate("/home", { replace: true });
          break;

        case "SUPERVISOR":
          navigate("/dashboard", { replace: true });
          break;

        default:
          Swal.fire({
            icon: "error",
            title: "Rol no válido",
            text: "El usuario no tiene un rol asignado.",
          });
      }
    } catch (error) {
      if (error instanceof Error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      }
    }
  };

  return (
    <>
      <PageHeader>
        <div className="text-center">
          <div className="logo-circle mx-auto mb-3">📶</div>

          <h3 className="fw-bold text-white mb-2">Telefield</h3>

          <p className="text-secondary mb-0">Inicia sesión para continuar</p>
        </div>
      </PageHeader>

      <div className="container mt-4">
        <div className="card rounded-4 border-0 shadow-sm">
          <div className="card-body p-4">
            <div className="mb-4">
              <label className="form-label fw-semibold">
                Correo electrónico
              </label>

              <input
                type="email"
                className="form-control form-control-lg rounded-4"
                placeholder="correo@telefield.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Contraseña</label>

              <input
                type="password"
                className="form-control form-control-lg rounded-4"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary rounded-pill w-100 py-3 fw-semibold"
              onClick={handleLogin}
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
