import AppointmentItem from "../appointments/AppointmentItem";

function UpcomingAppointments({ appointments }) {
  return (
    <section>
      <h2 className="mb-4 text-lg font-semibold">Upcoming Appointments</h2>

      <div className="space-y-3">
        {appointments.map((appointment) => (
          <AppointmentItem key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </section>
  );
}

export default UpcomingAppointments;
