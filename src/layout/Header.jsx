import { Bell, Search } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

function Header() {
  const { title, description } = usePageMeta();

  return (
    <header
      className="
        flex
        items-center
        justify-between
        border-b
        border-border/70
        bg-surface
        px-8
        py-6
      "
    >
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-text-primary">
          {title}
        </h1>

        <p className="mt-1.5 text-sm leading-5 text-text-secondary">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {/* Search + notifications */}
        <div
          className="
            flex
            items-center
            gap-2
            rounded-lg
            border
            border-border/70
            bg-background
            p-1
          "
        >
          <button
            type="button"
            aria-label="Search"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-md
              text-text-secondary
              transition
              duration-150
              hover:bg-surface
              hover:text-text-primary
              active:scale-95
            "
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            aria-label="Notifications"
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-md
              text-text-secondary
              transition
              duration-150
              hover:bg-surface
              hover:text-text-primary
              active:scale-95
            "
          >
            <Bell size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-border/70" />

        {/* Administrator */}
        <button
          type="button"
          className="
            flex
            items-center
            gap-3
            rounded-lg
            px-2
            py-1.5
            text-left
            transition
            duration-150
            hover:bg-surface-muted
            active:scale-[0.98]
          "
        >
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-primary-light
              text-sm
              font-semibold
              text-primary
            "
          >
            SW
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-text-primary">
              Sarah Wilson
            </p>

            <p className="text-xs text-text-secondary">Administrator</p>
          </div>
        </button>
      </div>
    </header>
  );
}

export default Header;
