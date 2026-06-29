import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreateReportPage from "./pages/CreateReportPage";
import LoginPage from "./pages/LoginPage";

import ProtectedRoute from "./components/protectedRoute";
import RoleRoute from "./components/RoleRoute";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import NotFoundPage from "./pages/NotFoundPage";
import ReportPage from "./pages/ReportPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <RoleRoute roles={["TECHNICIAN"]}>
                <HomePage />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports/create"
          element={
            <ProtectedRoute>
              <RoleRoute roles={["TECHNICIAN"]}>
                <CreateReportPage />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports/:id"
          element={
            <ProtectedRoute>
              <RoleRoute roles={["TECHNICIAN"]}>
                <CreateReportPage />
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <RoleRoute roles={["PORTALERO", "SUPERVISOR"]}>
                <DashboardPage></DashboardPage>
              </RoleRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/report/:id"
          element={
            <ProtectedRoute>
              <RoleRoute roles={["PORTALERO", "SUPERVISOR"]}>
                <ReportPage></ReportPage>
              </RoleRoute>
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
