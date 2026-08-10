import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/dates";

import AppointmentStatusBadge from "./AppointmentStatusBadge";

function AppointmentHeader({ appointment }) {
  return (
    <header className="space-y-7">
      <Link
        to="/appointments"
        className="
          inline-flex
          items-center
          gap-1.5
          text-sm
          text-text-secondary
          transition
          hover:text-text-primary
        "
      >
        <ChevronLeft size={16} />
        Appointments
      </Link>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-text-primary">
            {appointment.pet.name}
          </h1>

          <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-text-secondary">
            <span>{appointment.type}</span>
            <span aria-hidden="true">•</span>
            <span>
              {formatDate(appointment.date)} - {appointment.time}
            </span>
          </div>
        </div>

        <AppointmentStatusBadge appointment={appointment} />
      </div>
    </header>
  );
}

export default AppointmentHeader;
