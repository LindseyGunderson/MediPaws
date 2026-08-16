import { Cat, Dog, PawPrint } from "lucide-react";

function PetAvatar({ pet, size = "md" }) {
  const species = pet?.species?.toLowerCase();

  const PetIcon = species === "dog" ? Dog : species === "cat" ? Cat : PawPrint;

  const sizes = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  return (
    <div
      className={`
        ${sizes[size]}
        flex
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-primary/10
        text-primary
      `}
    >
      {pet?.image ? (
        <img src={pet.image} alt="" className="h-full w-full object-cover rounded-full" />
      ) : (
        <PetIcon size={iconSizes[size]} />
      )}
    </div>
  );
}

export default PetAvatar;
