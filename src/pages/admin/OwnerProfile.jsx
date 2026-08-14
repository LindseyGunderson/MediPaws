import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

import { getOwnerWithPetsById } from "../../helpers/patients";

import OwnerHeader from "../../components/owners/OwnerHeader";
import OwnerPets from "../../components/owners/OwnerPets";
import OwnerAppointments from "../../components/owners/OwnerAppointments";
import OwnerPetNotes from "../../components/owners/OwnerPetNotes";
import OwnerContactInfo from "../../components/owners/OwnerContactInfo";

function OwnerProfile() {
  const { id } = useParams();

  const owner = getOwnerWithPetsById(Number(id));

  if (!owner) {
    return (
      <div>
        <h2 className="text-xl font-semibold text-text-primary">
          Owner not found
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          The owner you're looking for could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-10">
      {/* Breadcrumb */}
      <Link
        to="/patients"
        className="
          inline-flex
          items-center
          text-sm
          text-text-secondary
          transition
          hover:text-text-primary
        "
      >
        <ChevronLeft size={16} /> Back to Patients
      </Link>

        {/* Header */}
        <OwnerHeader owner={owner} />

        <div className="border-t border-border pt-10">
          {/* Contact + Notes */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <OwnerContactInfo owner={owner} />
            <OwnerPetNotes />
          </div>
        </div>

        {/* Pets */}
        <div className="border-t border-border pt-10">
          <OwnerPets owner={owner} />
        </div>

        {/* Appointments */}
        <div className="border-t border-border pt-10">
          <OwnerAppointments owner={owner} />
        </div>
      </div>
  );
}

export default OwnerProfile;
