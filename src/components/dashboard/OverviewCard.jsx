import Card from "../ui/Card";

function OverviewCard({ label, value, details = [] }) {
  return (
    <Card>
      <p className="text-sm text-text-secondary">{label}</p>

      <p className="mt-2 text-3xl font-semibold tracking-tight text-text-primary">
        {value}
      </p>

      {details.length > 0 && (
        <div className="mt-5 border-t border-border pt-4">
          <div className="space-y-2">
            {details.map((item) => (
              <div key={item.label} className="flex justify-between text-sm">
                <span className="text-text-secondary">{item.label}</span>

                <span className="font-medium text-text-primary">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}

export default OverviewCard;
