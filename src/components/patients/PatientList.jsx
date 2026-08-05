import PatientRow from "./PatientRow";
import { getOwnersWithPets } from "../../helpers/patients";

function PatientList() {
  const owners = getOwnersWithPets();

  return (
    <div
    className="
        flex
        flex-col
        gap-4
        rounded-lg
    "
    >
      {owners.map((owner) => (
        <PatientRow key={owner.id} owner={owner} />
      ))}
    </div>
  );
}

export default PatientList;
