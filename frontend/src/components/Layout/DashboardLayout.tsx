import { useState } from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import TopBar from "./Topbar"

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="min-h-screen  from-slate-50 via-blue-50 to-indigo-50">
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            <div className="lg:ml-64 flex flex-col min-h-screen">
                <TopBar onToggleSidebar={toggleSidebar} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
export default DashboardLayout;