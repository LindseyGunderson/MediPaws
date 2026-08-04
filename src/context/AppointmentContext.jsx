import { createContext, useContext, useState } from "react";

import { appointments as initialAppointments } from "../data/appointments";

const AppointmentContext = createContext();

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useState(initialAppointments);

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

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        updateAppointmentStatus,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  return useContext(AppointmentContext);
}
