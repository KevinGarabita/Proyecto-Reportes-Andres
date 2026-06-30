import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { loginService } from "../services/authService";
import { useAuth } from "../hooks/useAuth";

import uxmalLogo from "../assets/logo-uxmal.png";
import LoginForm from "../components/Login/loginForm";

function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

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
            title: "Rol inválido",
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid login-page min-vh-100" data-bs-theme="dark">
      <div className="row min-vh-100">
        {/* LOGIN */}

        <div
          className="col-12 col-lg-5 border-end border-secondary-subtle"
          style={{
            backgroundColor: "var(--background)",
          }}
        >
          <div className="d-flex flex-column h-100">
            {/* Logo */}

            <div className="p-4 p-lg-5">
              <img
                src={uxmalLogo}
                alt="Uxmal Technologies"
                className="img-fluid"
                style={{ maxWidth: 170 }}
              />
            </div>

            {/* Formulario */}

            <div className="flex-grow-1 d-flex align-items-center">
              <div className="w-100 px-4 px-lg-5">
                <LoginForm
                  email={email}
                  password={password}
                  loading={loading}
                  onEmailChange={setEmail}
                  onPasswordChange={setPassword}
                  onSubmit={handleLogin}
                />
              </div>
            </div>

            {/* Footer */}

            <div className="px-4 px-lg-5 pb-4">
              <small className="text-body-secondary">
                © 2026 Uxmal Technologies
              </small>
            </div>
          </div>
        </div>

        {/* PANEL DERECHO */}

        <div
          className="col-lg-7 d-none d-lg-flex align-items-center justify-content-center"
          style={{ backgroundColor: "hsl(0deg 0% 9%)" }}
        >
          <div className="px-5" style={{ maxWidth: "620px" }}>
            <div
              className="display-1 fw-bold text-secondary mb-4"
              style={{
                opacity: ".12",
                lineHeight: 1,
              }}
            >
              “
            </div>

            <h2
              className="fw-bold text-white mb-0"
              style={{
                fontSize: "2.6rem",
                lineHeight: 1.3,
              }}
            >
              Una plataforma diseñada para centralizar la gestión de técnicos,
              supervisores y reportes de forma segura y eficiente.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
