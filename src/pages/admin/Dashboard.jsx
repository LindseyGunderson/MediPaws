import OverviewCard from "../../components/dashboard/OverviewCard";
import TodaysAppointments from "../../components/dashboard/TodaysAppointments";

import { getDashboardData } from "../../helpers/dashboard";

function Dashboard() {
  const { overview, todaysAppointments } = getDashboardData();

  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        {overview.map((card) => (
          <OverviewCard key={card.id} {...card} />
        ))}
      </div>

      <TodaysAppointments appointments={todaysAppointments} />
    </div>
  );
}

export default Dashboard;
