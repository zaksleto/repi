import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoDemo from './components/VideoDemo';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <VideoDemo />
      <Comparison />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;