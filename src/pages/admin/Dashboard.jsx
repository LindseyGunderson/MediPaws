import OverviewCard from "../../components/dashboard/OverviewCard";
import { dashboardOverview } from "../../data/dashboard";

function Dashboard() {
  return (
    <div className="space-y-8">
      <section>
        <div className="grid gap-4 md:grid-cols-3">
          {dashboardOverview.map((card) => (
            <OverviewCard key={card.id} {...card} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
