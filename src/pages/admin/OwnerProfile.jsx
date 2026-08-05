import { useParams } from "react-router-dom";
import { getOwnerWithPetsById } from "../../helpers/patients";
import OwnerHeader from "../../components/owners/OwnerHeader";
import OwnerPets from "../../components/owners/OwnerPets";
import OwnerAppointments from "../../components/owners/OwnerAppointments";
import OwnerPetNotes from "../../components/owners/OwnerPetNotes"
import OwnerContactInfo from "../../components/owners/OwnerContactInfo";

function OwnerProfile() {
  const { id } = useParams();

  const owner = getOwnerWithPetsById(Number(id));

  if (!owner) {
    return <p>Owner not found</p>;
  }

  return (
    <div className="space-y-8">
      <div>
        <button
          className="
            text-sm
            text-text-secondary
            hover:text-text-primary
            "
        >
          ← Back to Patients
        </button>
      </div>

      <div className="space-y-12">
        <OwnerHeader owner={owner} />
      </div>

      <div className="grid grid-cols-2 auto-rows-fr gap-6 mb-10">
        <OwnerContactInfo owner={owner} />
        <OwnerPetNotes  />
      </div>

      <div className="space-y-20">
        <OwnerPets owner={owner} />
      </div>

      <div className="space-y-12">
        <OwnerAppointments owner={owner} />
      </div>
    </div>
  );
}

export default OwnerProfile;
