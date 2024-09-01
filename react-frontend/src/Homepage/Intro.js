import React from 'react';
import './Home.css';
import Navbar from './Navbar';
import videoSrc from '../assets/animations/newbg.mp4';


export default function Intro() {
  return (
    <div className="mainsection">
      <Navbar/>
      <video autoPlay muted loop className="video-bg">
      <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className="intro-container">
      
      <div className="intro-content">
      <p className='welcome'>
  Welcome to <span className='mazebot1'>Mazebot</span>
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
