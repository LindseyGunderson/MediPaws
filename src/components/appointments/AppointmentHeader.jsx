import AppointmentActions from "./AppointmentActions";

function AppointmentHeader({ appointment }) {
  return (
    <section
      className="
        flex
        items-start
        justify-between
        gap-6
      "
    >
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">
          {appointment.pet.name}
        </h1>

        <p className="mt-1 text-text-secondary">{appointment.pet.species}</p>

        <p className="mt-1 text-sm text-text-secondary">
          Owner: {appointment.owner.name}
        </p>
      </div>

      <AppointmentActions appointment={appointment} />
    </section>
  );
}

export default AppointmentHeader;
