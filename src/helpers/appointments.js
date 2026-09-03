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