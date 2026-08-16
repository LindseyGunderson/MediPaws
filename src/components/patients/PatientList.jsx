import PatientRow from "./PatientRow";
import Card from "../ui/Card";

function PatientList({ owners }) {

  if (owners.length === 0) {
    return (
      <Card className="flex min-h-40 items-center justify-center text-center">
        <div>
          <p className="font-medium text-text-primary">No patients found</p>

          <p className="mt-1 text-sm text-text-secondary">
            Try adjusting your search.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-3">
      {owners.map((owner) => (
        <PatientRow key={owner.id} owner={owner} />
      ))}
    </div>
  );
}

export default PatientList;