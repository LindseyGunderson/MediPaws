function AppointmentFilters({ search, setSearch, status, setStatus }) {
  const statuses = [
    "all",
    "scheduled",
    "checkedIn",
    "completed",
    "cancelled",
  ];

  return (
    <div className="space-y-4">
      {/* Search */}

      <input
        type="text"
        placeholder="Search appointments..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="
          w-full
          rounded-lg
          border
          border-border
          bg-surface
          px-4
          py-2
          text-sm
          outline-none
          focus:border-primary
        "
      />

      {/* Status Filters */}

      <div className="flex flex-wrap gap-2">
        {statuses.map((item) => (
          <button
            key={item}
            onClick={() => setStatus(item)}
            className={`
              rounded-lg
              px-4
              py-2
              text-sm
              font-medium
              transition

              ${
                status === item
                  ? "bg-primary text-white"
                  : "bg-surface-muted text-text-secondary hover:text-text-primary"
              }
            `}
          >
            {item === "all" ? "All" : item.replace(/([A-Z])/g, " $1")}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AppointmentFilters;
