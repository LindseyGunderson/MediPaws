import Sidebar from "./Sidebar";
import Header from "./Header";
import PageContainer from "../layout/Dashboard";

function AppLayout({ children }) {
  return (
    <div className="grid min-h-screen grid-cols-[260px_1fr] bg-background">
      <Sidebar />

      <div className="flex flex-col">
        <Header />

        <PageContainer>{children}</PageContainer>
      </div>
    </div>
  );
}

export default AppLayout;
