


function OwnerPetCard({ pet }) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-lg
        border
        border-border
        bg-surface
        p-4
        transition
        hover:bg-surface-muted
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-primary-light
          "
        >
          
        </div>

        <div>
          <p className="font-medium text-text-primary">{pet.name}</p>

          <p className="text-sm text-text-secondary">{pet.breed}</p>

          <p className="text-sm text-text-secondary">{pet.age} years old</p>
        </div>
      </div>

      <span className="text-text-secondary">→</span>
    </div>
  );
}

export default OwnerPetCard;
