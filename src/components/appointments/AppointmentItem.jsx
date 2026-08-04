import AppointmentStatusBadge from "./AppointmentStatusBadge";

function AppointmentItem({ appointment }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-border
        bg-surface
        p-5
      "
    >
      <div>
        <p className="font-medium text-text-primary">{appointment.time}</p>

        <p className="mt-1 text-text-primary">{appointment.pet}</p>

        <p className="text-sm text-text-secondary">{appointment.type}</p>
      </div>

      <AppointmentStatusBadge status={appointment.status} />
    </div>
  );
}

export default AppointmentItem;
