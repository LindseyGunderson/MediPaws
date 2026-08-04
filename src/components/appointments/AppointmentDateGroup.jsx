import AppointmentItem from "./AppointmentItem";

function AppointmentDateGroup({ date, appointments }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-text-primary">
        {formattedDate}
      </h2>

      <div className="space-y-3">
        {appointments.map((appointment) => (
          <AppointmentItem key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </section>
  );
}

export default AppointmentDateGroup;
