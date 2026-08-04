import OverviewCard from "../../components/dashboard/OverviewCard";
import UpcomingAppointments from "../../components/dashboard/UpcomingAppointments";

import { dashboardOverview } from "../../data/dashboard";

import { appointments } from "../../data/appointments";

function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        {dashboardOverview.map((card) => (
          <OverviewCard key={card.id} {...card} />
        ))}
      </div>

      <UpcomingAppointments appointments={appointments} />
    </div>
  );
}

export default Dashboard;
