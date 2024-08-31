import React from 'react';
import Features from './Features';
import About from './About';
import Intro from './Intro';
import Footer from './Footer';

export default function Home() {
  return (
    <div>
      <Intro/>
      <Features/>
      <About/>
      <Footer/>
    </div>
  );
}
