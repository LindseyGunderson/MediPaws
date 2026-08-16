import { useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import PageContainer from "../layout/Header/PageContainer";

function AppLayout({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((current) => !current);
  };

  return (
    <div
      className={`
        grid
        h-screen
        overflow-hidden
        bg-background
        transition-[grid-template-columns]
        duration-200
        ${
          isSidebarCollapsed
            ? "grid-cols-[72px_1fr]"
            : "grid-cols-[var(--spacing-sidebar)_1fr]"
        }
      `}
    >
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />

      <div className="flex min-h-0 min-w-0 flex-col">
        <Header />

        <main className="min-h-0 flex-1 overflow-y-auto">
          <PageContainer>{children}</PageContainer>
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
