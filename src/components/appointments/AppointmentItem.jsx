import AppointmentStatusBadge from "./AppointmentStatusBadge";

function AppointmentItem({ appointment }) {
  return (
    <article
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
    </article>
  );
}

export default AppointmentItem;