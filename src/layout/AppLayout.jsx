import Sidebar from "./Sidebar";
import Header from "./Header";
import PageContainer from "../layout/Header/PageContainer";

function AppLayout({ children }) {
  return (
    <div className="grid min-h-screen grid-cols-[var(--spacing-sidebar)_1fr] bg-background">
      <Sidebar />

      <div className="flex flex-col">
        <Header />

        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
}

export default AppLayout;
