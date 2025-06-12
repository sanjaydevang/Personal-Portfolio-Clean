'use client';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg z-50"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FaMoon className="w-6 h-6 text-gray-800" />
      ) : (
        <FaSun className="w-6 h-6 text-yellow-500" />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 