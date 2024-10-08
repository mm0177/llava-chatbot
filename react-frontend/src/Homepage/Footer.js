import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Home.css';
import logoIcon from '../assets/img/mazebot_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-section">
        <div className="logo">
          <img src={logoIcon} alt="Mazebot Logo" />
          <p className="mazebot">Mazebot</p>
        </div>
  
      </div>
      <div className="footer-socials">
        <a href="https://facebook.com" className="social-icon" aria-label="Facebook">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://twitter.com" className="social-icon" aria-label="Twitter">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com" className="social-icon" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
      </div>
      <div className="footer-content">
        <p>&copy; Vision Mania. We love our users!</p>
      </div>
    </footer>
  );
};

export default Footer;
