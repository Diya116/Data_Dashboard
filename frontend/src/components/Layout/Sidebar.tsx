import { Link, useLocation } from "react-router-dom";
import { X, LayoutDashboard, Users, FileText, Settings } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const location = useLocation();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { id: "users", label: "Users", icon: Users, path: "/dashboard/users" },
    { id: "reports", label: "Reports", icon: FileText, path: "/dashboard/reports" },
    { id: "settings", label: "Settings", icon: Settings, path: "/dashboard/settings" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={onClose}
          className="lg:hidden fixed inset-0  bg-opacity-50 z-30"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border shadow-sm transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="h-screen flex flex-col overflow-hidden">
          {/* Logo/Brand with Close Button */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-sidebar-border shrink-0">
            <h1 className="text-xl font-semibold text-sidebar-foreground">Dashboard</h1>
            {/* Close button for mobile - top right corner */}
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-md hover:bg-sidebar-accent transition-colors cursor-pointer"
              aria-label="Close sidebar"
            >
              <X size={24} className="text-sidebar-foreground" />
            </button>
          </div>

          {/* Navigation - No scrolling */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={onClose}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;