import React from 'react';
import logoIcon from '../assets/img/mazebot_logo.png';
import'./Home.css';

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
            <li><a href="/features">Features</a></li>
            <li><a href="/workflow">Workflow</a></li>
            <li><a href="/faqs">FAQS</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </nav>
        <div className="auth">
          <button className="auth-button">Log in</button>
          <button className="auth-button">Register</button>
        </div>
      </header>
    </div>
  );
}
