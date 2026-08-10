import { CalendarDays, Clock3 } from "lucide-react";
import { formatDate } from "../../utils/dates";
import Card from "../ui/Card";

function AppointmentInfo({ appointment }) {
  return (
    <Card className="rounded-xl">
      <div>
        <h2 className="text-lg font-semibold text-text-primary">
          Appointment Details
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          Information about this visit.
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays
            size={16}
            className="mt-0.5 shrink-0 text-text-secondary"
          />

          <div>
            <p className="text-sm text-text-secondary">Date</p>

            <p className="mt-1 font-medium text-text-primary">
              {formatDate(appointment.date)}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock3 size={16} className="mt-0.5 shrink-0 text-text-secondary" />

          <div>
            <p className="text-sm text-text-secondary">Time</p>

            <p className="mt-1 font-medium text-text-primary">
              {appointment.time}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-border pt-5">
        <p className="text-sm text-text-secondary">Appointment Type</p>

        <p className="mt-1 font-medium text-text-primary">{appointment.type}</p>
      </div>
    </Card>
  );
}

export default AppointmentInfo;
