import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";
import Appointments from "../pages/admin/Appointments";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/appointments" element={<Appointments />} />
    </Routes>
  );
}

export default AppRoutes;
