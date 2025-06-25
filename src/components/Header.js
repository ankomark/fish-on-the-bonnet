import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-wrapper">
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-container">
          <img 
            src="https://images.pexels.com/photos/16931505/pexels-photo-16931505.jpeg" 
            alt="Fish on the Bonnet Logo" 
            className="logo-img"
          />
          <span className="logo-text">Fish on the Bonnet</span>
        </Link>
        
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
         
          <Link to="/contact">Contact</Link>
        </nav>
        
        <button
          className="mobile-menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="menu-icon" viewBox="0 0 24 24" fill="none">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <nav className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
         
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
    </div>
  );
}

export default Header;