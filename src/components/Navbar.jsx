import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={handleLinkClick}>Kioh Tours and Travel</Link>
      </div>
      <button
        className="navbar-hamburger"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        ☰menu
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="navbar-link" onClick={handleLinkClick}>Home</Link>
        <Link to="/about" className="navbar-link" onClick={handleLinkClick}>About</Link>
        <Link to="/destinations" className="navbar-link" onClick={handleLinkClick}>Destinations</Link>
        <Link to="/booking" className="navbar-link" onClick={handleLinkClick}>Booking</Link>
        <Link to="/contact" className="navbar-link" onClick={handleLinkClick}>Contact Us</Link>
        <Link to="/pricing" className="navbar-link" onClick={handleLinkClick}>Pricing</Link>
      </div>
    </nav>
  );
};

export default Navbar;
