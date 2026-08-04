import AppointmentStatusBadge from "./AppointmentStatusBadge";
import { Link } from "react-router-dom";

function AppointmentItem({ appointment }) {
  return (
    <Link
        to={`/appointments/${appointment.id}`}
        className="
            block
            rounded-xl
            border
            border-border
            bg-surface
            p-5
            transition
            hover:bg-surface-muted
        "
        >
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <p className="font-medium text-text-primary">{appointment.time}</p>

          <AppointmentStatusBadge status={appointment.status} />
        </div>

        <p className="text-text-primary">{appointment.pet.name}</p>

        <p className="text-sm text-text-secondary">{appointment.pet.species}</p>

        <p className="text-sm text-text-secondary">{appointment.owner}</p>

        <p className="text-sm text-text-secondary">{appointment.type}</p>
      </div>
    </Link>
  );
}

export default AppointmentItem;