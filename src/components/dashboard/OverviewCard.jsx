import Card from "../ui/Card";

function OverviewCard({ label, value, details = [] }) {
  return (
    <Card>
      <p className="text-sm text-text-secondary">{label}</p>

      <p className="mt-3 text-3xl font-semibold text-text-primary">{value}</p>

      <div className="mt-4 space-y-1">
        {details.map((item) => (
          <div
            key={item.label}
            className="
              flex
              justify-between
              text-sm
            "
          >
            <span className="text-text-secondary">{item.label}</span>

            <span className="font-medium text-text-primary">{item.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default OverviewCard;
