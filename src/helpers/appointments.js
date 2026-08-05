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