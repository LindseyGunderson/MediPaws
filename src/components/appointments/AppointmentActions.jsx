import { useAppointments } from "../../context/AppointmentContext";

function AppointmentActions({ appointment }) {
  const { updateAppointmentStatus } = useAppointments();

  if (appointment.status === "completed") {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {appointment.status === "scheduled" && (
        <>
          <button
            onClick={() => updateAppointmentStatus(appointment.id, "checkedIn")}
            className="
              rounded-lg
              bg-primary
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition
              cursor-pointer
              hover:bg-primary-dark
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
              px-4
              py-2
              text-sm
              font-medium
              text-text-primary
              transition
              cursor-pointer
              hover:bg-surface-muted
            "
          >
            Edit
          </button>

          <button
            className="
              rounded-lg
              border
              border-error
              bg-surface
              px-4
              py-2
              text-sm
              font-medium
              text-error
              transition
              cursor-pointer
              hover:bg-error-light
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
            px-4
            py-2
            text-sm
            font-medium
            text-white
            transition
            cursor-pointer
            hover:bg-primary-dark
          "
        >
          Mark Complete
        </button>
      )}
    </div>
  );
}

export default AppointmentActions;