import Dashboard from "../pages/admin/Dashboard";
import Appointments from "../pages/admin/Appointments";
import Patients from "../pages/admin/Patients";


export const routes = [
  {
    path: "/",
    element: <Dashboard />,
    title: "Dashboard",
    description: "Here's your clinic overview for today.",
  },
  {
    path: "/appointments",
    element: <Appointments />,
    title: "Appointments",
    description: "Manage upcoming veterinary visits.",
  },
  {
    path: "/patients",
    element: <Patients />,
    title: "Patients",
    description: "View and manage patient records.",
  },
];