import { Cat, Dog, PawPrint, UserRound } from "lucide-react";
import Card from "../ui/Card";

function AppointmentPatientInfo({ appointment }) {
  const { pet, owner } = appointment;

  const PetIcon =
    pet.species.toLowerCase() === "dog"
      ? Dog
      : pet.species.toLowerCase() === "cat"
        ? Cat
        : PawPrint;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <Card>
        <p className="text-xs font-medium text-text-secondary">Pet</p>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center text-text-secondary">
            <PetIcon size={18} />
          </div>

          <div>
            <p className="font-medium text-text-primary">{pet.name}</p>

            <p className="mt-0.5 text-sm text-text-secondary">{pet.species}</p>
          </div>
        </div>
      </Card>

      <Card>
        <p className="text-xs font-medium text-text-secondary">Owner</p>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center text-text-secondary">
            <UserRound size={18} />
          </div>

          <p className="font-medium text-text-primary">{owner.name}</p>
        </div>
      </Card>
    </div>
  );
}

export default AppointmentPatientInfo;
