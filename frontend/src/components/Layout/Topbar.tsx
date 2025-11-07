import { useState } from "react";
import { Search, LogOut, User, Menu } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

interface TopBarProps {
  onToggleSidebar: () => void;
}

const TopBar = ({ onToggleSidebar }: TopBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { logout } = useAuth();

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      logout();
    }
  };

  return (
    <header className="h-16 bg-card border-b border-border sticky top-0 z-30 shrink-0">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between gap-4">
        {/* Mobile Menu Button */}
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-md hover:bg-accent transition-colors cursor-pointer"
          aria-label="Toggle sidebar"
        >
          <Menu size={24}  className="text-sidebar-foreground"/>
        </button>
        {/* Search Bar */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
              size={20} 
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-background text-foreground border border-input rounded-md placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* User Avatar */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-md  transition-colors cursor-pointer">
            <div className="w-8 h-8 bg-primary/10 border text-muted-foreground rounded-full flex items-center justify-center">
              <User className="text-muted-foreground" size={18} />
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors cursor-pointer"
            aria-label="Logout"
            title="Logout"
          >
            <LogOut size={18} />
            <span className="hidden sm:block">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;