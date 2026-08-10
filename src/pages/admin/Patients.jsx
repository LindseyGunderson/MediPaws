import { useState } from "react";

import PatientList from "../../components/patients/PatientList";
import SearchInput from "../../components/ui/SearchInput";

import { getOwnersWithPets } from "../../helpers/patients";
import { filterOwnersBySearch } from "../../helpers/patients";

function Patients() {
  const [search, setSearch] = useState("");

  const owners = getOwnersWithPets();

  const filteredOwners = filterOwnersBySearch(owners, search);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">Patients</h1>

        <p className="mt-1 text-text-secondary">
          Manage pet owners and their pets.
        </p>
      </div>

      <SearchInput
        value={search}
        onChange={setSearch}
        placeholder="Search patients or owners..."
      />

      <PatientList owners={filteredOwners} />
    </div>
  );
}

export default Patients;
