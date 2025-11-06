import Button from '../components/ui/Button';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className='min-h-screen bg-background p-6'>
      <div className="bg-card border border-border rounded-lg p-6 max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-card-foreground">Theme Setting</h2>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground capitalize">{theme} mode</span>
          
          <Button
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;