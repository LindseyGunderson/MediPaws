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
        border-border
        bg-surface
        px-8
        py-5
      "
    >
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">{title}</h1>

        <p className="mt-1 text-sm text-text-secondary">{description}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="
            rounded-lg
            p-2
            text-text-secondary
            transition
            hover:bg-surface-muted
            hover:text-text-primary
          "
        >
          <Search size={20} />
        </button>

        <button
          className="
            rounded-lg
            p-2
            text-text-secondary
            transition
            hover:bg-surface-muted
            hover:text-text-primary
          "
        >
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;
