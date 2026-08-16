import { useState } from "react";

import PatientList from "../../components/patients/PatientList";
import SearchInput from "../../components/ui/SearchInput";

import {
  getOwnersWithPets,
  filterOwnersBySearch,
} from "../../helpers/patients";

function Patients() {
  const [search, setSearch] = useState("");

  const owners = getOwnersWithPets();
  const filteredOwners = filterOwnersBySearch(owners, search);

  const totalPets = owners.reduce(
    (total, owner) => total + owner.pets.length,
    0,
  );

  return (
    <div className="space-y-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
          Patients
        </h1>

        <p className="text-sm leading-6 text-text-secondary">
          Manage pet owners and their pets.
        </p>
      </section>

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search patients or owners..."
      />

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-text-secondary">
            {filteredOwners.length}{" "}
            {filteredOwners.length === 1 ? "owner" : "owners"}
            {" · "}
            {totalPets} pets
          </p>
        </div>

        <PatientList owners={filteredOwners} />
      </section>
    </div>
  );
}

export default Patients;
