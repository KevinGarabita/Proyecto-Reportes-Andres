import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CreateReportPage from "./pages/CreateReportPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>}></Route>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/reports/create" element={<CreateReportPage />} />
        <Route path="/reports/:id" element={<CreateReportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
