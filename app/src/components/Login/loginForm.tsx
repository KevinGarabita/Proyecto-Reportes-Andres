import { useState } from "react";
import { FiEye, FiEyeOff, FiLock, FiMail } from "react-icons/fi";

type LoginFormProps = {
  email: string;
  password: string;
  loading?: boolean;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: () => void;
};

function LoginForm({
  email,
  password,
  loading = false,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-100 mx-auto px-4 py-5" style={{ maxWidth: "430px" }}>
      {/* Badge */}

      <span className="badge border border-success text-success rounded-pill px-3 py-2 mb-4">
        Plataforma Interna
      </span>

      {/* Header */}

      <div className="mb-5">
        <h2 className="fw-bold text-white mb-2">
          Bienvenido <span className="text-Uxmal">de nuevo</span>
        </h2>

        <p className="text-white-50 mb-0">
          Inicia sesión para acceder a la plataforma empresarial.
        </p>
      </div>

      {/* Email */}

      <div className="mb-4">
        <label className="form-label fw-semibold text-white mb-2">
          Correo electrónico
        </label>

        <div className="input-group">
          <span className="input-group-text bg-dark border-end-0 text-secondary">
            <FiMail />
          </span>

          <input
            type="email"
            className="form-control border-start-0 ps-0"
            placeholder="correo@uxmal.com"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
          />
        </div>
      </div>

      {/* Password */}

      <div className="mb-2">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <label className="form-label fw-semibold text-white mb-0">
            Contraseña
          </label>
        </div>

        <div className="input-group">
          <span className="input-group-text bg-dark border-end-0 text-secondary">
            <FiLock />
          </span>

          <input
            type={showPassword ? "text" : "password"}
            className="form-control border-start-0 border-end-0 ps-0"
            placeholder="••••••••"
            value={password}
            onChange={(e) => onPasswordChange(e.target.value)}
          />

          <button
            type="button"
            className="btn btn-outline-secondary border-start-0"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>
      </div>

      {/* Botón */}

      <button
        type="button"
        className="btn bg-Uxmal text-white fw-semibold py-3 w-100 rounded-3 mt-3"
        disabled={loading}
        onClick={onSubmit}
      >
        {loading ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" />
            Iniciando sesión...
          </>
        ) : (
          "Iniciar sesión"
        )}
      </button>

      {/* Footer */}

      <div className="text-center mt-5">
        <small className="text-white-50">© 2026 Uxmal Technologies</small>
      </div>
    </div>
  );
}

export default LoginForm;
