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
import AppointmentEditDrawer from "../details/AppointmentEditDrawer";

function AppointmentItem({ appointment, isLast }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

  const { checkInAppointment, cancelAppointment } = useAppointments();

  function handleEdit() {
    setIsMenuOpen(false);
    setIsEditDrawerOpen(true);
  }

  function handleReschedule() {
    setIsEditDrawerOpen(true);
  }

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
        {/* Check In */}
        <button
          type="button"
          aria-label={`Check in ${appointment.pet.name}`}
          title="Check in"
          onClick={() => checkInAppointment(appointment.id)}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-md
            text-text-secondary
            transition-colors
            hover:bg-surface
            hover:text-text-primary
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary/30
          "
        >
          <Check size={17} strokeWidth={1.8} />
        </button>

        {/* Reschedule */}
        <button
          type="button"
          aria-label={`Reschedule ${appointment.pet.name}`}
          title="Reschedule"
          onClick={handleReschedule}
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-md
            text-text-secondary
            transition-colors
            hover:bg-surface
            hover:text-text-primary
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-primary/30
          "
        >
          <CalendarClock size={17} strokeWidth={1.8} />
        </button>

        {/* More Actions */}
        <div className="relative">
          <button
            type="button"
            aria-label={`More actions for ${appointment.pet.name}`}
            aria-expanded={isMenuOpen}
            title="More actions"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-md
              text-text-secondary
              transition-colors
              hover:bg-surface
              hover:text-text-primary
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/30
            "
          >
            <MoreHorizontal size={18} strokeWidth={1.8} />
          </button>

          {isMenuOpen && (
            <div
              className="
                absolute
                right-0
                top-full
                z-20
                mt-2
                w-44
                overflow-hidden
                rounded-md
                bg-surface
                p-2
                shadow-lg
                shadow-card
              "
            >
              {/* View Details */}
              <Link
                to={`/appointments/${appointment.id}`}
                onClick={() => setIsMenuOpen(false)}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-md
                  px-3
                  py-2
                  text-sm
                  text-text-primary
                  transition-colors
                  hover:bg-surface-muted
                "
              >
                <Eye size={16} strokeWidth={1.8} />
                <span>View details</span>
              </Link>

              {/* Edit */}
              <button
                type="button"
                onClick={handleEdit}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-md
                  px-3
                  py-2
                  text-sm
                  text-text-primary
                  transition-colors
                  hover:bg-surface-muted
                "
              >
                <Pencil size={16} strokeWidth={1.8} />
                <span>Edit</span>
              </button>

              {/* Divider */}
              <div className="my-1 border-t border-border/70" />

              {/* Cancel */}
              <button
                type="button"
                onClick={() => {
                  const confirmed = window.confirm(
                    `Are you sure you want to cancel ${appointment.pet.name}'s appointment?`,
                  );

                  if (!confirmed) return;

                  cancelAppointment(appointment.id);
                  setIsMenuOpen(false);
                }}
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-md
                  px-3
                  py-2
                  text-sm
                  text-text-secondary
                  transition-colors
                  hover:bg-surface-muted
                  hover:text-red-600
                "
              >
                <X size={16} strokeWidth={1.8} />
                <span>Cancel</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <AppointmentEditDrawer
        appointment={appointment}
        isOpen={isEditDrawerOpen}
        onClose={() => setIsEditDrawerOpen(false)}
      />
    </div>
  );
}

export default AppointmentItem;
