import OwnerAppointmentItem from "./OwnerAppointmentItem";
import { getAppointmentsByOwner } from "../../helpers/appointments";
import { Calendar } from "lucide-react";

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
      <div className="space-y-4 bg-surface p-4 rounded-lg border border-border">
        <div>
          <h2 className="text-lg font-semibold">Upcoming Appointments</h2>
        </div>

        {upcomingAppointments.length > 0 ? (
          <div className="">
            {upcomingAppointments.map((appointment) => (
              <OwnerAppointmentItem
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </div>
        ) : (
          <p className="text-sm text-text-secondary">
            No upcoming appointments.
          </p>
        )}
      </div>

      {/* History */}

      <div className="space-y-12">
        <div
          className="
            rounded-lg
            border
            border-border
            bg-surface
            p-6
          "
        >
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Appointment History</h2>
          </div>
          {appointmentHistory.length > 0 ? (
            <div className="space-y-12">
              {appointmentHistory.map((appointment) => (
                <OwnerAppointmentItem
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="w-fit m-auto mb-4 bg-primary/10 p-4 rounded-full">
                <Calendar size={22} />
              </div>

              <p className="text-sm text-text-secondary font-bold">
                No appointment history available.
              </p>
              <p className="text-sm">
                Past visits for this owner will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default OwnerAppointments;
