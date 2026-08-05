import PetBadge from "./PetBadge";

export default function PatientRow({ owner }) {
  return (
    <div
      className="
        grid
        grid-cols-[2fr_2fr_1fr]
        items-center
        gap-6
        px-6
        py-5
        bg-surface
        border
        border-border
        rounded-md
        hover:bg-surface-muted
      "
    >
      {/* Owner */}
      <div>
        <h3 className="font-medium">{owner.name}</h3>

        <p className="text-sm text-text-secondary">{owner.email}</p>
      </div>

      {/* Pets */}
      <div className="space-y-1">
        {owner.pets.map((pet) => (
          <PetBadge key={pet.id} pet={pet} />
        ))}
      </div>

      {/* Action */}
      <div className="text-right">→</div>
    </div>
  );
}
