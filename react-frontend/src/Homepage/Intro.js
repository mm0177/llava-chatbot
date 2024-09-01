import React from 'react';
import '../assets/animations/newbg.mp4';
import './Home.css';
import Navbar from './Navbar';

export default function Intro() {
  return (
    <div className="mainsection">
      <Navbar/>
      <video autoPlay muted loop className="video-bg">
        <source src={require('../assets/animations/newbg.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className="intro-container">
      
      <div className="intro-content">
        <p className='welcome'>
          Welcome to <p className='mazebot1'>Mazebot</p>
        </p>
        <p className='para'>Your Conversational Image Recognition Assistant</p>
        <div className="input-container">
          <input type="text" placeholder="Enter your mail id" />
          <button className="get-started-button">Get Started</button>
        </div>
      </div>
    </div>
    </div>
  );
}
