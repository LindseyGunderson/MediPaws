import { UserRound } from "lucide-react";

import Card from "../ui/Card";
import PetAvatar from "../pets/PetAvatar";

function AppointmentPatientInfo({ appointment }) {
  const { pet, owner } = appointment;

  return (
    <section>
      <div>
        <h2 className="text-lg font-semibold text-text-primary mb-4">
          Patient & Owner
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Patient */}
          <Card>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-text-primary">
                Patient
              </h2>
              <span
                className="
                  rounded-full
                  bg-primary/10
                  px-2.5
                  py-1
                  text-xs
                  font-medium
                  text-primary
                "
              >
                {pet.species}
              </span>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <PetAvatar pet={pet} size="md" />
              <div className="min-w-0">
                <p className="text-lg font-semibold tracking-tight text-text-primary">
                  {pet.name}
                </p>
                <p className="mt-0.5 text-sm text-text-secondary">
                  {pet.breed}
                </p>
              </div>
            </div>
          </Card>
          {/* Owner */}
          <Card>
            <h2 className="text-lg font-semibold text-text-primary">Owner</h2>
            <div className="mt-5 flex items-center gap-4">
              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-primary/10
                  text-primary
                "
              >
                <UserRound size={20} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-lg font-semibold tracking-tight text-text-primary">
                  {owner.name}
                </p>
                <p className="mt-0.5 truncate text-sm text-text-secondary">
                  {owner.email}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AppointmentPatientInfo;
