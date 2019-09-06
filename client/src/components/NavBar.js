import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

import '../index.css'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  }

  return (
      <>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
          data-testid="darkToggleButton"
        />
      </div>
      <h2>Jeff's Soccer Cards</h2>
      </>
  )
}

export default Navbar;