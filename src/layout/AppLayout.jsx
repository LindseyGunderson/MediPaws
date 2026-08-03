import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div>
      <Sidebar />

      <main>
        <Header />

        {children}
      </main>
    </div>
  );
}

export default AppLayout;
