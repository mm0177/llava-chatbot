import React, { useState } from 'react';
import logoIcon from '../assets/img/mazebot_logo.png';
import './home.css';

function Home() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <img src={logoIcon} alt="Mazebot Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/workflow">Workflow</a>
            </li>
            <li>
              <a href="/faqs">FAQS</a>
            </li>
            <li>
              <a href="/support">Support</a>
            </li>
          </ul>
        </nav>
        <div className="auth">
          <button>Log in</button>
          <button>Register</button>
        </div>
      </header>

      <main className="main">
        <section className="intro">
          <h1>Welcome to Mazebot</h1>
          <h2>Your Conversational Image Recognition Assistant</h2>
          <div className="input-container">
            <input type="text" placeholder="Enter your mail id" />
            <button>Get Started</button>
          </div>
        </section>

        <section className="features">
          <div className="feature-container">
            <button onClick={() => handleFeatureClick('Feature 1')}>Feature 1</button>
            <button onClick={() => handleFeatureClick('Feature 2')}>Feature 2</button>
            <button onClick={() => handleFeatureClick('Feature 3')}>Feature 3</button>
          </div>

          <div className="feature-content">
            {selectedFeature === 'Feature 1' && (
              <div className="feature-details">
                <h3>Memory Management</h3>
                <p>
                  Mazebot doesn't just process your requests—it remembers
                  them. Our advanced memory management system ensures
                  that each interaction builds on the last, creating a
                  continuous and context-aware conversation. This feature
                  is essential for providing accurate and relevant responses
                  throughout your session.
                </p>
                <button className="learn-more">Learn more</button>
              </div>
            )}
            {selectedFeature === 'Feature 2' && (
              <div className="feature-details">
                <h3>Feature 2 Details</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla facilisi. Donec euismod, purus vel egestas
                  volutpat, purus urna vestibulum ligula, at semper
                  sapien mi vitae elit.
                </p>
                <button className="learn-more">Learn more</button>
              </div>
            )}
            {selectedFeature === 'Feature 3' && (
              <div className="feature-details">
                <h3>Feature 3 Details</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla facilisi. Donec euismod, purus vel egestas
                  volutpat, purus urna vestibulum ligula, at semper
                  sapien mi vitae elit.
                </p>
                <button className="learn-more">Learn more</button>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 Mazebot. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
