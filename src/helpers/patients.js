import { owners } from "../data/owners";
import { pets } from "../data/pets";


export function getOwnerById(id) {
  return owners.find(
    (owner) => owner.id === id
  );
}


export function getPetById(id) {
  return pets.find(
    (pet) => pet.id === id
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
    (pet) => pet.ownerId === ownerId
  );
}


export function getOwnersWithPets() {
  return owners.map((owner) => ({
    ...owner,
    pets: getPetsByOwner(owner.id),
  }));
}