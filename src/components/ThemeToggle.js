import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Passer au mode clair' : 'Passer au mode sombre'}
      title={isDark ? 'Mode clair' : 'Mode sombre'}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className={`theme-toggle-thumb${isDark ? ' is-dark' : ''}`} />
      </span>
      <span className="theme-toggle-label">{isDark ? 'Clair' : 'Sombre'}</span>
    </button>
  );
}

export default ThemeToggle;
