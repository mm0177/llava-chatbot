import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import logoIcon from '../assets/img/mazebot_logo.png';
import './Home.css';

export default function Navbar() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logoIcon} alt="Mazebot Logo" />
          <p className='mazebot'>Mazebot</p>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">Workflow</a></li>
            <li><a href="#faqs">FAQS</a></li>
            <li><a href="#footer">Support</a></li>
          </ul>
        </nav>
        <div className="auth">
          <Link to="/login"> {/* Use Link component for navigation */}
            <button className="auth-button">Log in</button>
          </Link>
          <Link to="/register"> {/* Use Link component for navigation */}
            <button className="auth-button">Register</button>
          </Link>
        </div>
      </header>
    </div>
  );
}
