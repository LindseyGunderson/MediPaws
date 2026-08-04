import Dashboard from "../pages/admin/Dashboard";
import Appointments from "../pages/appointments/Appointments";
import AppointmentDetails from "../pages/appointments/AppointmentDetails";
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
    path: "/appointments/:id",
    element: <AppointmentDetails />,
    title: "Appointment Details",
  },
  {
    path: "/patients",
    element: <Patients />,
    title: "Patients",
    description: "View and manage patient records.",
  },
];