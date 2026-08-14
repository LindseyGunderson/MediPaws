import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import AppointmentStatusBadge from "../appointments/AppointmentStatusBadge";
import { formatDate } from "../../utils/dates";

function OwnerAppointmentItem({ appointment }) {
  return (
    <Link
      to={`/appointments/${appointment.id}`}
      className="
        flex
        items-center
        justify-between
        gap-4
        p-4
        transition
        hover:bg-surface-muted
      "
    >
      <div className="min-w-0">
        <p className="font-medium text-text-primary">{appointment.pet.name}</p>

        <p className="mt-0.5 text-sm text-text-secondary">{appointment.type}</p>
      </div>

      <div className="hidden text-right sm:block">
        <p className="text-sm font-medium text-text-primary">
          {formatDate(appointment.date)}
        </p>

        <p className="mt-0.5 text-sm text-text-secondary">{appointment.time}</p>
      </div>

      <AppointmentStatusBadge appointment={appointment} />

      <ChevronRight
        size={16}
        className="shrink-0 text-text-secondary"
        aria-hidden="true"
      />
    </Link>
  );
}

export default OwnerAppointmentItem;
