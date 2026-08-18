import { createContext, useContext, useState } from "react";

import { getAppointmentsWithDetails } from "../helpers/appointments";

const AppointmentContext = createContext();

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState(
    getAppointmentsWithDetails(),
  );

  function updateAppointmentStatus(id, status) {
    setAppointments((currentAppointments) =>
      currentAppointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              status,
            }
          : appointment,
      ),
    );
  }

  function checkInAppointment(id) {
    updateAppointmentStatus(id, "checkedIn");
  }

  function completeAppointment(id) {
    updateAppointmentStatus(id, "completed");
  }

  function cancelAppointment(id) {
    updateAppointmentStatus(id, "cancelled");
  }

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        updateAppointmentStatus,
        checkInAppointment,
        completeAppointment,
        cancelAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  return useContext(AppointmentContext);
}
