import AppointmentItem from "./AppointmentItem";
import { formatDate } from "../../../utils/dates";
import Card from "../../ui/Card";

function AppointmentDateGroup({ date, appointments }) {
  const formattedDate = formatDate(date);
  const appointmentCount = appointments.length;

  return (
    <section>
      <Card>
        {/* Date Header */}
        <div className="flex items-center justify-between gap-4 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-text-primary">
              {formattedDate}
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              {appointmentCount}{" "}
              {appointmentCount === 1 ? "appointment" : "appointments"}
            </p>
          </div>
        </div>

        {/* Column Header */}
        <div
          className="
            hidden
            border-y
            border-border/70
            bg-surface-muted/40
            px-6
            py-4
            text-sm
            font-semibold
            uppercase
            tracking-wide
            text-text-secondary
            md:grid
            md:grid-cols-[80px_minmax(160px,1.2fr)_minmax(140px,1fr)_minmax(160px,1.2fr)_120px_120px]
            md:items-center
            md:gap-5
          "
        >
          <span>Time</span>
          <span>Pet</span>
          <span>Owner</span>
          <span>Appointment</span>
          <span>Status</span>
          <span className="text-right">Actions</span>
        </div>

        {/* Appointments */}
        <div>
          {appointments.map((appointment, index) => (
            <AppointmentItem
              key={appointment.id}
              appointment={appointment}
              isLast={index === appointments.length - 1}
            />
          ))}
        </div>
      </Card>
    </section>
  );
}

export default AppointmentDateGroup;
