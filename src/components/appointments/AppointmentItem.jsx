import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import PetAvatar from "../pets/PetAvatar";
import AppointmentStatusBadge from "./AppointmentStatusBadge";
import { formatTimeForDisplay } from "../../utils/dates";

function AppointmentItem({ appointment, isLast }) {
  return (
    <Link
      to={`/appointments/${appointment.id}`}
      className={`
        group
        flex
        items-center
        gap-5
        px-6
        py-4
        transition-colors
        duration-150
        hover:bg-surface-muted
        focus:outline-none
        focus-visible:bg-surface-muted
        focus-visible:ring-2
        focus-visible:ring-inset
        focus-visible:ring-primary/30
        ${!isLast ? "border-b border-border/70" : ""}
      `}
    >
      {/* Time */}
      <div className="w-20 shrink-0">
        <p className="text-sm font-semibold tracking-tight text-text-primary">
          {formatTimeForDisplay(appointment.time)}
        </p>
      </div>

      {/* Divider */}
      <div className="h-9 w-px shrink-0 bg-border/70" />

      {/* Pet */}
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <PetAvatar pet={appointment.pet} />

        <div className="min-w-0">
          <p className="truncate font-medium text-text-primary">
            {appointment.pet.name}
          </p>

          <p className="mt-0.5 truncate text-sm text-text-secondary">
            {appointment.type}
          </p>
        </div>
      </div>

      {/* Status */}
      <div className="shrink-0">
        <AppointmentStatusBadge appointment={appointment} />
      </div>

      {/* Action */}
      <ChevronRight
        size={18}
        strokeWidth={1.8}
        className="
          shrink-0
          text-text-secondary
          transition-transform
          duration-150
          group-hover:translate-x-0.5
          group-hover:text-text-primary
        "
      />
    </Link>
  );
}

export default AppointmentItem;
