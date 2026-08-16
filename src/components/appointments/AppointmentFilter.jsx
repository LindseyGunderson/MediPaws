import { Search, X } from "lucide-react";

function AppointmentFilters({ search, setSearch, status, setStatus }) {
  const statuses = [
    { value: "all", label: "All" },
    { value: "scheduled", label: "Scheduled" },
    { value: "checkedIn", label: "Checked In" },
    { value: "completed", label: "Completed" },
    { value: "cancelled", label: "Cancelled" },
  ];

  const hasActiveFilters = search || status !== "all";

  const clearFilters = () => {
    setSearch("");
    setStatus("all");
  };

  return (
    <div className="space-y-5">
      {/* Search */}
      <div className="relative">
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
            rounded-lg
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

      {/* Status Filters */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-medium text-text-primary">Status</span>

          <div className="flex flex-wrap gap-2">
            {statuses.map((item) => {
              const isActive = status === item.value;

              return (
                <button
                  type="button"
                  key={item.value}
                  onClick={() => setStatus(item.value)}
                  aria-pressed={isActive}
                  className={`
                    rounded-lg
                    border
                    px-3.5
                    py-2
                    text-sm
                    font-medium
                    transition
                    duration-150
                    cursor-pointer
                    focus:outline-none
                    focus:ring-2
                    focus:ring-primary/20

                    ${
                      isActive
                        ? "border-primary bg-primary text-white shadow-sm"
                        : "border-border/70 bg-surface text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                    }
                  `}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="
              shrink-0
              text-sm
              font-medium
              text-text-secondary
              transition
              duration-150
              hover:text-text-primary
              focus:outline-none
              focus:ring-2
              focus:ring-primary/20
              rounded
            "
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}

export default AppointmentFilters;
