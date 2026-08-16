import { useState } from "react";

import AppointmentFilters from "../../components/appointments/AppointmentFilter";
import AppointmentList from "../../components/appointments/AppointmentList";

import { appointments } from "../../data/appointments";

function Appointments() {
  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

const filteredAppointments = appointments.filter((appointment) => {
  const searchValue = search.trim().toLowerCase();

  const petName = appointment.pet?.name?.toLowerCase() ?? "";

  const ownerName = appointment.owner?.name?.toLowerCase() ?? "";

  const matchesSearch =
    petName.includes(searchValue) || ownerName.includes(searchValue);

  const matchesStatus = status === "all" || appointment.status === status;

  return matchesSearch && matchesStatus;
});

  return (
    <div className="space-y-10">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
          Appointments
        </h1>

        <p className="text-sm leading-6 text-text-secondary">
          View and manage veterinary appointments.
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
