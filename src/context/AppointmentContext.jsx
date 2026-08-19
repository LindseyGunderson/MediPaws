import { createContext, useContext, useState } from "react";

import { getAppointmentsWithDetails, getAppointmentWithDetails } from "../helpers/appointments";

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

  function updateAppointment(id, updates) {
    setAppointments((currentAppointments) =>
      currentAppointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              ...updates,
            }
          : appointment,
      ),
    );
  }

function createAppointment({ petId, ownerId, date, time, type }) {
  setAppointments((currentAppointments) => {
    const nextId =
      currentAppointments.length > 0
        ? Math.max(
            ...currentAppointments.map((appointment) => appointment.id),
          ) + 1
        : 1;

    const newAppointment = {
      id: nextId,
      petId: Number(petId),
      ownerId: Number(ownerId),
      date,
      time,
      type,
      status: "scheduled",
    };

    return [...currentAppointments, getAppointmentWithDetails(newAppointment)];
  });
}

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        updateAppointment,
        updateAppointmentStatus,
        checkInAppointment,
        completeAppointment,
        cancelAppointment,
        createAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

export function useAppointments() {
  return useContext(AppointmentContext);
}
