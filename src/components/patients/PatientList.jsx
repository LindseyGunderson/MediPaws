import PatientRow from "./PatientRow";
import Card from "../ui/Card";

function PatientList({ owners }) {

  if (owners.length === 0) {
    return (
      <Card className="py-12 text-center">
        <p className="font-medium text-text-primary">No patients found</p>

        <p className="mt-1 text-sm text-text-secondary">
          Try adjusting your search.
        </p>
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