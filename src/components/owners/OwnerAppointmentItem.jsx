import AppointmentStatusBadge from "../appointments/AppointmentStatusBadge";

function OwnerAppointmentItem({ appointment }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-b
        border-border
        bg-surface
        p-4
      "
    >
      <div className="space-y-1">
        <p className="font-medium"> {appointment.pet.name}</p>
      </div>
      <div>
        <p>
          {appointment.date} · {appointment.time}
        </p>
        <p>{appointment.type}</p>
      </div>
      <AppointmentStatusBadge status={appointment.status} />
    </div>
  );
}

export default OwnerAppointmentItem;
