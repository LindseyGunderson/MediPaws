import PetAvatar from "../pets/PetAvatar";

const PetSummary = ({ pet }) => {
  return (
    <div className="flex w-fit items-center gap-2">
      <PetAvatar pet={pet} size="xs" />

      <span className="text-sm font-medium text-text-primary">{pet.name}</span>
    </div>
  );
};

export default PetSummary;
