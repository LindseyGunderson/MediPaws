import Card from "../ui/Card";

function StatCard({ label, value, description }) {
  return (
    <Card>
      <p className="text-sm text-text-secondary">{label}</p>

      <p className="mt-2 text-3xl font-semibold text-text-primary">{value}</p>

      <p className="mt-1 text-sm text-text-secondary">{description}</p>
    </Card>
  );
}

export default StatCard;
