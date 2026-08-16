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
        bg-primary
        px-3
        py-6
        text-white
      "
    >
      <div>
        {/* Brand */}
        <div
          className={`
            mb-10
            flex
            items-center
            ${isCollapsed ? "justify-center" : "gap-3 px-2"}
          `}
        >
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-white/10
              text-white
            "
          >
            <PawPrint size={20} strokeWidth={1.8} />
          </div>

          {!isCollapsed && (
            <div>
              <h1 className="text-xl font-semibold tracking-tight text-white">
                MediPaws
              </h1>

              <p className="mt-0.5 text-xs text-white/55">Clinic Operations</p>
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
                        group
                        flex
                        items-center
                        rounded-lg
                        py-2.5
                        text-sm
                        font-medium
                        transition-colors
                        duration-150

                        ${isCollapsed ? "justify-center px-2" : "gap-3 px-3"}

                        ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-white/65 hover:bg-white/5 hover:text-white"
                        }
                      `
                    }
                  >
                    <Icon size={18} strokeWidth={1.8} className="shrink-0" />

                    {!isCollapsed && <span>{item.label}</span>}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Bottom section */}
      <div className="space-y-3">
        <button
          type="button"
          onClick={onToggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={`
            flex
            w-full
            items-center
            rounded-lg
            py-2.5
            text-sm
            font-medium
            text-white/55
            transition-colors
            duration-150
            hover:bg-white/5
            hover:text-white

            ${isCollapsed ? "justify-center px-2" : "px-3"}
          `}
        >
          {isCollapsed ? (
            <ChevronRight size={18} strokeWidth={1.8} />
          ) : (
            <>
              <ChevronLeft size={18} strokeWidth={1.8} />

              <span className="ml-3">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
