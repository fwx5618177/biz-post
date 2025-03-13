import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import CTA from '../components/CTA';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Portfolio />
      <Testimonials />
      <Blog />
      <CTA />
      <Contact />
    </main>
  );
};

export default HomePage; 