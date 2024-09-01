import React from 'react';
import Intro from './Intro';
import Features from './Features';
import About from './About';
import Footer from './Footer';
import './Home.css';

function Home() {
  return (
    <div>
      <section id="intro">
        <Intro />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default Home;
