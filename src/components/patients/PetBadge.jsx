const PetBadge = ({ pet }) => {
  return (
    <div className="flex items-center gap-2 text-sm">
        <p className="font-medium">{pet.name}</p>

        <p className="text-text-secondary">({pet.breed})</p>

    </div>
  );
}

export default PetBadge