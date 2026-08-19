import { ChevronLeft, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import AppointmentStatusBadge from "./AppointmentStatusBadge";
import AppointmentActions from "./AppointmentActions";
import { formatTimeForDisplay } from "../../utils/dates";

function AppointmentHeader({ appointment, onEdit }) {
  return (
    <header className="space-y-7">
      <Link
        to="/appointments"
        className="
          inline-flex
          items-center
          gap-1
          text-sm
          font-medium
          text-text-secondary
          transition-colors
          hover:text-text-primary
        "
      >
        <ChevronLeft size={16} />
        Back to Appointments
      </Link>

      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <AppointmentStatusBadge appointment={appointment} />

          <h1 className="text-3xl font-semibold tracking-tight text-text-primary ml-2">
            {appointment.pet.name}
          </h1>
        </div>

        <div
          className="
            flex
            flex-col
            items-start
            gap-4
            sm:items-end
          "
        >
          <div className="flex flex-col items-center gap-3">
            <div className="text-right">
              <p className="mt-0.5 text-xs text-text-secondary">
                Appointment time
              </p>
              <div className="flex items-center justify-end gap-1.5">
                <Clock3 size={15} className="text-primary" aria-hidden="true" />
                <p className="text-lg font-semibold tracking-tight text-text-primary">
                  {formatTimeForDisplay(appointment.time)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppointmentActions appointment={appointment} onEdit={onEdit} />
    </header>
  );
}

export default AppointmentHeader;
