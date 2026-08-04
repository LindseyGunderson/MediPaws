import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";
import Appointments from "../pages/admin/Appointments";
import Patients from "../pages/admin/Patients";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />

      <Route path="/appointments" element={<Appointments />} />

      <Route path="/patients" element={<Patients />} />
    </Routes>
  );
}

export default AppRoutes;
