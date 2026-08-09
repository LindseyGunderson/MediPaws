import AppointmentItem from "./AppointmentItem";

function AppointmentDateGroup({ date, appointments }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="space-y-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold text-text-primary">
          {formattedDate}
        </h2>

        <span className="text-sm text-text-secondary">
          {appointments.length}{" "}
          {appointments.length === 1 ? "appointment" : "appointments"}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {appointments.map((appointment) => (
          <AppointmentItem key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </section>
  );
}

export default AppointmentDateGroup;
