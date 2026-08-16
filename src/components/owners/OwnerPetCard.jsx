import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";
import PetAvatar from "../pets/PetAvatar";

function OwnerPetCard({ pet }) {

  return (
    <Link
      to={`/pets/${pet.id}/edit`}
      className="
        group
        block
        rounded-xl
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary/30
      "
    >
      <Card
        className="
          flex
          items-center
          justify-between
          transition
          duration-150
          hover:-translate-y-0.5
          hover:bg-surface-muted
          hover:shadow-card-hover
        "
      >
        <div className="flex items-center gap-4">
          <PetAvatar pet={pet} size="lg" />

          <div>
            <p className="text-base font-semibold text-text-primary">
              {pet.name}
            </p>

            <p className="mt-0.5 text-sm text-text-secondary">{pet.breed}</p>

            <p className="mt-0.5 text-sm text-text-secondary">
              {pet.age} {pet.age === 1 ? "year" : "years"} old
            </p>
          </div>
        </div>

        <ChevronRight
          size={18}
          className="
            shrink-0
            text-text-secondary
            transition-transform
            duration-150
            group-hover:translate-x-0.5
            group-hover:text-text-primary
          "
          aria-hidden="true"
        />
      </Card>
    </Link>
  );
}

export default OwnerPetCard;
