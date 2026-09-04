import AppointmentDateGroup from "./AppointmentDateGroup";

import { getAppointmentDateTime } from "../../../helpers/appointments";

function AppointmentList({ appointments }) {
  if (appointments.length === 0) {
    return (
      <div className="flex min-h-56 items-center justify-center">
        <div className="text-center">
          <p className="font-medium text-text-primary">
            No appointments found
          </p>

          <p className="mt-1 text-sm text-text-secondary">
            Try adjusting your search or filters.
          </p>
        </div>
      </div>
    );
  }

  const groupedAppointments = appointments.reduce((groups, appointment) => {
    const date = appointment.date;

    if (!groups[date]) {
      groups[date] = [];
    }

    groups[date].push(appointment);

    return groups;
  }, {});

  const sortedGroups = Object.entries(groupedAppointments)
    .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
    .map(([date, appointments]) => [
      date,
      appointments.sort(
        (a, b) =>
          getAppointmentDateTime(a) - getAppointmentDateTime(b)
      ),
    ]);

  return (
    <div className="space-y-10">
      {sortedGroups.map(([date, appointments]) => (
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
