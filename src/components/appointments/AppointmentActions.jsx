import { useAppointments } from "../../context/AppointmentContext";

function AppointmentActions({ appointment }) {
  const { updateAppointmentStatus } = useAppointments();

  if (
    appointment.status === "completed" ||
    appointment.status === "cancelled"
  ) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {appointment.status === "scheduled" && (
        <>
          <button
            onClick={() => updateAppointmentStatus(appointment.id, "checkedIn")}
            className="
              rounded-lg
              bg-primary
              px-3.5
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:bg-primary-dark
              cursor-pointer
            "
          >
            Check In
          </button>

          <button
            className="
              rounded-lg
              border
              border-border
              bg-surface
              px-3.5
              py-2
              text-sm
              font-medium
              text-text-primary
              transition
              hover:bg-surface-muted
              cursor-pointer
            "
          >
            Edit
          </button>

          <button
            className="
              px-3.5
              py-2
              text-sm
              font-medium
              text-danger
              rounded-lg
              border
              border-danger
              transition
              hover:text-error-dark
              cursor-pointer
            "
          >
            Cancel
          </button>
        </>
      )}

      {appointment.status === "checkedIn" && (
        <button
          onClick={() => updateAppointmentStatus(appointment.id, "completed")}
          className="
            rounded-lg
            bg-primary
            px-3.5
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:bg-primary-dark
            cursor-pointer
          "
        >
          Mark Complete
        </button>
      )}
    </div>
  );
}

export default AppointmentActions;
