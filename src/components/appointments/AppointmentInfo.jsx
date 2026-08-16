import { CalendarDays, Clock3, Stethoscope } from "lucide-react";
import { formatDate } from "../../utils/dates";
import Card from "../ui/Card";

function AppointmentInfo({ appointment }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Appointment Details
      </h2>

      <Card className="rounded-xl">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Date */}
          <div className="rounded-lg bg-surface-muted p-4">
            <div className="flex items-center gap-2 text-text-secondary">
              <CalendarDays size={17} />

              <span className="text-sm font-medium">Date</span>
            </div>

            <p className="mt-3 text-base font-semibold text-text-primary">
              {formatDate(appointment.date)}
            </p>
          </div>

          {/* Time */}
          <div className="rounded-lg bg-primary/5 p-4">
            <div className="flex items-center gap-2 text-primary">
              <Clock3 size={17} />

              <span className="text-sm font-medium">Time</span>
            </div>

            <p className="mt-3 text-xl font-semibold tracking-tight text-text-primary">
              {appointment.time}
            </p>
          </div>
        </div>

        {/* Appointment Type */}
        <div className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Stethoscope size={17} />
          </div>

          <div>
            <p className="text-xs font-medium tracking-wide text-text-secondary">
              Appointment Type
            </p>

            <p className="mt-0.5 font-medium text-text-primary">
              {appointment.type}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default AppointmentInfo;
