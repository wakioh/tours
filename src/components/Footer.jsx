import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>Kioh Tours & Travel</h3>
          <p>
            Discover Kenya with our tailor-made safari experiences. From the iconic Maasai Mara to the serene Lake Nakuru, we bring you closer to nature.
          </p>
        </div>
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/booking">Book Your Safari</Link></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>
            Email: <a href="mailto:johnwakioh@gmail.com">johnwakioh@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+254721391138">+254 721391138</a>
          </p>
          <p>
            Office location: <a href="https://maps.app.goo.gl/iNhucRKa72jFJHaU9">
              Kiambu Town, Kenyatu House, Rm 26 Biashara Street, Kenya
            </a>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Kioh Tours & Travel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
