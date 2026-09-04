import { appointments } from "../data/appointments";
import { getPetById, getOwnerById } from "./patients";

export function getAppointmentDateTime(appointment) {
  return new Date(`${appointment.date}T${appointment.time}`);
}

export function getAppointmentsWithDetails() {
  return appointments.map((appointment) => ({
    ...appointment,
    pet: getPetById(appointment.petId),
    owner: getOwnerById(appointment.ownerId),
  }));
}

export function getAppointmentWithDetails(appointment) {
  return {
    ...appointment,
    pet: getPetById(appointment.petId),
    owner: getOwnerById(appointment.ownerId),
  };
}

export function getAppointmentsByOwner(ownerId) {
  return getAppointmentsWithDetails().filter(
    (appointment) => Number(appointment.ownerId) === Number(ownerId)
  );
}

export function getAppointmentDisplayStatus(appointment) {
  if (!appointment) {
    return {
      label: "Unknown",
      tone: "cancelled",
    };
  }

  const now = new Date();
  const appointmentDateTime = getAppointmentDateTime(appointment);

  if (
    appointment.status === "scheduled" &&
    appointmentDateTime < now
  ) {
    return {
      label: "Needs Attention",
      tone: "attention",
    };
  }

  const statuses = {
    scheduled: {
      label: "Scheduled",
      tone: "scheduled",
    },
    checkedIn: {
      label: "Checked In",
      tone: "checkedIn",
    },
    inProgress: {
      label: "In Progress",
      tone: "inProgress",
    },
    completed: {
      label: "Completed",
      tone: "completed",
    },
    cancelled: {
      label: "Cancelled",
      tone: "cancelled",
    },
  };

  return (
    statuses[appointment.status] ?? {
      label: "Unknown",
      tone: "cancelled",
    }
  );
}

export function filterAppointments(
  appointments,
  { search = "", status = "all", dateFilter = "all", type = "all" }
) {
  const searchValue = search.trim().toLowerCase();
  const now = new Date();

  // Start of today
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  // Start of tomorrow
  const startOfTomorrow = new Date(startOfToday);
  startOfTomorrow.setDate(startOfTomorrow.getDate() + 1);

  // Start of the day after tomorrow
  const startOfDayAfterTomorrow = new Date(startOfTomorrow);
  startOfDayAfterTomorrow.setDate(
    startOfDayAfterTomorrow.getDate() + 1
  );

  // End of this week
  const endOfThisWeek = new Date(startOfToday);
  const daysUntilEndOfWeek = 6 - startOfToday.getDay();

  endOfThisWeek.setDate(
    endOfThisWeek.getDate() + daysUntilEndOfWeek + 1
  );

  // End of the next 7 days
  const endOfNext7Days = new Date(startOfToday);
  endOfNext7Days.setDate(endOfNext7Days.getDate() + 7);

  return appointments.filter((appointment) => {
    const petName = appointment.pet?.name?.toLowerCase() ?? "";
    const ownerName = appointment.owner?.name?.toLowerCase() ?? "";

    /*
     * Search
     */
    const matchesSearch =
      !searchValue ||
      petName.includes(searchValue) ||
      ownerName.includes(searchValue);

    /*
     * Status
     */
    const matchesStatus =
      status === "all" || appointment.status === status;

    /*
     * Appointment type
     */
    const matchesType =
      type === "all" || appointment.type === type;

    /*
     * Date
     */
    const appointmentDate = new Date(`${appointment.date}T00:00:00`);

    let matchesDate = true;

    switch (dateFilter) {
      case "today":
        matchesDate =
          appointmentDate >= startOfToday &&
          appointmentDate < startOfTomorrow;
        break;

      case "tomorrow":
        matchesDate =
          appointmentDate >= startOfTomorrow &&
          appointmentDate < startOfDayAfterTomorrow;
        break;

      case "thisWeek":
        matchesDate =
          appointmentDate >= startOfToday &&
          appointmentDate < endOfThisWeek;
        break;

      case "next7Days":
        matchesDate =
          appointmentDate >= startOfToday &&
          appointmentDate < endOfNext7Days;
        break;

      case "past":
        matchesDate = appointmentDate < startOfToday;
        break;

      case "all":
      default:
        matchesDate = true;
    }

    return (
      matchesSearch &&
      matchesStatus &&
      matchesType &&
      matchesDate
    );
  });
}