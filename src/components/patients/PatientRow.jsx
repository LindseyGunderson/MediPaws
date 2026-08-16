import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import PetSummary from "./PetSummay";
import Card from "../ui/Card";

export default function PatientRow({ owner }) {
  const visiblePets = owner.pets.slice(0, 3);
  const remainingPets = owner.pets.length - visiblePets.length;

  return (
    <Link
      to={`/owners/${owner.id}`}
      className="
        group
        block
        rounded-lg
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary/30
        "
      >
      <Card
        className="
        grid
        grid-cols-1
        items-center
        gap-6
        px-5
        py-5
        transition
        duration-150
        group-hover:-translate-y-0.5
        group-hover:shadow-card-hover
        md:grid-cols-3
      "
      >
        {/* Owner */}
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-text-primary">
            {owner.name}
          </h3>

          <p className="mt-0.5 truncate text-sm text-text-secondary">
            {owner.email}
          </p>
        </div>

        {/* Pets */}
        <div className="flex flex-col gap-2">
          {owner.pets.length === 0 ? (
            <span className="text-sm text-text-secondary">No pets listed</span>
          ) : (
            visiblePets.map((pet) => <PetSummary key={pet.id} pet={pet} />)
          )}
        </div>

        {/* Count + Action */}
        <div className="flex items-center justify-between gap-3 md:justify-end">
          {remainingPets > 0 ? (
            <span className="text-sm text-text-secondary">
              +{remainingPets} {remainingPets === 1 ? "more pet" : "more pets"}
            </span>
          ) : (
            <span />
          )}

          <ChevronRight
            size={18}
            className="
              text-text-secondary
              transition
              group-hover:translate-x-0.5
              group-hover:text-text-primary
            "
          />
        </div>
      </Card>
    </Link>
  );
}
