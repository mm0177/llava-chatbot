import React from 'react';
import './chatbot.css';
import logoIcon from '../assets/img/mazebot_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUser, faMicrophone, faFileImage } from '@fortawesome/free-solid-svg-icons';

function Chatbot() {
  const handleImageUpload = (event) => {
    // Handle image file upload logic here
    console.log('Image file uploaded:', event.target.files[0]);
  };

  return (
    <div className="chatbot-container">
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="logo">
            <img src={logoIcon} alt="Mazebot Logo" className="logo-icon" />
            Mazebot
          </div>
          <button className="new-chat-btn">+ New Chat</button>
          <div className="history">
            <p>conversation 1</p>
            <p>conversation 1</p>
            <p>conversation 1</p>
            <p>conversation 1</p>
            <p>conversation 1</p>
          </div>
        </div>
        <div className="sidebar-bottom">
          <button className="settings-btn">
            <FontAwesomeIcon icon={faCog}  className='fa-cog'/> Settings
          </button>
          <div className="username">
            <FontAwesomeIcon icon={faUser} className='faUser' /> User Name
          </div>
        </div>
      </div>
      <div className="chat-area">
        <div className="messages">
          {/* Messages will be displayed here */}
        </div>
        <div className="input-area">
          <label className="image-upload-btn">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <FontAwesomeIcon icon={faFileImage} />
          </label>
          <input type="text" placeholder="Type your message here..." />
          <button>
            <FontAwesomeIcon icon={faMicrophone} className='mic' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
