import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import PetBadge from "./PetBadge";
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
      "
    >
      <Card
        className="
          grid
          grid-cols-1 
          md:grid-cols-3
          items-center
          gap-6
          px-5
          py-5
        "
      >
        {/* Owner */}
        <div className="min-w-0">
          <h3 className="font-medium text-text-primary">{owner.name}</h3>

          <p className="mt-0.5 truncate text-sm text-text-secondary">
            {owner.email}
          </p>
        </div>

        {/* Pets */}
        <div className="flex flex-col gap-2">
          {owner.pets.length === 0 ? (
            <span className="text-sm text-text-secondary">
              No pets listed
            </span>
          ) :(
              visiblePets.map((pet) => (
                <PetBadge key={pet.id} pet={pet} />
              ))
          )}
        </div>

        {/* Count + Action */}
        <div className="flex items-center justify-end gap-3">
          <span className="text-sm text-text-secondary">
            {remainingPets > 0 && (
              <span className="text-sm text-text-secondary">
                +{remainingPets} more {remainingPets === 1 ? "pet" : "pets"}
              </span>
            )}
          </span>

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
