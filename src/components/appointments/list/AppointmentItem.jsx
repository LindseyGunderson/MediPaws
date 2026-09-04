import { Link } from "react-router-dom";
import { useState } from "react";
import {
  CalendarClock,
  Check,
  Eye,
  MoreHorizontal,
  Pencil,
  X,
} from "lucide-react";

import PetAvatar from "../../pets/PetAvatar";
import AppointmentStatusBadge from "../shared/AppointmentStatusBadge";
import { formatTimeForDisplay } from "../../../utils/dates";
import { useAppointments } from "../../../context/AppointmentContext";

function AppointmentItem({ appointment, isLast }) {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const { checkInAppointment, cancelAppointment } = useAppointments();

  return (
    <div
      className={`
        group
        grid
        items-center
        gap-4
        px-8
        py-6
        transition-colors
        duration-150
        hover:bg-surface-muted
        md:grid-cols-[80px_minmax(160px,1.2fr)_minmax(140px,1fr)_minmax(160px,1.2fr)_120px_120px]
        ${!isLast ? "border-b border-border/30" : ""}
      `}
    >
      {/* Time */}
      <div>
        <p className="text-sm font-semibold tracking-tight text-text-primary">
          {formatTimeForDisplay(appointment.time)}
        </p>
      </div>

      {/* Pet */}
      <div className="flex min-w-0 items-center gap-3">
        <PetAvatar pet={appointment.pet} />

        <div className="min-w-0">
          <p className="truncate font-medium text-text-primary">
            {appointment.pet.name}
          </p>

          <p className="mt-0.5 truncate text-sm text-text-secondary">
            {appointment.pet.breed}
          </p>
        </div>
      </div>

      {/* Owner */}
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-text-primary">
          {appointment.owner.name}
        </p>

        <p className="mt-0.5 truncate text-sm text-text-secondary">
          {appointment.owner.phone}
        </p>
      </div>

      {/* Appointment Type */}
      <div className="min-w-0">
        <p className="truncate text-sm text-text-primary">{appointment.type}</p>
      </div>

      {/* Status */}
      <div>
        <AppointmentStatusBadge appointment={appointment} />
      </div>

      {/* Actions */}
      <div className="flex items-end justify-end gap-1">
     
      </div>
    </div>
  );
}

export default AppointmentItem;
