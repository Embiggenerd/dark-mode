import React, { useEffect, useState } from 'react';
import { useLocalStorage, useDarkMode } from '../hooks'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode()


  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
