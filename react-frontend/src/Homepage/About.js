import React from 'react';
import './Home.css';

function About() {
  return (
    <div className="container">
      <div className="section1">
      <img src="https://aunoa.ai/wp-content/uploads/2024/05/tipos-de-chatbots.webp" alt="Feature 2" className="feature-image2" />
        <div className="section-content">
          <h2>About Mazebot</h2>
          <p>
            Mazebot is an advanced AI-driven chatbot designed to revolutionize how we
            interact with images. By combining cutting-edge image recognition with
            natural language processing, Mazebot offers a seamless, interactive
            experience. Whether you need image analysis, editing, or conversational
            context, Mazebot has you covered.
          </p>
        </div>
      </div>
      <div className="section2">
        <div className="section-content">
          <h2>Workflow of MazeBot</h2>
          <p>Understanding how Mazebot works is simple:</p>
          <ul>
            <li className='list'>
              <span>Step 1</span>
              <span>→</span>
              <span>User Log-In</span>
            </li>
            <li className='list'>
              <span>Step 2</span>
              <span>→</span>
              <span>Image Upload or Provide URL</span>
            </li>
            <li className='list'>
              <span>Step 3</span>
              <span>→</span>
              <span>Enter Prompt (Manipulate or Analyze)</span>
            </li>
            <li className='list'>
              <span>Step 4</span>
              <span>→</span>
              <span>Display Result (Text or Speech)</span>
            </li>
            <li className='list'>
              <span>Step 5</span>
              <span>→</span>
              <span>Store Prompt, Image, and Response in Memory Pipeline</span>
            </li>
            <li className='list'>
              <span>Step 6</span>
              <span>→</span>
              <span>Further Interaction or Session End</span>
            </li>
          </ul>
        </div>
        <img src="https://www.einfochips.com/wp-content/uploads/2018/08/a-complete-guide-to-chatbot-development-from-tools-to-best-practices-featured.jpg" alt="Feature 2" className="feature-image1" />
      </div>
    </div>
  );
}

export default About;