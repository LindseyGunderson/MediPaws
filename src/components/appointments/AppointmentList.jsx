import AppointmentDateGroup from "./AppointmentDateGroup";
import Card from "../ui/Card";

function AppointmentList({ appointments }) {
  const groupedAppointments = appointments.reduce((groups, appointment) => {
    const date = appointment.date;

    if (!groups[date]) {
      groups[date] = [];
    }

    groups[date].push(appointment);

    return groups;
  }, {});

  const sortedGroups = Object.entries(groupedAppointments).sort(
    ([dateA], [dateB]) => new Date(dateA) - new Date(dateB),
  );

 if (appointments.length === 0) {
   return (
     <Card className="text-center p-6">
       <p className="font-medium text-text-primary">No appointments found</p>

       <p className="mt-1 text-sm text-text-secondary">
         Try adjusting your search or status filter.
       </p>
     </Card>
   );
 }


  return (
    <div className="space-y-8">
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
