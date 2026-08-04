import { appointmentStatuses } from "../../config/appointmentStatus";

function AppointmentStatusBadge({ status }) {
  const statusInfo = appointmentStatuses[status];

  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        px-2.5
        py-1
        text-xs
        font-medium
        bg-surface-muted
        text-text-secondary
      "
    >
      {statusInfo.label}
    </span>
  );
}

export default AppointmentStatusBadge;
