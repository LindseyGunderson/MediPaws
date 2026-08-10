import { useParams } from "react-router-dom";

import { appointments } from "../../data/appointments";
import { getAppointmentById } from "../../utils/appointments";

import AppointmentHeader from "../../components/appointments/AppointmentHeader";
import AppointmentInfo from "../../components/appointments/AppointmentInfo";
import AppointmentActions from "../../components/appointments/AppointmentActions";
import AppointmentPatientInfo from "../../components/appointments/AppointmentPatientInfo";

function AppointmentDetails() {
  const { id } = useParams();

  const appointment = getAppointmentById(appointments, id);

  if (!appointment) {
    return (
      <div className="mx-auto max-w-5xl">
        <h2 className="text-xl font-semibold text-text-primary">
          Appointment not found
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          The appointment you're looking for could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <AppointmentHeader appointment={appointment} />

      <AppointmentInfo appointment={appointment} />

      <AppointmentPatientInfo appointment={appointment} />

      <div className="flex justify-end border-t border-border pt-6">
        <AppointmentActions appointment={appointment} />
      </div>
    </div>
  );
}

export default AppointmentDetails;
