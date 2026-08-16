import { Check, Pencil, X } from "lucide-react";
import { useAppointments } from "../../context/AppointmentContext";

function AppointmentActions({ appointment }) {
  const { updateAppointmentStatus } = useAppointments();

  const handleCheckIn = () => {
    updateAppointmentStatus(appointment.id, "checkedIn");
  };

  const handleComplete = () => {
    updateAppointmentStatus(appointment.id, "completed");
  };

  if (appointment.status === "scheduled") {
    return (
      <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:w-auto sm:justify-end">

        <button
          type="button"
          onClick={handleCheckIn}
          className="
            inline-flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-lg
            bg-primary
            px-4
            py-2
            text-sm
            font-medium
            text-white
            shadow-sm
            transition-all
            duration-150
            hover:bg-primary-dark
            hover:shadow-md
            active:scale-[0.98]
            cursor-pointer
            sm:flex-none
          "
        >
          <Check size={16} aria-hidden="true" />
          Check In
        </button>

        <button
          type="button"
          className="
            inline-flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-border
            bg-surface
            px-3.5
            py-2
            text-sm
            font-medium
            text-text-primary
            transition-colors
            duration-150
            hover:bg-surface-muted
            active:scale-[0.98]
            cursor-pointer
            sm:flex-none
          "
        >
          <Pencil size={15} aria-hidden="true" />
          Edit
        </button>

        <button
          type="button"
          className="
            inline-flex
            flex-1
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-danger/30
            bg-surface
            px-3.5
            py-2
            text-sm
            font-medium
            text-danger
            transition-all
            duration-150
            hover:border-danger/50
            hover:bg-danger/5
            active:scale-[0.98]
            cursor-pointer
            sm:flex-none
          "
        >
          <X size={15} aria-hidden="true" />
          Cancel
        </button>
      </div>
    );
  }

  if (appointment.status === "checkedIn") {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={handleComplete}
          className="
            inline-flex
            items-center
            gap-2
            rounded-lg
            bg-primary
            px-4
            py-2
            text-sm
            font-medium
            text-white
            shadow-sm
            transition-all
            duration-150
            hover:bg-primary-dark
            hover:shadow-md
            active:scale-[0.98]
            cursor-pointer
          "
        >
          <Check size={16} aria-hidden="true" />
          Mark Complete
        </button>
      </div>
    );
  }

  return null;
}

export default AppointmentActions;
