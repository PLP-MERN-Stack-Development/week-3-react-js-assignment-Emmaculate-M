import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('dark');
    return saved === 'true' || false;
  });

  useEffect(() => {
    const root = document.documentElement; // This is <html>
    if (darkMode) {
      root.classList.add('dark'); // ✅ Adds dark mode class
    } else {
      root.classList.remove('dark'); // ❌ Removes if not dark
    }

    localStorage.setItem('dark', darkMode); // ✅ Save preference
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
