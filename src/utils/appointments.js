export function getAppointmentById(
  appointments,
  id
) {
  return appointments.find(
    (appointment) =>
      appointment.id === Number(id)
  );
}