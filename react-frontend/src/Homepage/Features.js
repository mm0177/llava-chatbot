import React, { useState } from 'react';
import logoIcon from '../assets/img/mazebot_logo.png';
import './Home.css';
import Navbar from './Navbar';
import Intro from './Intro';

function Features() {
  const [selectedFeature, setSelectedFeature] = useState('Feature 1'); // Default to 'Feature 1'

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="app-container">
      <div className="features">
        <div className="feature-buttons">
          <button onClick={() => handleFeatureClick('Feature 1')} className={`feature-button ${selectedFeature === 'Feature 1' ? 'active' : ''}`}>Feature 1</button>
          <button onClick={() => handleFeatureClick('Feature 2')} className={`feature-button ${selectedFeature === 'Feature 2' ? 'active' : ''}`}>Feature 2</button>
          <button onClick={() => handleFeatureClick('Feature 3')} className={`feature-button ${selectedFeature === 'Feature 3' ? 'active' : ''}`}>Feature 3</button>
        </div>

        <div className="feature-content">
          {selectedFeature === 'Feature 1' && (
            <div className="feature-details">
              <h3>Memory Management</h3>
              <p>
                Mazebot doesn't just process your requests—it remembers them. Our advanced memory management system ensures
                that each interaction builds on the last, creating a continuous and context-aware conversation. This feature
                is essential for providing accurate and relevant responses throughout your session.
              </p>
              <button className="learn-more">Learn more</button>
            </div>
          )}
          {selectedFeature === 'Feature 2' && (
            <div className="feature-details">
              <h3>Feature 2 Details</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, purus vel egestas
                volutpat, purus urna vestibulum ligula, at semper sapien mi vitae elit.
              </p>
              <button className="learn-more">Learn more</button>
            </div>
          )}
          {selectedFeature === 'Feature 3' && (
            <div className="feature-details">
              <h3>Feature 3 Details</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec euismod, purus vel egestas
                volutpat, purus urna vestibulum ligula, at semper sapien mi vitae elit.
              </p>
              <button className="learn-more">Learn more</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;
