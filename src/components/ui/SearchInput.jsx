import { Search, X } from "lucide-react";

function SearchInput({ value, onChange, placeholder = "Search..." }) {
  const handleClear = () => {
    onChange("");
  };

  return (
    <div className="relative max-w-xl">
      <Search
        size={18}
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
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="
          w-full
          rounded-lg
          border
          border-border
          bg-surface
          py-2.5
          pl-10
          pr-10
          text-sm
          text-text-primary
          outline-none
          transition
          placeholder:text-text-secondary
          focus:border-primary
        "
      />

      {value && (
        <button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-text-secondary
            transition
            hover:text-text-primary
          "
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}

export default SearchInput;
