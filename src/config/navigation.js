import {
  CalendarDays,
  LayoutDashboard,
  Settings,
  Stethoscope,
  Users,
} from "lucide-react";


export const navigation = [

  {
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },

  {
    label: "Appointments",
    path: "/appointments",
    icon: CalendarDays,
  },

  {
    label: "Patients",
    path: "/patients",
    icon: Users,
  },

  {
    label: "Doctors",
    path: "/doctors",
    icon: Stethoscope,
  },

  {
    label: "Settings",
    path: "/settings",
    icon: Settings,
  },

];