import { useState } from "react";
import { Plus } from "lucide-react";
import ActionButton from "../../components/ui/ActionButton";

import AppointmentFilters from "../../components/appointments/list/AppointmentFilters";
import AppointmentList from "../../components/appointments/list/AppointmentList";

import { useAppointments } from "../../context/AppointmentContext";
import { filterAppointments } from '../../helpers/appointments';

function Appointments() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [type, setType] = useState("all");

  const { appointments } = useAppointments();

  const filteredAppointments = filterAppointments(appointments, {
    search,
    status,
    dateFilter,
    type,
  });

  return (
    <div className="mx-auto w-full max-w-7xl space-y-10">
      {/* Header */}
      <header
        className="
          flex
          flex-col
          gap-8
          border-b
          border-border/70
          pb-10
          sm:flex-row
          sm:items-end
          sm:justify-between
        "
      >
        <div>
          <h1
            className="
              text-3xl
              font-semibold
              tracking-tight
              text-text-primary
              sm:text-4xl
            "
          >
            <h1 className="text-3xl font-semibold tracking-tight text-text-primary">
              Appointments
            </h1>
          </h1>
        </div>
        <div>
          <ActionButton
            icon={Plus}
            to="/appointments/new"
            text="New Appointment"
          />
        </div>
      </header>

      {/* Filters */}
      <AppointmentFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        type={type}
        setType={setType}
      />
      
        {/* Appointments */}
        <AppointmentList appointments={filteredAppointments} />
    </div>
  );
}

export default Appointments;
