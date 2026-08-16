import AppointmentItem from "./AppointmentItem";
import Card from "../ui/Card";
import { formatDate } from "../../utils/dates";

function AppointmentDateGroup({ date, appointments }) {
  return (
    <section className="space-y-4">
      <div className="flex items-baseline justify-between">
        <h2 className="text-lg font-semibold tracking-tight text-text-primary">
          {formatDate(date)}
        </h2>

        <span className="text-sm text-text-secondary">
          {appointments.length}{" "}
          {appointments.length === 1 ? "appointment" : "appointments"}
        </span>
      </div>

      <Card className="overflow-hidden p-0">
        {appointments.map((appointment, index) => (
          <AppointmentItem
            key={appointment.id}
            appointment={appointment}
            isLast={index === appointments.length - 1}
          />
        ))}
      </Card>
    </section>
  );
}

export default AppointmentDateGroup;
