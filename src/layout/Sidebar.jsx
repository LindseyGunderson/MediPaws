import { navigation } from "../config/navigation";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside
      className="
      flex
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
        {/* Logo placeholder */}

        <div className="mb-8 px-2">
          <h1 className="text-xl font-semibold">MediPaws</h1>

          <p className="text-sm text-text-secondary">Clinic Operations</p>
        </div>

        {/* Navigation placeholder*/}

        <nav>
          <ul className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      px-3
                      py-2
                      text-sm
                      font-medium
                      transition

                      ${
                        isActive
                          ? "bg-primary-light text-primary"
                          : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
                      }
                      `
                    }
                  >
                    <Icon size={18} />

                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* User placeholder */}

      <div className="border-t border-border pt-4">
        <p className="font-medium">Sarah Wilson</p>

        <p className="text-sm text-text-secondary">Clinic Administrator</p>
      </div>
    </aside>
  );
}

export default Sidebar;
