import {
  getAppointmentsWithDetails,
  getAppointmentDateTime,
} from "./appointments";

function getToday() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getDashboardData() {
  const appointments = getAppointmentsWithDetails();
  const today = getToday();
  const now = new Date();

  const todaysAppointments = appointments
    .filter((appointment) => appointment.date === today)
    .sort(
      (a, b) =>
        getAppointmentDateTime(a) - getAppointmentDateTime(b)
    );

  const inProgressAppointments = todaysAppointments.filter(
    (appointment) => appointment.status === "inProgress"
  );

  const followUpAppointments = appointments.filter(
    (appointment) =>
      appointment.type === "Follow-up" &&
      appointment.status !== "cancelled"
  );

  const overdueAppointments = appointments.filter((appointment) => {
    const appointmentDateTime = getAppointmentDateTime(appointment);

    return (
      appointment.status === "scheduled" &&
      appointmentDateTime < now
    );
  });

  const upcomingAppointments = appointments
    .filter((appointment) => {
      const appointmentDateTime = getAppointmentDateTime(appointment);

      return (
        appointmentDateTime > now &&
        appointment.status === "scheduled"
      );
    })
    .sort(
      (a, b) =>
        getAppointmentDateTime(a) - getAppointmentDateTime(b)
    );

  return {
    todaysAppointments,
    inProgressAppointments,
    followUpAppointments,
    overdueAppointments,
    upcomingAppointments,

    overview: [
      {
        id: "today",
        label: "Today's Appointments",
        value: todaysAppointments.length,
        link: "/appointments",
        linkText: "View schedule",
      },

      {
        id: "in-progress",
        label: "In Progress",
        value: inProgressAppointments.length,
        link: "/appointments?status=inProgress",
        linkText: "View appointments",
      },

      {
        id: "follow-ups",
        label: "Follow Ups",
        value: followUpAppointments.length,
        link: "/patients?filter=follow-ups",
        linkText: "View patients",
      },
    ],
  };
}