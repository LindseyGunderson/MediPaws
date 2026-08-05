import PatientList from "../../components/patients/PatientList";

function Patients() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Patients</h1>

        <p className="text-text-secondary">Manage pet owners and their pets.</p>
      </div>

      <PatientList />
    </div>
  );
}

export default Patients;
