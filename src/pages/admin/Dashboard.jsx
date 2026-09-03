import OverviewCard from "../../components/dashboard/OverviewCard";
import TodaysAppointments from "../../components/dashboard/TodaysAppointments";
import NeedsAttention from "../../components/dashboard/NeedsAttention";
import ActionButton from "../../components/ui/ActionButton";
import Clock from "../../components/ui/Clock";
import { Plus } from "lucide-react";

import { getDashboardData } from "../../helpers/dashboard";

function Dashboard() {
  const {
    overview,
    todaysAppointments,
    overdueAppointments,
  } = getDashboardData();

  return (
    <div className="mx-auto w-full max-w-7xl space-y-14">
      {/* Welcome */}
      <header
        className="
          flex
          flex-col
          gap-8
          border-b
          border-border/70
          pb-10
          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >
        <div>
          <h1
            className="
              text-3xl
              font-semibold
              tracking-tight
              text-text-primary
              sm:text-4xl
            "
          >
            Good morning, Sarah
          </h1>
        </div>

        <Clock />
      </header>

      {/* Overview */}
      <section className="space-y-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold tracking-tight text-text-primary">
              Today at a glance
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              A quick look at today's clinic activity.
            </p>
          </div>

          <ActionButton
            icon={Plus}
            to="/appointments/new"
            text="New Appointment"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {overview.map((card) => (
            <OverviewCard key={card.id} {...card} />
          ))}
        </div>
      </section>

      {/* Today's Activity */}
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(320px,1fr)]">
        <TodaysAppointments appointments={todaysAppointments} />

        <NeedsAttention appointments={overdueAppointments} />
      </section>
    </div>
  );
}

export default Dashboard;
