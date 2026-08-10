import { appointments } from "../data/appointments";
import { getPetById, getOwnerById, getPetsByOwner } from "./patients";


export function getAppointmentsWithDetails() {
  return appointments.map((appointment) => {

    const pet = getPetById(
      appointment.petId
    );

    const owner = getOwnerById(
      appointment.ownerId
    );


    return {
      ...appointment,
      pet,
      owner,
    };

  });
}

export function getAppointmentsByOwner(ownerId) {
  const ownerPets = getPetsByOwner(ownerId);

  return appointments.filter((appointment) =>
    ownerPets.some(
      (pet) => Number(pet.id) === Number(appointment.petId)
    )
  );
}

export function getAppointmentDisplayStatus(appointment) {

    if (!appointment) {
    console.error("AppointmentStatusBadge received no appointment");
    return {
      label: "Unknown",
      tone: "cancelled",
    };
  }

  const isOverdue =
    appointment.status === "scheduled" &&
    new Date(appointment.date) < new Date();

  if (isOverdue) {
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
      tone: "inProgress"
    },
    completed: {
      label: "Completed",
      tone: "completed",
    },
    cancelled: {
      label: "Cancelled",
      tone: "cancelled",
    },
    overdue: {
      label: "Needs Attention",
      tone: "overdue"
    },
  };

  return statuses[appointment.status];
}