import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import Button from '../ui/Button';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 dark:bg-navy text-white dark:text-gold px-6 py-4 flex flex-wrap items-center justify-between">
      {/* Site Title */}
      <h1 className="text-xl font-bold w-full sm:w-auto mb-2 sm:mb-0">
        Emmaculate's Expense Tracker
      </h1>

      {/* Navigation Links & Theme Toggle */}
      <div className="flex flex-wrap gap-4 items-center">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/tasks" className="hover:underline">
          Tasks
        </Link>
        <Link to="/posts" className="hover:underline">Posts</Link>

        <Button onClick={toggleTheme} variant="secondary">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
