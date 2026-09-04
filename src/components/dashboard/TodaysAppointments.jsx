import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import AppointmentItem from "../appointments/list/AppointmentItem";
import Card from "../ui/Card";

function TodaysAppointments({ appointments }) {
  return (
    <section>
      <Card className="overflow-hidden p-0">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-border/70 px-2 pb-6">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-text-primary">
              Today's Appointments
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              {appointments.length}{" "}
              {appointments.length === 1 ? "appointment" : "appointments"}
            </p>
          </div>

          <Link
            to="/appointments"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              text-sm
              font-medium
              text-primary
              hover:underline
            "
          >
            View all
            <ArrowRight
              size={16}
              strokeWidth={1.8}
              className="
                transition-transform
                duration-150
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>

        {/* Appointments */}
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <AppointmentItem
              key={appointment.id}
              appointment={appointment}
              isLast={index === appointments.length - 1}
            />
          ))
        ) : (
          <div className="flex min-h-40 items-center justify-center px-6">
            <div className="text-center">
              <p className="font-medium text-text-primary">
                No appointments today
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                Your schedule is clear.
              </p>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
}

export default TodaysAppointments;
