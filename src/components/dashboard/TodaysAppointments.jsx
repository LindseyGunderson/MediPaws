import AppointmentItem from "../appointments/AppointmentItem";
import Card from "../ui/Card";

function TodaysAppointments({ appointments }) {

  const todaysAppointments = appointments.filter(
    (appointment) => appointment.date === "2026-08-08",
  );


  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-text-primary">
            Today's Appointments
          </h2>

          <p className="text-sm text-text-secondary">
            Appointments scheduled for today
          </p>
        </div>
      </div>

      {todaysAppointments.length > 0 ? (
        <div className="space-y-3">
          {todaysAppointments.map((appointment) => (
            <AppointmentItem key={appointment.id} appointment={appointment} />
          ))}
        </div>
      ) : (
        <Card>
          <p className="text-sm text-text-secondary">
            No appointments scheduled for today.
          </p>
        </Card>
      )}
    </section>
  );
}

export default TodaysAppointments;
