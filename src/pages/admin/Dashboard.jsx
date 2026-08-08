import OverviewCard from "../../components/dashboard/OverviewCard";
import TodaysAppointments from "../../components/dashboard/TodaysAppointments";
import Clock from "../../components/ui/Clock";

import { getDashboardData } from "../../helpers/dashboard";

function Dashboard() {
  const { overview, todaysAppointments } = getDashboardData();

  return (
    <div className="space-y-8">
      <div className="flex items-start justify-between border-b border-border pb-6">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">
            Good morning, Sarah
          </h1>
        </div>

        <Clock />
      </div>

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
