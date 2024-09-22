import React from 'react';
import './Header.css'; // Import the CSS file for styling
import logo from '../assets/img/logo.png'; // Import your logo image

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="HotelBook Logo" className="header__logo-image" />
        <h1 className="header__logo-text">HotelBook</h1>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#search">Search</a></li>
          <li><a href="#about-us-section">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#signin">Sign In</a></li>
          <li><a href="#signup">Sign Up</a></li>
        </ul>
      </nav>
      <div className="header__language">
        <select>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
        </select>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search hotels, destinations..." />
        <button type="button">Search</button>
      </div>
    </header>
  );
};

export default Header;
