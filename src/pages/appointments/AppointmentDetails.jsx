import { useParams } from "react-router-dom";

import { appointments } from "../../data/appointments";
import { getAppointmentById } from "../../utils/appointments";

import AppointmentStatusBadge from "../../components/appointments/AppointmentStatusBadge";
import AppointmentHeader from "../../components/appointments/AppointmentHeader";

function AppointmentDetails() {
  const { id } = useParams();

  const appointment = getAppointmentById(appointments, id);

  if (!appointment) {
    return (
      <div>
        <h2 className="text-xl font-semibold">Appointment not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}

      <AppointmentHeader appointment={appointment} />

      <section
        className="
          rounded-xl
          border
          border-border
          bg-surface
          p-6
        "
      >
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Appointment Details</h2>

          <AppointmentStatusBadge appointment={appointment} />
        </div>

        <div className="mt-6 space-y-3 text-sm">
          <p>
            <span className="text-text-secondary">Date:</span>{" "}
            {appointment.date}
          </p>

          <p>
            <span className="text-text-secondary">Time:</span>{" "}
            {appointment.time}
          </p>

          <p>
            <span className="text-text-secondary">Type:</span>{" "}
            {appointment.type}
          </p>

          <p>
            <span className="text-text-secondary">Owner:</span>{" "}
            {appointment.owner.name}
          </p>
        </div>
      </section>
    </div>
  );
}

export default AppointmentDetails;