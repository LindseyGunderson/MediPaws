import { appointments } from "../data/appointments";
import { getPetById, getOwnerById } from "./patients";


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