import { Search } from 'lucide-react';

function AppointmentFilters({ search, setSearch, status, setStatus }) {
const statuses = [
  { value: "all", label: "All" },
  { value: "scheduled", label: "Scheduled" },
  { value: "checkedIn", label: "Checked In" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
];

  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
        />

        <input
          type="text"
          placeholder="Search by pet or owner name..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          className="
            w-full
            rounded-lg
            border
            border-border
            bg-surface
            py-2.5
            pl-10
            pr-4
            text-sm
            outline-none
            transition
            focus:border-primary
          "
        />
      </div>

      {/* Status Filters */}

      <div className="flex flex-wrap gap-2">
        {statuses.map((item) => (
          <button
            type="button"
            key={item.value}
            onClick={() => setStatus(item.value)}
            className={`
              rounded-lg
              px-4
              py-2
              text-sm
              font-medium
              transition
              cursor-pointer
              focus:outline-none
              focus:ring-2
              focus:ring-primary/20
              ${
                status === item.value
                  ? "bg-primary text-white"
                  : "bg-surface-muted text-text-secondary hover:text-text-primary"
              }
              `}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AppointmentFilters;
