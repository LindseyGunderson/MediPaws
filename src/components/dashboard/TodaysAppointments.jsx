import AppointmentItem from "../appointments/AppointmentItem";
import Card from "../ui/Card";

function TodaysAppointments({ appointments }) {

  const todaysAppointments = appointments.filter(
    (appointment) => appointment.date === "2026-08-08",
  );


  return (
    <section className="space-y-4">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-text-primary">
            Today's Appointments
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Appointments scheduled for today
          </p>
        </div>

        <span className="text-sm font-medium text-text-secondary">
          {todaysAppointments.length}{" "}
          {todaysAppointments.length === 1 ? "appointment" : "appointments"}
        </span>
      </div>

      {todaysAppointments.length > 0 ? (
        <div className="space-y-3">
          {todaysAppointments.map((appointment) => (
            <AppointmentItem key={appointment.id} appointment={appointment} />
          ))}
        </div>
      ) : (
        <Card className="flex items-center justify-center py-10">
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
