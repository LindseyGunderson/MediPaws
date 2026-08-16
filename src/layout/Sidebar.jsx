import { navigation } from "../config/navigation";
import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight, PawPrint } from "lucide-react";

function Sidebar({ isCollapsed, onToggle }) {
  return (
    <aside
      className="
        flex
        h-full
        flex-col
        justify-between
        border-r
        border-border
        bg-surface
        px-4
        py-6
      "
    >
      <div>
        {/* Brand */}
        <div
          className={`
            mb-8
            flex
            items-center
            ${isCollapsed ? "justify-center" : "gap-3 px-2"}
          `}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
            <PawPrint size={20} />
          </div>

          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-semibold text-text-primary">
                MediPaws
              </h1>

              <p className="text-sm text-text-secondary">Clinic Operations</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav aria-label="Main navigation">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    aria-label={isCollapsed ? item.label : undefined}
                    title={isCollapsed ? item.label : undefined}
                    className={({ isActive }) =>
                      `
                        flex
                        items-center
                        rounded-lg
                        py-2
                        text-sm
                        font-medium
                        transition

                        ${isCollapsed ? "justify-center px-2" : "gap-3 px-3"}

                        ${
                          isActive
                            ? "bg-primary-light text-primary"
                            : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                        }
                      `
                    }
                  >
                    <Icon size={18} />

                    {!isCollapsed && <span>{item.label}</span>}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom section */}
      <div className="space-y-4">
        <button
          type="button"
          onClick={onToggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="
            flex
            w-full
            items-center
            rounded-lg
            py-2
            text-sm
            font-medium
            text-text-secondary
            transition
            hover:bg-surface-muted
            hover:text-text-primary
          "
        >
          {isCollapsed ? (
            <ChevronRight size={18} className="mx-auto" />
          ) : (
            <>
              <ChevronLeft size={18} />
              <span className="ml-3">Collapse</span>
            </>
          )}
        </button>

      </div>
    </aside>
  );
}

export default Sidebar;
