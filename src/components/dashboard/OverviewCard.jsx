import Card from "../ui/Card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function OverviewCard({
  label,
  value,
  link,
  linkText,
}) {
  return (
    <Card
      className="
        flex
        min-h-[220px]
        flex-col
        transition
        duration-200
        hover:-translate-y-0.5
        hover:shadow-card-hover
      "
    >
      <p className="text-sm font-medium text-text-secondary">
        {label}
      </p>

      <div className="mt-6">
        <p className="text-4xl font-semibold tracking-tight text-text-primary">
          {value}
        </p>
      </div>

      {link && (
        <div className="mt-auto border-t border-border/70 pt-4">
          <Link
            to={link}
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-primary
              hover:underline
            "
          >
            {linkText}
            <ArrowRight
              size={16}
              strokeWidth={1.8}
            />
          </Link>
        </div>
      )}
    </Card>
  );
}

export default OverviewCard;
