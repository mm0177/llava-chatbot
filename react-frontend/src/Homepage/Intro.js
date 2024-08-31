import React from 'react';
import'./Home.css';

export default function Intro() {
  return (
    <div>
      <div className="intro">
        <div className="middle">
        <h1>Welcome to <p className='mazebot1'>Mazebot</p></h1>
        <h2>Your Conversational Image Recognition Assistant</h2>
        <div className="input-container">
          <input type="text" placeholder="Enter your mail id" />
          <button className="get-started-button">Get Started</button>
        </div>
        </div>
      </div>
    </div>
  );
}
