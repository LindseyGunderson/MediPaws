import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useAppointments } from "../../../context/AppointmentContext";
import PetAvatar from "../../pets/PetAvatar";

import { convertToTimeInput, formatTimeForDisplay } from "../../../utils/dates"; 
 
function AppointmentEditDrawer({ appointment, isOpen, onClose }) {
  const { updateAppointment } = useAppointments();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (appointment) {
      setDate(appointment.date);
      setTime(convertToTimeInput(appointment.time));
      setType(appointment.type);
    }
  }, [appointment]);

  function handleSubmit(event) {
    event.preventDefault();

    updateAppointment(appointment.id, {
      date,
      time,
      type,
    });

    onClose();
  }

  return (
    <div
      className={`
        fixed
        inset-0
        z-50
        transition-opacity
        duration-300
        ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"}
      `}
    >
      <div
        className="
          absolute
          inset-0
          bg-black/30
          backdrop-blur-[1px]
          transition-opacity
          duration-300
        "
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="appointment-edit-title"
        className={`
          absolute
          inset-y-0
          right-0
          flex
          w-full
          max-w-md
          flex-col
          bg-surface
          shadow-xl
          transition-transform
          duration-300
          ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-start justify-between border-b border-border px-6 py-5">
          <div>
            <h2
              id="appointment-edit-title"
              className="text-lg font-semibold text-text-primary"
            >
              Edit Appointment
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              Update the date, time, or appointment type.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close edit appointment"
            className="
              rounded-md
              p-2
              text-text-secondary
              transition-colors
              hover:bg-surface-muted
              hover:text-text-primary
              cursor-pointer
            "
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-1 flex-col">
          <div className="flex-1 space-y-6 overflow-y-auto px-6 py-6">
            <div className="flex items-center gap-4 rounded-md bg-surface-muted p-4">
              <PetAvatar pet={appointment.pet} />

              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                  Patient
                </p>

                <p className="mt-1 font-medium text-text-primary">
                  {appointment?.pet?.name}
                </p>

                <p className="mt-0.5 text-sm text-text-secondary">
                 {appointment?.owner?.name}
                </p>
              </div>
            </div>

            <div>
              <label
                htmlFor="appointment-date"
                className="text-sm font-medium text-text-primary"
              >
                Date
              </label>

              <input
                id="appointment-date"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="
                  mt-2
                  block
                  w-full
                  rounded-md
                  border
                  border-border
                  bg-surface
                  px-3
                  py-2.5
                  text-sm
                  text-text-primary
                  outline-none
                  transition
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
                required
              />
            </div>

            <div>
              <label
                htmlFor="appointment-time"
                className="text-sm font-medium text-text-primary"
              >
                Time
              </label>

              <input
                id="appointment-time"
                type="time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                className="
                  mt-2
                  block
                  w-full
                  rounded-md
                  border
                  border-border
                  bg-surface
                  px-3
                  py-2.5
                  text-sm
                  text-text-primary
                  outline-none
                  transition
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
                required
              />
            </div>

            <div>
              <label
                htmlFor="appointment-type"
                className="text-sm font-medium text-text-primary"
              >
                Appointment Type
              </label>

              <select
                id="appointment-type"
                value={type}
                onChange={(event) => setType(event.target.value)}
                className="
                  mt-2
                  block
                  w-full
                  rounded-md
                  border
                  border-border
                  bg-surface
                  px-3
                  py-2.5
                  text-sm
                  text-text-primary
                  outline-none
                  transition
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
                required
              >
                <option value="Wellness Checkup">Wellness Checkup</option>
                <option value="Wellness Exam">Wellness Exam</option>
                <option value="Vaccination">Vaccination</option>
                <option value="Dental Cleaning">Dental Cleaning</option>
                <option value="Follow-up">Follow-up</option>
                <option value="Surgery">Surgery</option>
              </select>
            </div>
          </div>

          <div className="border-t border-border bg-surface px-6 py-4">
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="
                  w-full
                  rounded-md
                  border
                  border-border
                  bg-surface
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-text-primary
                  transition-colors
                  hover:bg-surface-muted
                  cursor-pointer
                  sm:w-auto
                "
              >
                Cancel
              </button>

              <button
                type="submit"
                className="
                  w-full
                  rounded-md
                  bg-primary
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  shadow-sm
                  transition-all
                  hover:bg-primary-dark
                  hover:shadow-md
                  active:scale-[0.98]
                  cursor-pointer
                  sm:w-auto
                "
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </aside>
    </div>
  );
}

export default AppointmentEditDrawer;
