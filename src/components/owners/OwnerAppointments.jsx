import OwnerAppointmentItem from "./OwnerAppointmentItem";
import { getAppointmentsByOwner } from "../../helpers/appointments";
import { Calendar } from "lucide-react";
import Card from "../ui/Card";

function OwnerAppointments({ owner }) {
  const appointments = getAppointmentsByOwner(owner.id);

  const upcomingAppointments = appointments.filter(
    (appointment) =>
      appointment.status === "scheduled" || appointment.status === "checkedIn",
  );

  const appointmentHistory = appointments.filter(
    (appointment) =>
      appointment.status === "completed" || appointment.status === "cancelled",
  );

  return (
    <section className="space-y-12">
      {/* Upcoming */}
      <div className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-semibold tracking-tight text-text-primary">
            Upcoming Appointments
          </h2>

          <span className="text-sm text-text-secondary">
            {upcomingAppointments.length}{" "}
            {upcomingAppointments.length === 1 ? "appointment" : "appointments"}
          </span>
        </div>

        {upcomingAppointments.length > 0 ? (
          <Card className="divide-y divide-border/70 overflow-hidden p-0">
            {upcomingAppointments.map((appointment) => (
              <OwnerAppointmentItem
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </Card>
        ) : (
          <Card className="py-8 text-center">
            <p className="text-sm font-medium text-text-primary">
              No upcoming appointments
            </p>

            <p className="mt-1 text-sm text-text-secondary">
              This owner has no appointments scheduled.
            </p>
          </Card>
        )}
      </div>

      {/* History */}
      <div className="space-y-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight text-text-primary">
            Appointment History
          </h2>

          <span className="text-sm text-text-secondary">
            {appointmentHistory.length}{" "}
            {appointmentHistory.length === 1 ? "appointment" : "appointments"}
          </span>
        </div>

        {appointmentHistory.length > 0 ? (
          <Card className="divide-y divide-border/70 overflow-hidden p-0">
            {appointmentHistory.map((appointment) => (
              <OwnerAppointmentItem
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </Card>
        ) : (
          <Card className="py-8 text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Calendar size={20} aria-hidden="true" />
            </div>

            <p className="mt-3 text-sm font-medium text-text-primary">
              No appointment history
            </p>

            <p className="mt-1 text-sm text-text-secondary">
              Past visits for this owner will appear here.
            </p>
          </Card>
        )}
      </div>
    </section>
  );
}

export default OwnerAppointments;
