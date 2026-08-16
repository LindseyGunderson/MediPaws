import { appointments } from "../data/appointments";
import {
  CalendarDays,
  Clock3,
  AlertCircle,
} from "lucide-react";

function getToday() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getAppointmentDateTime(appointment) {
  return new Date(`${appointment.date} ${appointment.time}`);
}

export function getDashboardData() {
  const today = getToday();
  const now = new Date();

  const todaysAppointments = appointments.filter(
    (appointment) => appointment.date === today
  );

  const completed = todaysAppointments.filter(
    (appointment) => appointment.status === "completed"
  ).length;

  const remaining = todaysAppointments.filter(
    (appointment) =>
      appointment.status !== "completed" &&
      appointment.status !== "cancelled"
  ).length;

const soonAppointments = todaysAppointments.filter((appointment) => {
  const appointmentTime = getAppointmentDateTime(appointment);

  const twoHoursFromNow = new Date(
    now.getTime() + 2 * 60 * 60 * 1000
  );

  return (
    appointment.status === "scheduled" &&
    appointmentTime >= now &&
    appointmentTime <= twoHoursFromNow
  );
});

const nextAppointment = [...soonAppointments].sort(
  (a, b) =>
    getAppointmentDateTime(a) - getAppointmentDateTime(b)
)[0];

const nextAppointmentTime = nextAppointment
  ? nextAppointment.time
  : "None";

    const needsAttention = appointments.filter((appointment) => {
        const appointmentDate = new Date(`${appointment.date}T00:00:00`);
        const today = new Date();

        today.setHours(0, 0, 0, 0);

        return (
            appointmentDate < today &&
            appointment.status === "scheduled"
        );
    }).length;

  return {
    todaysAppointments,
    overview: [
      {
        id: "today",
        label: "Today's Appointments",
        value: todaysAppointments.length,
        icon: CalendarDays,
        accent: "primary",
        details: [
          {
            label: "Completed",
            value: completed,
          },
          {
            label: "Remaining",
            value: remaining,
          },
        ],
      },
      {
        id: "soon",
        label: "Soon",
        value: soonAppointments.length,
        icon: Clock3,
        accent: "warning",
        details: [
          {
            label: "Next 2 hours",
            value: nextAppointmentTime,
          },
        ],
      },
      {
        id: "attention",
        label: "Needs Attention",
        value: needsAttention,
        icon: AlertCircle,
        accent: needsAttention > 0 ? "error" : "primary",
        details: [
          {
            label:
              needsAttention > 0
                ? "Overdue appointments"
                : "No overdue appointments",
            value: needsAttention,
          },
        ],
      },
    ],
  };
}