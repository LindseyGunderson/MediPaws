import Card from "../ui/Card";

const accentStyles = {
  primary: {
    icon: "bg-primary/10 text-primary",
  },
  warning: {
    icon: "bg-warning/10 text-warning",
  },
  error: {
    icon: "bg-danger/10 text-danger",
  },
};

function OverviewCard({
  label,
  value,
  details = [],
  icon: Icon,
  accent = "primary",
}) {
  const styles = accentStyles[accent];

  return (
    <Card
      className="
        transition
        duration-200
        hover:-translate-y-0.5
        hover:shadow-card-hover
      "
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-lg
            ${styles.icon}
          `}
        >
          {Icon && <Icon size={18} strokeWidth={1.8} />}
        </div>

        <p className="text-sm font-medium text-text-secondary">{label}</p>
      </div>

      <div className="mt-6">
        <p className="text-4xl font-semibold tracking-tight text-text-primary">
          {value}
        </p>
      </div>

      {details.length > 0 && (
        <div className="mt-6 border-t border-border/70 pt-4">
          <div className="space-y-2">
            {details.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between text-sm"
              >
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
