import { Cat, Dog, PawPrint, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../ui/Card";

function OwnerPetCard({ pet }) {
  const PetIcon =
    pet.species?.toLowerCase() === "dog"
      ? Dog
      : pet.species?.toLowerCase() === "cat"
        ? Cat
        : PawPrint;

  return (
    <Link to={`/pets/${pet.id}/edit`} className="block rounded-xl">
      <Card
        className="
          flex
          items-center
          justify-between
          transition
          hover:bg-surface-muted
        "
      >
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-primary/10  shadow-card">
            {pet.image ? (
              <img
                src={pet.image}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-primary">
                <PetIcon size={22} aria-hidden="true" />
              </div>
            )}
          </div>

          <div>
            <p className="font-medium text-text-primary">{pet.name}</p>

            <p className="mt-0.5 text-sm text-text-secondary">{pet.breed}</p>

            <p className="mt-0.5 text-sm text-text-secondary">
              {pet.age} {pet.age === 1 ? "year" : "years"} old
            </p>
          </div>
        </div>

        <ChevronRight
          size={18}
          className="text-text-secondary"
          aria-hidden="true"
        />
      </Card>
    </Link>
  );
}

export default OwnerPetCard;
