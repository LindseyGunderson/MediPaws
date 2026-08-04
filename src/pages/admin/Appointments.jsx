import { useState } from "react";

import AppointmentFilters from "../../components/appointments/AppointmentFilter";
import AppointmentList from "../../components/appointments/AppointmentList";

import { appointments } from "../../data/appointments";

function Appointments() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

const filteredAppointments = appointments.filter((appointment) => {
  const searchTerm = search.toLowerCase();

  const matchesSearch =
    appointment.pet.name.toLowerCase().includes(searchTerm) ||
    appointment.owner.toLowerCase().includes(searchTerm) ||
    appointment.type.toLowerCase().includes(searchTerm);

  const matchesStatus = status === "all" || appointment.status === status;

  return matchesSearch && matchesStatus;
});

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-xl font-semibold text-text-primary">
          Appointments
        </h2>

        <p className="mt-1 text-sm text-text-secondary">
          View and manage upcoming veterinary visits.
        </p>
      </section>

      <AppointmentFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <AppointmentList appointments={filteredAppointments} />
    </div>
  );
}

export default Appointments;
