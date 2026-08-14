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
    <section className="space-y-10">
      {/* Upcoming */}

      <div className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold text-text-primary">
            Upcoming Appointments
          </h2>

          <span className="text-sm text-text-secondary">
            {upcomingAppointments.length}
          </span>
        </div>

        {upcomingAppointments.length > 0 ? (
          <Card className="divide-y divide-border p-0">
            {upcomingAppointments.map((appointment) => (
              <OwnerAppointmentItem
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </Card>
        ) : (
          <Card>
            <p className="text-sm text-text-secondary">
              No upcoming appointments.
            </p>
          </Card>
        )}
      </div>

      {/* History */}

      <div className="space-y-4">
        <div className="flex items-baseline justify-between">
          <h2 className="text-lg font-semibold text-text-primary">
            Appointment History
          </h2>

          <span className="text-sm text-text-secondary">
            {appointmentHistory.length}
          </span>
        </div>

        {appointmentHistory.length > 0 ? (
          <Card className="divide-y divide-border p-0">
            {appointmentHistory.map((appointment) => (
              <OwnerAppointmentItem
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </Card>
        ) : (
          <Card>
            <div className="py-6 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Calendar size={20} />
              </div>

              <p className="mt-3 text-sm font-medium text-text-primary">
                No appointment history
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                Past visits for this owner will appear here.
              </p>
            </div>
          </Card>
        )}
      </div>
    </section>
  );
}

export default OwnerAppointments;
