import { Bell, Search } from "lucide-react";

function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-border bg-surface px-8">
      <div>
        <h2 className="text-2xl font-semibold">Dashboard</h2>

        <p className="text-sm text-text-secondary">
          Good afternoon! Here's today's clinic overview.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-lg p-2 hover:bg-surface-muted">
          <Search size={20} />
        </button>

        <button className="rounded-lg p-2 hover:bg-surface-muted">
          <Bell size={20} />
        </button>
      </div>
    </header>
  );
}

export default Header;
