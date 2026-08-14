import OverviewCard from "../../components/dashboard/OverviewCard";
import TodaysAppointments from "../../components/dashboard/TodaysAppointments";
import Clock from "../../components/ui/Clock";

import { getDashboardData } from "../../helpers/dashboard";

function Dashboard() {
  const { overview, todaysAppointments } = getDashboardData();

  return (
    <div className="space-y-10">
      <header className="flex items-start justify-between border-b border-border pb-8">
        <div>
          <h1 className="text-2xl font-semibold text-text-primary">
            Good morning, Sarah
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            Here's what's happening at the clinic today.
          </p>
        </div>

        <Clock />
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {overview.map((card) => (
          <OverviewCard key={card.id} {...card} />
        ))}
      </div>

      <TodaysAppointments appointments={todaysAppointments} />
    </div>
  );
}

export default Dashboard;
