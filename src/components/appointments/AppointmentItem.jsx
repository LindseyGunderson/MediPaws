import { Link } from "react-router-dom";
import { ChevronRight } from 'lucide-react';

import Card from "../ui/Card";
import AppointmentStatusBadge from "./AppointmentStatusBadge";

function AppointmentItem({ appointment }) {
  return (
    <Link to={`/appointments/${appointment.id}`} className="group block">
      <Card className="flex flex-col gap-5 transition hover:border-primary/40 hover:shadow-md">
        {/* Status */}
        <div className="flex justify-end">
          <AppointmentStatusBadge status={appointment.status} />
        </div>

        {/* Pet */}
        <div className="flex items-center gap-4">
          <img
            src="https://images.ctfassets.net/m5ehn3s5t7ec/KtxCRW7y0LXNYcn6BHPPD/065b05bda2e516ea6a5887ce9856d1db/Golden_Retriever__Price.webp"
            alt=""
            className="h-15 w-15 rounded-full border-3 border-primary object-cover"
          />

          <div className="min-w-0 flex-1">
            <p className="text-lg font-semibold text-text-primary">
              {appointment.pet.name}
            </p>

            <p className="mt-1 text-sm text-text-secondary">
              {appointment.type}
            </p>
          </div>

          <ChevronRight
            size={20}
            className="
              shrink-0
              text-text-secondary
              transition-transform
              group-hover:translate-x-1
            "
          />
        </div>

        {/* Details */}
        <div className="border-t border-border pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                Owner
              </p>

              <p className="mt-1 text-sm font-medium text-text-primary">
                {appointment.owner.name}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-text-secondary">
                Time
              </p>

              <p className="mt-1 text-sm font-medium text-text-primary">
                {appointment.time}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default AppointmentItem;