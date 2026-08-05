function PetSummary({ pet }) {
  return (
    <div
      className="
        rounded-md
        bg-surface-muted
        p-3
      "
    >
      <p className="font-medium">🐾 {pet.name}</p>

      <p className="text-sm text-text-secondary">{pet.breed}</p>

      <p className="text-sm text-text-secondary">{pet.age} years old</p>
    </div>
  );
}

export default PetSummary;
