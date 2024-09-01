import React, { useState } from 'react';
import './Home.css';

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
              
              <div className="feature-text">
                <h3>Memory Management</h3>
                <p>
                  Mazebot doesn't just process your requests—it remembers them. Our advanced memory management system ensures
                  that each interaction builds on the last, creating a continuous and context-aware conversation. This feature
                  is essential for providing accurate and relevant responses throughout your session.
                </p>
                <button className="learn-more">Learn more</button>
              </div>
              <img src="https://miro.medium.com/v2/resize:fit:1400/1*VF7y9EidYc7kk_igl7g2dg.jpeg" alt="Feature 1" className="feature-image" />
            </div>
          )}
          {selectedFeature === 'Feature 2' && (
            <div className="feature-details">
              
              <div className="feature-text">
                <h3>Dual-Modal Output</h3>
                <p>
                We understand that accessibility matters. That's why Mazebot provides responses in both text and audio formats. Whether you're visually impaired, multitasking, or simply prefer listening over reading, Mazebot makes sure you receive the information the way you want it.
                </p>
                <button className="learn-more">Learn more</button>
              </div>
              <img src="https://www.atomcamp.com/wp-content/uploads/2024/03/Retrieval-Augmented-Generation-RAG-KV-1.jpg" alt="Feature 2" className="feature-image" />
            </div>
          )}
          {selectedFeature === 'Feature 3' && (
            <div className="feature-details">
              
              <div className="feature-text">
                <h3>Advanced Image Analysis</h3>
                <p>
                Leveraging the power of the LLaVA model, Mazebot offers sophisticated image analysis capabilities. Whether you're looking to edit an image, detect objects, or get detailed descriptions, Mazebot delivers precise and contextually aware results that meet your needs.
                </p>
                <button className="learn-more">Learn more</button>
              </div>
              <img src="https://askusedu.com/blogdashboard/wp-content/uploads/2021/05/data-analytics.jpg" alt="Feature 3" className="feature-image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;
