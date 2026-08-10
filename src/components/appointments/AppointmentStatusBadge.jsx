import { getAppointmentDisplayStatus } from "../../helpers/appointments";

function AppointmentStatusBadge({ appointment }) {
  const displayStatus = getAppointmentDisplayStatus(appointment);

  const statusStyles = {
    scheduled: "bg-info/10 text-info",
    inProgress: "bg-primary-light/50 text-primary",
    checkedIn: "bg-purple-50 text-purple-700",
    completed: "bg-success/10 text-green-700",
    cancelled: "bg-gray-100 text-gray-600",
    attention: "bg-amber-100 text-amber-800",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-2.5
        py-1
        text-xs
        font-medium
        ${statusStyles[displayStatus.tone]}
      `}
    >
      {displayStatus.label}
    </span>
  );
}

export default AppointmentStatusBadge;
