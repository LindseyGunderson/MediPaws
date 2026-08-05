import OwnerPetCard from "./OwnerPetCard";

function OwnerPets({ owner }) {
  return (
    <section className="space-y-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-lg font-semibold text-text-primary">Pets</h2>
      </div>

      <div className="space-y-3 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {owner.pets.map((pet) => (
            <OwnerPetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OwnerPets;
