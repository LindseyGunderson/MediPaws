import OwnerPetCard from "./OwnerPetCard";

function OwnerPets({ owner }) {
  return (
    <section className="space-y-5">
      <h2 className="text-lg font-semibold text-text-primary">Pets</h2>

      {owner.pets?.length ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {owner.pets.map((pet) => (
            <OwnerPetCard key={pet.id} pet={pet} />
          ))}
        </div>
      ) : (
        <p className="text-sm text-text-secondary">No pets added yet.</p>
      )}
    </section>
  );
}

export default OwnerPets;
