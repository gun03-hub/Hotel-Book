import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">About Us</h3>
          <p className="footer__text">
            We offer the best hotel booking experience with a wide selection of hotels and unbeatable prices. Your satisfaction is our priority.
          </p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__list">
            <li><a href="#about-us-section" className="footer__link">About Us</a></li>
            <li><a href="/contact" className="footer__link">Contact</a></li>
            <li><a href="/terms" className="footer__link">Terms & Conditions</a></li>
            <li><a href="/privacy" className="footer__link">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Contact Us</h3>
          <p className="footer__text">Email: 4518gunjanarora@gmail.com</p>
          <p className="footer__text">Phone: +91 9350613357</p>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Follow Us</h3>
          <div className="footer__socials">
            <a href="https://facebook.com" className="footer__social-link">Facebook</a>
            <a href="https://twitter.com" className="footer__social-link">Twitter</a>
            <a href="https://instagram.com" className="footer__social-link">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">© 2024 HotelBooking. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
