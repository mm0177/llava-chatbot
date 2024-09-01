import React from 'react';
import Intro from './Intro';
import Features from './Features';
import About from './About';
import Footer from './Footer';
import './Home.css';
function Home() {
  return (
    <div>
      <Intro/>
      <Features/>
      <About/>
      <Footer/>
    </div>
  );
}
export default Home;
