import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

export default function DashboardLayout() {
  return (
    <div className="w-full h-screen flex bg-gray-100">
      {/*<Sidebar />*/}

      {/* ===== Main Content Section ===== */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <DashboardNavbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto bg-light">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
