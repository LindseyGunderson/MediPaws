import { useState } from "react";
import { useParams } from "react-router-dom";

import { useAppointments } from "../../context/AppointmentContext";

import AppointmentHeader from "../../components/appointments/AppointmentHeader";
import AppointmentInfo from "../../components/appointments/AppointmentInfo";
import AppointmentPatientInfo from "../../components/appointments/AppointmentPatientInfo";
import AppointmentEditDrawer from "../../components/appointments/AppointmentEditDrawer";

function AppointmentDetails() {
  const { id } = useParams();

  const { appointments } = useAppointments();
  
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);

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
      <AppointmentHeader
        appointment={appointment}
        onEdit={() => setIsEditDrawerOpen(true)}
      />

      <div className="space-y-6">
        <AppointmentInfo appointment={appointment} />
        <AppointmentPatientInfo appointment={appointment} />
      </div>

      <AppointmentEditDrawer
        appointment={appointment}
        isOpen={isEditDrawerOpen}
        onClose={() => setIsEditDrawerOpen(false)}
      />
    </div>
  );
}

export default AppointmentDetails;
