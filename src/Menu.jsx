import React from 'react';
import './Menu.css';



function Menu() {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">Logo</a>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        Menu
      </button>
      <ul className={`navbar-menu ${showMenu ? 'show' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Menu;