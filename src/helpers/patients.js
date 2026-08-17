import { owners } from "../data/owners";
import { pets } from "../data/pets";

export function getOwnerById(id) {
  return owners.find(
    (owner) => Number(owner.id) === Number(id)
  );
}

export function getPetById(id) {
  return pets.find(
    (pet) => Number(pet.id) === Number(id)
  );
}

export function getOwnerWithPetsById(id) {
  const owner = getOwnerById(id);

  if (!owner) {
    return null;
  }

  return {
    ...owner,
    pets: getPetsByOwner(owner.id),
  };
}

export function getPetsByOwner(ownerId) {
  return pets.filter(
    (pet) => Number(pet.ownerId) === Number(ownerId)
  );
}

export function getOwnersWithPets() {
  return owners.map((owner) => ({
    ...owner,
    pets: getPetsByOwner(owner.id),
  }));
}

export function filterOwnersBySearch(owners, search) {
  const searchValue = search.toLowerCase().trim();

  return owners
    .map((owner) => {
      const pets = owner.pets ?? [];

      if (!searchValue) {
        return {
          ...owner,
          pets,
        };
      }

      const ownerName = owner.name.toLowerCase();
      const ownerEmail = owner.email.toLowerCase();

      const matchesOwner =
        ownerName.includes(searchValue) ||
        ownerEmail.includes(searchValue);

      const matchingPets = pets.filter((pet) =>
        pet.name.toLowerCase().includes(searchValue)
      );

      const otherPets = pets.filter(
        (pet) => !pet.name.toLowerCase().includes(searchValue)
      );

      const matchesPet = matchingPets.length > 0;

      if (!matchesOwner && !matchesPet) {
        return null;
      }

      return {
        ...owner,
        pets: [...matchingPets, ...otherPets],
      };
    })
    .filter(Boolean);
}