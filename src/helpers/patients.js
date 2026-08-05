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


export function getPetsByOwner(ownerId) {
  return pets.filter(
    (pet) => pet.ownerId === ownerId
  );
}