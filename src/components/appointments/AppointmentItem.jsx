import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import PetAvatar from "../pets/PetAvatar";

import AppointmentStatusBadge from "./AppointmentStatusBadge";

function AppointmentItem({ appointment, isLast }) {

  return (
    <Link
      to={`/appointments/${appointment.id}`}
      className={`
        group
        flex
        items-center
        gap-6
        px-6
        py-5
        transition-colors
        duration-150
        hover:bg-surface-muted
        ${!isLast ? "border-b border-border/70" : ""}
      `}
    >
      {/* Time */}
      <div className="w-18 shrink-0">
        <p className="text-base font-semibold tracking-tight text-text-primary">
          {appointment.time}
        </p>
      </div>

      <div className="h-8 w-px bg-border/70" />

      <div className="flex min-w-0 flex-1 items-center gap-4">
        <PetAvatar pet={appointment.pet} />

        <div className="min-w-0">
          <p className="font-medium text-text-primary">
            {appointment.pet.name}
          </p>

          <p className="mt-0.5 text-sm text-text-secondary">
            {appointment.type}
          </p>
        </div>
      </div>

      {/* Owner */}
      <div className="hidden w-36 shrink-0 md:block">
        <p className="text-sm text-text-secondary">{appointment.owner.name}</p>
      </div>

      {/* Status */}
      <div className="shrink-0">
        <AppointmentStatusBadge appointment={appointment} />
      </div>

      {/* Action */}
      <ChevronRight
        size={18}
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
