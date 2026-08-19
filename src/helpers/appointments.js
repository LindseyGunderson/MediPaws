import { appointments } from "../data/appointments";
import { owners } from "../data/owners";
import { pets } from "../data/pets";

import {
  getPetById,
  getOwnerById,
  getPetsByOwner,
} from "./patients";

function getAppointmentDateTime(appointment) {
  return new Date(`${appointment.date} ${appointment.time}`);
}

export function getAppointmentsWithDetails() {
  return appointments.map((appointment) => {
    const pet = getPetById(appointment.petId);
    const owner = getOwnerById(appointment.ownerId);

    return {
      ...appointment,
      pet,
      owner,
    };
  });
}

export function getAppointmentWithDetails(appointment) {
  return {
    ...appointment,
    pet: pets.find((pet) => pet.id === appointment.petId),
    owner: owners.find((owner) => owner.id === appointment.ownerId),
  };
}

export function getAppointmentsByOwner(ownerId) {
  const appointmentsWithDetails = getAppointmentsWithDetails();

  return appointmentsWithDetails.filter(
    (appointment) => Number(appointment.ownerId) === Number(ownerId)
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

  const now = new Date();
  const appointmentDateTime = getAppointmentDateTime(appointment);

  const isOverdue =
    appointment.status === "scheduled" &&
    appointmentDateTime < now;

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