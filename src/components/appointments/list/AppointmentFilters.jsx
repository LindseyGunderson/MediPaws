import { Search, X, ChevronDown } from "lucide-react";
import Card from "../../ui/Card";

function AppointmentFilters({
  search,
  setSearch,
  status,
  setStatus,
  dateFilter,
  setDateFilter,
  type,
  setType,
}) {
  const statuses = [
    { value: "all", label: "All statuses" },
    { value: "scheduled", label: "Scheduled" },
    { value: "checkedIn", label: "Checked In" },
    { value: "inProgress", label: "In Progress" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ];

  const dateOptions = [
    { value: "all", label: "All dates" },
    { value: "today", label: "Today" },
    { value: "tomorrow", label: "Tomorrow" },
    { value: "thisWeek", label: "This week" },
    { value: "next7Days", label: "Next 7 days" },
    { value: "past", label: "Past appointments" },
  ];

  const appointmentTypes = [
    { value: "all", label: "All types" },
    { value: "wellnessExam", label: "Wellness Exam" },
    { value: "wellnessCheckup", label: "Wellness Checkup" },
    { value: "vaccination", label: "Vaccination" },
    { value: "dentalCleaning", label: "Dental Cleaning" },
    { value: "surgery", label: "Surgery" },
    { value: "followUp", label: "Follow-up" },
  ];

  const hasActiveFilters =
    search.trim() !== "" ||
    status !== "all" ||
    dateFilter !== "all" ||
    type !== "all";

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
    setDateFilter("all");
    setType("all");
  };

  const selectClasses = `
      h-10
      w-full
      appearance-none
      rounded-md
      border
      border-border / 70
      bg-surface
      py-2
      pl-3.5
      pr-9
      text-sm
      font-medium
      text-text-primary
      outline-none
      transition
      duration- 150
      focus:border-primary/50
      focus:ring-2
      focus:ring-primary/10`;

  return (
    <Card>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        {/* Search */}
        <div className="relative w-full lg:max-w-md lg:flex-1">
          <label htmlFor="appointment-search" className="sr-only">
            Search appointments
          </label>

          <Search
            size={18}
            aria-hidden="true"
            className="
            pointer-events-none
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-text-secondary
          "
          />

          <input
            id="appointment-search"
            type="search"
            placeholder="Search by pet or owner..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="
            h-11
            w-full
            rounded-md
            border
            border-border/70
            bg-surface
            py-2.5
            pl-10
            pr-10
            text-sm
            text-text-primary
            outline-none
            transition
            duration-150
            placeholder:text-text-secondary
            focus:border-primary/50
            focus:ring-2
            focus:ring-primary/10
          "
          />

          {search && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => setSearch("")}
              className="
              absolute
              right-3
              top-1/2
              flex
              h-6
              w-6
              -translate-y-1/2
              items-center
              justify-center
              rounded-md
              text-text-secondary
              transition
              hover:bg-surface-muted
              hover:text-text-primary
              focus:outline-none
              focus:ring-2
              focus:ring-primary/20
            "
            >
              <X size={15} />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex w-full flex-wrap gap-3 lg:w-auto lg:flex-nowrap">
          {/* Status */}
          <div className="relative min-w-0 flex-1 sm:flex-none">
            <label htmlFor="appointment-status" className="sr-only">
              Filter by status
            </label>

            <select
              id="appointment-status"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
              className={selectClasses}
            >
              {statuses.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              aria-hidden="true"
              className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-text-secondary
            "
            />
          </div>

          {/* Date */}
          <div className="relative min-w-0 flex-1 sm:flex-none">
            <label htmlFor="appointment-date" className="sr-only">
              Filter by date
            </label>

            <select
              id="appointment-date"
              value={dateFilter}
              onChange={(event) => setDateFilter(event.target.value)}
              className={selectClasses}
            >
              {dateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              aria-hidden="true"
              className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-text-secondary
            "
            />
          </div>

          {/* Appointment Type */}
          <div className="relative min-w-0 flex-1 sm:flex-none">
            <label htmlFor="appointment-type" className="sr-only">
              Filter by appointment type
            </label>

            <select
              id="appointment-type"
              value={type}
              onChange={(event) => setType(event.target.value)}
              className={selectClasses}
            >
              {appointmentTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              aria-hidden="true"
              className="
              pointer-events-none
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              text-text-secondary
            "
            />
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="
            shrink-0
            self-start
            rounded
            text-sm
            font-medium
            text-text-secondary
            transition
            duration-150
            hover:text-text-primary
            focus:outline-none
            focus:ring-2
            focus:ring-primary/20
            lg:self-auto
          "
          >
            Clear filters
          </button>
        )}
      </div>
    </Card>
  );
}

export default AppointmentFilters;