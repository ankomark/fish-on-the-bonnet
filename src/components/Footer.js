import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">Fish On The Bonnet</h3>
          <p className="footer-text">Savor the finest fish dishes from around the world.</p>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/menu" className="footer-link">Menu</Link></li>
            <li><Link to="/about" className="footer-link">About</Link></li>
            <li><Link to="/contact" className="footer-link">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">Email: fishonthebonnet@gmail.com</p>
          <p className="footer-text">Phone: +254 768969534</p>
          <p className="footer-text">Address: P.O. Box 50990-00100, Nairobi Fish On The Bonnet kasarani</p>
        </div>
      </div>
      
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} Fish On The Bonnet. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;