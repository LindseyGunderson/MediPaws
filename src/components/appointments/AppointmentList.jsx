import AppointmentDateGroup from "./AppointmentDateGroup";

function AppointmentList({ appointments }) {
  const groupedAppointments = appointments.reduce((groups, appointment) => {
    const date = appointment.date;

    if (!groups[date]) {
      groups[date] = [];
    }

    groups[date].push(appointment);

    return groups;
  }, {});

  return (
    <div className="space-y-8">
      {Object.entries(groupedAppointments).map(([date, appointments]) => (
        <AppointmentDateGroup
          key={date}
          date={date}
          appointments={appointments}
        />
      ))}
    </div>
  );
}

export default AppointmentList;
