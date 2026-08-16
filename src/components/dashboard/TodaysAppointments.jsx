import AppointmentItem from "../appointments/AppointmentItem";
import Card from "../ui/Card";

function TodaysAppointments({ appointments }) {
  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-text-primary">
            Today's Appointments
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Appointments scheduled for today
          </p>
        </div>

        <span className="shrink-0 text-sm font-medium text-text-secondary">
          {appointments.length}{" "}
          {appointments.length === 1 ? "appointment" : "appointments"}
        </span>
      </div>

      {appointments.length > 0 ? (
        <Card className="overflow-hidden p-0">
          {appointments.map((appointment, index) => (
            <AppointmentItem
              key={appointment.id}
              appointment={appointment}
              isLast={index === appointments.length - 1}
            />
          ))}
        </Card>
      ) : (
        <Card className="flex min-h-40 items-center justify-center">
          <div className="text-center">
            <p className="font-medium text-text-primary">
              No appointments today
            </p>

            <p className="mt-1 text-sm text-text-secondary">
              Your schedule is clear.
            </p>
          </div>
        </Card>
      )}
    </section>
  );
}

export default TodaysAppointments;