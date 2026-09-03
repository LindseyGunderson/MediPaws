import { Link } from "react-router-dom";
import { ArrowRight, Clock3 } from "lucide-react";

import Card from "../ui/Card";
import PetAvatar from "../pets/PetAvatar";
import { formatTimeForDisplay } from "../../utils/dates";

function NeedsAttention({ appointments }) {
  return (
    <section>
      <Card className="overflow-hidden p-0">
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-border/70 px-2 pb-6">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-text-primary">
              Needs Attention
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              {appointments.length}{" "}
              {appointments.length === 1 ? "item" : "items"}
            </p>
          </div>

          <Link
            to="/appointments?filter=needs-attention"
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

        {/* Items */}
        {appointments.length > 0 ? (
          appointments.map((appointment, index) => (
            <Link
              key={appointment.id}
              to={`/appointments/${appointment.id}`}
              className={`
                group
                flex
                items-center
                gap-4
                px-6
                py-4
                transition-colors
                duration-150
                hover:bg-surface-muted
                focus:outline-none
                focus-visible:bg-surface-muted
                focus-visible:ring-2
                focus-visible:ring-inset
                focus-visible:ring-primary/30
                ${index !== appointments.length - 1 ? "border-b border-border/70" : ""}
              `}
            >
              <PetAvatar pet={appointment.pet} />

              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-text-primary">
                  {appointment.pet.name}
                </p>

                <div className="mt-1 flex items-center gap-1.5 text-sm text-text-secondary">
                  <Clock3 size={14} strokeWidth={1.8} />

                  <span>
                    {formatTimeForDisplay(appointment.time)}
                  </span>

                  <span>·</span>

                  <span className="truncate">
                    {appointment.type}
                  </span>
                </div>
              </div>

              <ArrowRight
                size={17}
                strokeWidth={1.8}
                className="
                  shrink-0
                  text-text-secondary
                  transition-transform
                  duration-150
                  group-hover:translate-x-0.5
                  group-hover:text-text-primary
                "
              />
            </Link>
          ))
        ) : (
          <div className="flex min-h-40 items-center justify-center px-6">
            <div className="text-center">
              <p className="font-medium text-text-primary">
                Nothing needs attention
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                Everything is up to date.
              </p>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
}

export default NeedsAttention;
