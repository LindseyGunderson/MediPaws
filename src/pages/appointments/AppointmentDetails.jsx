import { useParams } from "react-router-dom";

import { getAppointmentsWithDetails } from "../../helpers/appointments";

import AppointmentHeader from "../../components/appointments/AppointmentHeader";
import AppointmentInfo from "../../components/appointments/AppointmentInfo";
import AppointmentPatientInfo from "../../components/appointments/AppointmentPatientInfo";

function AppointmentDetails() {
  const { id } = useParams();

  const appointments = getAppointmentsWithDetails();

  const appointment = appointments.find(
    (appointment) => Number(appointment.id) === Number(id),
  );

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

      <div className="space-y-6">
        <AppointmentInfo appointment={appointment} />
        <AppointmentPatientInfo appointment={appointment} />
      </div>
    </div>
  );
}

export default AppointmentDetails;
